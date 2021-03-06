# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-06 13:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=100)),
                ('Email', models.EmailField(blank=True, max_length=254)),
                ('topic', models.CharField(blank=True, max_length=100)),
                ('message', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='murals',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField()),
                ('title', models.CharField(max_length=200)),
                ('content', models.TextField()),
                ('picture', models.ImageField(upload_to='fotografias/')),
                ('Slug', models.SlugField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='new',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField()),
                ('title', models.CharField(max_length=500)),
                ('synopsis', models.CharField(max_length=500)),
                ('cover_image', models.ImageField(blank=True, upload_to='imagenes_de_notas/')),
                ('body_1', models.TextField()),
                ('image_1', models.ImageField(blank=True, upload_to='imagenes_de_notas/')),
                ('body_2', models.TextField()),
                ('image_2', models.ImageField(blank=True, upload_to='imagenes_de_notas/')),
                ('body_3', models.TextField()),
                ('image_3', models.ImageField(blank=True, upload_to='imagenes_de_notas/')),
                ('body_4', models.TextField()),
                ('image_4', models.ImageField(blank=True, upload_to='imagenes_de_notas/')),
                ('body_5', models.TextField()),
                ('image_5', models.ImageField(blank=True, upload_to='imagenes_de_notas/')),
                ('body_6', models.TextField()),
                ('Slug', models.SlugField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='presentation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField()),
                ('title', models.CharField(max_length=200)),
                ('body', models.TextField()),
                ('profile_picture', models.ImageField(upload_to='foto_de_perfil/')),
            ],
        ),
    ]
