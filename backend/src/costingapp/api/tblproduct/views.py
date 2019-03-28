from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView

from costingapp.models import TBLProduct
from .serializers import TBLProductSerializer


class TBLProductListView(ListAPIView):
    queryset = TBLProduct.objects.all()
    serializer_class = TBLProductSerializer


class TBLProductDetailView(RetrieveAPIView):
    queryset = TBLProduct.objects.all()
    serializer_class = TBLProductSerializer
    lookup_field = 'productid'


class TBLProductCreateView(CreateAPIView):
    queryset = TBLProduct.objects.all()
    serializer_class = TBLProductSerializer


class TBLProductUpdateView(DeleteAPIView):
    queryset = TBLProduct.objects.all()
    serializer_class = TBLProductSerializer


class TBLProductDeleteView(UpdateAPIView):
    queryset = TBLProduct.objects.all()
    serializer_class = TBLProductSerializer
