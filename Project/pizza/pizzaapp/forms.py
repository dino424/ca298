from django import forms
from .models import *
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.forms import ModelForm, ModelChoiceField
from .models import User
from django.db import transaction
from django.core.exceptions import ValidationError

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

        def clean_card_number(self):
            card_number = self.cleaned_data['card_number']
            if len(card_number) != 16:
                raise ValidationError('Card number must be 16 digits long.')
            return card_number

        def clean_card_cvv(self):
            card_cvv = self.cleaned_data['card_cvv']
            if len(card_cvv) != 3:
                raise ValidationError('CVV must be 3 digits long.')
            return card_cvv
    
        for f in fields:
            if not f:
                raise ValidationError(F'field {f} is missing')
