from rest_framework import serializers
from costingapp.models import Search


class SearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Search
        fields = ('fulltitle', 'isbn13')
