from rest_framework import serializers
from .models import *

class BookSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Book
		fields = ['id','title']

class AuthorSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Author
		fields = ['id','last_name']


class CustomerSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Customer
		fields = ['id','name']