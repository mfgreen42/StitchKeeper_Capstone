from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
from django.shortcuts import get_object_or_404


from .models import Pattern
from .serlializers import PatternSerializer


# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def patterns_list(request):
    if request.method == 'GET':
        pattern_name = request.query_params.get('pattern_id')
        patterns = Pattern.objects.all()
        if pattern_name:
            patterns = patterns.filter(pattern_id=pattern_name)
        serializer = PatternSerializer(patterns, many=True)
        return Response(serializer.data)
    elif request.mathod == 'POST':
        serializer = PatternSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def get_patterns_by_user(request, pk):
    patterns = get_object_or_404(Pattern, pk=pk)
    print(
        'user:', f"{request.user.username}")
    if request.method == 'GET':
        patterns = Pattern.objects.filter(user_id = request.user.id)
        serializer = PatternSerializer(patterns, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = PatternSerializer(patterns, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        patterns.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)