from django.shortcuts import render
from rest_framework import generics
from planets.models import Planet
from planets.serializers import PlanetSerializer

class PlanetsListCreate(generics.ListCreateAPIView):
    serializer_class = PlanetSerializer
    queryset = Planet.objects.all()
