# Generated by Django 2.1.3 on 2018-11-28 21:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TBLProduct',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('productId', models.IntegerField()),
                ('firstImpProductId', models.IntegerField()),
                ('createddate', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
