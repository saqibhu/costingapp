from django.db import models


class BaseModel(models.Model):
    created_at = models.DateTimeField(blank=True, null=True)
    modified_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        abstract = True
