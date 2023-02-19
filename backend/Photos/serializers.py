from rest_framework import serializers
from .models import Photo

class PhotosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ['id', 'pattern_id', 'date_finished', 'photo_img', 'is_favorite']
