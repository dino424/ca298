from django.urls import path, include
from . import views
from .forms import *
from .models import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'book', views.BookViewSet)

router1 = routers.DefaultRouter()
router1.register(r'author', views.AuthorViewSet)

router2 = routers.DefaultRouter()
router2.register(r'customer', views.CustomerViewSet)


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
   path('logout/', views.logout_user, name="logout"),
   path('api/', include(router.urls)),
   path('api/', include(router1.urls)),
   path('api/', include(router2.urls)),
   path('add', views.api_add, name='api_add'),
]
