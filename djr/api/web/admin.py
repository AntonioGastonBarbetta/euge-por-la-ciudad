# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin
from .models import new, presentation, mural, contact

# Register your models here.

admin.site.register(new)
admin.site.register(presentation)
admin.site.register(mural)
admin.site.register(contact)
