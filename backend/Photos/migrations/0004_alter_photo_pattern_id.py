# Generated by Django 4.1.7 on 2023-02-20 21:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Photos', '0003_alter_photo_pattern_id_alter_photo_photo_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photo',
            name='pattern_id',
            field=models.IntegerField(),
        ),
    ]
