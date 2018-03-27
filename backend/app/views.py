from flask import render_template, request, Response
from flask.views import MethodView

from app.repo import ClassifierRepo
from app.services import PredictDigitService
from settings import CLASSIFIER_STORAGE


def create_root_view(app):
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def root(path):
        return render_template("index.html")


class PredictDigitView(MethodView):
    def post(self):
        repo = ClassifierRepo(CLASSIFIER_STORAGE)
        service = PredictDigitService(repo)
        image_data_uri = request.json['image']
        prediction = service.handle(image_data_uri)
        return Response(str(prediction).encode(), status=200)
