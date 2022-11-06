from multiprocessing import context
from django.contrib.auth import authenticate, login
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from employee.serializer import TeacherSerializer
from myadmin.models import AddClass, AddStudent
from customuser.models import Account
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import serializers

from myadmin.serializer import AccountSerializer, StudentSerializer
from customuser.models import Account
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated
from .permissions import isClassTeacher
from rest_framework import generics
from rest_framework.parsers import MultiPartParser, FormParser



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
            raise serializers.ValidationError({"error": "You are not Authorized"})
        refresh = RefreshToken.for_user(user)
        return Response(
            {
                "refresh": str(refresh),
                "access": str(refresh.access_token),
            }
        )


class AddStudentByTeacher(APIView):
    parser_classes = [MultiPartParser, FormParser]
    def post(self, request):
        data = request.data
        class_number = AddClass.objects.get(id=data.get("class_number"))
  
        print('class_numberrrrrr', class_number)
        user = Account.objects.create_user(
            first_name=data["first_name"],
            last_name=data["last_name"],
            username=data["username"],
            email=data["email"],
            password=data["password"],
        )

 
        user.is_student = True
        user.save()
        student = AddStudent.objects.create(
            student_name=user,
            class_number=class_number,
            admission_date=data.get("admission_date"),
            date_of_birth=data.get("date_of_birth"),
            gender=data.get("gender"),
            mobile=data.get("mobile"),
            Address=data.get("Address"),
            country=data.get("country"),
            state=data.get("state"),
            city=data.get("city"),
            pincode=data.get("pincode"),
            image=data.get("image"),
            father=data.get('father'),
            mother=data.get('mother'),
            father_mob=data.get('father_mob'),
            mother_mob=data.get('mother_mob')
        )
        student.save()
        serializer = StudentSerializer(student)
        return Response(serializer.data, status=status.HTTP_201_CREATED)



class TeacherClassID(APIView):
    permission_classes = [isClassTeacher]

    def get(self, request):
        user = request.user
        teacher = user.teacher_set.first()
        cls = teacher
        ser = TeacherSerializer(cls)
        return Response(ser.data)

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


class ViewStudentsByClassTeacher(APIView):
    permission_classes = [isClassTeacher]

    def get(self, request):
        user = request.user
        teacher = user.teacher_set.first()
        class_number = teacher.class_number_id
        student = AddStudent.objects.filter(class_number=class_number)

        serializer = StudentSerializer(
            instance=student, many=True, context={"request": request}
        )
        return Response(serializer.data, status=status.HTTP_200_OK)


class allAc(generics.ListAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
