# Import libraries
import numpy as np
from flask import Flask, render_template, request
import pickle


app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/analysis')
def analysis():
    return render_template('analysis.html')


@app.route('/mlmodel')
def ml_model():
    
    int_features = [int(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)

    output = round(prediction.reshape(1,-1))


    return render_template('mlmodel.html',   prediction_text = output)


if __name__ == '__main__':
    app.run(debug=True)
