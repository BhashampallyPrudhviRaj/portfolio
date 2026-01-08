# Prudhvi Raj Bhashampally - Portfolio

A premium, high-performance portfolio website built with **React**, **Vite**, **MUI v5**, and **Framer Motion**. Designed to showcase engineering excellence and SaaS product delivery.

## 🚀 Features
- **Premium Design**: Dark/Light mode, Glassmorphism, and custom typography.
- **Animations**: Page transitions and scroll reveals using Framer Motion.
- **Microservices-Ready**: Architecture section in project details.
- **Performance**: Optimized build, lazy loading, and accessibility compliance.
- **GitHub Pages**: Configured for seamless static deployment.

## 🛠 Tech Stack
- React 18 + TypeScript
- Material UI (v5)
- Framer Motion
- React Router (HashRouter)

## 🏃‍♂️ Local Development

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start dev server:**
    ```bash
    npm run dev
    ```

## 📦 Deployment (GitHub Pages)

### Step 1: Configure Repository
1.  Open `vite.config.ts`.
2.  Update `base: '/portfolio/'` to match your GitHub repository name.
    *   Example: If your repo is `my-portfolio`, set base to `'/my-portfolio/'`.
    *   **Note:** If deploying to `<username>.github.io` root, set base to `'/'`.

### Step 2: Push & Deploy
This repo includes a GitHub Actions workflow that automatically deploys on push to `main`.

1.  Push code to GitHub:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
    git push -u origin main
    ```

2.  Enable Pages:
    *   Go to Repository **Settings** > **Pages**.
    *   Under **Build and deployment**, select **GitHub Actions** as the source.

### Step 3: Update Content
*   Edit `src/data/resume.ts` to update your biography, experience, and project details.
*   Edit `src/pages/Contact.tsx` to add your Formspree ID for the contact form.
