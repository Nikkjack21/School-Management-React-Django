# Generated by Django 4.1.1 on 2022-10-08 04:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("myadmin", "0008_remove_addstudent_cast_remove_addstudent_religion"),
    ]

    operations = [
        migrations.AlterField(
            model_name="addemployee",
            name="cast",
            field=models.CharField(blank=True, max_length=25, null=True),
        ),
        migrations.AlterField(
            model_name="addemployee",
            name="date_of_birth",
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="addemployee",
            name="father_name",
            field=models.CharField(blank=True, max_length=25, null=True),
        ),
        migrations.AlterField(
            model_name="addemployee",
            name="gender",
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name="addemployee",
            name="image",
            field=models.ImageField(blank=True, null=True, upload_to="photos/employee"),
        ),
        migrations.AlterField(
            model_name="addemployee",
            name="religion",
            field=models.CharField(blank=True, max_length=25, null=True),
        ),
    ]