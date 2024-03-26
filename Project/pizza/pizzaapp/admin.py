from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *

admin.site.register(Pizza)
admin.site.register(Sauces)
admin.site.register(Cheeses)
admin.site.register(Toppings)
admin.site.register(Sizes)
admin.site.register(User, UserAdmin)
admin.site.register(Order)
admin.site.register(Crusts)