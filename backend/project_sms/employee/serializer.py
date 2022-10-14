from dataclasses import fields
from myadmin.models import AddEmployee, Teacher
from rest_framework.serializers import ModelSerializer

class EmpSerializer(ModelSerializer):
    class Meta:
        model=AddEmployee
        fields='__all__'


class TeacherSerializer(ModelSerializer):
    class Meta:
        model=Teacher
        fields='__all__'