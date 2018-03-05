from django.conf.urls import url
from . import views

from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^home/$', views.NewListHome.as_view()),
    url(r'^notas/$', views.NewListAll.as_view()),
    url(r'^notas/(?P<slug>[A-Za-z_-]+)/$', views.NewDetail.as_view()),
    url(r'^about-us/$', views.Presentation.as_view()),
    url(r'^murales/$', views.MuralListAll.as_view()),
    url(r'^murales/(?P<slug>[A-Za-z_-]+)/$', views.MuralDetail.as_view()),
    url(r'^contact/$', views.Contact.as_view()),
    url(r'^search/$', views.SearchNews.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)