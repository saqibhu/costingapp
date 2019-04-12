from django.db import models

from django.utils import timezone

from .api.baseclasses.softdeletion import SoftDeletionModel
from .api.baseclasses.basemodel import BaseModel
from .api.managers.tblproduct import TblProductManager


class TblProduct(SoftDeletionModel):
    productid = models.IntegerField(primary_key=True)
    firstimpproductid = models.IntegerField(null=True)
    fulltitle = models.CharField(max_length=255, null=True)
    isbn13 = models.CharField(max_length=13, null=True)

    objects = TblProductManager()

    def setModifiedDate(self):
        self.modified_at = timezone.now()
        self.save()

    def __str__(self):
        return self.productid


class TblProductPriceTypeCurrency(SoftDeletionModel):
    productpricetypecurrencyid = models.IntegerField(primary_key=True)
    productid = models.ForeignKey('TblProduct', on_delete=models.CASCADE)
    pricetypeid = models.IntegerField()
    currenyid = models.IntegerField()
    pricevalue = models.FloatField()

    def __str__(self):
        return self.productid
