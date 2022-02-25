import string    
import random
import factory
from factory.django import DjangoModelFactory
from faker_vehicle import VehicleProvider
from faker import Faker

from .models import Car , Owner

def get_car_brand():
    fake = Faker()
    fake.add_provider(VehicleProvider)
    return fake.vehicle_make()

def get_car_model():
    fake = Faker()
    fake.add_provider(VehicleProvider)
    return fake.vehicle_model()

def create_owner():
    return OwnerFactory()

def generate_plate():
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k = 8))

class CarFactory(DjangoModelFactory):
    class Meta:
        model = Car
    
    plate = factory.LazyAttribute(lambda x: generate_plate())
    brand = factory.LazyAttribute(lambda x: get_car_brand())
    model = factory.LazyAttribute(lambda x: get_car_model())
    owner = factory.LazyAttribute(lambda x: create_owner())


class OwnerFactory(DjangoModelFactory):
    class Meta:
        model = Owner

    name = factory.Faker("first_name")
    address = factory.Faker("address")

