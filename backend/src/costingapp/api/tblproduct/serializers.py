from rest_framework import serializers
from costingapp.models import TblProduct


class TblProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblProduct
        # fields = ('productid', 'firstimpproductid',
        #         'fulltitle', 'isbn13', 'createddate')
        fields = '__all__'
