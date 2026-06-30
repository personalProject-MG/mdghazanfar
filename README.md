# Md Ghazanfar Alam — Professional AI Portfolio

Welcome to the official professional portfolio website of **Md Ghazanfar Alam**, a specialist in Generative AI, Agentic AI, and Cloud Machine Learning. This project is built as a high-fidelity, fully responsive Next.js application designed to showcase technical skills, professional certifications, production-grade projects, and live-verified credentials.

---

## 🚀 Key Features

*   **Custom AI Chatbot Widget**: A floating chat widget powered by Google's **Gemini API** that behaves as an autonomous profile assistant. It handles visitor queries about Ghazanfar's experience, certifications, and projects using a specialized profile-context system prompt.
*   **Creative Premium Animations**: Custom-designed, interactive card components in the Skills, Certifications, and Projects sections featuring perspective hover transforms, matching border color glows, and micro-animated icons.
*   **Verified Credentials Panel**: A dedicated **Digital Badge Profiles** sub-section linking directly to verified public credentials on **Credly** (for Google Cloud certifications) and **Microsoft Learn**.
*   **Dynamic Splash Loader**: An interactive, full-screen entry loader featuring custom gradient rings, initials branding, and a smooth fade-out animation.
*   **Expandable Projects Grid**: Optimizes initial load speeds by rendering the top 2 featured projects by default with a "View All Projects" accordion toggle to load more dynamically.
*   **Contact Form Integration**: Fully wired contact section connected to a custom backend endpoint for secure message transmission.

---

## 🛠️ Tech Stack

*   **Framework**: Next.js & React
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS & Vanilla CSS (custom animations)
*   **Icons & Branding**: FontAwesome, React Icons
*   **AI Integration**: `@google/generative-ai` & `react-markdown` (for rich text formatting inside the chatbot)
*   **Deployment & Performance**: Fully optimized static pages with server-rendered API routes

---

## ⚙️ Setup & Installation

### 1. Prerequisites
Ensure you have Node.js (version 18+) installed on your machine.

### 2. Environment Configuration
Create a `.env` file in the root directory and configure the Gemini API key:
```env
GEMINI_API_KEY=your_google_ai_studio_api_key
```
> [!IMPORTANT]
> A valid key from **Google AI Studio** is required for the chatbot assistant to respond to user messages.

### 3. Installation
Install the project dependencies:
```bash
npm install --legacy-peer-deps
```

### 4. Running Locally
Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 5. Building for Production
Generate the optimized production bundle:
```bash
npm run build
```

---

## 📂 Project Structure

```text
├── components/
│   ├── ai/
│   │   └── ChatbotWidget.tsx   # Floating AI Chatbot UI
│   ├── PageLoader.tsx         # Full-screen entry splash loader
│   ├── Navbar.tsx             # Responsive navigation with MGA branding
│   ├── HomeSection.tsx        # Hero section with stats & resume download
│   ├── AboutSection.tsx       # Profile description & bio details
│   ├── SkillSection.tsx       # Tech stack category grids with micro-hover actions
│   ├── CerticationSection.tsx # Certifications, badges, and verification links
│   ├── ProjectsSection.tsx    # Expandable projects card grid & View All toggle
│   └── ContactSection.tsx     # Message contact form
├── pages/
│   ├── api/
│   │   ├── ai/
│   │   │   └── chat.ts        # Gemini API orchestration & history proxy endpoint
│   │   └── contact.ts         # User contact message handler
│   ├── _app.tsx               # App entry wrapping ThemeProvider & PageLoader
│   └── index.tsx              # Main landing page builder
├── public/
│   ├── Image/
│   │   └── logo.png           # Creative generated MGA monogram logo
│   └── resume.pdf             # Latest professional resume document
```
