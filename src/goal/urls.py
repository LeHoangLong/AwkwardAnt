from django.urls import path
from . import views

urlpatterns = [
    path('<goal_name>', views.goal_view)
]

