from rest_framework import serializers
from .models import Photo
from Patterns.models import Pattern

class PhotosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ['pattern', 'pattern_id', 'date_finished', 'photo_img', 'is_favorite']

    pattern_id = serializers.IntegerField(write_only=True)