from django.db import models
from django.core.validators import FileExtensionValidator
from authentication.models import User
# Create your models here.


class Pattern(models.Model):
    pattern_pdf = models.FileField(upload_to='pdfs/', validators=[FileExtensionValidator(['pdf'])])
    pattern_name = models.CharField(max_length= 255)
    artist = models.CharField(max_length= 255,  blank=True, null=True)
    date_added = models.DateField()
    is_embroidery = models.BooleanField()
    is_cross_stitch = models.BooleanField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, related_name='user_patterns')