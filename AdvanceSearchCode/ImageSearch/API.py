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

import io
import numpy as np
import PIL
from PIL import Image

app = Flask(__name__)
CORS(app, support_credentials=True)
model = None


def load_model():
    global model
    model = keras.models.load_model('modelRes50.h5')

@app.route('/predict', methods=['GET', 'POST'])
def upload_file():
	
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

if __name__ == '__main__':
    load_model()
    # no-thread: https://github.com/keras-team/keras/issues/2397#issuecomment-377914683
    # avoid model.predict runs before model initiated
    # To let this run on HEROKU, model.predict should run onece after initialized
    app.run(threaded=False)