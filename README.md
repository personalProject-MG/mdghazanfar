# Md Ghazanfar Alam — Professional AI & Full-Stack Portfolio

Welcome to the official, premium portfolio website of **Md Ghazanfar Alam**, a specialist in Generative AI, Agentic AI, and Cloud Machine Learning. 

This project is built as a high-fidelity, responsive, dark-mode-first Next.js application that showcases technical skills, professional certifications, production-grade projects, and live-verified credentials. It also features interactive AI sandboxes and customization tools that leverage Google's Gemini LLMs.

---

## 🚀 Key Features

*   **🤖 Floating AI Chatbot Widget (`ChatbotWidget.tsx`)**:
    *   Powered by Google's **Gemini API** (with a failover strategy to `gemini-3.1-flash-lite` if `gemini-3.5-flash` encounters limits).
    *   Features a specialized profile-context system prompt allowing it to act as an autonomous profile assistant.
    *   Accepts queries about experience, certifications, and skills, returning rich Markdown-formatted answers.
*   **⚡ Server-Sent Events (SSE) Agentic Sandbox (`AgentSection.tsx`)**:
    *   A live trace visualization of a multi-agent orchestration pipeline.
    *   Simulates coordination between **Planner**, **Searcher**, **Editor**, **Critic**, and **Publisher** agents.
    *   Outputs console logs and loops back to draft revised content before rendering a final compiled HTML report.
*   **🛠️ AI Resume Tailor & PDF Generator (`HomeSection.tsx`)**:
    *   Allows visitors to paste any job description.
    *   Calls Vertex AI / Gemini API to perform a semantic alignment analysis mapping Ghazanfar's master profile to the role.
    *   Compiles a customized preview highlighting matched skills, tailored summary, and customized project descriptions.
    *   Generates and downloads a custom, clean PDF document on the fly using `pdfkit`.
*   **💡 Dynamic Quote Generator (`InspiringSection.tsx`)**:
    *   Fetches real-time AI thoughts and tech wisdom dynamically using Gemini.
    *   Falls back onto classic curated wisdom from tech and history giants presented via a carousel.
*   **🌓 Seamless Dark & Light Mode (`ThemeSwitcher.tsx`)**:
    *   Uses `next-themes` and Tailwind CSS to switch layouts on the fly with a micro-animated toggle button.
*   **🎨 High-End Premium Styling & Transitions**:
    *   Features perspective card transformations, glowing emerald-to-cyan hover borders, backdrop-blur (glassmorphism) filters, dynamic background grid overlays, and a custom full-screen entry Loader.

---

## 🛠️ Tech Stack

*   **Framework**: Next.js 16 (Pages Router)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS & Vanilla CSS (with customized keyframe animations)
*   **AI Integration**: `@google/generative-ai` & `react-markdown`
*   **PDF Engine**: `pdfkit` & `@types/pdfkit`
*   **Icons & Branding**: FontAwesome, React Icons
*   **Theme Management**: `next-themes`
*   **Deployment**: Fully static and serverless API routes on Node.js

---

## ⚙️ Setup & Installation

### 1. Prerequisites
Ensure you have Node.js (version 18+) installed on your machine.

### 2. Environment Configuration
Create a `.env` file in the root directory and configure your Gemini API key:
```env
GEMINI_API_KEY=your_google_ai_studio_api_key
```

> [!IMPORTANT]
> A valid key from **Google AI Studio** is required for the Chatbot, Agentic Sandbox, and Resume Tailoring APIs to respond to request calls.

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
│   │   └── ChatbotWidget.tsx   # Floating AI Chatbot Assistant UI
│   ├── AboutSection.tsx       # Profile description & bio details
│   ├── AgentSection.tsx       # Multi-agent tracer sandbox with SVG state topology
│   ├── CerticationSection.tsx # Certifications, badges, and verification links
│   ├── ContactSection.tsx     # Message contact form (wired with MongoDB fallback)
│   ├── FooterSection.tsx      # Monogrammed footer with quick social access
│   ├── HomeSection.tsx        # Hero section with stats, CV, & AI resume tailor modal
│   ├── InspiringSection.tsx   # Interactive Quote Generator & carousel
│   ├── Navbar.tsx             # Responsive navigation with scroll spy & brand logo
│   ├── PageLoader.tsx         # Full-screen entry splash loader
│   ├── ProjectsSection.tsx    # Accordion-expandable projects grid
│   ├── SkillSection.tsx       # Categories & tech stacks with hover perspective effects
│   └── ThemeSwitcher.tsx      # Dark/Light theme toggle
├── pages/
│   ├── api/
│   │   ├── agent/
│   │   │   └── run.ts          # SSE multi-agent orchestrator stream
│   │   ├── ai/
│   │   │   ├── chat.ts         # Chatbot response handler with failover model
│   │   │   └── quote.ts        # Dynamic Gemini quote generator
│   │   ├── tailor/
│   │   │   ├── analyze.ts      # Semantic alignment analysis for JD matching
│   │   │   └── generate-pdf.ts # Dynamic PDFKit compiler for tailored resumes
│   │   └── contact.ts         # User contact message handler
│   ├── _app.tsx               # App entry wrapping ThemeProvider & PageLoader
│   ├── index.tsx              # Main portfolio builder page
│   └── fonts/                 # Custom local fonts
├── public/
│   ├── Image/                 # Assets (monogram logos, quote avatars, badges)
│   ├── favicon.ico
│   └── resume.pdf             # Master PDF resume file
└── styles/
    ├── globals.css            # Base stylesheet, layout grid patterns, and keyframes
    └── Home.module.css
```
