# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

from django.template.defaultfilters import slugify

# Create your models here.

class heroes (models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=500)

# Model of a single new

class new (models.Model):
    date = models.DateTimeField()
    title = models.CharField(max_length=500)
    synopsis = models.CharField(max_length=500)
    cover_image = models.ImageField(upload_to="imagenes_de_notas/", blank=True)
    body_1 = models.TextField()
    image_1 = models.ImageField(upload_to="imagenes_de_notas/", blank=True)
    body_2 = models.TextField(blank=True)
    image_2 = models.ImageField(upload_to="imagenes_de_notas/", blank=True)
    body_3 = models.TextField(blank=True)
    image_3 = models.ImageField(upload_to="imagenes_de_notas/", blank=True)
    body_4 = models.TextField(blank=True)
    image_4 = models.ImageField(upload_to="imagenes_de_notas/", blank=True)
    body_5 = models.TextField(blank=True)   
    image_5 = models.ImageField(upload_to="imagenes_de_notas/", blank=True)
    body_6 = models.TextField(blank=True)
    slug = models.SlugField(blank=True)

    def __unicode__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(new, self).save(*args, **kwargs)


# model of profile

class presentation(models.Model):
    date = models.DateTimeField()
    title =  models.CharField(max_length=200)
    body = models.TextField()
    profile_picture = models.ImageField(upload_to="foto_de_perfil/")

    def __unicode__(self):
        return self.title


# pictures of murals

class mural(models.Model):
    date = models.DateTimeField()
    title =  models.CharField(max_length=200)
    content = models.TextField()
    mural_picture = models.ImageField(upload_to="fotografias/")
    slug = models.SlugField(blank=True)
	
    def __unicode__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(mural, self).save(*args, **kwargs)
       

# contact

class contact(models.Model):
    name = models.CharField(blank=True, max_length=100)
    Email = models.EmailField(blank=True)
    topic = models.CharField(blank=True, max_length=100)
    message = models.TextField()

    def __unicode__(self):
        return self.topic
