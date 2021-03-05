import random
import os
from flask import Flask, request, jsonify
from keyword_spotting_service import Keyword_Spotting_Service
from flask_cors import CORS, cross_origin

# instantiate flask app
app = Flask(__name__)
CORS(app, support_credentials=True)

# @app.route("/predict", methods=["POST"])
# def predict():
# 	# get file from POST request and save it
# 	audio_file = request.files["file"]
# 	file_name = str(random.randint(0, 100000))
# 	audio_file.save(file_name)

# 	# instantiate keyword spotting service singleton and get prediction
# 	kss = Keyword_Spotting_Service()
# 	predicted_keyword = kss.predict(file_name)

# 	# we don't need the audio file any more - let's delete it!
# 	os.remove(file_name)

# 	# send back result as a json file
# 	result = {"keyword": predicted_keyword}
# 	return jsonify(result)

@app.route('/predict', methods=['GET', 'POST'])
def upload_file():
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
            return jsonify(result)

    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form method=post enctype=multipart/form-data>
      <p><input type=file name=file>
         <input type=submit value=Upload>
    </form>
    '''


@app.route('/predict1', methods=['GET', 'POST'])
@cross_origin(supports_credentials=True)
def upload_file1():
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

if __name__ == "__main__":
    app.run(debug=False)