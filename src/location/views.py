from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from . import models

# Create your views here.
def location_view(request, location_name, *args, **kwargs):
    model = {
        'location_list': ['Party', 'Beach', 'Club', 'School']
    }
    return render(request, 'location.html', model)

