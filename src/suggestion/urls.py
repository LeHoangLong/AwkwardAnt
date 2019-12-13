from django.urls import path

from . import views

urlpatterns = [
    path('upvote', views.upvote_view),
    path('brief/<suggestion_group>', views.suggestion_list_view),
    path('detail/<suggestion_name>', views.suggestion_view)
]
