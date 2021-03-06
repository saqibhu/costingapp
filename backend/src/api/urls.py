from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/tblproduct/', include('costingapp.api.tblproduct.urls')),
    path('api/tblproductpricetypecurrency/',
         include('costingapp.api.tblproductpricetypecurrency.urls')),
    path('api/search', include('costingapp.api.search.urls'))
]
