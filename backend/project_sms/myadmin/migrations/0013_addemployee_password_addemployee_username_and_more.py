# Generated by Django 4.1.1 on 2022-09-22 07:57

from django.db import migrations, models
import myadmin.models


class Migration(migrations.Migration):

    dependencies = [
        ('myadmin', '0012_alter_addstudent_image_alter_addstudent_parent'),
    ]

    operations = [
        migrations.AddField(
            model_name='addemployee',
            name='password',
            field=models.CharField(default=myadmin.models.pass_gen, max_length=15),
        ),
        migrations.AddField(
            model_name='addemployee',
            name='username',
            field=models.CharField(default=myadmin.models.name_gen, max_length=15),
        ),
        migrations.AlterField(
            model_name='addemployee',
            name='image',
            field=models.ImageField(blank=True, upload_to='photos/employee'),
        ),
    ]
