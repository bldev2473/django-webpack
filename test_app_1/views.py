from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

# Create your views here.
def indexNoWebpack(request):
    return render(request, 'test_app_1/index-no-webpack.html')

def indexWebpack(request):
    return render(request, 'test_app_1/index-webpack.html')
