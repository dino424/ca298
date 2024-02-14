from django.urls import path
from . import views
from .views import * 

urlpatterns = [
   path('', views.index, name="index"),
   path('pizzas', view_all_pizzas, name='all_pizzas'),
]