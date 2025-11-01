MediCarePlus: An Intelligent Medication Reminder System
MediCarePlus is a smart, reliable, and automated medication reminder system designed to help elderly individuals manage their medication schedules effectively.

🎯 The Problem
Medication adherence is a significant challenge for many elderly people. Forgetting to take medicines on time, or mismanaging complex schedules, can lead to serious health complications. Current solutions are often too complex to use or too costly for the average household.

✨ The Solution
MediCarePlus provides a low-cost, user-friendly, and reliable system that ensures correct and timely medication intake. It's an automated reminder system that sends alerts directly to a user's phone, removing confusion and providing peace of mind for both patients and their caregivers.

🚀 Key Features
Simple Schedule Management: An easy-to-use dashboard for users or caregivers to add, edit, and delete medication schedules.

Automated SMS Reminders: The system is designed to use a backend that sends text messages via Twilio when it's time to take a medication.

User Authentication: A secure login/registration system (powered by Firebase Auth) to protect patient data.

Cloud Database: All schedules are stored securely in a Firestore database.

Multi-User Application:

For Households: Helps elderly individuals manage daily medicines.

For Hospitals: Allows nurses to manage medications for multiple patients efficiently.

💻 Tech Stack
This project is built with a modern, serverless architecture:

Frontend (This Repository):

Vite (High-performance React Framework)

React (UI Library)

Tailwind CSS

shadcn/ui (UI Components)

Backend (Serverless):

Firebase (See backend-README.md)

Firestore: NoSQL database for storing schedules.

Firebase Authentication: For user management.

Firebase Cloud Functions: For all backend logic (API, Cron Jobs).

External APIs:

Twilio (For sending SMS notifications)

Deployment:

Netlify (The netlify.toml file is configured for this)

⚙️ Getting Started
Follow these instructions to get a local copy of the project up and running for development.

1. Prerequisites
Make sure you have the following installed on your machine:

Node.js (v18 or later)

npm (or yarn)

A Firebase project (with Firestore & Authentication enabled)

2. Clone & Install Dependencies
Bash

# Clone this repository
git clone https://github.com/Krushnaapatil/MediCarePlus.git

# Navigate to the project directory
cd MediCarePlus

# Install all required npm packages
npm install
3. Environment Variables
Create a file named .env.local in the root of your project. This is for your frontend Firebase keys.

Important: For Vite, all environment variables must be prefixed with VITE_.

Code snippet

# Firebase Configuration (copy from your Firebase project settings)
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
(Note: Your secret Twilio keys belong on the backend, in your Firebase Functions, not in this file.)

4. Initialize shadcn/ui
If you run into issues with shadcn/ui components, you may need to run the init command:

Bash

npx shadcn-ui@latest init
5. Run the Development Server
You can now start the frontend application:

Bash

npm run dev
Open http://localhost:5173 (or whatever port Vite specifies) in your browser to see the result.
