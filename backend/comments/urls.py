from django.urls import path, include
from comments import views

urlpatterns = [
    path('', views.logged_in_user),
    path('all/', views.nonlogged_in_user),
]
