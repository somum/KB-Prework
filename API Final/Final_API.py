#recommandation
import pickle
import scipy as sc
from pathlib import Path
import json
import flask

import tensorflow as tf
import pandas as pd
import matplotlib.pyplot as plt

#image
import random
import os
from flask import Flask, request, redirect, url_for, jsonify, Response
from flask_cors import CORS, cross_origin
from werkzeug.utils import secure_filename

import numpy as np
import tensorflow.keras as keras
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.resnet50 import preprocess_input, decode_predictions
from tensorflow.keras.layers import GlobalAveragePooling2D, Dense
from tensorflow.keras.models import Model
from keras.models import load_model

from IPython.display import Image

#import sys
#sys.path.append('./Image_audio_search/keyword_spotting_service')

from keyword_spotting_service import Keyword_Spotting_Service

import io
import numpy as np
import PIL
from PIL import Image

app = Flask(__name__)
CORS(app, support_credentials=True)




#Image Predict
model = None

def load_model():
    global model
    model = keras.models.load_model('modelRes50.h5')

@app.route('/predictImage', methods=['GET', 'POST'])
@cross_origin(supports_credentials=True)
def predictImage():
    prediction_dict = {0: "1", 1: "10", 2: "11", 3: "12", 4: "13", 5: "14", 6: "15", 7: "16", 8: "17", 9: "18", 10: "19", 11: "2", 12: "20", 13: "21", 14: "22", 15: "23", 16: "24", 17: "25", 18: "26", 19: "27", 20: "28", 21: "29", 22: "3", 23: "30", 24: "31", 25: "32", 26: "33", 27: "4", 28: "5", 29: "6", 30: "7", 31: "8", 32: "9"}
    response = {'success': False}
    if request.method == 'POST':
        if request.files.get('file'): # image is stored as name "file"
            img_requested = request.files['file'].read()
            img = Image.open(io.BytesIO(img_requested))
            #img = PIL.Image.open(img_requested)
            img = img.resize((224, 224))
            img_array = image.img_to_array(img)
            img_array_expanded_dims = np.expand_dims(img_array, axis=0)
            preprocessed_image = keras.applications.resnet50.preprocess_input(img_array_expanded_dims)
            predictions = model.predict(preprocessed_image)
            maxindex = int(np.argmax(predictions))
            for k, v in prediction_dict.items():
                if k==maxindex:
                    return jsonify(v)
            # return jsonify('hello')

    return jsonify('File Invalid')




#speech predict

@app.route('/predictSpeech', methods=['GET', 'POST'])
@cross_origin(supports_credentials=True)
def predictSpeech():
    if request.method == 'POST':
        if request.files.get('file'): # image is stored as name "file"
           	# get file from POST request and save it
            audio_file = request.files["file"]
            file_name = str(random.randint(0, 100000))
            audio_file.save(file_name)

			# instantiate keyword spotting service singleton and get prediction
            kss = Keyword_Spotting_Service()
            predicted_keyword = kss.predict(file_name)

			# we don't need the audio file any more - let's delete it!
            os.remove(file_name)

			# send back result as a json file
            result = {"keyword": predicted_keyword}
            #return jsonify(result)

    return jsonify(result)


@app.route('/similar_image/<fname>', methods=['GET', 'POST'])
@cross_origin(supports_credentials=True)
def search_file(fname):

	fname = Path(fname).stem

	# Load data (deserialize)
	with open('./Rating_image_recommandation/filename.pickle', 'rb') as handle:
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

	W = np.loadtxt('./Rating_image_recommandation/ProductSuggestionVariables(Based_all_user_rating)/W.csv',delimiter=',')
	hb = np.loadtxt('./Rating_image_recommandation/ProductSuggestionVariables(Based_all_user_rating)/hb.csv',delimiter=',')
	vb = np.loadtxt('./Rating_image_recommandation/ProductSuggestionVariables(Based_all_user_rating)/vb.csv',delimiter=',')

	W = tf.convert_to_tensor(W, dtype=tf.float32)
	hb = tf.convert_to_tensor(hb, dtype=tf.float32)
	vb = tf.convert_to_tensor(vb, dtype=tf.float32)

	products_df = pd.read_csv('./Rating_image_recommandation/ProductSuggestionVariables(Based_all_user_rating)/productsT.csv', sep=',', header=None, engine='python')
	ratings_df = pd.read_csv('./Rating_image_recommandation/ProductSuggestionVariables(Based_all_user_rating)/ratingsT.csv', sep=',', header=None, engine='python')
	products_df.columns = ['ProductID', 'Title', 'Tags']
	ratings_df.columns = ['UserID', 'ProductID', 'Rating']


	user_rating_df = ratings_df.pivot_table(index='UserID', columns='ProductID', values='Rating')
	norm_user_rating_df = user_rating_df.fillna(0) / 5.0
	trX = norm_user_rating_df.values


	df = pd.read_csv('./Rating_image_recommandation/ProductSuggestionVariables(Based_all_user_rating)/trX.csv', sep=',')
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


if __name__ == '__main__':
    load_model()
    app.run(threaded=False)