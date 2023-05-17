# Import libraries
import numpy as np
from flask import Flask, render_template, request
import pickle

# data = input of the user form
app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))



@app.route('/')
def index():
    return render_template('index.html')


@app.route('/analysis')
def analysis():
    return render_template('analysis.html')


@app.route('/mlmodel' , )
def ml_model():
    # prediction = model.predict(data)
    return render_template('mlmodel.html',   prediction_text = model)


if __name__ == '__main__':
    app.run(debug=True)
