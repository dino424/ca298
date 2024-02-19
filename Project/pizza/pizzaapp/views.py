from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from django.views.generic import CreateView
from django.contrib.auth import login, logout
from django.contrib.auth.views import LoginView
from django.contrib.auth.decorators import login_required
from .models import * 
from .forms import * 

def index(request):
    return render(request, 'index.html')

def view_all_pizzas(request):
    all_pizzas = Pizza.objects.all()
    return render(request, 'all_pizzas.html', {'pizzas':all_pizzas})

@login_required
def create_pizza(request):
    if request.method == "POST":
        form = PizzaForm(request.POST)
        if form.is_valid():
            piz = form.save() 
            return render(request, 'delivery.html')
        else:
            return render(request, 'create_piz.html', {'form': form})
    else:
        form = PizzaForm()
        return render(request, 'create_piz.html', {'form': form})

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
    def form_valid(self, form):
        login(self.request, user)
        return redirect('/')


def logout_user(request):
    logout(request)
    return redirect("/yourpizzas")

@login_required
def buy_pizza(request, pizzaid):
    # get the pizza (or 404)
    pizza = get_object_or_404(Pizza, id=pizzaid)
    # get the user 
    user = request.user
    # create a new isntance of PizzaUser
    newPizzaUser = PizzaUser.objects.create(pizza=pizza, user=user)
    newPizzaUser.save()
    # show some confirmation
    return render(request, 'confirmation.html', { 
                                                 'pizza': pizza, 'pizzauser': newPizzaUser})

@login_required
def previous_orders(request):
    user = request.user
    yourpizzas = PizzaUser.objects.filter(user=user)
    return render(request, 'previous_orders.html', {'yourpizzas':yourpizzas})


