from django.urls import path
from . import views

urlpatterns = [
    path('', views.patterns_list),
    # path('', views.post_new_pattern),
    path('', views.get_patterns_by_user),

]