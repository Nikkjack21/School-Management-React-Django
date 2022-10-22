from myadmin.models import Teacher
from rest_framework.serializers import ModelSerializer
from myadmin.serializer import  AccountSerializer, ClassSerializer
from drf_writable_nested.serializers import WritableNestedModelSerializer


class TeacherSerializer(WritableNestedModelSerializer,ModelSerializer):
    user = AccountSerializer()
    class_number = ClassSerializer()

    class Meta:
        model = Teacher
        fields = "__all__"


