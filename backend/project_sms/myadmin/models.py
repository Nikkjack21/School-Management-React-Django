from distutils.command.upload import upload
from email.headerregistry import Address
from django.db import models
import random
import string

# Create your models here.
    
def name_gen():
    characters  = list('abcdefghijklmnopqrstuv1234567890')
    length      = 10
    the_name    = ''
    for x in range(length):
        the_name += random.choice(characters)
    return the_name

def pass_gen():
    characters  = list('abcdefghijklmnopqrstuv1234567890')
    length      = 10
    the_pass    = ''
    for x in range(length):
        the_pass += random.choice(characters)
    return the_pass
    


def random_reg_id():
    return random.randint(10000, 99999)

class AddClass(models.Model):
    class_number        = models.CharField(max_length=10, unique=True, blank=True)
    class_grade         = models.CharField(max_length=5, null=True, blank=True)

    def __str__(self):
        return self.class_number


class SubjectList(models.Model):
    subject_name        = models.CharField(max_length=25)

    def __str__(self):
        return self.subject_name

class AddSubject(models.Model):
    class_number        = models.ForeignKey(AddClass, on_delete=models.CASCADE, blank=True, null=True)
    subject_name        = models.ManyToManyField(SubjectList,blank=True)
    marks               = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.class_number.class_number
    



class ParentInfo(models.Model):
    father             = models.CharField(max_length=25)
    mother             = models.CharField(max_length=25)
    father_id          = models.CharField(max_length=25)
    mother_id          = models.CharField(max_length=25)
    father_job         = models.CharField(max_length=25) 
    mother_job         = models.CharField(max_length=25) 
    father_mob         = models.IntegerField()
    mother_mob         = models.IntegerField()

    def __str__(self):
        return self.father
    

class AddStudent(models.Model):
    GENDER = (
        ('None', 'Choose Your gender'),
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other')
    )
    student_name       = models.CharField(max_length=25)
    class_number       = models.ForeignKey(AddClass, on_delete=models.CASCADE, blank=True)
    reg_number         = models.IntegerField(default=random_reg_id)
    image              = models.ImageField(upload_to='photos/student', blank=True)
    admission_date     = models.DateField(null=True)
    date_of_birth      = models.DateField(null=True)
    gender             = models.CharField(max_length=15, choices=GENDER, null=True)
    mobile             = models.IntegerField()
    Address            = models.TextField(max_length=300)
    religion           = models.CharField(max_length=25, null=True)
    cast               = models.CharField(max_length=25, null=True)
    email              = models.EmailField(max_length=50)
    country            = models.CharField(max_length=30)
    state              = models.CharField(max_length=25)
    city               = models.CharField(max_length=25)
    pincode            = models.IntegerField()
    parent             = models.ForeignKey(ParentInfo,  on_delete=models.CASCADE, blank=True)
    username           = models.CharField(max_length=15, default=name_gen)
    password           = models.CharField(max_length=15, default=pass_gen)
    


    def __str__(self):
        return self.student_name




class IdCards(models.Model):
    student            = models.ForeignKey(AddStudent, on_delete=models.CASCADE)
    

class AddEmployee(models.Model):
    GENDER = (
        ('None', 'Choose Your gender'),
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other')
    )
    emp_name           = models.CharField(max_length=25)
    mobile             = models.IntegerField()
    emp_type           = models.CharField(max_length=25)
    image              = models.ImageField(upload_to='photos/employee', blank=True)
    joining_date       = models.DateField(null=True)
    salary             = models.IntegerField()
    father_name        = models.CharField(max_length=25, null=True)
    gender             = models.CharField(max_length=10, choices=GENDER, null=True)
    experience         = models.CharField(max_length=25)
    religion           = models.CharField(max_length=25, null=True)
    cast               = models.CharField(max_length=25, null=True)
    email              = models.EmailField(max_length=50)
    Address            = models.TextField(max_length=300)
    date_of_birth      = models.DateField(null=True)
    username           = models.CharField(max_length=15, default=name_gen)
    password           = models.CharField(max_length=15, default=pass_gen)



    def __str__(self):
        return self.emp_name



class studAttendance(models.Model):
    class_num          = models.ForeignKey(AddClass, on_delete=models.CASCADE)
    student            = models.ForeignKey(AddStudent, on_delete=models.CASCADE, null=True)
    present            = models.BooleanField()
    leave              = models.BooleanField()
    absent             = models.BooleanField()
    holiday            = models.BooleanField()


    def __str__(self):
        return self.class_num


class empAttendance(models.Model):
    emp_name           = models.ForeignKey(AddEmployee, on_delete=models.CASCADE)
    present            = models.BooleanField()
    leave              = models.BooleanField()
    absent             = models.BooleanField()
    holiday            = models.BooleanField()

    def __str__(self):
        return self.emp_name


class AttendanceReport(models.Model):
    student            = models.ForeignKey(studAttendance, on_delete=models.CASCADE)
    employee           = models.ForeignKey(empAttendance, on_delete=models.CASCADE)




class AddExam(models.Model):
    exam_name          = models.CharField(max_length=25)
    class_num          = models.ForeignKey(AddClass, on_delete=models.CASCADE)
    start_date         = models.DateField()
    end_date           = models.DateField()

    def __str__(self):
        return self.exam_name


class AddClassTest(models.Model):
    class_num          = models.ForeignKey(AddClass, on_delete=models.CASCADE)
    subject            = models.ForeignKey(AddSubject, on_delete=models.CASCADE)


    def __str__(self):
        return self.class_num
    pass




        
   
