from flask import Flask
from .urls import init_urls


def create_app():
    app = Flask(__name__)
    init_urls(app)
    return app