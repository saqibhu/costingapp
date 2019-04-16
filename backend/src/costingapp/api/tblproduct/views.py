from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from costingapp.models import TblProduct
from .serializers import TblProductSerializer


@api_view(['GET', 'DELETE', 'PUT'])
def get_delete_update_tblproduct(request, productid):
    try:
        tblproduct = TblProduct.objects.get(
            productid=productid)
    except TblProduct.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    # get details of a single TblProductPriceTypeCurrency
    if request.method == 'GET':
        serializer = TblProductSerializer(
            tblproduct)
        return Response(serializer.data)
    # delete a single TblProductPriceTypeCurrency
    elif request.method == 'DELETE':
        tblproduct.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    # update details of a single TblProductPriceTypeCurrency
    elif request.method == 'PUT':
        serializer = TblProductSerializer(tblproduct, data=request.data)
        if serializer.is_valid():
            serializer.save()
            TblProduct.objects.setModifiedDate(productid)
            return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def get_post_tblproduct(request):
    # get all TblProductPriceTypeCurrencys
    if request.method == 'GET':
        tblproduct = TblProduct.objects.all()
        serializer = TblProductSerializer(
            tblproduct, many=True)
        return Response(serializer.data)
    # insert a new record for a TblProductPriceTypeCurrency
    elif request.method == 'POST':
        data = {
            'productid': request.data.get('productid'),
            'firstimpproductid': request.data.get('firstimpproductid'),
            'fulltitle': request.data.get('fulltitle'),
            'isbn13': request.data.get('isbn13')
        }

        serializer = TblProductSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
