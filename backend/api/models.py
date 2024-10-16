from django.db import models
from django.contrib.auth.models import User
from django.forms import JSONField

class Task(models.Model):
    title = models.CharField(max_length=100)
    prompt = models.CharField(max_length=100)
    image = models.ImageField(upload_to="images/")
    annotated_image = models.ImageField(upload_to="images/")
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="tasks")
    annotated_data = models.TextField()

    def __str__(self):
        return self.title