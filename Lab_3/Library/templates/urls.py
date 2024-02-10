from django.urls import path
from . import views
from .forms import *
from .models import *


urlpatterns = [
   path('', views.index, name="index"),
   path('books', views.view_all_books, name='all_books'),
   path('books/<int:bookid>', views.view_single_book, name='single_book'),
   path('books/year/<int:bookyear>', views.view_books_year, name='books_by_year'),
   path('books/category/<str:bookcategory>', views.view_by_category, name='books_by_category'),
   path('books/category/<str:bookcategory>/<int:bookyear>', views.view_by_candy, name='books_by_candy'),
   path('createbook', views.createbook, name='create_book'),
   path('updatebook/<int:bookid>',views.book_update, name='update_book'),
   path('register/', views.UserSignupView.as_view(), name="register"),
   path('login/',views.LoginView.as_view(template_name="login.html", authentication_form=UserLoginForm)),
   path('logout/', views.logout_user, name="logout")
]
