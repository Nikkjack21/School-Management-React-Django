from email.policy import default
from django.db import models
import random
import string
from customuser.models import Account

# Create your models here.


def name_gen():
    characters = list("abcdefghijklmnopqrstuv1234567890")
    length = 6
    the_name = ""
    for x in range(length):
        the_name += random.choice(characters)
    return the_name


def pass_gen():
    characters = list("abcdefghijklmnopqrstuv1234567890")
    length = 6
    the_pass = ""
    for x in range(length):
        the_pass += random.choice(characters)
    return the_pass


def random_reg_id():
    return random.randint(10000, 99999)


class AddClass(models.Model):
    class_number = models.CharField(max_length=10, unique=True, blank=True)
    class_grade = models.CharField(max_length=5, null=True, blank=True)

    def __str__(self):
        return self.class_number


class SubjectList(models.Model):
    subject_name = models.CharField(max_length=25)

    def __str__(self):
        return self.subject_name


class AddSubject(models.Model):
    class_number = models.ForeignKey(
        AddClass, on_delete=models.CASCADE, blank=True, null=True
    )
    subject_name = models.ManyToManyField(SubjectList, blank=True)
    marks = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.class_number.class_number


class AddStudent(models.Model):

    student_name = models.ForeignKey(Account, on_delete=models.CASCADE)
    class_number = models.ForeignKey(AddClass, on_delete=models.CASCADE,null=True, blank=True)
    reg_number = models.IntegerField(default=random_reg_id)
    image = models.ImageField(
        upload_to="photos/student", blank=True, max_length=3500, null=True
    )
    admission_date = models.DateField(null=True, blank=True)
    date_of_birth = models.DateField(
        null=True,
        blank=True,
    )
    gender = models.CharField(max_length=15, null=True)
    mobile = models.IntegerField()
    Address = models.TextField(max_length=300, null=True, blank=True)

    country = models.CharField(max_length=30, null=True, blank=True)
    state = models.CharField(max_length=25, null=True, blank=True)
    city = models.CharField(max_length=25, null=True, blank=True)
    pincode = models.IntegerField(null=True, blank=True)

    father = models.CharField(max_length=25, null=True, blank=True)
    mother = models.CharField(max_length=25, null=True, blank=True)
    father_id = models.CharField(max_length=25, null=True, blank=True)
    mother_id = models.CharField(max_length=25, null=True, blank=True)
    father_job = models.CharField(max_length=25, null=True, blank=True)
    mother_job = models.CharField(max_length=25, null=True, blank=True)
    father_mob = models.IntegerField(null=True, blank=True)
    mother_mob = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.student_name.username


class IdCards(models.Model):
    student = models.ForeignKey(AddStudent, on_delete=models.CASCADE)


class AddEmployee(models.Model):

    emp_name = models.CharField(max_length=25)
    mobile = models.IntegerField()
    emp_type = models.CharField(max_length=25)
    image = models.ImageField(upload_to="photos/employee", null=True, blank=True)
    joining_date = models.DateField(null=True)
    salary = models.IntegerField()
    father_name = models.CharField(max_length=25, null=True, blank=True)
    gender = models.CharField(max_length=10, null=True, blank=True)
    experience = models.CharField(max_length=25)
    religion = models.CharField(max_length=25, null=True, blank=True)
    cast = models.CharField(max_length=25, null=True, blank=True)
    email = models.EmailField(max_length=50)
    Address = models.TextField(max_length=300)
    date_of_birth = models.DateField(null=True, blank=True)
    username = models.CharField(max_length=15, default=name_gen)
    password = models.CharField(max_length=15, default=pass_gen)

    def __str__(self):
        return self.emp_name


class StudAttendance(models.Model):
    class_num = models.ForeignKey(AddClass, on_delete=models.CASCADE)
    student = models.ForeignKey(AddStudent, on_delete=models.CASCADE, null=True)
    present = models.BooleanField()
    leave = models.BooleanField()
    absent = models.BooleanField()
    holiday = models.BooleanField()

    def __str__(self):
        return self.class_num


class empAttendance(models.Model):
    emp_name = models.ForeignKey(AddEmployee, on_delete=models.CASCADE)
    present = models.BooleanField()
    leave = models.BooleanField()
    absent = models.BooleanField()
    holiday = models.BooleanField()

    def __str__(self):
        return self.emp_name


class AttendanceReport(models.Model):
    student = models.ForeignKey(StudAttendance, on_delete=models.CASCADE)
    employee = models.ForeignKey(empAttendance, on_delete=models.CASCADE)


class AddExam(models.Model):
    exam_name = models.CharField(max_length=25)
    class_num = models.ForeignKey(AddClass, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.exam_name


class AddClassTest(models.Model):
    class_num = models.ForeignKey(AddClass, on_delete=models.CASCADE)
    subject = models.ForeignKey(AddSubject, on_delete=models.CASCADE)

    def __str__(self):
        return self.class_num



class Teacher(models.Model):
    class_number = models.ForeignKey(
        AddClass, on_delete=models.PROTECT,null=True, blank=True
    )
    user = models.ForeignKey(
        Account, on_delete=models.CASCADE,  null=True, blank=True
    )
    mobile = models.IntegerField(null=True, blank=True)
    post_name = models.CharField(max_length=20, null=True, blank=True)
    image = models.ImageField(upload_to="photos/teachers", null=True, blank=True)
    join_date = models.DateField(null=True, blank=True)
    salary = models.IntegerField(null=True, blank=True)
    experience = models.CharField(max_length=10, null=True, blank=True)
    address = models.TextField(max_length=300, null=True, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    gender=models.CharField(max_length=10, null=True, blank=True)

    def __str__(self):
        return self.user.username