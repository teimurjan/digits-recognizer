from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier


class ClassifierFactory:
    @staticmethod
    def create_with_fit(data, target):
        (X_train, X_test, y_train, y_test) = train_test_split(
            data, target, test_size=0.25, random_state=42
        )
        model = KNeighborsClassifier(n_neighbors=3)
        model.fit(X_train, y_train)
        return model
