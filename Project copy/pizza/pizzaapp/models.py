from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.contrib.auth.models import User
from creditcards.models import CardNumberField, CardExpiryField, SecurityCodeField

class UserManager(BaseUserManager):
    """Define a model manager for User model with no username field."""

    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """Create and save a User with the given email and password."""
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        """Create and save a regular User with the given email and password."""
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        """Create and save a SuperUser with the given email and password."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)


class User(AbstractUser):
    email = models.EmailField('Email', unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = UserManager()

    def __str__(self):
        return self.email

class Pizza(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField(default='pizza')
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

class Order(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    pizza = models.ForeignKey(Pizza, on_delete=models.CASCADE)
    date_ordered = models.DateTimeField(auto_now_add=True)
    name = models.TextField(default = 'Enter first name')
    address = models.TextField(default = 'Enter address')
    card_number = models.IntegerField(('card number'), default= 000000000000)
    card_exp = CardExpiryField(('card expiry'))
    card_cvv = models.IntegerField(('security code'), default=000)