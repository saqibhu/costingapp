from rest_framework import serializers

from costingapp.models import TBLProduct


class TBLProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = TBLProduct
        fields = ('productid', 'firstimpproductid',
                  'fulltitle', 'isbn13', 'createddate')
