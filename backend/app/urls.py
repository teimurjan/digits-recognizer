from .views import PredictDigitView, create_root_view


def init_urls(app):
    app.add_url_rule(
        '/api/predict',
        view_func=PredictDigitView.as_view('predict_digit'),
        methods=['POST']
    )
    create_root_view(app)
