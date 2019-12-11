from django.urls import path

from . import views

urlpatterns = [
    path('upvote', views.upvote_view),
    path('<suggestion_name>', views.suggestion_view)
]
