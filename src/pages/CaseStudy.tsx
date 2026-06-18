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
// CASE STUDY DATA - WITH IMPORTED IMAGES
// ============================================================================
const caseStudies = {
  // 1. Web Development
  1: {
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
    results: [
      "40% reduction in delivery delays",
      "25% decrease in fuel costs",
      "60% improvement in dispatch efficiency",
      "Real-time visibility across 500+ vehicles"
    ],
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
  2: {
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
    results: [
      "35% increase in brand recognition",
      "45% growth in qualified leads",
      "Enhanced brand perception among enterprise clients",
      "Successful talent acquisition with 30% increase in applications"
    ],
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
  3: {
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
    results: [
      "LEED Gold Certification",
      "30% reduction in energy consumption",
      "Featured in Architecture & Design Magazine",
      "Completed within budget and ahead of schedule"
    ],
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
  4: {
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
    results: [
      "52% increase in conversion rate",
      "38% reduction in cart abandonment",
      "42% increase in mobile sales",
      "Improved user satisfaction score from 3.2 to 4.8/5"
    ],
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
  5: {
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
    results: [
      "40% reduction in marketing production costs",
      "60% faster time-to-market for product launches",
      "Enhanced visual content quality",
      "Consistent brand visuals across all channels"
    ],
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
  6: {
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
    results: [
      "150% increase in follower growth",
      "200% increase in engagement rate",
      "3.2M+ impressions across platforms",
      "87% average completion rate"
    ],
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
  7: {
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
    results: [
      "60% increase in user engagement",
      "45% increase in lead generation",
      "35% reduction in bounce rate",
      "Improved brand perception and credibility"
    ],
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
  8: {
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
    results: [
      "40% increase in employee satisfaction",
      "25% improvement in productivity",
      "LEED Silver Certification",
      "Featured in Office Design Magazine"
    ],
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

        {/* ========== RESULTS ========== */}
        <section className="py-16 px-4 sm:px-6 border-t border-white/5">
          <div className="container mx-auto max-w-5xl">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold">Results</h2>
              <p className="text-white/50 mt-2">Measurable impact and achievements</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {study.results.map((result, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-[#161616] rounded-2xl p-6 border border-white/5 hover:border-lime-400/20 transition-all text-center"
                >
                  <div className="text-4xl mb-2">✅</div>
                  <p className="text-white font-medium">{result}</p>
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