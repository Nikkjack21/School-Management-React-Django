from dataclasses import fields
from rest_framework.serializers import ModelSerializer
from myadmin.models import *
from customuser.models import Account


class AccountSerializer(ModelSerializer):
    class Meta:
        model = Account
        fields = [
            "id",
            "first_name",
            "last_name",
            "username",
            "email",
            "password",
        ]
        extra_kwargs = {"password": {"write_only": True}}


class ClassSerializer(ModelSerializer):
    class Meta:
        model = AddClass
        fields = "__all__"


class SubjectListSerializer(ModelSerializer):
    class Meta:
        model = SubjectList
        fields = "__all__"


class SubjectSerializer(ModelSerializer):
    class_number = ClassSerializer()
    subject_name = SubjectListSerializer(read_only=True, many=True)

    class Meta:
        model = AddSubject
        fields = "__all__"


class StudentSerializer(ModelSerializer):
    student_name = AccountSerializer()

    class Meta:
        model = AddStudent
        fields = "__all__"


class EmployeeSerializer(ModelSerializer):
    class Meta:
        model = AddEmployee
        fields = "__all__"


class IdCardsSerializer(ModelSerializer):
    class Meta:
        model = IdCards
        fields = "__all__"


class IdCardSerializer(ModelSerializer):
    class Meta:
        model = IdCards
        fields = "__all__"


class StudAttendSerializer(ModelSerializer):
    class Meta:
        model = StudAttendance
        fields = "__all__"


class EmpAttendSerializer(ModelSerializer):
    class Meta:
        model = empAttendance
        fields = "__all__"


class AttendReportSerializer(ModelSerializer):
    class Meta:
        model = AttendanceReport
        fields = "__all__"


class ExamSerializer(ModelSerializer):
    class Meta:
        model = AddExam
        fields = "__all__"


class DaySerializer(ModelSerializer):
    subject_name = SubjectListSerializer(many=True)
    class_number = ClassSerializer()
    class Meta:
        model = Day
        fields= "__all__"

        

class TimeTableSerializer(ModelSerializer):
    time_table = DaySerializer()

    class Meta:
        model = timeTable
        fields="__all__"

