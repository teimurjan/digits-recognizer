from sklearn.datasets import load_digits

from app.classifier import ClassifierFactory
from app.utils import to_classifier_input_format


class PredictDigitService:
    def __init__(self, repo):
        self.repo = repo

    def handle(self, image_data_uri):
        classifier = self.repo.get()
        if classifier is None:
            digits = load_digits()
            classifier = ClassifierFactory.create_with_fit(digits.data, digits.target)
            self.repo.update(classifier)
        x = to_classifier_input_format(image_data_uri)
        prediction = classifier.predict(x)[0]
        return prediction
