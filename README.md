# Pasindu Mihikalpa - Personal Portfolio

A modern, responsive personal portfolio website built to showcase my projects, skills, and experience in Business Intelligence, Data Science, and Software Development.

🔗 **Live Demo:** [https://pasindumihikalpa.dev/](https://pasindumihikalpa.dev/)

## 🚀 Tech Stack

* **Frontend:** React.js + Vite
* **Styling:** CSS / Bootstrap (Davis Theme)
* **Email Service:** EmailJS (for Contact Form)
* **Deployment:** GitHub Pages

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
