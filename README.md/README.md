# SmartHealth – Cloud-Based Microservices Healthcare System

## Project Overview

SmartHealth is a cloud-based healthcare management system developed using a microservices architecture. The system allows patients to book appointments, view appointment queues, receive notifications, and access real-time weather information through a cloud API integration.

The project demonstrates modern cloud-native development practices including containerization, CI/CD automation, cloud deployment, and API integration.

---

## Features

### Appointment Management

* Create appointments
* View all appointments
* Store appointment data in SQLite database

### Queue Management

* Display patient queue
* Track appointment order

### Notification Microservice

* Sends notifications when appointments are created
* Independent microservice architecture

### Weather Service Integration

* Real-time weather information using OpenWeatherMap API
* Demonstrates cloud API consumption

### CI/CD Pipeline

* GitHub Actions workflow
* Automatic build verification on push

### Cloud Deployment

* Frontend deployed on Vercel
* Backend ready for cloud deployment
* Microservices architecture

---

## System Architecture

Frontend (React + Vite)

↓

Backend API (Flask)

↓

SQLite Database

↓

Notification Microservice

↓

OpenWeatherMap Cloud API

---

## Technologies Used

### Frontend

* React
* Vite
* JavaScript
* CSS

### Backend

* Python
* Flask
* Flask-CORS
* Requests

### Database

* SQLite

### DevOps & Cloud

* Docker
* Docker Compose
* GitHub Actions
* GitHub
* Vercel

### External API

* OpenWeatherMap API

---

## Project Structure

SmartHealth/

├── frontend/

├── backend/

├── notification-service/

├── .github/workflows/

├── docker-compose.yml

├── README.md

└── .gitignore

---

## Running the Project

### Clone Repository

```bash
git clone <repository-url>
cd SmartHealth
```

### Start Containers

```bash
docker compose up --build
```

### Frontend

```text
http://localhost:5173
```

### Backend

```text
http://localhost:5002
```

### Notification Service

```text
http://localhost:5001
```

---

## API Endpoints

### Home

```http
GET /
```

### Create Appointment

```http
POST /appointments
```

### View Appointments

```http
GET /appointments
```

### Queue Management

```http
GET /queue
```

### Weather Information

```http
GET /weather/<city>
```

Example:

```http
GET /weather/Colombo
```

---

## CI/CD Pipeline

GitHub Actions automatically:

* Checks source code
* Builds backend
* Installs dependencies
* Validates project structure

Workflow file:

```text
.github/workflows/ci.yml
```

---

## Deployment

### Frontend

Deployed using Vercel.

### Backend

Containerized using Docker and ready for cloud deployment.

### Notification Service

Containerized using Docker and ready for cloud deployment.

---

## Author

Venuja Siyath Ranmika

Bachelor of Computing Systems

Unitec Institute of Technology

New Zealand
