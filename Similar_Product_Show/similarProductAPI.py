import pickle
from sklearn.metrics.pairwise import cosine_similarity
import scipy as sc
from pathlib import Path
import json
import flask
#for react calling
from flask_cors import CORS, cross_origin

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

if __name__=='__main__':
    app.run(debug=True)