from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier


class ClassifierFactory:
    @staticmethod
    def create_with_fit(data, target):
        model = KNeighborsClassifier(n_neighbors=3)
        model.fit(data, target)
        return model
