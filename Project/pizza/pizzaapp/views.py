from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from django.views.generic import CreateView
from django.contrib.auth import login, logout
from django.contrib.auth.views import LoginView
from django.contrib.auth.decorators import login_required
from .models import * 
from .forms import * 
import re

def index(request):
    return render(request, 'index.html')

@login_required(redirect_field_name="login")
def create_pizza(request):
    if request.method == "POST":
        form = PizzaForm(request.POST)
        if form.is_valid():
            piz = form.save() 
            return redirect(f'order/{piz.id}')
        else:
            return render(request, 'create_piz.html', {'form': form})
    else:
        form = PizzaForm()
        return render(request, 'create_piz.html', {'form': form})


@login_required(redirect_field_name="login")
def order_pizza(request, pizzaid):
    pizza = get_object_or_404(Pizza, id=pizzaid)
    user = request.user
    if request.method == "POST":
        form = OrderForm(request.POST)
        if form.is_valid():
            ord = form.save(commit=False)
            ord.user = user
            ord.pizza = pizza
            ord.save()
            return redirect('created', orderid=ord.id)
        else:
            return render(request, 'order.html', {'form': form, 'pizzaid': pizzaid})
    else:
        form = OrderForm()
        return render(request, 'order.html', {'form': form, 'pizzaid': pizzaid})
    
class UserSignupView(CreateView):
    model = User
    form_class = UserSignupForm
    template_name = 'user_signup.html'

    def get_context_data(self, **kwargs):
        return super().get_context_data(**kwargs)

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('/yourpizzas')

class UserLoginView(LoginView):
    template_name='login.html'

@login_required(redirect_field_name="/")
def logout_user(request):
    logout(request)
    return redirect("/")

@login_required(redirect_field_name="login")
def yourpizzas(request):
    user = request.user
    pizzas = Order.objects.filter(user=user)
    return render(request, 'yourpizzas.html', {'pizzas':pizzas})

@login_required(redirect_field_name="/")
def view_created(request, orderid):
    order = get_object_or_404(Order, id=orderid)
    return render(request, 'created.html', {'order':order})
