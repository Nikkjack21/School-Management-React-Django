# Generated by Django 4.1.1 on 2022-10-15 20:48

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("myadmin", "0002_rename_accounts_teacher_user_remove_teacher_email_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="addstudent",
            name="Address",
            field=models.TextField(blank=True, max_length=300, null=True),
        ),
        migrations.AlterField(
            model_name="addstudent",
            name="city",
            field=models.CharField(blank=True, max_length=25, null=True),
        ),
        migrations.AlterField(
            model_name="addstudent",
            name="country",
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name="addstudent",
            name="email",
            field=models.EmailField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name="addstudent",
            name="father_mob",
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="addstudent",
            name="mother_mob",
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="addstudent",
            name="pincode",
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="addstudent",
            name="state",
            field=models.CharField(blank=True, max_length=25, null=True),
        ),
        migrations.AlterField(
            model_name="addstudent",
            name="student_name",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL
            ),
        ),
    ]
