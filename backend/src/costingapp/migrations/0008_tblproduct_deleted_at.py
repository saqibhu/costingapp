# Generated by Django 2.1.3 on 2019-04-11 07:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('costingapp', '0007_auto_20190404_1547'),
    ]

    operations = [
        migrations.AddField(
            model_name='tblproduct',
            name='deleted_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
