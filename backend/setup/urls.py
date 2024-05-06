from django.contrib import admin
from django.urls import path
from planets import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/planets/', views.PlanetsListCreate.as_view(), name='planets'),
]
