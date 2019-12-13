from django.http import HttpRequest
from django.shortcuts import render
from . import models

# Create your views here.

class GoalDescription:
    def __init__(self, score, title, summary):
        super().__init__()
        self.score = score
        self.title = title
        self.summary = summary
    
def goal_view(request, *args, **kwargs):
    all_goals = models.Goal.objects.all() 
    goal_list = []
    for goal in all_goals:
        goal_list.append(goal.name)
    model = {
        'goal_list': goal_list, 
    }
    return render(request, 'goal.html', model)
