from django.urls import path

from .views import SearchView

urlpatterns = [
    # don't think thos url format is correct fro accepting query params
    path('', SearchView.as_view())
]
