from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def home_view(request, *args, **kwargs):
    model = {
        'location_list': ['A', 'B', 'C', 'D']
    }
    return render(request, 'home.html', model)