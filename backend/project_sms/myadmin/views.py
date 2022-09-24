from functools import partial
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from myadmin.models import *
from myadmin.serializer import ClassSerializer, EmployeeSerializer, ParentInfoSerializer, StudentSerializer, SubjectSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import generics
# Create your views here.

class AdminDashboard(APIView):
    pass





# ADMIN CLASS VIEWS BEGINS

class AddClassView(APIView):
    def post(self, request):
        serializer       = ClassSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)


        


class AllClassList(APIView):
    permission_classes=[IsAuthenticated]
    def get(self, request):
        hey    = request.user
        print('HEYYYYY', hey)
        classess        = AddClass.objects.all()
        serializer      = ClassSerializer(classess, many=True)
        if serializer:
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class EditClass(APIView):
    def post(self, request, id):
        edit            = AddClass.objects.get(id=id)
        serializer          = ClassSerializer(instance=edit, data=request.data, partial=True)        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status.HTTP_404_NOT_FOUND)


class DeleteClass(APIView):
    def post(self, request, id):
        delete_class    = AddClass.objects.get(id=id)
        if delete_class:
            delete_class.delete()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)


# ADMIN CLASS VIEWS ENDS



# ADMIN SUBJECT VIEWS BEGINS
class AllSubject(APIView):
    def get(self, request):
        subjects            = AddSubject.objects.all()
        serializer          = SubjectSerializer(subjects, many=True)
        if serializer:
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(404)


class AdminAddSubject(APIView):
    def post(self, request):
        serializer          = SubjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    

class EditAdminSubject(APIView):
    def post(self, request, id):
        subject             = AddSubject.objects.get(id=id)
        serializer          = SubjectSerializer(instance=subject, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)


class DeleteAdminSubject(APIView):
    def post(self, request, id):
        delete_subject             = AddSubject.objects.get(id=id)
        if delete_subject:
            delete_subject.delete()
            return Response(200)
        return Response(404)




# ADMIN SUBJECT VIEWS ENDS



# ADMIN STUDENTS VIEWS BEGINS
class AdminStudentList(generics.ListAPIView):
    queryset = AddStudent.objects.all()
    serializer_class = StudentSerializer

class AdminAddStudent(APIView):
    def post(self, request):
        student         = StudentSerializer(data=request.data)
        if student.is_valid():
            student.save()
            return Response(student.data, status=status.HTTP_201_CREATED)
        return Response(400)


class AdmineditStudent(APIView):
    def post(self, request, id):
        student         = AddStudent.objects.get(id=id)
        serializer      = StudentSerializer(instance=student, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(404)

class DeleteStudent(APIView):
    def post(self, request, id):
        student     = AddStudent.objects.get(id=id)
        if student:
            student.delete()
            return Response(200)
        return Response(404)



# ADMIN STUDENTS VIEWS ENDS



# ADMIN PARENTS VIEWS BEGINS

class AdminAddParent(APIView):
    def post(self, request):
        parent              = ParentInfoSerializer(data=request.data)
        if parent.is_valid():
            parent.save()
            return Response(parent.data, status=status.HTTP_201_CREATED)
        return Response(404)

class AdminEditParent(APIView):
    def post(self, request, id):
        parent          = ParentInfo.objects.get(id=id)
        serializer      = ParentInfoSerializer(instance=parent, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(400)

class DeleteParent(APIView):
    def post(self, request, id):
        parent          = ParentInfo.objects.get(id=id)
        if parent:
            parent.delete()
            return Response(200)
        return Response(404)




# ADMIN PARENTS VIEWS ENDS




# ADMIN EMPLOYEE VIEWS BEGINS

class AdminEmployeeList(generics.ListAPIView):
    queryset            = AddEmployee.objects.all()
    serializer_class    = EmployeeSerializer



class AdminAddEmployee(generics.CreateAPIView):
    serializer_class      = EmployeeSerializer


class AdminEditEmployee(APIView):
      def post(self, request, id):
            employee             = AddEmployee.objects.get(id=id)
            serializer           = EmployeeSerializer(instance=employee, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(404)

class DeleteEmployee(APIView):
    def post(self, request, id):
        employee               = AddEmployee.objects.get(id=id)
        if employee:
            employee.delete()
            return Response(200)
        return Response(404)





# ADMIN EMPLOYEE VIEWS ENDS


