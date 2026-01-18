import { 
  Github, 
  ExternalLink, 
  Utensils, 
  ShoppingBag, 
  Layout, 
  BarChart2, 
  Smartphone, 
  Home 
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
    title: "E-Commerce Dashboard",
    category: "React & Tailwind",
    mainIcon: <ShoppingBag size={40} className="mb-4 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop",
    links: [
      { icon: <Github size={20} />, url: "#" }
    ]
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web Development",
    mainIcon: <Layout size={40} className="mb-4 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=400&auto=format&fit=crop",
    links: [
      { icon: <Github size={20} />, url: "#" }
    ]
  },
  {
    id: 4,
    title: "Data Visualization",
    category: "Python & Pandas",
    mainIcon: <BarChart2 size={40} className="mb-4 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop",
    links: [
      { icon: <ExternalLink size={20} />, url: "#" }
    ]
  },
  {
    id: 5,
    title: "Mobile Banking App",
    category: "UI/UX Design",
    mainIcon: <Smartphone size={40} className="mb-4 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&auto=format&fit=crop",
    links: [] 
  },
  {
    id: 6,
    title: "Smart Home System",
    category: "IoT Project",
    mainIcon: <Home size={40} className="mb-4 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=400&auto=format&fit=crop",
    links: [
      { icon: <Github size={20} />, url: "#" },
      { icon: <ExternalLink size={20} />, url: "#" }
    ]
  },
];
