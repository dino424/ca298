from django import forms
from django.forms import ModelForm, ModelChoiceField
from .models import *
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.db import transaction

class Bookform(forms.ModelForm):
    class Meta:
        model = Book
        fields = ['year','author','price','title','synopsis','category']

    def clean(self):
        data = self.cleaned_data
        year = data['year']
        author = data['author']
        price = data['price']
        title = data['title']
        synopsis = data['synopsis']
        category = data['category']
        book_exists = Book.objects.filter(title = title, author = author).exists()
        if book_exists:
            raise forms.ValidationError("a book of that name already exists")
        return data

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