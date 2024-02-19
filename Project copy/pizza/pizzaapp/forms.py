from django import forms
from .models import *

class PizzaForm(forms.ModelForm):
    class Meta:
        model = Pizza
        fields = ['sizes', 'cheeses', 'sauces','Pepperoni', 'Chicken', 'Ham', 'Pineapple', 'Peppers', 'Mushrooms', 'Onions']
   