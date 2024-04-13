# Annotate Everything

Use Annotate Everything to power your dataset annotation workflows with AI.

# Features

## 1. Promptable Instance Segmentation

Simply write a prompt to get Instance Segmentation over a variety of classes.

## 2. Fast Inference

Inference runs on a Serverless Function for blazing fast inference.

### 3. Export to any format

Annotations can be exported format of your choice.

## Tech Stack

- Azure (Cloud Deployment)
- Django Rest Framework
- Nuclio (Serverless calls)
- React (frontend client)
- Vite (Package Manager)
- Shadcn (styling)
- Zustand (state management)
- Docker

## Installation

### Setup

Create Virtual Environment and install dependencies

```bash
python3.10 -m venv env
```

Activate Virtual Environment

```bash
. env/bin/activate
```

Add Environment variables in `backend/.env`

```
DJANGO_SECRET_KEY="django-insecure-secure-hash"
```

Add Environment variables in `frontend/.env`

```
VITE_API_URL="<BACKEND_URL>:<PORT>"
```

Install Dependencies

```bash
pip install -r backend/requirements.txt
```

### Run Backend

Make Migrations

```bash
cd backend
python manage.py makemigrations
python manage.py migrate
```

Start Django Server

```bash
python manage.py startapp
```

### Run Frontend

Install dependencies

```bash
npm install
```

```bash
npm run dev
```
