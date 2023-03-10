# Generated by Django 4.1.7 on 2023-02-25 23:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Patterns', '0005_remove_pattern_user_id_pattern_user'),
        ('Photos', '0006_rename_pattern_id_photo_pattern'),
    ]

    operations = [
        migrations.AddField(
            model_name='photo',
            name='completed',
            field=models.BooleanField(null=True),
        ),
        migrations.AlterField(
            model_name='photo',
            name='pattern',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='photos', to='Patterns.pattern'),
        ),
    ]
