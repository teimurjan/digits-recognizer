import os

from flask import Flask
from views import PredictDigitView, IndexView

app = Flask(__name__)

app.add_url_rule(
    '/api/predict',
    view_func=PredictDigitView.as_view('predict_digit'),
    methods=['POST']
)

app.add_url_rule(
    '/',
    view_func=IndexView.as_view('index'),
    methods=['GET']
)

if __name__ == 'main':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)