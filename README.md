# 🎓 Smart Student Learning & Placement Management System

A full-stack web application developed using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)** to provide a centralized platform for managing student learning, assessments, course progress, certificates, and placement activities.

---

## 📌 Project Overview

The **Smart Student Learning & Placement Management System** is designed to simplify academic and placement management by connecting students and trainers on a single platform.

The application enables students to access learning resources, take assessments, track progress, download certificates, and explore job opportunities, while trainers can manage courses, upload study materials, create assessments, and monitor student performance.

---

# ✨ Features

## 👨‍🎓 Student Module

* Secure Login & Registration
* Student Dashboard
* Browse Available Courses
* Resume Learning
* Course Progress Tracking
* Access PDF Study Materials
* Take Online MCQ Assessments
* Automatic Score Calculation
* Assessment Reports
* Certificate Generation
* Placement Opportunities

---

## 👨‍🏫 Trainer Module

* Secure Login
* Trainer Dashboard
* Create Courses
* Upload Learning Materials
* Upload PDF Notes
* Create Dynamic MCQ Assessments
* View Previously Created Assessments
* Track Student Assessment Attempts
* Monitor Student Performance

---

## 📊 Assessment Module

* Multiple Choice Questions (MCQ)
* Four Options Per Question
* Automatic Evaluation
* Instant Result Generation
* Percentage Calculation
* Assessment Reports
* Attempt Tracking

---

## 📈 Progress Tracking

* Course Completion Percentage
* Resume Learning
* Completed Courses
* Learning Progress Monitoring

---

## 🏆 Certificate Module

* Automatic Certificate Eligibility
* Download Course Completion Certificate

---

## 💼 Placement Module

* Job Listings
* Placement Dashboard
* Career Opportunities

---

# 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* React Router DOM
* Axios
* React Icons

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Tools

* Visual Studio Code
* Git
* GitHub
* Postman

---


# 📚 Modules Implemented

### Authentication

* Student Login
* Trainer Login
* JWT Authentication

### Courses

* Course Dashboard
* Course Progress
* Resume Learning
* Study Materials

### Assessments

* Create Assessment
* Dynamic Question Management
* Student Assessment Portal
* Score Calculation
* Reports

### Reports

* Assessment Score
* Percentage
* Submission History

### Certificates

* Download Certificate
* Course Completion Verification

### Placements

* Job Listings
* Placement Dashboard

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Prematulasi/Smart-Student-Management.git
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm start
```

or

```bash
nodemon server.js
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# 🌐 API Endpoints

## Authentication

```
POST /api/auth/register
POST /api/auth/login
```

## Courses

```
GET /api/courses
POST /api/courses
```

## Assessments

```
GET /api/assessments/all
POST /api/assessments/create
PUT /api/assessments/attempt/:id
```

## Results

```
POST /api/results/save
GET /api/results/all
```

## Jobs

```
GET /api/jobs
POST /api/jobs
```

# 🎯 Future Enhancements

* Video Progress Tracking
* Live Classes
* Email Integration
* Leaderboard
* Attendance Management
* Analytics Dashboard
* Interview Scheduling
* AI-based Learning Recommendations
* Student Performance Analytics

---

# 💡 Learning Outcomes

Through this project, I gained practical experience in:

* MERN Stack Development
* REST API Development
* MongoDB Database Design
* Authentication & Authorization
* CRUD Operations
* React Hooks
* State Management
* Frontend–Backend Integration
* Responsive UI Design
* Assessment & Result Management
* Git & GitHub Version Control


