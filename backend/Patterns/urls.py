from django.urls import path
from . import views

urlpatterns = [
    path('', views.patterns),
    path('<int:pk>/', views.get_patterns_by_user),

]