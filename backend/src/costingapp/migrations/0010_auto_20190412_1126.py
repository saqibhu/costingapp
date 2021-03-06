# Generated by Django 2.1.3 on 2019-04-12 11:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('costingapp', '0009_auto_20190411_2132'),
    ]

    operations = [
        migrations.DeleteModel(
            name='BaseModel',
        ),
        migrations.AddField(
            model_name='tblproduct',
            name='created_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='tblproduct',
            name='modified_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='tblproductpricetypecurrency',
            name='created_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='tblproductpricetypecurrency',
            name='modified_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='tblproductpricetypecurrency',
            name='productid',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='costingapp.TblProduct'),
        ),
    ]
