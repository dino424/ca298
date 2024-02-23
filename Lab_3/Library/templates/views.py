from django.shortcuts import render, get_object_or_404, get_list_or_404, redirect
from django.http import HttpResponse
from django.views.generic import CreateView
from django.contrib.auth import login, logout
from django.contrib.auth.views import LoginView
from django.contrib.auth.decorators import login_required

from .models import *
from .forms import *

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
        if form.is_valid():
            bk = form.save(commit=False)
            return render(request, 'created.html', {'bk':bk})
        else:
            return render(request, 'create_bk.html', {'form':form})
    else:
        form = Bookform()
        return render(request, 'create_bk.html', {'form':form})

def book_update(request, bookid):
    book = get_object_or_404(Book, id=bookid)
    if request.method=="POST":
        form = Bookform(request.POST, instance=book)
        if form.is_valid():
            form.save()
            return render(request, 'update_confirmation.html', {'book':book})
        else:
            return render(request, 'create_bk.html', {'form':form})
    else:
        form = Bookform(instance=book)
        return render(request, 'create_bk.html', {'form':form})   

class UserSignupView(CreateView):
    model = User
    form_class = UserSignupForm
    template_name = 'user_signup.html'

    def get_context_data(self, **kwargs):
        return super().get_context_data(**kwargs)

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('/')

class UserLoginView(LoginView):
    template_name='login.html'

def logout_user(request):
    logout(request)
    return redirect("/")

def open_view(request):
   pass

@login_required
def locked_view(request):
	pass

def some_view(request):
   user = request.user
   if user.is_authenticated:
      pass
   else:
     return redirect("/")