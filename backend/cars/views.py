from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend


from cars.models import Car
from cars.serializers import CarSerializer


class CarViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = {
        'plate': ['exact'],
    }