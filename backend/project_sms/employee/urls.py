from django.urls import path

from employee.views import  AddStudentByTeacher, AllTeachers, DeleteStudentByTeacher, EditStudentByTeacher, EmployeeLogin


urlpatterns=[
    path('login',EmployeeLogin.as_view()),




    #Teacher
    path('all-teachers', AllTeachers.as_view()),


    #Students
    path('add-student', AddStudentByTeacher.as_view()),
    path('edit-student/<int:id>',EditStudentByTeacher.as_view()),
    path('delete-student/<int:id>',DeleteStudentByTeacher.as_view()),
]