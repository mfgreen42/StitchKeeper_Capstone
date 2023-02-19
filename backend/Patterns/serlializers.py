from rest_framework import serializers
from .models import Pattern

class PatternSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Pattern
        fields =['id', 'pattern_pdf', 'pattern_name', 'artist', 'date_added', 'is_embroidery', 'is_cross_stitch']
        depth = 1