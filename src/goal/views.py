from django.http import HttpRequest
from django.shortcuts import render

# Create your views here.

class GoalDescription:
    def __init__(self, score, title, summary):
        super().__init__()
        self.score = score
        self.title = title
        self.summary = summary
    
def goal_view(request, goal_name, *args, **kwargs):

    description_1 = GoalDescription(10, 'A', 'A summary')
    description_2 = GoalDescription(20, 'B', 'B summary')
    
    model = {
        "goal_list": [description_1, description_2]
    }
    return render(request, 'goal.html', model)
