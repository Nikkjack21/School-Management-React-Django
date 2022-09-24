from django.urls import path

from myadmin.views import *


urlpatterns=[
    # Admin Dashboard
    path('admin-dashboard', AdminDashboard.as_view()),

    # Admin Class
    path('add-class', AddClassView.as_view()),
    path('all-class',AllClassList.as_view()),
    path('edit-class/<int:id>', EditClass.as_view()),
    path('delete-class/<int:id>', DeleteClass.as_view()),

    # Admin Subject
    path('add-subject', AdminAddSubject.as_view()),
    path('edit-subject/<int:id>', EditAdminSubject.as_view()),
    path('all-subject', AllSubject.as_view()),
    path('delete-subject', DeleteAdminSubject.as_view()),

    # Admin Students
    path('add-student', AdminAddStudent.as_view()),
    path('edit-student/<int:id>', AdmineditStudent.as_view()),
    path('all-student', AdminStudentList.as_view()),
    path('delete-student', DeleteStudent.as_view()),


    #Admin Parent
    path('add-parent', AdminAddParent.as_view()),
    path("edit-parent/<int:id>",AdminEditParent.as_view()),
    path('delete-parent/<int:id>', DeleteParent.as_view()),

    #Admin Employee

    path('all-employee', AdminEmployeeList.as_view()),
    path('add-employee', AdminAddEmployee.as_view()),
    path('edit-employee/<int:id>', AdminEditEmployee.as_view()),
    path('delete-employee/<int:id>', DeleteEmployee.as_view())


]