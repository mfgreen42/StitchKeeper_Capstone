from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
from django.shortcuts import get_list_or_404


from .models import Pattern
from .serlializers import PatternSerializer


# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def patterns(request):
    patterns = Pattern.objects.all()
    serializer = PatternSerializer(patterns, many=True)
    return Response(serializer.data)
