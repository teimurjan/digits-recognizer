import pickle


class ClassifierRepo:
    def __init__(self, storage):
        self.storage = storage

    def get(self):
        with open(self.storage, 'wb') as out:
            try:
                classifier_str = out.read()
                if classifier_str != '':
                    return pickle.loads(classifier_str)
                else:
                    return None
            except Exception:
                return None

    def update(self, classifier):
        with open(self.storage, 'wb') as in_:
            pickle.dump(classifier, in_)
