from django.contrib import admin
from myadmin.models import *
# Register your models here.

class AdminSubject(admin.ModelAdmin):
    list_display = ('class_number', 'subject_name', 'marks', 'grade')
    


admin.site.register(AddClass)
admin.site.register(AddSubject,AdminSubject)
admin.site.register(AddStudent)
admin.site.register(AddEmployee)
admin.site.register(ParentInfo)
admin.site.register(IdCards)
admin.site.register(studAttendance)
admin.site.register(empAttendance)
admin.site.register(AttendanceReport)
admin.site.register(AddExam)




