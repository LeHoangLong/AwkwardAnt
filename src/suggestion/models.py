from django.db import models

# Create your models here.

class SuggestionDescription():
    def __init__(self, title, detail, contributor, score):
        super().__init__()
        self.title = title
        self.detail = detail
        self.contributor = contributor
        self.score = score

class SuggestionBrief:
    def __init__(self, title, summary, score):
        super().__init__()
        self.title = title
        self.summary = summary
        self.score = score