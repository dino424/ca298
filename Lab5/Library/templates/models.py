from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

class Customer(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField()

class Author(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.TextField()
    last_name = models.TextField()
    bio = models.TextField(null=True)

    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
    
    def __str__(self):
        return self.get_full_name()

class Book(models.Model):
    id = models.IntegerField(primary_key = True)
    year = models.IntegerField()
    author = models.ForeignKey(Author, null=True ,on_delete = models.CASCADE)
    price = models.DecimalField(max_digits = 3, decimal_places = 2, default = 0.0)
    title = models.TextField()
    synopsis = models.TextField()
    category = models.TextField(default="fun")

class UserManager(BaseUserManager):
    use_in_migrations = True


    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('wheres the email bro?')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.save(using=self._db)
        return user
    

    def create_user(self, email, password=None, **extra_fields):
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

