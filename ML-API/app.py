import tensorflow as tf
from tensorflow import keras

from PIL import Image
from fastapi import FastAPI, UploadFile, HTTPException


import numpy as np

# import TensorFlow Model
MODEL = tf.keras.models.load_model('model/')

# image size should be same as size of training set images
img_size = (299, 299)

app = FastAPI()

def get_img_array(img):
    # `array` is a float32 Numpy array of shape (299, 299, 3)
    array = keras.preprocessing.image.img_to_array(img)
    # We add a dimension to transform our array into a "batch"
    # of size (1, 299, 299, 3)
    array = np.expand_dims(array, axis=0)
    return array


@app.get('/')
async def index():
    return {"Message": "This is Index"}

@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile):
    try:        
        im = Image.open(file.file)
        if im.mode in ("RGBA", "P"): 
            im = im.convert("RGB")

        im = im.resize(img_size)

        images = get_img_array(im)
        preds = MODEL.predict(images)

        pct = np.max(preds)
    except Exception:
        raise HTTPException(status_code=500, detail='Something went wrong')
    finally:
        file.file.close()
        im.close()
    return {"prediction": float(pct)}
