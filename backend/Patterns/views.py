
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
def get_all_patterns(request):
    patterns = Pattern.objects.all()
    serializer = PatternSerializer(patterns, many=True)
    return Response(serializer.data)


# @api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
# def user_patterns(request):
#     if request.method == 'GET':
#         pattern_name = request.query_params.get('pattern_id')
#         patterns = Pattern.objects.all()
#         if pattern_name:
#             patterns = patterns.filter(pattern_id=pattern_name)
#         serializer = PatternSerializer(patterns, many=True)
#         return Response(serializer.data)
    # if request.method == 'POST':
    #     serializer = PatternSerializer(data=request.data)
    #     if  serializer.is_valid(raise_exception=True):
    #         serializer.save(user=request.user)
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_patterns(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = PatternSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        patterns = Pattern.objects.filter(user_id=request.user.id)
        serializer = PatternSerializer(patterns, many=True)
        return Response(serializer.data)




@api_view(['GET', 'PUT', 'DELETE'])
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