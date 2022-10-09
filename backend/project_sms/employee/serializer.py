from dataclasses import fields
from myadmin.models import AddEmployee
from rest_framework.serializers import ModelSerializer

class EmpSerializer(ModelSerializer):
    class Meta:
        model=AddEmployee
        fields='__all__'