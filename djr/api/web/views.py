# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render



'''

# RAW FUNCTION

from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from app.models import new
from app.serializers import newSerializerloca

# Create your views here.



@csrf_exempt
def new_list(request):
  
    if request.method == 'GET':
        news = new.objects.all()
        serializer = newSerializer(news, many=True)
        return JsonResponse(serializer.data, safe=False) 
    
'''

'''
# FUNCTION WITH @API_VIEW DECORATOR

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from app.models import new
from app.serializers import newSerializer

@api_view(['GET'])
def news_list(request, format=None):

    if request.method == 'GET':
        news = new.objects.all()
        serializer = newSerializer(news, many=True)
        return Response(serializer.data)
        
'''

'''
# VIEW CLASS

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status     
from app.models import new
from app.serializers import newSerializer

class NewList(APIView):
    
    def get(self, request, format=None):
        news = new.objects.all()
        serializer = newSerializer(news, many=True)
        return Response(serializer.data)
        
'''
from django.db.models import Q
from web.models import heroes,  new, presentation, mural
from web.serializers import newSerializerHome, NewSerializerList, PresentationSerializer, MuralsSerializerList, NewSerializerDetail, ContactSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.filters import SearchFilter



class NewListHome(generics.ListCreateAPIView):
    queryset = new.objects.order_by('-date')[:9]
    serializer_class = newSerializerHome



class NewListAll(generics.ListCreateAPIView):
    queryset = new.objects.order_by('-date')
    serializer_class = NewSerializerList

class NewDetail(APIView):

    def get_object(self, slug):
        try:
            return new.objects.get(slug=slug)
        except new.DoesNotExist:
            raise Http404

    def get(self, request, slug, format=None):
        new = self.get_object(slug)
        serializer = NewSerializerList(new, context={"request": request})
        return Response(serializer.data)


class Presentation(generics.ListCreateAPIView):
    queryset = presentation.objects.order_by('-date')
    serializer_class = PresentationSerializer


class MuralListAll(generics.ListCreateAPIView):
    queryset = mural.objects.all()
    serializer_class = MuralsSerializerList


class MuralDetail(APIView):

    def get_object(self, slug):
        try:
            return mural.objects.get(slug=slug)
        except mural.DoesNotExist:
            raise Http404

    def get(self, request, slug, format=None):
        mural = self.get_object(slug)
        serializer = MuralsSerializerList(mural, context={"request": request})
        return Response(serializer.data)


class Contact(generics.CreateAPIView):
    serializer_class = ContactSerializer


class SearchNews(generics.ListAPIView):
    serializer_class = NewSerializerList

    def get_queryset(self, *args, **kwargs):
        querryset_list = new.objects.all()
        querry = self.request.GET.get('q')
        if querry:
            querryset_list = querryset_list.filter(
                Q(title__icontains=querry)|
                Q(synopsis__icontains=querry)|
                Q(body_1__icontains=querry)|
                Q(body_2__icontains=querry)|
                Q(body_3__icontains=querry)|
                Q(body_4__icontains=querry)|
                Q(body_5__icontains=querry)|
                Q(body_6__icontains=querry)|
                Q(date__icontains=querry)               
            ).distinct()
        return querryset_list














