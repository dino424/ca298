from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import get_object_or_404, get_list_or_404
from .models import *

def index(request):
    return render(request, 'index.html')

def view_all_books(request):
    all_books = Book.objects.all()
    return render(request, 'all_books.html', {'books':all_books})

def view_single_book(request, bookid):
    single_book = get_object_or_404(Book, id=bookid)
    return render(request, 'single_book.html', {'book':single_book})

def view_books_year(request, bookyear):
    books_by_year = get_list_or_404(Book, year = bookyear)
    return render(request, 'all_books.html', {'books':books_by_year})

def view_by_category(request, bookcategory):
    books_by_category = Book.objects.filter(category=bookcategory)
    return render(request, 'all_books.html', {'books':books_by_category})

def view_by_candy(request, bookyear, bookcategory):
    books_by_candy = Book.objects.filter(year = bookyear, category =bookcategory)
    return render(request, 'all_books.html', {'books':books_by_candy})

def createbook(request):
    if request.method == 'POST':
        form = Bookform(request.POST)