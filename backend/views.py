from flask import render_template, request, Response
from flask.views import MethodView, View

from flask.views import View

from repo import ClassifierRepo
from services import PredictDigitService
from settings import CLASSIFIER_STORAGE

class IndexView(View):
    def dispatch_request(self):
        return render_template('index.html')

class PredictDigitView(MethodView):
    def post(self):
        repo = ClassifierRepo(CLASSIFIER_STORAGE)
        service = PredictDigitService(repo)
        image_data_uri = request.json['image']
        prediction = service.handle(image_data_uri)
        return Response(str(prediction).encode(), status=200)
