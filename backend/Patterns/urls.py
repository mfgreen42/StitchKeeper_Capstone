from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.get_all_patterns),
    path('', views.user_patterns),
    path('user/<int:user_id>', views.user_patterns),
    # path('photos/<int:pattern_id>/', views.user_patterns, name='user_patterns'),

]