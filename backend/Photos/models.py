from django.db import models
from Patterns.models import Pattern

# Create your models here.


class Photo(models.Model):
    pattern_id = models.ForeignKey(Pattern, on_delete=models.CASCADE)
    date_finished = models.DateField()
    photo_img = models.ImageField(upload_to='photos/images')
    is_favorite = models.BooleanField()