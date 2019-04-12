from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from costingapp.models import TblProductPriceTypeCurrency
from .serializers import TblProductPriceTypeCurrencySerializer


@api_view(['GET', 'DELETE', 'PUT'])
def get_delete_update_tblproductpricetypecurrency(request, productid):
    try:
        tblproductpricetypecurrency = TblProductPriceTypeCurrency.objects.get(
            productid=productid)
    except TblProductPriceTypeCurrency.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    # get details of a single TblProductPriceTypeCurrency
    if request.method == 'GET':
        serializer = TblProductPriceTypeCurrencySerializer(
            tblproductpricetypecurrency)
        return Response(serializer.data)
    # delete a single TblProductPriceTypeCurrency
    elif request.method == 'DELETE':
        return Response({})
    # update details of a single TblProductPriceTypeCurrency
    elif request.method == 'PUT':
        serializer = TblProductPriceTypeCurrencySerializerr(
            tblproductpricetypecurrency, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def get_post_tblproductpricetypecurrency(request):
    # get all TblProductPriceTypeCurrencys
    if request.method == 'GET':
        tblproductpricetypecurrency = TblProductPriceTypeCurrency.objects.all()
        serializer = TblProductPriceTypeCurrencySerializer(
            tblproductpricetypecurrency, many=True)
        return Response(serializer.data)
    # insert a new record for a TblProductPriceTypeCurrency
    elif request.method == 'POST':
        data = {
            'productpricetypecurrencyid': request.data.get('productpricetypecurrencyid'),
            'productid': request.data.get('productid'),
            'pricetypeid': request.data.get('pricetypeid'),
            'currenyid': request.data.get('currenyid'),
            'pricevalue': request.data.get('pricevalue'),
            # 'createddate': request.data.get('createddate')
        }

        serializer = TblProductPriceTypeCurrencySerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
