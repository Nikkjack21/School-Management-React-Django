# Generated by Django 4.1.1 on 2022-10-03 08:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("myadmin", "0003_delete_parentinfo"),
    ]

    operations = [
        migrations.AlterField(
            model_name="addstudent",
            name="gender",
            field=models.CharField(
                choices=[("male", "Male"), ("female", "Female"), ("other", "Other")],
                max_length=15,
                null=True,
            ),
        ),
    ]
