# from rest_framework import routers
# from .views import TblProductViewSet

# router = routers.DefaultRouter()
# router.register('', TBLProductViewSet, 'tblproduct')

# urlpatterns = router.urls

from django.conf.urls import url
from . import views

urlpatterns = [
    url(
        r'^(?P<productid>[0-9]+)$',
        views.get_delete_update_tblproduct,
        name='get_delete_update_tblproduct'
    ),
    url(
        r'^$',
        views.get_post_tblproduct,
        name='get_post_tblproduct'
    )
]
