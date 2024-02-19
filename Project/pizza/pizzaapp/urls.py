from django.urls import path
from . import views
from .views import * 
from .forms import * 

urlpatterns = [
   path('', views.index, name="index"),
   path('pizzas', view_all_pizzas, name='all_pizzas'),
   path('createpizza',views.create_pizza, name='create_pizza'),
   path('register/', views.UserSignupView.as_view(), name="register"),
   path('login/',views.LoginView.as_view(template_name="login.html", authentication_form=UserLoginForm)),
   path('logout/', views.logout_user, name="logout"),
   path('orders', views.previous_orders, name="previous_orders"),
]