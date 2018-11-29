from django.urls import path

from .views import TBLProductListView, TBLProductDetailView

urlpatterns = [
    path('', TBLProductListView.as_view()),
    path('<int:productid>', TBLProductDetailView.as_view())
]