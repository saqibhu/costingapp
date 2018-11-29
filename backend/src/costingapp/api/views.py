from rest_framework.generics import ListAPIView, RetrieveAPIView

from costingapp.models import TBLProduct
from .serializers import TBLProductSerializer

class TBLProductListView(ListAPIView):
    queryset = TBLProduct.objects.all()
    serializer_class = TBLProductSerializer

class TBLProductDetailView(RetrieveAPIView):
    queryset = TBLProduct.objects.all()
    serializer_class = TBLProductSerializer
    lookup_field = 'productid'