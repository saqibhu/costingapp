from django.db import models

class TBLProduct(models.Model):
    productid = models.IntegerField()
    firstimpproductid = models.IntegerField()
    fulltitle = models.CharField(max_length=255)
    createddate = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.fulltitle