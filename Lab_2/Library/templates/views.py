from django.shortcuts import render
from django.http import HttpResponse
from .models import *

def index(request):
    return render(request, 'index.html')
# Create your views here.
def variable(request):
   x = 5
   return render(request, 'variable.html', {'x': x })

def variable(request):
   x = 5
   y = 8
   z = x + y
   return render(request, 'variable.html', {'x':x, 'y':y, 'z':z})


def all_book(request):
   books = Book.object.all()
   