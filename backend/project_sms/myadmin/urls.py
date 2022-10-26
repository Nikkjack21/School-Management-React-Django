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
    path('delete-subject/<int:id>', DeleteAdminSubject.as_view()),
    path('add-subject-name', AddSubjectName.as_view()),
    path('all-subject-name', SubjectNameList.as_view()),
    path('delete-subject-name/<int:pk>',SubjectNameDelete.as_view()),
    path('edit-subject-name/<int:id>', SubjectNameEdit.as_view()),
    path('add-gen-sub', AddSubjectGeneric.as_view()),

    # Admin Students
    path('add-student', AdminAddStudent.as_view()),
    path('edit-student/<int:id>', AdmineditStudent.as_view()),
    path('all-student', AdminStudentList.as_view()),
    path('delete-student', DeleteStudent.as_view()),
    path('student-detail/<int:id>', SingleStudent.as_view()),


    #Admin Employee

    path('all-employee', AdminEmployeeList.as_view()),
    path('add-employee', AdminAddEmployee.as_view()),
    path('edit-employee/<int:id>', AdminEditEmployee.as_view()),
    path('delete-employee/<int:id>', DeleteEmployee.as_view()),

    #Admin Teacher
    path('add-teacher', AddTeacher.as_view()),
    path('edit-teacher/<int:id>',EditTeacher.as_view()),
    path('all-teachers', TeachersList.as_view()),
    path('teacher-detail/<int:id>', SingleTeacherView.as_view()),
    path('tea/<int:id>', TeaGen.as_view()),

    #Timetable

    path('timetable/<int:id>', timeTableView.as_view()),

    path('test/<int:id>', SingleTableView.as_view()),
    path("day/<int:id>",DaySubject.as_view())

]