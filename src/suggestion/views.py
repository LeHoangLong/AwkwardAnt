from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from . import models

# Create your views here.
def suggestion_view(request, suggestion_name, *args, **kwargs):
    suggestion_1 = models.SuggestionDescription('A', 'A detail', 'A contributor', 10)
    model = {
        'upvoted': 'no_vote',
        'description': suggestion_1
    }
    return render(request, 'suggestion.html', model)

def upvote_view(request, *args, **kwargs):
    print(request.POST['voted'])
    #print(request.POST.get('voted', 'true'))
    return HttpResponse("<h1>OK</h1>")

def suggestion_list_view(request, suggestion_group, *args, **kwargs):
    suggestion_1 = models.SuggestionBrief('A', 'A summary', 10)
    suggestion_2 = models.SuggestionBrief('B', 'B summary', 20)
   
    model = {
        "suggestion_brief_list": [suggestion_1, suggestion_2]
    }
    return render(request, 'suggestion_list.html', model)
