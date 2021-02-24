# Generated by Django 3.1.5 on 2021-02-24 01:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('userprofiles', '0002_auto_20210217_0755'),
        ('checkout', '0007_auto_20210223_0352'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='orders', to='userprofiles.userprofile'),
        ),
    ]
