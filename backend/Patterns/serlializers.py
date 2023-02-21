from rest_framework import serializers
from .models import Pattern
from Photos.serializers import PhotosSerializer

class PatternSerializer(serializers.ModelSerializer):
    photos = PhotosSerializer(many=True, read_only=True)
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    class Meta:
        model = Pattern
        fields =['id', 'pattern_pdf', 'pattern_name', 'artist', 'date_added', 'is_embroidery', 'is_cross_stitch', 'photos', 'user']
        depth=1
