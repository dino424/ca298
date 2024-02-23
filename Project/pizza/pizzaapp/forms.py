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
        fields = ['name', 'sizes', 'cheeses', 'sauces','toppings']
        widgets = { 
            'toppings': forms.CheckboxSelectMultiple(attrs={'class': 'checkbox-class'}),
        }

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
        if len(str(card_number)) != 16:
            raise ValidationError('Card number must be 16 digits long.')
        return card_number

    def clean_card_cvv(self):
        card_cvv = self.cleaned_data['card_cvv']
        if len(str(card_cvv)) > 3 or len(str(card_cvv)) < 3:
            raise ValidationError('CVV must be 3 digits long.')
        return card_cvv
    
    def clean(self):
        cleaned_data = super().clean()
        for field_name in self.Meta.fields:
            if not cleaned_data.get(field_name):
                raise ValidationError(f'Field {field_name} is missing')
        return cleaned_data