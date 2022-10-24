from django.contrib import admin
from myadmin.models import *


# Register your models here.


class TeacherAdmin(admin.ModelAdmin):
    list_display = ['user','mobile', 'post_name' ]
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()



admin.site.register(AddClass)
admin.site.register(AddSubject)
admin.site.register(AddStudent)
admin.site.register(Teacher, TeacherAdmin)
admin.site.register(AddEmployee)
admin.site.register(IdCards)
admin.site.register(StudAttendance)
admin.site.register(empAttendance)
admin.site.register(AttendanceReport)
admin.site.register(AddExam)
admin.site.register(SubjectList)
admin.site.register(Day)
admin.site.register(timeTable)




