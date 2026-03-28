import { 
  Github, 
  ExternalLink, 
  Utensils, 
  ShoppingBag, 
  Layout, 
  BarChart2, 
  Smartphone, 
  Home,
  TrendingUp,
  BookOpen,
  Calculator
} from 'lucide-react';

export const projectsData = [

  //Project 1 "UniEats" 
  {
  id: 1,
  title: "UniEats",
  category: "MERN Stack Web Application",
  mainIcon: <Utensils size={40} className="mb-4 text-cyan-400" />,

  image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=480&auto=format&fit=crop",

  description: "UniEats is a smart, athlete-focused university cafeteria management system developed to optimize food ordering and nutritional tracking. The platform allows students to browse menus, place orders, and monitor calorie intake, while administrators efficiently manage meals, orders, and user data through a centralized dashboard.",

  features: [
    "Secure user authentication with JWT-based login",
    "Dynamic menu browsing with categorized food items",
    "Add-to-cart functionality with streamlined checkout process",
    "Real-time order tracking and status updates",
    "Personalized meal recommendations based on user preferences",
    "Calorie tracking and meal history for sports students",
    "Admin dashboard for managing menus, users, and orders",
    "Fully responsive UI optimized for mobile and desktop"
  ],

  techStack: [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "Tailwind CSS",
    "JWT Authentication",
    "Recharts (for analytics visualization)"
  ],

  role: "Full Stack Developer",
  status: "Completed",
  duration: "2025",

  impact: [
    "Reduced cafeteria waiting time through online pre-ordering",
    "Enhanced dietary awareness among sports students via calorie tracking",
    "Improved operational efficiency of cafeteria management",
    "Digitized and streamlined manual food ordering processes"
  ],

  links: [
    { icon: <Github size={20} />, url: "https://github.com/Chalitha-Aluwihare/university-cafeteria-nutrition-webapp.git" },
    { icon: <ExternalLink size={20} />, url: "https://youtu.be/98_fUvjxtWY?si=J6jp-pEIA_F3b78u" }
  ]
},
  
  //Project 2 "Portfolio Website" 
  {
    id: 2,
    title: "Portfolio Website",
    category: "Web Development",
    mainIcon: <Layout size={40} className="mb-4 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=400&auto=format&fit=crop",
    links: [
      { icon: <Github size={20} />, url: "https://github.com/Pasindu-Mihikalpa/portfolio.git" }
    ]
  },
  
  //Project 3 "Supply Chain Dashboard"
  {
    id: 3,
    title: "Supply Chain Dashboard",
    category: "Power BI Analytics",
    mainIcon: <TrendingUp size={40} className="mb-4 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop",
    description: "Interactive Power BI dashboard analyzing 37,873+ supply chain transactions with real-time KPIs, regional performance metrics, and ABC inventory analysis.",
    stats: {
      onTimeRate: "32.29%",
      avgDaysToShip: "3.96",
      totalOrders: "5K+"
    },
    technologies: ["Power BI", "DAX", "Data Modeling", "Star Schema", "ABC Analysis"],
    liveUrl: "https://app.powerbi.com/links/cjE53yyGcS?ctid=825c9671-d12b-4864-901e-fd41c394febf&pbi_source=linkShare",
    files: [
      {
        name: "Dashboard File",
        type: "Power BI (.pbix)",
        size: "4.2 MB",
        url: "https://github.com/Pasindu-Mihikalpa/Supply-Chain-Optimization/raw/main/dashboard/Supply_Chain_Dashboard.pbix"
      },
      {
        name: "Data Source",
        type: "CSV File",
        size: "2.1 MB",
        url: "https://github.com/Pasindu-Mihikalpa/Supply-Chain-Optimization/raw/main/data/Superstore.csv"
      }
    ],
    links: [
      {
        icon: <Github size={20} />,
        label: "View on GitHub",
        url: "https://github.com/Pasindu-Mihikalpa/Supply-Chain-Optimization"
      },
      {
        icon: <ExternalLink size={20} />,
        label: "Live Dashboard",
        url: "https://app.powerbi.com/links/cjE53yyGcS?ctid=825c9671-d12b-4864-901e-fd41c394febf&pbi_source=linkShare"
      }
    ]
  },
  
  //Project 4 "Intelligent Book Recommender System"
  {
    id: 4,
    title: "Intelligent Book Recommender System",
    category: "Machine Learning - Coming Soon",
    mainIcon: <BookOpen size={40} className="mb-4 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop",
    description: "A machine learning application that suggests books to users based on collaborative filtering and user rating history.",
    status: "Coming Soon",
    roadmap: [
      "Data Analysis on the Book-Crossing Dataset",
      "Building a Pivot Table (Users vs Books)",
      "Implementing Nearest Neighbors (KNN) algorithm",
      "Deploying the model using Streamlit"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Streamlit"],
    author: "Pasindu Mihikalpa",
    links: []
  },
  
  // Project 2 "CalcX (CalcStore)"
{
  id: 5,
  title: "CalcX (CalcStore)",
  category: "MERN Stack E-Commerce Platform",
  mainIcon: <Calculator size={40} className="mb-4 text-cyan-400" />,

  image: "https://images.unsplash.com/photo-1581091870622-2c3b0f7e3f52?q=80&w=480&auto=format&fit=crop",

  description: "CalcX is a full-stack e-commerce platform designed for selling calculators with automated order processing, real-time inventory management, and location-based delivery handling. The system transforms a manual business workflow into a scalable digital solution, reducing order processing time from 2 hours to under 5 minutes.",

  features: [
    "Product catalog with real-time stock availability",
    "User authentication with secure JWT sessions",
    "Shopping cart and optimized checkout flow",
    "Multiple payment methods (Online Card + Cash on Delivery)",
    "Location-based delivery fee calculation",
    "Admin dashboard for product, order, and inventory management",
    "Order status tracking (Pending → Approved → Shipped → Delivered)",
    "Automated email notifications for orders and delivery updates"
  ],

  techStack: [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "Tailwind CSS",
    "JWT Authentication",
    "Stripe API",
    "REST APIs"
  ],

  role: "Full Stack Developer (MERN)",
  status: "Ongoing",
  duration: "2026",

  links: [
    { icon: <Github size={20} />, url: "https://github.com/Pasindu-Mihikalpa/newCalculater-store-web-app.git" },
    //{ icon: <ExternalLink size={20} />, url: "/coming-soon" }
  ]
}
 
  
];