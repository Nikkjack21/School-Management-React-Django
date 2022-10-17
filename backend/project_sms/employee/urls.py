from django.urls import path

from employee.views import  AddStudentByTeacher, AllAccount, DeleteStudentByTeacher, EditStudentByTeacher,   TeacherLogin


urlpatterns=[
    path('login',TeacherLogin.as_view()),
    path('all', AllAccount.as_view()),
    #Students
    path('add-student', AddStudentByTeacher.as_view()),
    path('edit-student/<int:id>',EditStudentByTeacher.as_view()),
    path('delete-student/<int:id>',DeleteStudentByTeacher.as_view()),
]