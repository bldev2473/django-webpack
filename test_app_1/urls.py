from django.urls import path
from . import views

urlpatterns = [
    path('index-no-webpack', views.indexNoWebpack, name='index-no-webpack'),
    path('index-webpack', views.indexWebpack, name='index-webpack'),
]