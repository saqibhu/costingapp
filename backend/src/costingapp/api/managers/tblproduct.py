from django.db import models
from django.utils import timezone


class TblProductQuerySet(models.QuerySet):
    def setModifiedDate(self, productid):  # need to pass productid in here
        return super(TblProductQuerySet, self).filter(productid=productid).update(modified_at=timezone.now())


class TblProductManager(models.Manager):
    def get_queryset(self):
        return TblProductQuerySet(self.model, using=self._db)

    def setModifiedDate(self, productid):
        return self.get_queryset().setModifiedDate(productid)
