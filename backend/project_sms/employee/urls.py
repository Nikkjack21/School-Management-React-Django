from django.urls import path

from employee.views import EmployeeLogin


urlpatterns=[
    path('login',EmployeeLogin.as_view()),
]