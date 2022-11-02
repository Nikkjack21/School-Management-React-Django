from calendar import day_name
from rest_framework.views import APIView
from employee.serializer import TeacherSerializer
from employee.serializer import TeacherSerializer
from myadmin.models import *

from myadmin.serializer import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import generics
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.serializers import ValidationError
from django.db.models import Q


# Create your views here.


class AdminDashboard(APIView):
    pass


# ADMIN CLASS VIEWS BEGINS


class AddClassView(APIView):
    permission_classes = [IsAuthenticated, IsAdminUser]

    def post(self, request):
        data = request.data
        cls_num = data["class_number"]
        grade = data["class_grade"]
        print("CLASS DATA", data)
        check = AddClass.objects.filter(
            Q(class_number__icontains=cls_num) | Q(class_number__iexact="class ")
        )
        if check:
            raise ValidationError({"error": "Class Already Exist"})
        else:
            addClass = AddClass.objects.create(class_number=cls_num, class_grade=grade)
        serializer = ClassSerializer(addClass)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class AllClassList(APIView):
    permission_classes = []

    def get(self, request):
        classess = AddClass.objects.all()
        serializer = ClassSerializer(classess, many=True)
        if serializer:
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class EditClass(APIView):
    def post(self, request, id):
        edit = AddClass.objects.get(id=id)
        serializer = ClassSerializer(instance=edit, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status.HTTP_404_NOT_FOUND)


class DeleteClass(APIView):
    def post(self, request, id):
        delete_class = AddClass.objects.get(id=id)
        if delete_class:
            delete_class.delete()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)


# ADMIN CLASS VIEWS ENDS


# ADMIN SUBJECT VIEWS BEGINS
class AddSubjectName(generics.CreateAPIView):
    serializer_class = SubjectListSerializer


class SubjectNameList(generics.ListAPIView):
    queryset = SubjectList.objects.all()
    serializer_class = SubjectListSerializer


class SubjectNameDelete(generics.DestroyAPIView):
    queryset = SubjectList.objects.all()
    serializer_class = SubjectListSerializer


class SubjectNameEdit(RetrieveUpdateDestroyAPIView):
    queryset = SubjectList.objects.all()
    serializer_class = SubjectListSerializer
    lookup_field = "id"


class AddSubjectGeneric(generics.CreateAPIView):
    serializer_class = SubjectSerializer


class AllSubject(APIView):
    def get(self, request):
        subjects = AddSubject.objects.all().order_by("class_number")
        serializer = SubjectSerializer(subjects, many=True)
        if serializer:
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(404)


class AdminAddSubject(APIView):
    def post(self, request):

        data = request.data
        subname = SubjectList.objects.get(id=data["subject_name"])

        if AddSubject.objects.filter(class_number__id=data["class_number"]).exists():
            sub = AddSubject.objects.get(class_number__id=data["class_number"])
            sub.subject_name.add(subname)

        else:
            cls = AddClass.objects.get(id=data["class_number"])
            sub = AddSubject.objects.create(class_number=cls, marks=data["marks"])
            sub.subject_name.add(subname)

        ser = SubjectSerializer(sub)
        return Response(ser.data, status=status.HTTP_201_CREATED)


class EditAdminSubject(APIView):
    def post(self, request, id):
        subject = AddSubject.objects.get(id=id)
        serializer = SubjectSerializer(
            instance=subject, data=request.data, partial=True
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)


class DeleteAdminSubject(APIView):
    def post(self, request, id):
        delete_subject = AddSubject.objects.get(id=id)
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
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request):
        pass


class SingleStudent(APIView):
    def get(self, request, id):
        student = AddStudent.objects.get(id=id)
        serializer = StudentSerializer(student)
        if serializer:
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(404)


class AdmineditStudent(APIView):
    def post(self, request, id):
        data = request.data
        student = AddStudent.objects.get(id=id)
        serializer = StudentSerializer(
            instance=student, data=request.data, partial=True
        )
        print("STUDENT", data)
        if serializer.is_valid():
            print("SERIALIZER IS VALID")
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        print("ERROR")
        return Response(status=status.HTTP_400_BAD_REQUEST)


class DeleteStudent(APIView):
    def post(self, request, id):
        student = AddStudent.objects.get(id=id)
        if student:
            student.delete()
            return Response(200)
        return Response(404)


# ADMIN STUDENTS VIEWS ENDS


# ADMIN EMPLOYEE VIEWS BEGINS


class AdminEmployeeList(generics.ListAPIView):
    queryset = AddEmployee.objects.all()
    serializer_class = EmployeeSerializer


