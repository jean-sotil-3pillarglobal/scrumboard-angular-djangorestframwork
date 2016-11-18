from rest_framework import serializers

from .models import List, Card

class ListSerializer(serializers.ModelSerializer):

	class Meta:
		model = List
		fields = '__all__'

class CardSerializer(serializers.ModelSerializer):

	class Meta:
		model = Card
		fields = ('title', 'description', 'card_list', 'story_points', 'business_value')

