from django.shortcuts import render
from django.http import HttpRequest, HttpResponse

class SuggestionDescription:
    def __init__(self, title, detail, contributor, score):
        super().__init__()
        self.title = title
        self.detail = detail
        self.contributor = contributor
        self.score = score

# Create your views here.
def suggestion_view(request, suggestion_name, *args, **kwargs):
    suggestion_1 = SuggestionDescription('A', 'A detail', 'A contributor', 10)
    model = {
        'upvoted': 'false',
        'description': suggestion_1
    }
    return render(request, 'suggestion.html', model)

def upvote_view(request, *args, **kwargs):
    print(request.POST['voted'])
    #print(request.POST.get('voted', 'true'))
    return HttpResponse("<h1>OK</h1>")