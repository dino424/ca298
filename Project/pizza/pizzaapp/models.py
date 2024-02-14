from django.db import models

# Create your models here.


class Pizza(models.Model):
    id = models.AutoField(primary_key=True)
    small = 'S'
    medium = 'M'
    large = 'L'
    extralarge = 'XL'
    size_choices = [
        (small, 'Small'),
        (medium, 'Medium'),
        (large, 'Large'),
        (extralarge, 'extra-large'),
    ]

    sizes = models.CharField(
        max_length=2,
        choices=size_choices,
        default=medium,
    )

    normal_crust = 'NC'
    thin_crust = 'TNC'
    thick_crust = 'TKC'
    glutenfree_crust = 'GFC'
    crust_choices = [
        (normal_crust, 'Normal Crust'),
        (thin_crust, 'Thin crust'),
        (thick_crust, 'Thick crust'),
        (glutenfree_crust, 'Gluten free crust'),
    ]

    crusts = models.CharField(
        max_length=3,
        choices=crust_choices,
        default=normal_crust,
    )


    mozzarella_cheese = 'MZCH'
    vegan_cheese = 'VCH'
    lowfat_cheese = 'LFCH'
    cheese_choices = [
        (mozzarella_cheese, 'Mozzarella'),
        (vegan_cheese, 'Vegan cheese'),
        (lowfat_cheese, 'low fat cheese')
    ]

    cheeses = models.CharField(
        max_length=4,
        choices=cheese_choices,
        default=mozzarella_cheese,
    )


    pepperoni = 'P'
    chicken = 'C'
    ham = 'H'
    pineapple = 'PL'
    peppers = 'PE'
    mushrooms = 'M'
    onions = 'O'
    topping_choices = [
        (pepperoni, 'Pepperoni'),
        (chicken, 'Chicken'),
        (ham, 'Ham'),
        (pineapple, 'Pineapple'),
        (peppers, 'Mushroomd'),
        (onions, 'Onions'),
    ]

    toppings = models.CharField(
        max_length=2,
        choices=topping_choices,
        default=pepperoni,
    )
