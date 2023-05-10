# Import libraries
from flask import Flask, render_template, json
import os


app = Flask(__name__)


# filepath = os.path.join("static", "js/data.json")
# with open(filepath) as jsonfile:
#     chartdata = json.load(jsonfile)
@app.route('/')
def index():
    return render_template('index.html')


@app.route('/analysis')
def analysis():
    return render_template('analysis.html')


@app.route('/mlmodel')
def ml_model():
    return render_template('mlmodel.html')


if __name__ == '__main__':
    app.run(debug=True)
