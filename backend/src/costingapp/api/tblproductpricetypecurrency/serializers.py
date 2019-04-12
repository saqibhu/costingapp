from rest_framework import serializers
from costingapp.models import TblProductPriceTypeCurrency


class TblProductPriceTypeCurrencySerializer(serializers.ModelSerializer):
    class Meta:
        model = TblProductPriceTypeCurrency
        fields = '__all__'
