from django.urls import path

from . import views

urlpatterns = [
    path('<suggestion_name>', views.suggestion_view)
]
