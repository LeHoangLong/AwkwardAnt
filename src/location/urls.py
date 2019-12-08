from django.urls import path, include
from . import views

urlpatterns = [
    path('<location_name>/<test>', views.location_view)
]