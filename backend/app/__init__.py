from flask import Flask
from app.views import PredictDigitView, IndexView

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
  app.run()