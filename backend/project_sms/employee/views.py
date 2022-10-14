from functools import partial
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView
from employee.serializer import TeacherSerializer
from myadmin.models import AddClass, AddEmployee, AddStudent, Teacher
from myadmin.serializer import StudentSerializer

# Create your views here.


class EmployeeLogin(APIView):
    def post(self, request):
        data = request.data
        username = data["username"]
        password = data["password"]
        emp = AddEmployee.objects.filter(username=username, password=password).exists()
        if emp:
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)




class AddStudentByTeacher(APIView):
    def post(self, request):
        student = StudentSerializer(data=request.data)
        if student.is_valid():
            student.save()
            return Response(student.data, status=status.HTTP_201_CREATED)
        return Response(400)


class EditStudentByTeacher(APIView):
    def post(self, request,id):
        student = AddStudent.objects.get(id=id)
        serializer=StudentSerializer(instance=student, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class DeleteStudentByTeacher(APIView):
    def post(self, request, id):
        student=AddStudent.objects.get(id=id)
        student.delete()
        return Response(status=status.HTTP_200_OK)







class AsignAttendance(APIView):
    def get(self, request, id):
        cls_number = AddClass.objects.get(id=id)

        pass


class AllTeachers(ListAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer