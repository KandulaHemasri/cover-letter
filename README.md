# 🤖 AI Cover Letter Generator

**Live Demo:** https://cover-letter-vpl2.vercel.app/

A web-based application that helps users generate **professional and personalized cover letters** using AI.  
Users can enter job details and upload a resume, and the app intelligently creates a polished cover letter within seconds.

---

## ✨ Features

### 📝 Cover Letter Generation
- Enter candidate details:
  - Name
  - Job Role
  - Company Name
  - Key Skills
- Generates a professional cover letter using AI
- Proper paragraph formatting for readability

### 📄 Resume Upload
- Upload a PDF resume
- Extracts text automatically from the resume
- Uses resume content to personalize the cover letter

### ⏳ Loading Indicator
- Displays a **“Generating…”** animation while the AI processes the request
- Prevents duplicate submissions

### 📋 Copy to Clipboard
- Generated cover letter appears in a clean output box
- One-click copy functionality

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- CSS3
- Fetch API

### Backend
- Node.js
- Express.js
- Multer (file upload handling)
- PDF parsing library

### AI
- Google Gemini API

---

## 🧠 Concepts Implemented

- AI prompt engineering
- Secure API key handling using environment variables
- PDF text extraction
- File uploads with Multer
- Async / Await for API calls
- Client–server communication
- Loading & error state handling

---

## 🔐 Security

- API keys are stored securely using environment variables
- No sensitive data is committed to GitHub
- `.env` files are excluded from version control

---

## 🚀 Deployment

- Frontend deployed on **Vercel**
- Backend deployed separately
- Environment variables configured in deployment settings

---

## 📌 About the Project

This project demonstrates how modern applications integrate AI to solve real-world problems like:
- Job applications
- Resume-based personalization
- Professional content generation

---

