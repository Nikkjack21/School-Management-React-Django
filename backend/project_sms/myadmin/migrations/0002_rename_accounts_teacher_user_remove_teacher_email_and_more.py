# Generated by Django 4.1.1 on 2022-10-15 19:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("myadmin", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="teacher",
            old_name="accounts",
            new_name="user",
        ),
        migrations.RemoveField(
            model_name="teacher",
            name="email",
        ),
        migrations.AddField(
            model_name="teacher",
            name="class_teacher",
            field=models.BooleanField(default=False),
        ),
    ]