class AdminAddEmployee(generics.CreateAPIView):
    serializer_class = EmployeeSerializer
    parser_classes = [MultiPartParser, FormParser]


class AdminEditEmployee(APIView):
    def post(self, request, id):
        employee = AddEmployee.objects.get(id=id)
        serializer = EmployeeSerializer(
            instance=employee, data=request.data, partial=True
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(404)


class DeleteEmployee(APIView):
    def post(self, request, id):
        employee = AddEmployee.objects.get(id=id)
        if employee:
            employee.delete()
            return Response(200)
        return Response(404)


# ADMIN EMPLOYEE VIEWS ENDS


# ADMIN TEACHER VIEW BEGIN
class TeachersList(generics.ListAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer


class TeacherView(APIView):
    def get(self, request):
        t = Teacher.objects.all()
        ser = TeacherSerializer(t, many=True)
        return Response(ser.data, status=200)


class AddTeacher(APIView):
    def post(self, request):
        data = request.data
        cls = AddClass.objects.get(id=data["class_number"])

        username = data.get("user_name")
        email = data["email"]
        password = data["password"]
        mobile = data["mobile"]
        post = data["post_name"]
        user = Account.objects.create_user(
            username=username,
            email=email,
            password=password,
            first_name=data["first_name"],
            last_name=data["last_name"],
        )
        user.is_teacher = True
        user.save()
        teacher = Teacher.objects.create(
            class_number=cls,
            user=user,
            mobile=mobile,
            post_name=post,
            salary=data["salary"],
            join_date=data["join_date"],
            date_of_birth=data["date_of_birth"],
            address=data["address"],
            experience=data["experience"],
            image=data.get("image"),
        )
        teacher.save()
        serializer = TeacherSerializer(teacher)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class EditTeacher(APIView):
    def post(self, request, id):
        data = request.data
        print("DATA", data)
        ids = data.get("id")

        try:
            user = Account.objects.get(id=ids)
            print("USERRRRRRRRRRRRRRRRRRR", user.id)
            first_name = data.get("first_name")
            last_name = data.get("last_name")
            username = data.get("username")
            email = data.get("email")
            if first_name:
                user.first_name = first_name
            if last_name:
                user.last_name = last_name
            if email:
                user.email = email
            if username:
                user.username = username
            user.save()
        except Exception as e:
            print("eeeeeeee", e)
            pass
        instance = Teacher.objects.get(id=id)
        serializer = TeacherSerializer(instance=instance, data=data, partial=True)

        if serializer.is_valid():
            print("serrrrrrrrrrrrrrr")
            serializer.save()

            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class SingleTeacherView(generics.RetrieveAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    lookup_field = "id"


class TeaGen(APIView):
    def post(self, request, id):
        data = request.data
        ids = data.get("id")
        print("yyyyyy", ids)
        try:
            user = Account.objects.get(id=ids)
            first_name = data.get("first_name")
            last_name = data.get("last_name")
            username = data.get("username")
            email = data.get("email")
            if first_name:
                user.first_name = first_name
            if last_name:
                user.last_name = last_name
            if email:
                user.email = email
            if username:
                user.username = username
            user.save()
        except Exception as e:
            print("errorrr", e)
            pass
        tea = Teacher.objects.get(id=id)
        ser = TeacherSerializer(instance=tea, data=data, partial=True)
        if ser.is_valid():
            ser.save()
            return Response(ser.data)
        return Response(500)


# ADMIN TEACHER VIEW ENDS

# ADMIN TIMETABLE

class AllDays(generics.ListAPIView):
    queryset=Day.objects.all()
    serializer_class=DaySerializer


class TimeTableView(APIView):
    def get(self, request, id):
        class_number = AddClass.objects.get(id=id)
        day = Day.objects.filter(class_number=class_number.id)
        print(day)
        serializer = DaySerializer(day, many=True)
        return Response(serializer.data)
        


class AddTimeTable(APIView):
    def post(self, request):
        data = request.data
        dy_name = data.get('day_name')
        day_name = dy_name.lower()
        subject_name = SubjectList.objects.get(id=data.get("subject_name"))
        if  Day.objects.filter(class_number__id=data["class_number"], day_name=day_name).exists():
            for day in Day.objects.filter(day_name=day_name):
                day.subject_name.add(subject_name)            
        else:
            class_num = AddClass.objects.get(id=data["class_number"])
            day = Day.objects.create(class_number=class_num, day_name=day_name)
            day.subject_name.add(subject_name)
        serializer = DaySerializer(day)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


#new time table






