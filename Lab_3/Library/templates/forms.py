from django import forms
from django.forms import ModelForm
from .models import * 
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

