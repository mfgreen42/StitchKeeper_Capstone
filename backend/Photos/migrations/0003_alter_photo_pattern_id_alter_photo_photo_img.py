# Generated by Django 4.1.7 on 2023-02-20 02:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Patterns', '0003_alter_pattern_artist'),
        ('Photos', '0002_rename_photo_photo_photo_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photo',
            name='pattern_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='photos', to='Patterns.pattern'),
        ),
        migrations.AlterField(
            model_name='photo',
            name='photo_img',
            field=models.ImageField(upload_to='photos/images'),
        ),
    ]
