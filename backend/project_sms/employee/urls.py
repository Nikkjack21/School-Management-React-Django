from django.urls import path

from employee.views import  AddStudentByTeacher, DeleteStudentByTeacher, EditStudentByTeacher,   TeacherLogin, ViewStudentsByClassTeacher


urlpatterns=[
    path('login',TeacherLogin.as_view()),
    
    
    #Students
    path('add-student', AddStudentByTeacher.as_view()),
    path('edit-student/<int:id>',EditStudentByTeacher.as_view()),
    path('delete-student/<int:id>',DeleteStudentByTeacher.as_view()),
    path('view-students', ViewStudentsByClassTeacher.as_view()),


    
]