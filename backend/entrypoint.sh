#!/bin/bash

APP_PORT=${PORT:-8000}

echo "Waiting for postgres..."
sleep 5
echo "PostgresSQL started"

echo "Migrating database..."
/opt/env/bin/python manage.py makemigrations --noinput
/opt/env/bin/python manage.py migrate --noinput
echo "Database Migrated"

echo "Creating Superuser..."
/opt/env/bin/python manage.py superuser || true
echo "Superuser created"

echo "Collecting static files..."
/opt/env/bin/python manage.py collectstatic --noinput
echo "Static files collected"

echo "Starting Server..."
/opt/env/bin/gunicorn backend.wsgi:application --bind "0.0.0.0:${APP_PORT}" --workers 4
