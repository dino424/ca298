from django.urls import path
from . import views

urlpatterns = [
   path('', views.index, name="index"),
   path('books', views.view_all_books, name='all_books'),
   path('books/<int:bookid>', views.view_single_book, name='single_book'),
]