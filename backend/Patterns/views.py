
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
from django.shortcuts import get_object_or_404


from .models import Pattern
from Photos.models import Photo
from .serlializers import PatternSerializer
from Photos.serializers import PhotosSerializer


# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_patterns(request):
    patterns = Pattern.objects.all()
    serializer = PatternSerializer(patterns, many=True)
    return Response(serializer.data)

    
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_patterns(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
# This Posts a new pattern to a user
    if request.method == 'POST' :
        serializer = PatternSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#this GETs all patterns for a user, I'll need this for the patterns page
    elif request.method == 'GET':
        patterns = Pattern.objects.filter(user_id=request.user.id)
        serializer = PatternSerializer(patterns, many=True)
        return Response(serializer.data)

# POSTs photo to specific pattern    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def photo_to_pattern(request, pattern_id):
    serializer = PhotosSerializer(data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save(pattern_id=pattern_id)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# DELETE a pattern and photo if attatched
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def change_patterns(request, pk):
    patterns = get_object_or_404(Pattern, pk=pk)
    print(
        'user:', f"{request.user.username}")
    if request.method == 'DELETE':
        patterns.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)