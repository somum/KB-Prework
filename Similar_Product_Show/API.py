import pickle
from sklearn.metrics.pairwise import cosine_similarity
import scipy as sc
from pathlib import Path
import json
import flask
#for react calling
from flask_cors import CORS, cross_origin


#suggestion based user rating
import tensorflow as tf
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt





app = flask.Flask(__name__)
app.config["DEBUG"] = True



@app.route('/similar_image/<fname>', methods=['GET', 'POST'])
@cross_origin(supports_credentials=True)
def search_file(fname):

	fname = Path(fname).stem

	# Load data (deserialize)
	with open('filename.pickle', 'rb') as handle:
	    unserialized_data = pickle.load(handle)

	def search_by_style(reference_image, max_results=3):
	    v0 = unserialized_data[reference_image]
	    distances = {}
	    for k,v in unserialized_data.items():
	        d = sc.spatial.distance.cosine(v0, v)
	        distances[k] = d

	    sorted_neighbors = sorted(distances.items(), key=lambda x: x[1], reverse=False)

	    retFile=[]
        
	    for k,v in sorted_neighbors[:max_results]:
	    	if k != reference_image :
	    		retFile.append(Path(k).stem+'.png')

	    return json.dumps(retFile)

	    
	# images mostly match the reference style, although not perfectly
	retFile=search_by_style(fname + '.jpg')

	return (retFile)



@app.route('/product-suggestion/<userId>', methods=['GET', 'POST'])
@cross_origin(supports_credentials=True)
def product_suggestion_ratings(userId):

	userId = Path(userId).stem

	W = np.loadtxt('./ProductSuggestionVariables(Based_all_user_rating)/W.csv',delimiter=',')
	hb = np.loadtxt('./ProductSuggestionVariables(Based_all_user_rating)/hb.csv',delimiter=',')
	vb = np.loadtxt('./ProductSuggestionVariables(Based_all_user_rating)/vb.csv',delimiter=',')

	W = tf.convert_to_tensor(W, dtype=tf.float32)
	hb = tf.convert_to_tensor(hb, dtype=tf.float32)
	vb = tf.convert_to_tensor(vb, dtype=tf.float32)

	products_df = pd.read_csv('./ProductSuggestionVariables(Based_all_user_rating)/productsT.csv', sep=',', header=None, engine='python')
	ratings_df = pd.read_csv('./ProductSuggestionVariables(Based_all_user_rating)/ratingsT.csv', sep=',', header=None, engine='python')
	products_df.columns = ['ProductID', 'Title', 'Tags']
	ratings_df.columns = ['UserID', 'ProductID', 'Rating']


	user_rating_df = ratings_df.pivot_table(index='UserID', columns='ProductID', values='Rating')
	norm_user_rating_df = user_rating_df.fillna(0) / 5.0
	trX = norm_user_rating_df.values


	df = pd.read_csv('./ProductSuggestionVariables(Based_all_user_rating)/trX.csv', sep=',')
	trX=df.values

	mock_user_id = int(userId)

	#Selecting the input user

	inputUser = trX[mock_user_id-1].reshape(1, -1)
	inputUser = tf.convert_to_tensor(trX[mock_user_id-1],"float32")
	v0 = inputUser

	#Feeding in the user and reconstructing the input

	hh0 = tf.nn.sigmoid(tf.matmul([v0], W) + hb)
	vv1 = tf.nn.sigmoid(tf.matmul(hh0, tf.transpose(W)) + vb)
	rec = vv1
	tf.maximum(rec,1)

	scored_products_df_mock = products_df[products_df['ProductID'].isin(user_rating_df.columns)]
	scored_products_df_mock = scored_products_df_mock.assign(RecommendationScore = rec[0])

	df = pd.DataFrame(scored_products_df_mock.sort_values(["RecommendationScore"], ascending=False).head(10)['ProductID'])


	jsonObject = json.loads(df.to_json(orient='values'))

	listExample=[]
	for i in jsonObject:
	    for number in i:
	        listExample.append(number)

	return json.dumps(listExample)

if __name__=='__main__':
    app.run(debug=True)