# Generated by Django 4.1.1 on 2022-10-16 04:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("myadmin", "0005_alter_addstudent_class_number"),
    ]

    operations = [
        migrations.AddField(
            model_name="addstudent",
            name="is_student",
            field=models.BooleanField(default=False),
        ),
    ]