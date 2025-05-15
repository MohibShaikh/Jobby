# Job Portal Application (MERN)

A full-stack job portal application where users can find and create jobs. Built with the MERN stack (MongoDB, Express, React, Node.js).

## Features
- User authentication (register, login, logout)
- Browse and search jobs
- Apply for jobs
- Company and job management (admin)
- User profile management

## Project Structure
- `/frontend` - React + Vite frontend
- `/backend` - Express.js backend API

## Live Demo
- Frontend: [https://jobby-wheat.vercel.app](https://jobby-wheat.vercel.app)
- Backend: [https://job-portal-application-mern-production-3618.up.railway.app](https://job-portal-application-mern-production-3618.up.railway.app)

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- MongoDB database (local or Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/sufyansidd19/Job-Portal-Application-MERN-.git
cd Job-Portal-Application-MERN-
```

### 2. Backend Setup
```bash
cd backend
npm install
```

#### Environment Variables (Backend)
Create a `.env` file in the backend directory with:
```
PORT=8000
MONGODB_URI=your_mongodb_uri
SECRET_KEY=your_secret_key
CLOUD_NAME=your_cloudinary_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
EMAIL_HOST=your_email_host
EMAIL_PORT=your_email_port
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your_email_user
EMAIL_HOST_PASSWORD=your_email_password
```

#### Start Backend
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

#### Environment Variables (Frontend)
Create a `.env` file in the frontend directory with:
```
VITE_API_URL=http://localhost:8000/api/v1
```

#### Start Frontend
```bash
npm run dev
```
The frontend will run on [http://localhost:5173](http://localhost:5173) by default.

---

## Deployment

### Backend Deployment (Railway)
1. Create a Railway account
2. Create a new project and connect your GitHub repository
3. Set the root directory to `/backend`
4. Add all environment variables from the backend `.env` file
5. Deploy

### Frontend Deployment (Vercel)
1. Create a Vercel account
2. Import your GitHub repository
3. Set the root directory to `/frontend`
4. Add environment variable:
   - `VITE_API_URL` = your Railway backend URL + `/api/v1`
5. Deploy

## Usage
- Visit the frontend URL to register, login, browse jobs, and manage your profile.
- Admin users can manage companies and job postings.

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, Redux Toolkit, Radix UI
- **Backend:** Node.js, Express, MongoDB (Mongoose), Cloudinary, JWT Auth
- **Deployment:** Vercel (Frontend), Railway (Backend)

## License
[ISC](LICENSE)
