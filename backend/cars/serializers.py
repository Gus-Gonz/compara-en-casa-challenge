from rest_framework import serializers

from .models import Owner, Car

class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Owner
        fields= '__all__'


class CarSerializer(serializers.ModelSerializer):
    owner = OwnerSerializer(read_only=True)
    class Meta:
        model= Car
        fields= '__all__'