# Aidan Andrew Daniel - Portfolio Website

Welcome to my personal portfolio website! This project is a highly dynamic, visually stunning, and premium portfolio built to showcase my professional background as an aspiring Cloud Infrastructure Engineer, as well as my personal hobbies and interests.

## 🚀 Live Demo
You can view the live website here: [Aidan Andrew Daniel Portfolio](https://gray-pebble-032547c10.7.azurestaticapps.net/)

---

## 🛠️ Technology Stack

This project was built with modern web development tools and best practices:
- **Framework:** [Next.js (App Router)](https://nextjs.org/) - Utilizing React Server Components and Static Site Generation (SSG).
- **Styling:** [Tailwind CSS (v4)](https://tailwindcss.com/) - Custom-configured for a premium dark mode aesthetic with vibrant red (`#ff0033`) accents and glassmorphism UI elements.
- **Animations:** [Framer Motion](https://www.framer.com/motion/) - Delivering smooth scroll animations, tab transitions, and dynamic hover effects.
- **Icons:** [Lucide React](https://lucide.dev/) - Crisp, consistent, and customizable SVG icons.
- **Deployment:** [Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/) - Fully automated CI/CD deployment via GitHub Actions.

---

## ✨ Key Features

### 1. Dual-Sided Architecture (Professional vs. Personal)
The portfolio is designed with two completely distinct user experiences that seamlessly swap using a floating navigation dock:
- **Professional Mode:** A sleek, tech-focused landing page detailing my core competencies (Cloud & DevOps, Networking, Programming), certifications (CCNA, DevNet), work experience, and featured engineering projects.
- **Personal Mode:** A casual, interactive "off-duty" mode featuring:
  - **Asymmetrical Hobbies Bento Grid:** Highlighting my passions (Athletics, Photography, Gaming).
  - **Horizontal Flashcards:** "Components of Aidan" - draggable/scrollable cards detailing different facets of my personality.
  - **Functional Music Player:** An interactive widget to play my favorite tracks (JAEHYUN, Daniel Caesar, Zack Tabudlo).
  - **Daily Routine Timeline:** A beautifully styled vertical timeline tracking my daily habits.

### 2. High-Performance Static Export
Configured specifically for `output: export`, Next.js compiles the entire application into highly optimized, standalone HTML/CSS/JS files, ensuring lightning-fast load times globally across Azure's CDN.

### 3. Fully Automated CI/CD
The project features a custom GitHub Actions workflow (`.github/workflows/azure-static-web-apps-gray-pebble-032547c10.yml`) that bypasses Microsoft Oryx to manually build the Next.js application on an Ubuntu runner, and seamlessly publishes the `out` directory to Azure Static Web Apps upon every push to the `main` branch.

---

## 💻 Local Development

Want to run this project locally? Follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aidadann/Static-Portfolio-Website-Hosting.git
   cd Static-Portfolio-Website-Hosting
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running locally.

---

## 🎨 Asset Configuration

If you're cloning this repository, you will need to supply your own media assets in the `public/` directory for the UI to fully render:
- `profile.jpg` - Main hero portrait.
- `athletics.jpg`, `photography.jpg`, `gaming.jpg` - Bento box backgrounds.
- `sports.jpg`, `games.jpg`, `music-card.jpg`, `travel.jpg`, `creator.jpg`, `sleep.jpg` - Flashcard backgrounds.
- `music/try-again.mp3`, `music/toronto-2014.mp3`, `music/pano.mp3` - Audio files for the music player.

---

## 📬 Contact Me

Feel free to reach out to me for opportunities or just to chat about cloud architecture!
- **LinkedIn:** [Aidan Andrew Daniel](https://www.linkedin.com/in/aidan-andrew-daniel-b77764255/)
- **GitHub:** [@aidadann](https://github.com/aidadann)
