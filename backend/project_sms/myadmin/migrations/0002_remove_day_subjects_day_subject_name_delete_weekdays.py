# Generated by Django 4.1.1 on 2022-11-01 18:04

from django.db import migrations
import sortedm2m.fields


class Migration(migrations.Migration):

    dependencies = [
        ("myadmin", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="day",
            name="subjects",
        ),
        migrations.AddField(
            model_name="day",
            name="subject_name",
            field=sortedm2m.fields.SortedManyToManyField(
                help_text=None, to="myadmin.subjectlist"
            ),
        ),
        migrations.DeleteModel(
            name="WeekDays",
        ),
    ]
