from django.http import HttpRequest, HttpResponse
from django.shortcuts import render

# Create your views here.
def location_view(request, location_name, test, *args, **kwargs):
    model = {
        'goal_list': ['meet up', 'flirt', 'say bye bye'] 
    }
    return render(request, 'location.html', model)