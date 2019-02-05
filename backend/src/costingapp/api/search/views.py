from rest_framework.generics import ListAPIView
from rest_framework import filters
from costingapp.models import TBLProduct
from costingapp.api.tblproduct.serializers import TBLProductSerializer


class SearchView(ListAPIView):
    queryset = TBLProduct.objects.all()
    serializer_class = TBLProductSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('fulltitle', 'isbn13')
