from email import message
from rest_framework.permissions import BasePermission


class isClassTeacher(BasePermission):
    message = 'You are not class Teacher'
    def has_permission(self, request, view):
        if request.user.is_authenticated and request.user.is_class_teacher:
            return True

