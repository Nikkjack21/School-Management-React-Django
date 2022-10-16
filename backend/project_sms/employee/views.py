from django.shortcuts import render
from django.contrib.auth import authenticate, login
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView
from employee.serializer import TeacherSerializer
from myadmin.models import AddClass, AddStudent, Teacher
from myadmin.serializer import StudentSerializer
from customuser.models import Account
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import serializers

# Create your views here.


class TeacherLogin(APIView):
    def post(self, request):

        data = request.data
        username = data["username"]
        password = data["password"]
        user = authenticate(username=username, password=password)
        if user is None:
            raise serializers.ValidationError("Wrong Credentials")
        if not user.is_teacher:
            raise serializers.ValidationError('You are not Authorized')
        refresh = RefreshToken.for_user(user)
        return Response ({
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        })


class AddStudentByTeacher(APIView):
    def post(self, request):

        data = request.data
        cls = AddClass.objects.get(id=data["class_number"])
        fname = data["first_name"]
        lname = data["last_name"]
        email = data["email"]
        uname = data["username"]
        password = data["password"]

        account = Account.objects.create_user(
            username=uname,
            first_name=fname,
            last_name=lname,
            email=email,
            password=password,
        )
        account.is_student = True
        account.save()
        mobile = data["mobile"]
        student = AddStudent.objects.create(
            student_name=account,
            class_number=cls,
            mobile=mobile,
            Address=data["Address"],
            country=data["country"],
            state=["state"],
            city=data["city"],
            pincode=data["pincode"],
            father=["father"],
            mother=data["mother"],
            father_id=data["father_id"],
            mother_id=data["mother_id"],
            father_mob=data["father_mob"],
            mother_mob=data["mother_mob"],
            image=data["image"],
            date_of_birth=data["date_of_birth"],
            admission_date=data["admission_date"],
        )
        student.gender = data["gender"]
        student.save()
        serializer = StudentSerializer(student)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class EditStudentByTeacher(APIView):
    def post(self, request, id):
        student = AddStudent.objects.get(id=id)
        serializer = StudentSerializer(
            instance=student, data=request.data, partial=True
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class DeleteStudentByTeacher(APIView):
    def post(self, request, id):
        student = AddStudent.objects.get(id=id)
        student.delete()
        return Response(status=status.HTTP_200_OK)


class AsignAttendance(APIView):
    def get(self, request, id):
        cls_number = AddClass.objects.get(id=id)

        pass


