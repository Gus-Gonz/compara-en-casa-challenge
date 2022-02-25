from django.db import models

# Create your models here.

class Owner(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=255)


class Car(models.Model):
    plate = models.CharField(max_length=8)
    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100, null=True)
    color = models.CharField(max_length=50, null=True)
    owner = models.ForeignKey(Owner, on_delete=models.PROTECT)
