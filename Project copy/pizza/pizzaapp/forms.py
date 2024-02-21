from django import forms
from .models import *
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.forms import ModelForm, ModelChoiceField
from .models import User
from django.db import transaction
from django.core.validators import RegexValidator

class PizzaForm(forms.ModelForm):
    class Meta:
        model = Pizza
        fields = ['name', 'sizes', 'cheeses', 'sauces','pepperoni', 'chicken', 'ham', 'pineapple', 'peppers', 'mushrooms', 'onions']

class UserSignupForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = User

    @transaction.atomic
    def save(self):
        user = super().save(commit=False)
        user.is_admin = False
        user.email = self.cleaned_data['username']
        user.save()
        return user

class UserLoginForm(AuthenticationForm):
    def __init__(self, *args, **kwargs):
        super(UserLoginForm, self).__init__(*args, **kwargs)

class OrderForm(forms.ModelForm): 
    class Meta:
        model = Order
        fields = ['name','address', 'card_number', 'card_exp', 'card_cvv']
    
    def clean(self):
        data = self.cleaned_data
        name = data['name']
        address = data['address']
        card_number = data['card_number']
        card_exp = data['card_exp']
        card_cvv = data['card_cvv']
        return data
        