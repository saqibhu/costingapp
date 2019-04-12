from django.conf.urls import url
#from .views import TblProductPriceTypeCurrency
from . import views

urlpatterns = [
    url(
        r'^(?P<productid>[0-9]+)$',
        views.get_delete_update_tblproductpricetypecurrency,
        name='get_delete_update_tblproductpricetypecurrency'
    ),
    url(
        r'^$',
        views.get_post_tblproductpricetypecurrency,
        name='get_post_tblproductpricetypecurrency'
    )
]
