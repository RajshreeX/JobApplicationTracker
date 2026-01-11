# Job / Internship Application Tracker

A full-stack web application to track job and internship applications with complete CRUD functionality.

## Why this project?
This project was built to demonstrate real-world CRUD fundamentals, clean REST API design, and practical frontend-backend integration — without unnecessary complexity.

## Tech Stack
- Frontend: React (Vite)
- Backend: Node.js, Express
- Database: MongoDB (Mongoose)
- API: REST

## Features
- Add job applications
- View all applications sorted by date
- Update application status
- Delete applications
- Filter applications by status

## Backend API Endpoints
- POST `/api/applications` → Create application
- GET `/api/applications` → Get all applications
- PUT `/api/applications/:id` → Update application
- DELETE `/api/applications/:id` → Delete application

## Data Model
Each application contains:
- Company name
- Role
- Status (Applied / Interview / Offer / Rejected)
- Source
- Application date
- Notes

## Design Decisions
- No authentication to keep focus on core CRUD logic
- Frontend filtering to reduce backend complexity
- Centralized API service for maintainability
- Clean separation of routes, controllers, and models

## What I Learned
- Building REST APIs with proper error handling
- Connecting React frontend to backend APIs
- Managing application state without overengineering
- Structuring a full-stack project cleanly

## Future Improvements
- Authentication
- Pagination
- Backend filtering


