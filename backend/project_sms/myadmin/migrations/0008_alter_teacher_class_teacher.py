# Generated by Django 4.1.1 on 2022-10-18 16:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("myadmin", "0007_remove_addstudent_is_student"),
    ]

    operations = [
        migrations.AlterField(
            model_name="teacher",
            name="class_teacher",
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
    ]