from django import forms
from .models import * 
class Bookform(forms.ModelForm):
    class Meta:
        model = Book
        fields = ['id','year','author','price','title','synopsis','category']