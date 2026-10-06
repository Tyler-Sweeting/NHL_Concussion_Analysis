# Import libraries
import numpy as np
from flask import Flask, render_template, request
import pickle
from dotenv import load_dotenv

load_dotenv()

# data = input of the user form
app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))



@app.route('/')
def index():
    return render_template('index.html')


@app.route('/analysis')
def analysis():
    return render_template('analysis.html')


@app.route('/mlmodel', methods=['GET', 'POST'])
def ml_model():
    prediction_text = None
    if request.method == 'POST':
        try:
            missed_games = float(request.form['missed_games'])
        except (KeyError, ValueError):
            prediction_text = "Please enter a valid number of games missed."
        else:
            prediction = model.predict(np.array([[missed_games]]))
            prediction_text = f"Predicted points per game after returning: {prediction[0]:.2f}"
    return render_template('mlmodel.html', prediction_text=prediction_text)


if __name__ == '__main__':
    app.run(debug=True)
