from rest_framework.generics import ListAPIView
from rest_framework import filters
from costingapp.models import TblProduct
from costingapp.api.tblproduct.serializers import TblProductSerializer


class SearchView(ListAPIView):
    queryset = TblProduct.objects.all()
    serializer_class = TblProductSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('fulltitle', 'isbn13')
