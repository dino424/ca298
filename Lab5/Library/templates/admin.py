from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *

admin.site.register(Book)
admin.site.register(Author)
admin.site.register(User, UserAdmin)