from django.db import models
from myadmin.models import *
# Create your models here.

class MarkAttendance(models.Model):
    class_num          = models.ForeignKey(AddClass, on_delete=models.CASCADE)
    student            = models.ForeignKey(AddStudent, on_delete=models.CASCADE, null=True)
    present            = models.BooleanField()
    leave              = models.BooleanField()
    absent             = models.BooleanField()
    holiday            = models.BooleanField()
    
    def __str__(self):
        return self.class_num

    

class ClassTest(models.Model):
    test_name          = models.CharField(max_length=20)
    class_num          = models.ForeignKey(AddClass, on_delete=models.CASCADE)
    subject            = models.ForeignKey(AddSubject, on_delete=models.CASCADE)
    marks              = models.IntegerField()

    def __str__(self):
        return self.test_name


class Exams(models.Model):
    exam               = models.ForeignKey(AddExam, on_delete=models.CASCADE)
    class_num          = models.ForeignKey(AddClass, on_delete=models.CASCADE)
    marks              = models.IntegerField()

    def __str__(self):
        return self.exam
   