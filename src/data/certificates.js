/* ========================================================================
  📜 INSTRUCTIONS: HOW TO UPDATE CERTIFICATE DATA
  ========================================================================
  1. EDITING CERTIFICATES:
     - Modify the objects inside 'certificatesData' array.
     - Update title, issuer, date, description, credentialUrl, image, and type.
  
  2. ADDING NEW CERTIFICATES:
     - Copy the template below.
     - Paste it at the TOP of the array (to show newest first).
     - Update all fields with your certificate information.
  
  3. REMOVING CERTIFICATES:
     - Simply delete the entire object { ... }, from the array.
  
  4. FILE TYPES:
     - type: "pdf" - For PDF certificates
     - type: "image" - For PNG/JPEG certificates
     - Store files in public/certificates/ directory
     - Reference them as: "/certificates/your-cert-name.pdf"
  
  5. IMAGES:
     - Use preview images for the certificate thumbnail
     - Recommended size: 400x300 pixels
     - For placeholder: https://via.placeholder.com/400x300/COLOR/FFFFFF?text=Your+Text
  
  --- 📋 COPY THIS TEMPLATE ---
  {
    id: 1,
    title: "Certificate Title",
    issuer: "Issuing Organization",
    date: "Month Year",
    description: "Brief description of what this certificate represents",
    credentialUrl: "/certificates/your-certificate.pdf",
    image: "https://via.placeholder.com/400x300/1e3a5f/FFFFFF?text=Certificate+Preview",
    type: "pdf" // or "image"
  },
  ========================================================================
*/

export const certificatesData = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Coursera",
    date: "December 2024",
    description: "Comprehensive certification covering front-end and back-end web development with React, Node.js, and MongoDB.",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/example1",
    image: "https://via.placeholder.com/400x300/22d3ee/FFFFFF?text=Full+Stack+Development",
    type: "pdf"
  },
  {
    id: 2,
    title: "Data Science with Python",
    issuer: "Udemy",
    date: "September 2024",
    description: "Advanced Python programming for data analysis, visualization, and machine learning applications.",
    credentialUrl: "https://www.udemy.com/certificate/example2",
    image: "https://via.placeholder.com/400x300/3b82f6/FFFFFF?text=Data+Science+Python",
    type: "image"
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "July 2024",
    description: "Foundational understanding of AWS Cloud, including core services, security, and cloud architecture.",
    credentialUrl: "https://aws.amazon.com/certification/example3",
    image: "https://via.placeholder.com/400x300/f59e0b/FFFFFF?text=AWS+Cloud",
    type: "pdf"
  },
  {
    id: 4,
    title: "Google Analytics Certification",
    issuer: "Google",
    date: "March 2024",
    description: "Expert-level understanding of Google Analytics, including data collection, configuration, and reporting.",
    credentialUrl: "https://analytics.google.com/analytics/academy/certificate/example4",
    image: "https://via.placeholder.com/400x300/10b981/FFFFFF?text=Google+Analytics",
    type: "image"
  },
  {
    id: 5,
    title: "Project Management Professional",
    issuer: "Microsoft",
    date: "January 2023",
    description: "Professional certification in project management methodologies, tools, and best practices.",
    credentialUrl: "https://www.microsoft.com/learn/certifications/example5",
    image: "https://via.placeholder.com/400x300/8b5cf6/FFFFFF?text=Project+Management",
    type: "pdf"
  },
  {
    id: 6,
    title: "Leadership Excellence Program",
    issuer: "LinkedIn Learning",
    date: "November 2022",
    description: "Comprehensive program focusing on leadership skills, team management, and organizational development.",
    credentialUrl: "https://www.linkedin.com/learning/certificates/example6",
    image: "https://via.placeholder.com/400x300/ec4899/FFFFFF?text=Leadership+Excellence",
    type: "image"
  }
];
