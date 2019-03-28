from django.urls import path

from .views import TBLProductListView, TBLProductDetailView, TBLProductCreateView

urlpatterns = [
    path('', TBLProductListView.as_view()),
    path('create/', TBLProductCreateView.as_view()),
    path('<int:productid>', TBLProductDetailView.as_view())
]
