# Generated by Django 2.1.3 on 2018-11-28 21:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('costingapp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tblproduct',
            old_name='firstImpProductId',
            new_name='firstimpproductid',
        ),
        migrations.RenameField(
            model_name='tblproduct',
            old_name='productId',
            new_name='productid',
        ),
    ]
