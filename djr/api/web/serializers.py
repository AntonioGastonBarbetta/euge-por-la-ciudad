from rest_framework import serializers
from web.models import new, presentation, mural, contact


# Serializer of a single new

class newSerializerHome (serializers.ModelSerializer):
    cover_image_url = serializers.SerializerMethodField()

    class Meta:
        model = new
        fields = ('date', 'title', 'synopsis', 'cover_image_url', 'slug')
        
    def get_cover_image_url(self, new):
        request = self.context.get('request')
        cover_image_url = new.cover_image.url
        return request.build_absolute_uri(cover_image_url)


class NewSerializerList(serializers.ModelSerializer):
    cover_image_url = serializers.SerializerMethodField()
    image_1_url = serializers.SerializerMethodField()
    image_2_url = serializers.SerializerMethodField()
    image_3_url = serializers.SerializerMethodField()
    image_4_url = serializers.SerializerMethodField()
    image_5_url = serializers.SerializerMethodField()

    class Meta:
        model = new
        fields = ('date', 'title', 'synopsis', 'cover_image_url','body_1' ,'image_1_url' ,'body_2' ,'image_2_url' ,'body_3' ,'image_3_url' ,'body_4' ,'image_4_url' ,'body_5' ,'image_5_url' ,'body_6', 'slug')

    def get_cover_image_url(self, new):
        request = self.context.get('request')
        cover_image_url = new.cover_image.url
        return request.build_absolute_uri(cover_image_url)

    def get_image_1_url(self, new):
        try:
            request = self.context.get('request')
            image_1_url = new.image_1.url
            return request.build_absolute_uri(image_1_url)
        except:
            return ''

    def get_image_2_url(self, new):
        try:
            request = self.context.get('request')
            image_2_url = new.image_2.url
            return request.build_absolute_uri(image_2_url)
        except:
            return ''

    def get_image_3_url(self, new):
        try:
            request = self.context.get('request')
            image_3_url = new.image_3.url
            return request.build_absolute_uri(image_3_url)
        except:
            return ''

    def get_image_4_url(self, new):
        try:
            request = self.context.get('request')
            image_4_url = new.image_4.url
            return request.build_absolute_uri(image_4_url)
        except:
            return ''

    def get_image_5_url(self, new):
        try:
            request = self.context.get('request')
            image_5_url = new.image_5.url
            return request.build_absolute_uri(image_5_url)
        except:
            return ''


class PresentationSerializer(serializers.ModelSerializer):
    profile_picture_url = serializers.SerializerMethodField()

    class Meta:
        model = presentation
        fields = ('date', 'title', 'body', 'profile_picture_url')
            
    def get_profile_picture_url(self, presentation):
        request = self.context.get('request')
        profile_picture_url = presentation.profile_picture.url
        return request.build_absolute_uri(profile_picture_url)


class MuralsSerializerList(serializers.ModelSerializer):
    mural_picture_url = serializers.SerializerMethodField()

    class Meta:
        model = mural
        fields = ('date', 'title',  'mural_picture_url', 'content', 'slug')
            
    def get_mural_picture_url(self, mural):
        request = self.context.get('request')
        mural_picture_url = mural.mural_picture.url
        return request.build_absolute_uri(mural_picture_url)


class NewSerializerDetail(serializers.ModelSerializer):
    cover_image_url = serializers.SerializerMethodField()
    image_1_url = serializers.SerializerMethodField()
    image_2_url = serializers.SerializerMethodField()
    image_3_url = serializers.SerializerMethodField()
    image_4_url = serializers.SerializerMethodField()
    image_5_url = serializers.SerializerMethodField()

    class Meta:
        model = new
        fields = ('date', 'title', 'synopsis', 'cover_image_url','body_1' ,'image_1_url' ,'body_2' ,'image_2_url' ,'body_3' ,'image_3_url' ,'body_4' ,'image_4_url' ,'body_5' ,'image_5_url' ,'body_6')

    def get_cover_image_url(self, new):
        request = self.context.get('request')
        cover_image_url = new.cover_image.url
        return request.build_absolute_uri(cover_image_url)

    def get_image_1_url(self, new):
        try:
            request = self.context.get('request')
            image_1_url = new.image_1.url
            return request.build_absolute_uri(image_1_url)
        except:
            return ''

    def get_image_2_url(self, new):
        try:
            request = self.context.get('request')
            image_2_url = new.image_2.url
            return request.build_absolute_uri(image_2_url)
        except:
            return ''

    def get_image_3_url(self, new):
        try:
            request = self.context.get('request')
            image_3_url = new.image_3.url
            return request.build_absolute_uri(image_3_url)
        except:
            return ''

    def get_image_4_url(self, new):
        try:
            request = self.context.get('request')
            image_4_url = new.image_4.url
            return request.build_absolute_uri(image_4_url)
        except:
            return ''

    def get_image_5_url(self, new):
        try:
            request = self.context.get('request')
            image_5_url = new.image_5.url
            return request.build_absolute_uri(image_5_url)
        except:
            return ''


class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = contact
        fields = ('name', 'Email',  'topic', 'message')