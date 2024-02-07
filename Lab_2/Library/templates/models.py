from django.db import models

# Create your models here.

class Book(models.Model):
    id = models.IntegerField(primary_key = True)
    title = models.TextField()
    synopsis = models.TextField()
    year = models.IntegerField()
    price = models.DecimalField(max_digits = 3, decimal_places = 2, default = 0.0)
