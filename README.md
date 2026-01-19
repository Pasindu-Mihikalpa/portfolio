# Pasindu Mihikalpa - Personal Portfolio

A modern, responsive personal portfolio website built to showcase my projects, skills, and experience in Business Intelligence, Data Science, and Software Development.

🔗 **Live Demo:** [https://pasindumihikalpa.dev/](https://pasindumihikalpa.dev/)

## 🚀 Tech Stack

* **Frontend:** React.js + Vite
* **Styling:** Tailwind CSS v4
* **Email Service:** EmailJS (for Contact Form)
* **Deployment:** GitHub Pages / Vercel / Netlify

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# The site will be available at http://localhost:5173
```

## 📦 Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Import repository to Vercel
3. Vercel will auto-detect Vite and deploy
4. Custom domain: Add in Vercel project settings

### Deploy to Netlify
1. Push code to GitHub
2. Import repository to Netlify
3. Build settings auto-configured via `netlify.toml`
4. Custom domain: Add in Netlify site settings

### Deploy to GitHub Pages
1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to main branch - automatic deployment via workflow

## 📨 EmailJS Integration

The "Contact Me" form on this portfolio is powered by **EmailJS**, allowing users to send emails directly from the frontend without a backend server.

### How it Works:
1.  The form captures the User's Name, Email, Subject, and Message.
2.  **EmailJS** processes the data and sends it to my personal email inbox.
3.  An auto-reply is optionally sent back to the user confirming receipt.

### Configuration:
To run this locally, you will need your own EmailJS credentials. Create a `.env` file in the root directory and add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## ✨ Features

- **Single-Page Navigation:** Smooth scroll navigation with active section highlighting
- **Responsive Design:** Mobile-first design with hamburger menu
- **SEO Optimized:** Comprehensive meta tags for social sharing
- **Fast Performance:** Code splitting and optimized bundle sizes
- **Modern UI:** Glassmorphism effects and smooth animations
- **Contact Form:** Integrated EmailJS for direct communication

## 📄 License

This project is open source and available for personal use.
