from django.db import models
from Patterns.models import Pattern
from django.core.validators import FileExtensionValidator
# Create your models here.


class Photo(models.Model):
    pattern = models.ForeignKey(Pattern, on_delete=models.CASCADE, related_name='photos')
    completed = models.BooleanField(null=True)
    date_finished = models.DateField()
    photo_img = models.ImageField(upload_to='photos/images', validators=[FileExtensionValidator(['jpg'])])
    is_favorite = models.BooleanField()
