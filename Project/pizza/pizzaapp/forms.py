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
        fields = ['name', 'sizes', 'cheeses', 'sauces', 'crusts', 'toppings']
        widgets = { 
            'toppings': forms.CheckboxSelectMultiple(attrs={'class': 'checkbox-class'}),
        }
    def clean_name(self):
        name = self.cleaned_data['name']
        if (len(name) == 0):
            raise forms.ValidationError("Your pizza nwants a name ૮ ˶ᵔ ᵕ ᵔ˶ ა ")
        return name

    def clean_sizes(self):
        sizes = self.cleaned_data['sizes']
        if not sizes:
            raise ValidationError("Please select at least one size (˶ᵔ ᵕ ᵔ˶) ")
        return sizes

    def clean_cheeses(self):
        cheeses = self.cleaned_data['cheeses']
        if not cheeses:
            raise ValidationError("Please select at least one cheese option ૮꒰ ˶• ༝ •˶꒱ა ♡")
        return cheeses

    def clean_sauces(self):
        sauces = self.cleaned_data['sauces']
        if not sauces:
            raise ValidationError("Please select at least one sauce option.˖⁺‧₊˚ ♡ ˚₊‧⁺˖")
        return sauces

    def clean_crusts(self):
        crusts = self.cleaned_data['crusts']
        if not crusts:
            raise ValidationError("Every Pizza needs a crust.˖⁺‧₊˚ ♡ ˚₊‧⁺˖")
        return crusts


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
            raise ValidationError('Card number must be 16 digits long.˖⁺‧₊˚ ♡ ˚₊‧⁺˖')
        return card_number

    def clean_card_cvv(self):
        card_cvv = self.cleaned_data['card_cvv']
        if len(str(card_cvv)) > 3 or len(str(card_cvv)) < 3:
            raise ValidationError('CVV must be 3 digits long.  ૮꒰ ˶• ༝ •˶꒱ა ♡')
        return card_cvv
    
