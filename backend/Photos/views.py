from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status


from Photos.models import Photo
from Photos.serializers import PhotosSerializer


# Create your views here.

