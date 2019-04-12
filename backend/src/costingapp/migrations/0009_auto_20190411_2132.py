# Generated by Django 2.1.3 on 2019-04-11 21:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('costingapp', '0008_tblproduct_deleted_at'),
    ]

    operations = [
        migrations.CreateModel(
            name='BaseModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(blank=True, null=True)),
                ('modified_at', models.DateTimeField(blank=True, null=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='tblproduct',
            name='createddate',
        ),
        migrations.RemoveField(
            model_name='tblproductpricetypecurrency',
            name='createddate',
        ),
        migrations.AddField(
            model_name='tblproductpricetypecurrency',
            name='deleted_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='tblproductpricetypecurrency',
            name='productid',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='costingapp.TblProduct'),
        ),
    ]
