from dataclasses import fields
from customuser.serializer import AccountSerializer
from myadmin.models import AddEmployee, Teacher
from rest_framework.serializers import ModelSerializer, Serializer
from rest_framework import serializers

from myadmin.serializer import ClassSerializer


class EmpSerializer(ModelSerializer):
    class Meta:
        model = AddEmployee
        fields = "__all__"


class TeacherSerializer(ModelSerializer):
    user = AccountSerializer()
    class_number = ClassSerializer()

    class Meta:
        model = Teacher
        fields = "__all__"

    # def update(self, instance, validated_data):
    #     user_data = validated_data.pop("user")
    #     print('HEYY')
    #     instance.first_name = validated_data.get("first_name", instance.first_name)
    #     instance.save()
    #     return instance


# class TeacherLoginSerializer(Serializer):
#     username = serializers.CharField()
#     password = serializers.CharField()
