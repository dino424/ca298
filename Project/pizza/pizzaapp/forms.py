from django import forms
from .models import *
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.forms import ModelForm, ModelChoiceField
from .models import User
from django.db import transaction


class PizzaForm(forms.ModelForm):
    class Meta:
        model = Pizza
        fields = ['sizes', 'cheeses', 'sauces','pepperoni', 'chicken', 'ham', 'pineapple', 'peppers', 'mushrooms', 'onions']
    def clean(self):
        data = self.cleaned_data
        sizes = data['sizes']
        cheeses = data['cheeses']
        sauces = data['sauces']
        pepperoni = data['pepperoni']
        chicken = data['chicken']
        ham = data['ham']
        pineapple = data['pineapple']
        peppers = data['peppers']
        mushrooms = data['mushrooms']
        onions = data['onions']

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