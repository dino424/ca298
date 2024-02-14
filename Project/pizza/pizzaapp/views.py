from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import CreateView
from .models import * 


def index(request):
    return render(request, 'index.html')

def view_all_pizzas(request):
    all_pizzas = Pizza.objects.all()
    return render(request, 'all_pizzas.html', {'pizzas':all_pizzas})