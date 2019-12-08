from django.http import HttpRequest, HttpResponse
from django.shortcuts import render

# Create your views here.
def location_view(request, location_name, *args, **kwargs):
    return HttpResponse('<h1>Hello world {}<h1>'.format(location_name))