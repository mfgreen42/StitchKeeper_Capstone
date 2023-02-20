from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.get_all_patterns),
    path('', views.user_patterns),
    path('user/<int:user_id>/', views.user_patterns),
    path('photos/<int:pattern_id>/', views.photo_to_pattern),
    path('update/<int:pk>/', views.change_patterns),

]