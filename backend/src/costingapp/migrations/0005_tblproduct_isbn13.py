# Generated by Django 2.1.3 on 2019-01-23 16:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('costingapp', '0004_auto_20181129_2212'),
    ]

    operations = [
        migrations.AddField(
            model_name='tblproduct',
            name='isbn13',
            field=models.CharField(max_length=13, null=True),
        ),
    ]
