from django.db import models

# log out next time pal

class Book(models.Model):
    id = models.IntegerField(primary_key = True)
    year = models.IntegerField()
    author = models.TextField()
    price = models.DecimalField(max_digits = 3, decimal_places = 2, default = 0.0)
    title = models.TextField()
    synopsis = models.TextField()
    category = models.TextField(default="fun")
