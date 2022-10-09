from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from employee.serializer import EmpSerializer

from myadmin.models import AddClass, AddEmployee
# Create your views here.

class EmployeeLogin(APIView):
    def post(self, request):
        data = request.data
        username = data['username']
        password = data['password']
        emp = AddEmployee.objects.filter(username=username, password=password).exists()
        if emp:
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)

class AsignAttendance(APIView):
    def get(self, request,id):
        cls_number = AddClass.objects.get(id=id)
        


        pass

