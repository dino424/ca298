from django.db import models

class Pizza(models.Model):
    id = models.AutoField(primary_key=True)
    sizes = models.ForeignKey(
        'Sizes',
        on_delete=models.CASCADE,
    )
    cheeses = models.ForeignKey(
        'Cheeses',
        on_delete=models.CASCADE,
    )
    sauces = models.ForeignKey(
        'Sauces',
        on_delete=models.CASCADE,
    )
    pepperoni = models.BooleanField(default=False)
    chicken = models.BooleanField(default=False)
    ham = models.BooleanField(default=False)
    pineapple = models.BooleanField(default=False)
    peppers = models.BooleanField(default=False)
    mushrooms = models.BooleanField(default=False)
    onions = models.BooleanField(default=False)

class Sizes(models.Model):
    name = models.CharField(max_length= 20, default='medium')
    def __str__(self):
        return self.name

class Cheeses(models.Model):
    name = models.CharField(max_length= 20, default='mozzarella')
    def __str__(self):
        return self.name

class Sauces(models.Model):
    name = models.CharField(max_length= 20, default='tomato')
    def __str__(self):
        return self.name