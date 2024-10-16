# Annotate Everything

Use Annotate Everything to power your dataset annotation workflows with AI.

# Features

**1. Promptable Instance Segmentation**

- Simply write a prompt to get Instance Segmentation over a variety of classes.

**2. Fast Inference**

- Inference runs on a Serverless Function for blazing fast inference.

**3. Export to any format**

- Annotations can be exported format of your choice.


## Tech Stack

- Azure (Cloud Deployment)
- Django Rest Framework ()
- Nuclio (Serverless calls)
- React (frontend client)
- Vite (Package Manager)
- Shadcn (styling)
- Zustand (state management)
- Docker

## Self hosting guide

Set appropriate values on `/backend/.env` and `/frontend/.env` files then:

```bash
docker compose up --build
```

## Development Guide

1. Create Virtual Environment and install dependencies

    ```bash
    python3.10 -m venv env
    ```

2. Activate Virtual Environment

    ```bash
    source env/bin/activate
    ```

3. Install Dependencies

    ```bash
    pip install -r backend/requirements.txt
    ```

4. Add Environment variables in `backend/.env`

    ```bash
    DJANGO_SECRET_KEY="your-secret-key"

    POSTGRES_DB=db_dev
    POSTGRES_USER=root
    POSTGRES_PASSWORD=root

    DJANGO_SUPERUSER_USERNAME=admin
    DJANGO_SUPERUSER_PASSWORD=admin
    DJANGO_SUPERUSER_EMAIL=admin@admin.com

    DJANGO_DEBUG=True
    DEVELOPMENT_MODE=True
    ```

5. Add Environment variables in `frontend/.env`

    ```bash
    VITE_API_URL="<BACKEND_URL>:<PORT>"
    ```

## Run Database

1. Start PostgreSQL database

    ```bash
    docker run --name db_dev -e POSTGRES_PASSWORD=root -e POSTGRES_USER=root -e POSTGRES_DB=db_dev -d -p 5432:5432 postgres
    ```

### Run Backend

1. Make Migrations

    ```
    cd backend
    python manage.py makemigrations
    python manage.py migrate
    ```

2. Start Django Server

    ```
    python manage.py runserver
    ```

### Run Frontend

1. Install dependencies

    ```
    npm install
    ```

2. Start React App

    ```
    npm run dev
    ```

- Application should be running on localhost:5173 by default
- Backend server should be running on localhost:8000 by default
