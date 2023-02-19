from django.urls import path
from . import views

urlpatterns = [
    path('', views.patterns),
    # path('all/', views.get_all_patterns),

]