from django.db import models


class TBLProduct(models.Model):
    productid = models.IntegerField(primary_key=True)
    firstimpproductid = models.IntegerField(null=True)
    fulltitle = models.CharField(max_length=255, null=True)
    createddate = models.DateTimeField(auto_now_add=True)
    isbn13 = models.CharField(max_length=13, null=True)

    def __str__(self):
        return self.fulltitle
