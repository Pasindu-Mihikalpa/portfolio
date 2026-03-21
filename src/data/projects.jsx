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
  BookOpen
} from 'lucide-react';

export const projectsData = [
  {
    id: 1,
    title: "UniEats",
    category: "MERN Stack Web App",
    mainIcon: <Utensils size={40} className="mb-4 text-cyan-400" />, 
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=480&auto=format&fit=crop",
    links: [
      { icon: <Github size={20} />, url: "https://github.com" },
      { icon: <ExternalLink size={20} />, url: "https://linkedin.com" }
    ]
  },
  
  {
    id: 2,
    title: "Portfolio Website",
    category: "Web Development",
    mainIcon: <Layout size={40} className="mb-4 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=400&auto=format&fit=crop",
    links: [
      { icon: <Github size={20} />, url: "#" }
    ]
  },
  
  {
    id: 7,
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
  {
    id: 8,
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
  }
 
  
  // ==================== NEW PROJECT ====================
 
  // =====================================================
];