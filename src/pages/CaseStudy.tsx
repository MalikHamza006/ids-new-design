import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
// ✅ CORRECTED IMPORTS
import ArchitectureInteriorDesign from '../assets/architectureinteriordesign.png';
import BrandingIdentity from '../assets/brandingidentity.png';
import SocialMediaContent from '../assets/socialmediacontent.png';
import UIUXProductDesign from '../assets/uiuxproductdesign.png';
import Visualization3DRendering from '../assets/visualization3drendering.png';
import WebDevelopmentDesign from '../assets/webdevelopmentdesign.png';

// ✅ IMPORT REAL PROJECT IMAGES
import shippingfullfilment from '../assets/shippingfullfilment.jpg';
import publicshop from '../assets/publicshop.jpg';
import poseai from '../assets/poseai.jpg';
import bakery from '../assets/bakery.jpeg';

import Footer from '../components/Footer';

// ============================================================================
// ANIMATED COMPONENTS
// ============================================================================

const AnimatedSection = ({ children, delay = 0, className = "" }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const MagneticButton = ({ children, className = "", href = "#", onClick }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3;
    const y = (clientY - (top + height / 2)) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      className={className}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
};

// ============================================================================
// CASE STUDY DATA - WITH REAL PROJECTS
// ============================================================================
const caseStudies = {
  // ============================================================
  // REAL PROJECTS (4 Projects - 2x2 Grid)
  // ============================================================
  
  // Bakery Faize Nagina
'bakery-faize': {
  id: 'bakery-faize',

  title: "Bakery Faize Nagina",
  category: "Mobile App Development",

  client: "Bakery Faize Nagina",
  year: "2024",
  duration: "4 Months",

  role: "Full-Stack Mobile App Developer",

  overview:
    "Bakery Faize Nagina wanted to expand its business through a modern digital platform that would allow customers to browse products, place orders, choose between pickup or delivery, and complete secure online payments. The goal was to create a seamless mobile experience while simplifying order management for the bakery staff. To achieve this, a complete mobile application was developed for both Android and iOS, supported by a scalable backend and an intuitive admin management system.",

  challenge:
    "The bakery relied heavily on traditional order-taking methods, making it difficult to efficiently manage customer orders, inventory, and menu updates. Customers lacked a convenient way to order online, while the bakery team needed a centralized system to track orders, update products, and monitor inventory in real time. Ensuring inventory accuracy and preventing customers from ordering unavailable products was one of the key technical challenges.",

  solution:
    "A complete bakery management and ordering platform was developed using Flutter for cross-platform mobile support. The application allows customers to browse bakery items, add products to their cart, place orders for pickup or delivery, and complete transactions through secure payment gateways. A robust backend was implemented to manage products, users, orders, and inventory. Real-time inventory synchronization ensures that unavailable items cannot be purchased, while push notifications keep customers informed about order updates. An administrative dashboard enables bakery staff to manage products, pricing, inventory, and incoming orders efficiently.",

  results: [
    "Established a complete online ordering system for the bakery",
    "Improved customer convenience through mobile ordering",
    "Reduced manual order management and processing time",
    "Enabled real-time inventory tracking and product availability",
    "Streamlined menu management through a dedicated admin panel",
    "Enhanced customer engagement with push notifications and order updates"
  ],

  technologies: [
    "Flutter",
    "Dart",
    "Firebase",
    "REST API",
    "Node.js",
    "MongoDB",
    "Payment Gateway Integration",
    "Push Notifications"
  ],

  process: [
    {
      phase: "Requirement Analysis & Planning",
      description:
        "Collaborated with the client to understand business requirements, customer needs, ordering workflows, and inventory management processes."
    },

    {
      phase: "UI/UX Design",
      description:
        "Designed a clean and user-friendly mobile experience focused on easy navigation, product discovery, and a smooth checkout process."
    },

    {
      phase: "Frontend Development",
      description:
        "Developed a cross-platform Flutter application for Android and iOS, implementing responsive interfaces, product browsing, cart management, and user authentication."
    },

    {
      phase: "Backend Development",
      description:
        "Built a scalable backend system to handle products, orders, customer accounts, inventory updates, and payment processing."
    },

    {
      phase: "Real-Time Features Integration",
      description:
        "Implemented real-time inventory synchronization, push notifications, and order status tracking to improve operational efficiency and customer satisfaction."
    },

    {
      phase: "Testing & Deployment",
      description:
        "Performed end-to-end testing, optimized application performance, resolved edge cases, and prepared the platform for production deployment."
    }
  ],

  image: bakery,
},

  // 2. Pose AI
'pose-ai': {
  id: 'pose-ai',

  title: "Pose AI",
  category: "AI-Powered Mobile Application",

  client: "Pose AI",
  year: "2024",
  duration: "5 Months",

  role: "AI Developer & UI/UX Designer",

  overview:
    "Pose AI is an intelligent pose detection application designed to analyze human body movements in real time using artificial intelligence. Built with TensorFlow, the application detects key body points, posture alignment, and movement patterns through the device camera. The solution was created to support fitness training, yoga guidance, rehabilitation exercises, and educational activities by providing instant visual feedback and performance insights.",

  challenge:
    "Developing a reliable real-time pose detection system required balancing AI accuracy with mobile performance. The application needed to identify body joints and posture positions under varying lighting conditions and user environments while maintaining a smooth user experience. Another challenge was presenting complex AI-generated data in a way that was easy for users to understand and act upon.",

  solution:
    "A TensorFlow-powered pose detection engine was implemented to identify and track key body points in real time. The system analyzes posture, movement, and body alignment while providing immediate visual feedback to users. To complement the AI functionality, a modern and intuitive user interface was designed using UX Pilot, allowing users to start sessions effortlessly, monitor pose accuracy, review performance metrics, and track progress over time. The result is a smart and accessible application that combines advanced computer vision technology with a seamless user experience.",

  results: [
    "Real-time human pose detection and tracking",
    "Accurate identification of body joints and posture alignment",
    "Enhanced fitness and yoga training experience",
    "Improved user engagement through instant visual feedback",
    "Performance tracking and progress monitoring capabilities",
    "Optimized experience for mobile devices"
  ],

  technologies: [
    "TensorFlow",
    "Python",
    "Computer Vision",
    "Machine Learning",
    "Pose Estimation",
    "UX Pilot",
    "Mobile Application Development",
    "Real-Time Processing"
  ],

  keyFeatures: [
    "Real-Time Pose Detection",
    "Body Joint Tracking",
    "Posture Analysis",
    "Movement Recognition",
    "Live Visual Feedback",
    "Session Tracking",
    "Performance Analytics",
    "Progress Monitoring",
    "Fitness & Yoga Assistance",
    "Mobile Camera Integration"
  ],

  process: [
    {
      phase: "Research & Requirement Analysis",
      description:
        "Analyzed fitness, wellness, and posture-tracking use cases while evaluating suitable AI frameworks and pose estimation technologies."
    },

    {
      phase: "AI Model Development",
      description:
        "Developed and integrated a TensorFlow-based pose detection model capable of identifying key body points and analyzing posture in real time."
    },

    {
      phase: "Model Optimization",
      description:
        "Optimized the AI model for efficient performance on mobile devices while maintaining detection accuracy and responsiveness."
    },

    {
      phase: "UI/UX Design",
      description:
        "Designed a clean and intuitive user experience using UX Pilot, ensuring users could easily start sessions, view feedback, and monitor progress."
    },

    {
      phase: "Application Integration",
      description:
        "Connected the AI engine with the frontend interface, enabling seamless real-time camera processing and pose visualization."
    },

    {
      phase: "Testing & Deployment",
      description:
        "Conducted performance testing across different devices and environments to ensure reliability, accuracy, and a smooth user experience."
    }
  ],

  businessImpact: [
    "Provides AI-powered fitness and posture assistance",
    "Enables real-time movement analysis without specialized hardware",
    "Supports health, fitness, and educational use cases",
    "Improves user engagement through interactive AI feedback",
    "Creates opportunities for scalable wellness applications"
  ],

  image: poseai,
},
// 3. Bakery Website
'public-shop': {
  id: 'public-shop',

  title: "Bakery Website",
  category: "Web Application Development",

  client: "Bakery Faize Nagina",
  year: "2023",
  duration: "6 Months",

  role: "Full-Stack Web Developer",

  overview:
    "The Bakery Website was developed to establish a strong online presence for Bakery Faize Nagina while providing customers with a convenient way to browse products and place orders online. The platform consists of customer-facing pages and a powerful administrative dashboard, allowing the bakery team to manage products, orders, pricing, and business operations from a centralized system.",

  challenge:
    "The bakery lacked a modern digital platform that could effectively showcase products and support online ordering. Manual product management and order tracking created operational inefficiencies, while customers needed a seamless experience across desktop and mobile devices. The challenge was to create a solution that balanced usability, performance, and business management capabilities.",

  solution:
    "A responsive full-stack web application was developed featuring modern public-facing pages and a comprehensive admin management system. Customers can browse bakery products, add items to their cart, complete online purchases, and contact the bakery directly through the platform. The administrative dashboard enables staff to manage products, update pricing, monitor customer orders, generate sales reports, and oversee day-to-day operations from a single interface.",

  results: [
    "Established a professional online presence for the bakery",
    "Enabled online product browsing and ordering",
    "Simplified product and order management processes",
    "Improved customer accessibility across devices",
    "Centralized business operations through an admin dashboard",
    "Enhanced operational efficiency with digital workflows"
  ],

  technologies: [
    "React",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST API",
    "Tailwind CSS",
    "Responsive Web Design"
  ],

  keyFeatures: [
    "Responsive Website Design",
    "Product Catalog Management",
    "Shopping Cart & Checkout",
    "Online Ordering System",
    "Contact & Inquiry Forms",
    "Admin Dashboard",
    "Order Management",
    "Product & Pricing Management",
    "Sales Reporting",
    "Customer Data Management"
  ],

  process: [
    {
      phase: "Business Analysis & Planning",
      description:
        "Collaborated with the client to understand business operations, customer requirements, and administrative workflows."
    },

    {
      phase: "UI/UX Design",
      description:
        "Designed a modern and responsive user experience optimized for both desktop and mobile users."
    },

    {
      phase: "Frontend Development",
      description:
        "Developed customer-facing pages including the homepage, product catalog, shopping cart, checkout process, and contact pages."
    },

    {
      phase: "Backend Development",
      description:
        "Built secure backend services to manage products, customer orders, reporting systems, and administrative functions."
    },

    {
      phase: "Admin Panel Development",
      description:
        "Created a centralized dashboard enabling bakery staff to manage products, pricing, inventory, and sales activities efficiently."
    },

    {
      phase: "Testing & Deployment",
      description:
        "Conducted comprehensive testing across browsers and devices, optimized performance, and deployed the platform for production use."
    }
  ],

  businessImpact: [
    "Expanded bakery operations into digital sales channels",
    "Improved customer purchasing convenience",
    "Reduced manual administrative workload",
    "Provided centralized business management tools",
    "Strengthened the bakery's online brand presence",
    "Created a scalable foundation for future growth"
  ],

  image: publicshop,
},

 // 4. Lahore Plastic
'lahore-plastic': {
  id: 'lahore-plastic',

  title: "Shipping & Fulfillment Information Page",
  category: "Web Design & Development",

  client: "Lahore Plastic",
  year: "2024",
  duration: "3 Months",

  role: "UI/UX Designer & Web Developer",

  overview:
    "Lahore Plastic required a dedicated Shipping & Fulfillment Information Page to improve transparency, answer common customer questions, and strengthen buyer confidence. The page was designed to clearly explain order processing timelines, fulfillment methods, packaging standards, shipping coverage, and customer support options. By combining clear content structure with a responsive user experience, the solution became an important trust-building component for both B2C and B2B customers.",

  challenge:
    "Customers frequently had questions regarding shipping timelines, fulfillment methods, delivery coverage, and packaging standards. The company needed a centralized information hub that could communicate logistics processes clearly while maintaining brand credibility, supporting sustainability initiatives, and meeting marketplace expectations such as Amazon FBA and FBM requirements.",

  solution:
    "A dedicated Shipping & Fulfillment Information Page was designed and developed with a strong focus on clarity, accessibility, and mobile responsiveness. The page provides detailed information about order processing, shipping methods, packaging standards, delivery destinations, and customer support. Mobile-first enhancements such as collapsible content sections, optimized touch interactions, and a sticky support call-to-action ensure a seamless experience across all devices.",

  results: [
    "Improved transparency around shipping and fulfillment operations",
    "Reduced customer uncertainty regarding order processing",
    "Enhanced buyer trust and confidence",
    "Supported Amazon FBA and FBM fulfillment communication",
    "Strengthened brand credibility through clear logistics information",
    "Improved mobile accessibility and user experience"
  ],

  technologies: [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Responsive Web Design",
    "Figma",
    "UI/UX Design"
  ],

  keyFeatures: [
    "Order Processing Timeline Information",
    "Amazon FBA Fulfillment Details",
    "Amazon FBM Fulfillment Details",
    "Shipping Coverage Information",
    "Packaging & Sustainability Section",
    "Mobile-Optimized Layout",
    "Collapsible Information Sections",
    "Sticky Contact Support CTA",
    "Customer Support Integration",
    "Trust-Building Content Structure"
  ],

  process: [
    {
      phase: "Requirements Discovery",
      description:
        "Collaborated with stakeholders to identify common customer concerns related to shipping, fulfillment, and order management."
    },

    {
      phase: "Content Architecture",
      description:
        "Structured information into clearly defined sections covering order processing, shipping methods, packaging standards, destinations, and customer support."
    },

    {
      phase: "UI/UX Design",
      description:
        "Designed an intuitive and user-friendly interface focused on readability, accessibility, and customer trust."
    },

    {
      phase: "Responsive Development",
      description:
        "Developed a fully responsive page optimized for desktop, tablet, and mobile devices with smooth navigation and accessibility features."
    },

    {
      phase: "Mobile Experience Optimization",
      description:
        "Implemented collapsible sections, larger touch targets, and a sticky support button to improve usability on smaller screens."
    },

    {
      phase: "Testing & Deployment",
      description:
        "Conducted cross-device testing, performance optimization, and final deployment to ensure a seamless user experience."
    }
  ],

  businessImpact: [
    "Built customer trust through transparent shipping information",
    "Reduced repetitive fulfillment-related inquiries",
    "Supported compliance with Amazon fulfillment standards",
    "Strengthened sustainability messaging through packaging information",
    "Improved customer confidence during purchasing decisions",
    "Enhanced overall website user experience"
  ],

  image: shippingfullfilment,
},

  // ============================================================
  // ORIGINAL CASE STUDIES (Keep these as well)
  // ============================================================
  
  // 1. Web Development
  '1': {
    id: 1,
    title: "Smart Logistics Dashboard",
    category: "Web Development",
    client: "TechLogistics Inc.",
    year: "2024",
    duration: "3 Months",
    role: "Lead Developer & UX Designer",
    overview: "A comprehensive real-time fleet management platform designed to optimize logistics operations for a growing transportation company. The system provides live GPS tracking, intelligent route optimization, and automated dispatch management.",
    challenge: "The client was struggling with inefficient route planning, delayed deliveries, and lack of real-time visibility into their fleet operations. Manual dispatch processes were causing delays and increasing operational costs.",
    solution: "We built a cloud-native platform integrating GPS tracking, machine learning for route optimization, and an intuitive dashboard for fleet managers. The system automates dispatch, provides real-time alerts, and offers predictive analytics for maintenance scheduling.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "WebSocket", "Google Maps API", "Docker", "AWS"],
    process: [
      {
        phase: "Discovery & Research",
        description: "Conducted extensive interviews with fleet managers, drivers, and dispatchers to understand pain points and workflow inefficiencies."
      },
      {
        phase: "Design & Prototyping",
        description: "Created wireframes and interactive prototypes for the dashboard, mobile app, and admin panel, iterating based on user feedback."
      },
      {
        phase: "Development",
        description: "Built the platform using React for the frontend, Node.js for the backend, with real-time WebSocket connections for live tracking."
      },
      {
        phase: "Testing & Deployment",
        description: "Implemented comprehensive testing, including unit tests, integration tests, and user acceptance testing before deployment."
      },
      {
        phase: "Launch & Support",
        description: "Successfully deployed the platform with 24/7 monitoring and ongoing support for continuous improvement."
      }
    ],
    image: WebDevelopmentDesign,
  },

  // 2. Branding & Identity
  '2': {
    id: 2,
    title: "Modern Corporate Identity",
    category: "Branding & Identity",
    client: "InnovateTech Solutions",
    year: "2024",
    duration: "2 Months",
    role: "Lead Brand Strategist & Designer",
    overview: "A complete brand transformation for a technology company looking to reposition itself as a market leader in innovative solutions.",
    challenge: "The client had an outdated brand identity that no longer reflected their innovative capabilities. They needed a fresh, modern brand that would resonate with enterprise clients and attract top talent.",
    solution: "We developed a comprehensive brand strategy including a new logo, color palette, typography system, and brand guidelines. The new identity reflects innovation, trust, and forward-thinking.",
    technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy", "Typography", "Color Theory"],
    process: [
      {
        phase: "Discovery & Research",
        description: "Analyzed the market, competitors, and conducted stakeholder interviews to understand brand positioning."
      },
      {
        phase: "Strategy & Ideation",
        description: "Developed brand positioning, messaging framework, and creative direction based on research insights."
      },
      {
        phase: "Design Development",
        description: "Created logo concepts, color palettes, typography systems, and visual identity elements."
      },
      {
        phase: "Brand Guidelines",
        description: "Developed comprehensive brand guidelines covering all aspects of the new identity."
      },
      {
        phase: "Implementation",
        description: "Rolled out the new brand across all touchpoints including website, marketing materials, and internal communications."
      }
    ],
    image: BrandingIdentity,
  },

  // 3. Architecture & Interior
  '3': {
    id: 3,
    title: "Luxury Villa Design",
    category: "Architecture & Interior",
    client: "Private Client",
    year: "2024",
    duration: "4 Months",
    role: "Lead Architect & Interior Designer",
    overview: "A contemporary luxury villa design that seamlessly blends modern architecture with interior elegance, creating a harmonious living space.",
    challenge: "The client wanted a modern villa that maximized natural light, offered panoramic views, and incorporated sustainable design principles while maintaining luxury aesthetics.",
    solution: "Designed an open-concept villa with floor-to-ceiling windows, natural materials, and sustainable features. The interior design focuses on minimalism with warm, organic elements.",
    technologies: ["AutoCAD", "Revit", "3ds Max", "V-Ray", "Sustainable Design"],
    process: [
      {
        phase: "Site Analysis",
        description: "Conducted thorough site analysis considering topography, climate, and views."
      },
      {
        phase: "Concept Design",
        description: "Developed multiple design concepts exploring different architectural styles and spatial arrangements."
      },
      {
        phase: "Detailed Design",
        description: "Created detailed architectural drawings, interior design plans, and material selections."
      },
      {
        phase: "Construction Documentation",
        description: "Prepared comprehensive construction documents and coordinated with engineering consultants."
      },
      {
        phase: "Construction & Handover",
        description: "Oversaw construction, ensuring quality and design integrity, and delivered the completed villa."
      }
    ],
    image: ArchitectureInteriorDesign,
  },

  // 4. UI/UX Design
  '4': {
    id: 4,
    title: "E-Commerce Platform",
    category: "UI/UX Design",
    client: "ShopWave Retail",
    year: "2024",
    duration: "2.5 Months",
    role: "Lead UX/UI Designer",
    overview: "A modern, intuitive e-commerce platform designed to provide a seamless shopping experience across all devices.",
    challenge: "The client's existing platform had poor conversion rates, complex navigation, and lacked mobile optimization. They needed a complete redesign to improve user experience and drive sales.",
    solution: "We redesigned the platform with a mobile-first approach, simplified navigation, and a streamlined checkout process. The design focuses on visual hierarchy and user-friendly interactions.",
    technologies: ["Figma", "Sketch", "User Testing", "Wireframing", "Prototyping"],
    process: [
      {
        phase: "User Research",
        description: "Conducted user interviews, surveys, and analyzed user behavior data to identify pain points."
      },
      {
        phase: "Information Architecture",
        description: "Restructured site navigation and content organization for better user flow."
      },
      {
        phase: "Wireframing",
        description: "Created low-fidelity wireframes to test layout and functionality concepts."
      },
      {
        phase: "High-Fidelity Design",
        description: "Developed polished UI designs with attention to detail and brand consistency."
      },
      {
        phase: "User Testing & Refinement",
        description: "Conducted usability testing and refined designs based on user feedback."
      }
    ],
    image: UIUXProductDesign,
  },

  // 5. Visualization & 3D
  '5': {
    id: 5,
    title: "Product Visualization",
    category: "Visualization & 3D",
    client: "Luxury Brands International",
    year: "2024",
    duration: "1.5 Months",
    role: "Lead 3D Artist",
    overview: "Photorealistic 3D product renderings and animations for marketing and product presentations.",
    challenge: "The client needed high-quality visual content for their luxury product line but couldn't afford costly photoshoots for every product variant.",
    solution: "We created a library of photorealistic 3D product models and renderings that could be used across marketing materials, websites, and presentations.",
    technologies: ["Blender", "Maya", "V-Ray", "Substance Painter", "Adobe Photoshop"],
    process: [
      {
        phase: "Product Analysis",
        description: "Studied product specifications, materials, and desired visual outcomes."
      },
      {
        phase: "3D Modeling",
        description: "Created detailed 3D models with precise geometry and material properties."
      },
      {
        phase: "Texturing & Lighting",
        description: "Applied realistic textures and lighting to achieve photorealistic quality."
      },
      {
        phase: "Rendering & Animation",
        description: "Produced high-resolution renders and animations for various use cases."
      },
      {
        phase: "Post-Production",
        description: "Enhanced final renders with color correction and compositing."
      }
    ],
    image: Visualization3DRendering,
  },

  // 6. Social Media Handling
  '6': {
    id: 6,
    title: "Social Media Campaign",
    category: "Social Media Handling",
    client: "Digital Growth Agency",
    year: "2024",
    duration: "2 Months",
    role: "Lead Social Media Strategist",
    overview: "A comprehensive social media strategy and content creation campaign for brand awareness and audience engagement.",
    challenge: "The client needed to build a strong social media presence but lacked a cohesive strategy and compelling content.",
    solution: "We developed a comprehensive social media strategy including content calendars, visual assets, and engagement tactics tailored to their target audience.",
    technologies: ["Content Strategy", "Social Media Management", "Canva", "Premiere Pro", "Analytics"],
    process: [
      {
        phase: "Audience Research",
        description: "Analyzed target audience behavior, preferences, and content consumption patterns."
      },
      {
        phase: "Strategy Development",
        description: "Created a comprehensive social media strategy with clear objectives and KPIs."
      },
      {
        phase: "Content Creation",
        description: "Produced high-quality visual content, including graphics, videos, and copywriting."
      },
      {
        phase: "Campaign Execution",
        description: "Rolled out the campaign across multiple platforms with consistent scheduling."
      },
      {
        phase: "Analysis & Optimization",
        description: "Monitored performance metrics and optimized content based on insights."
      }
    ],
    image: SocialMediaContent,
  },

  // 7. Web Designing
  '7': {
    id: 7,
    title: "Corporate Website Design",
    category: "Web Designing",
    client: "Global Enterprise Solutions",
    year: "2024",
    duration: "2 Months",
    role: "Lead Web Designer",
    overview: "A modern, responsive corporate website design that delivers an exceptional user experience across all devices while reflecting the brand's professional identity.",
    challenge: "The client's existing website was outdated, not mobile-responsive, and failed to effectively communicate their brand value. They needed a complete redesign to improve user engagement and lead generation.",
    solution: "We designed a clean, modern website with a focus on visual hierarchy, intuitive navigation, and responsive design. The new site effectively communicates the brand's expertise and services.",
    technologies: ["Figma", "Adobe XD", "Responsive Design", "Wireframing", "UI Design"],
    process: [
      {
        phase: "Discovery & Research",
        description: "Analyzed the brand, competitors, and target audience to understand design requirements."
      },
      {
        phase: "Wireframing",
        description: "Created wireframes to establish layout and information architecture."
      },
      {
        phase: "Visual Design",
        description: "Developed high-fidelity designs with attention to brand consistency and user experience."
      },
      {
        phase: "Responsive Design",
        description: "Ensured seamless experience across all devices and screen sizes."
      },
      {
        phase: "Design Handoff",
        description: "Delivered comprehensive design files and style guides for development."
      }
    ],
    image: WebDevelopmentDesign,
  },

  // 8. Architecture & Interior (Office Design)
  '8': {
    id: 8,
    title: "Interior Office Design",
    category: "Architecture & Interior",
    client: "TechHub Co-working",
    year: "2024",
    duration: "3 Months",
    role: "Lead Interior Designer",
    overview: "A modern office interior design focused on creating a productive and inspiring workspace that fosters collaboration and creativity.",
    challenge: "The client needed to transform a traditional office space into a modern, collaborative environment that would attract and retain top talent.",
    solution: "We designed an open-plan office with collaborative zones, quiet areas, and biophilic design elements. The space incorporates natural light, sustainable materials, and flexible workstations.",
    technologies: ["AutoCAD", "SketchUp", "Enscape", "Biophilic Design", "Sustainable Materials"],
    process: [
      {
        phase: "Space Analysis",
        description: "Analyzed the existing space and conducted employee surveys to understand needs."
      },
      {
        phase: "Concept Design",
        description: "Developed design concepts focusing on collaboration and well-being."
      },
      {
        phase: "Detailed Design",
        description: "Created detailed plans, 3D visualizations, and material selections."
      },
      {
        phase: "Construction",
        description: "Oversaw construction, ensuring design integrity and quality."
      },
      {
        phase: "Furnishing & Handover",
        description: "Selected and installed furniture, completed the fit-out, and delivered the space."
      }
    ],
    image: ArchitectureInteriorDesign,
  }
};

// ============================================================================
// CASE STUDY PAGE COMPONENT
// ============================================================================
const CaseStudy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [study, setStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const data = caseStudies[id];
      if (data) {
        setStudy(data);
      } else {
        navigate('/projects');
      }
      setLoading(false);
    }, 300);
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="bg-[#0D0D0D] min-h-screen">
        <Navigation />
        <div className="flex items-center justify-center h-screen">
          <div className="text-white/40">Loading case study...</div>
        </div>
      </div>
    );
  }

  if (!study) {
    return (
      <div className="bg-[#0D0D0D] min-h-screen">
        <Navigation />
        <div className="flex items-center justify-center h-screen">
          <div className="text-white/40">Case study not found.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen overflow-x-hidden">
      <Navigation />

      <main>
        {/* ========== HERO SECTION ========== */}
        <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[#0D0D0D]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-lime-400/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container relative mx-auto max-w-5xl">
            <div className="mb-6">
              <button
                onClick={() => navigate('/projects')}
                className="text-lime-400 hover:text-lime-300 transition-colors flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </button>
            </div>

            <AnimatedSection>
              <span className="text-lime-400 text-sm font-mono tracking-wider uppercase">{study.category}</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2 mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text">
                {study.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-white/60 text-sm">
                <div>
                  <span className="text-white/40">Client:</span> {study.client}
                </div>
                <div>
                  <span className="text-white/40">Year:</span> {study.year}
                </div>
                <div>
                  <span className="text-white/40">Duration:</span> {study.duration}
                </div>
                <div>
                  <span className="text-white/40">Role:</span> {study.role}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ========== HERO IMAGE ========== */}
        <section className="px-4 sm:px-6 pb-16">
          <div className="container mx-auto max-w-5xl">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={study.image} 
                alt={study.title} 
                className="w-full h-[400px] sm:h-[500px] object-cover"
                onError={(e) => {
                  console.error(`Failed to load image for ${study.title}`);
                  e.target.src = 'https://via.placeholder.com/1200x500/161616/333333?text=Image+Not+Found';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* ========== OVERVIEW ========== */}
        <section className="py-12 px-4 sm:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <AnimatedSection>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Overview</h2>
                  <p className="text-white/60 leading-relaxed text-lg">{study.overview}</p>
                </AnimatedSection>
              </div>
              <div>
                <AnimatedSection delay={0.2}>
                  <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 text-xs font-medium rounded-full bg-[#161616] border border-white/10 text-lime-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* ========== CHALLENGE & SOLUTION ========== */}
        <section className="py-16 px-4 sm:px-6 border-t border-white/5">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <AnimatedSection>
                <h3 className="text-2xl font-bold mb-4 text-red-400">Challenge</h3>
                <p className="text-white/60 leading-relaxed">{study.challenge}</p>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <h3 className="text-2xl font-bold mb-4 text-lime-400">Solution</h3>
                <p className="text-white/60 leading-relaxed">{study.solution}</p>
              </AnimatedSection>
            </div>
          </div>
        </section>

      

        {/* ========== PROCESS ========== */}
        <section className="py-16 px-4 sm:px-6 border-t border-white/5">
          <div className="container mx-auto max-w-5xl">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold">Our Process</h2>
              <p className="text-white/50 mt-2">From idea to deployment</p>
            </AnimatedSection>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-lime-400/20" />
              
              {study.process.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-4 mb-12 ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className={`bg-[#161616] rounded-2xl p-6 border border-white/5 hover:border-lime-400/20 transition-all ${
                      idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-lime-400 text-sm font-mono">0{idx + 1}</span>
                        <h4 className="text-xl font-semibold">{step.phase}</h4>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-8 md:w-16 flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-lime-400 border-4 border-[#0D0D0D] z-10" />
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== CTA ========== */}
        <section className="py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#161616] via-[#1a1a1a] to-[#0D0D0D] border border-white/10 p-12 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-lime-400/10 via-transparent to-lime-400/10" />
              <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Build Your <span className="text-lime-400">Next Project</span>?</h3>
                <p className="text-white/60 max-w-xl mx-auto mb-8">
                  Let's create something amazing together. Get in touch to discuss your project.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <MagneticButton
                    href="#"
                    className="px-8 py-3 rounded-full bg-lime-400 text-black font-semibold hover:bg-lime-500 transition-all duration-300 shadow-xl shadow-lime-400/30"
                  >
                    Start Your Project
                  </MagneticButton>
                  <Link to="/contact">
                    <MagneticButton className="px-8 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                      Contact Us
                    </MagneticButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>

      <style>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0D0D0D;
        }
        ::-webkit-scrollbar-thumb {
          background: #2a2a2a;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #a3e635;
        }
      `}</style>
    </div>
  );
};

export default CaseStudy;