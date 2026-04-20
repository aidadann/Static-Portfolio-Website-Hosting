# Static Portfolio Website Hosting

This repository contains the source code for a modern, responsive, and static portfolio website designed specifically to showcase skills in cloud infrastructure, networking, and security.

## 🚀 Overview

The portfolio is a single-page static application (SPA-style HTML/CSS/JS) crafted to demonstrate frontend development best practices alongside cloud deployment methodologies. It serves as a digital resume and a practical demonstration of building and hosting web pages securely without relying on backend server execution.

## 🎨 Features & Aesthetics

- **Dark-Theme UI/UX**: Designed with a sleek, "hacker/infrastructure" aesthetic suitable for cloud and DevOps engineers.
- **Glassmorphism & Micro-animations**: Modern design touches including box shadows, scaling hovers, and animated scroll reveals.
- **Responsive Web Design**: Mobile-native using CSS Grid and Flexbox to ensure layout scales perfectly onto smartphones and tablets.
- **Scroll Snapping**: Clean, presentation-style scrolling that snaps focus onto the relevant viewport sections.
- **Iconography Integration**: Seamless use of lightweight Boxicons for social links, skills visualization, and contact cards.

## 🛠️ Technology Stack

- **HTML5**: Semantic tags ensuring SEO readability and accessibility standard compliance.
- **CSS3 (Vanilla)**: Raw styling using custom CSS variables (CSS Custom Properties). Includes specific keyframes and scroll-behavior functionalities.
- **JavaScript (Vanilla)**: Features `IntersectionObserver` implementations to trigger "fade-and-slide" show animations gracefully as the user scrolls.

## ☁️ Deployment Architecture

This website is designed for secure **Static Website Hosting** on Enterprise Cloud services:
- Built to be hosted primarily on **Azure Blob Storage**.
- Takes advantage of Azure's `$web` public-read container configuration for minimal-latency delivery.
- Prepared for native integration with **Azure CDN** (Content Delivery Network) or Front Door to serve traffic effectively over strict HTTPS.

## 📁 Repository Structure

```text
├── index.html       # The single entry point covering all sections (Hero, Skills, Projects, etc)
├── css/
│   └── style.css    # Central styling containing variables, general layout, and media query breakpoints
├── js/
│   └── main.js      # Core logic handling Intersection Observer for scroll animations
└── assets/
    └── images/      # Contains project previews, profile photos, and required graphic assets
```

## 💻 Running it Locally

Since this is purely static, no dependencies, servers, or build tools (like `npm` or `composer`) are required.

1. Clone this repository to your local machine.
2. Open `index.html` directly in your favorite modern browser (Chrome, Edge, Firefox, Safari).

---
*Created by Aidan Andrew Daniel — Aspiring Infrastructure, Network & Cloud Engineer.*
