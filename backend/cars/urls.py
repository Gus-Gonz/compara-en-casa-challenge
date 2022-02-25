from django.urls.conf import path, include

from rest_framework  import routers

from cars.views import CarViewSet

router = routers.DefaultRouter()
router.register(r'cars', CarViewSet)

urlpatterns = [
    path('', include(router.urls)),
]