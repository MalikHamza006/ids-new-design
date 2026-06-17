import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
// Import your video
import video1 from '../assets/videos/video-1.mp4';
import Navigation from '../components/Navigation';
import ArchitectureInteriorDesign from '../assets/architectureinteriordesign.png';
import BrandingIdentity from '../assets/brandingidentity.png';
import SocialMediaContent from '../assets/socialmediacontent.png';
import UIUXProductDesign from '../assets/uiuxproductdesign.png';
import Visualization3DRendering from '../assets/visualization3drendering.png';
import WebDevelopmentDesign from '../assets/webdevelopmentdesign.png';
import Footer from '../components/Footer';

// ============================================================================
// REUSABLE COMPONENTS
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

const StaggerContainer = ({ children, className = "" }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.12, delayChildren: 0.2 }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const StaggerItem = ({ children, className = "" }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
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

const TechBadge = ({ children }) => {
  return (
    <motion.span
      whileHover={{ y: -4, scale: 1.08 }}
      transition={{ duration: 0.2 }}
      className="px-4 py-1.5 text-xs font-medium rounded-full bg-[#161616] border border-white/10 text-lime-400 hover:border-lime-400/50 hover:shadow-[0_0_15px_rgba(163,230,53,0.2)] transition-all duration-300 cursor-default backdrop-blur-sm"
    >
      {children}
    </motion.span>
  );
};

const MetricCard = ({ value, label, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      const target = parseInt(value.replace(/[^0-9]/g, ''));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  const displayValue = value.includes('M') ? `${count}M` : value.includes('K') ? `${count}K` : count;

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -12, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-lime-400/10 via-lime-400/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-[#161616]/60 backdrop-blur-md border border-white/10 rounded-2xl p-7 text-center hover:border-lime-400/40 transition-all duration-500 shadow-xl">
        <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent mb-2">
          {displayValue}{suffix}
        </h3>
        <p className="text-white/50 text-sm uppercase tracking-wider font-medium">{label}</p>
      </div>
    </motion.div>
  );
};

const CustomVideoPlayer = ({ src, aspectClass = "aspect-[9/16]", poster }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`relative group ${aspectClass} overflow-hidden rounded-3xl bg-black/60 shadow-2xl`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
        loop
        muted
        playsInline
        preload="metadata"
        loading="lazy"
      />
      <button
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-all duration-500 opacity-0 group-hover:opacity-100 focus:opacity-100 group-hover:backdrop-blur-md"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        <motion.div
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 rounded-full bg-lime-400 flex items-center justify-center shadow-2xl shadow-lime-400/40"
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-black">
              <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-black ml-1">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
          )}
        </motion.div>
      </button>
    </div>
  );
};

const FloatingCard = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className={`bg-[#161616]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  );
};

const TestimonialCard = ({ quote, author, role, image }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-[#161616] to-[#0D0D0D] border border-white/10 rounded-2xl p-8 shadow-xl"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-lime-400 fill-lime-400" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
      <p className="text-white/70 leading-relaxed mb-6 text-lg italic">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center text-black font-bold">
          {image || author[0]}
        </div>
        <div>
          <p className="font-semibold text-white">{author}</p>
          <p className="text-white/40 text-sm">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const RelatedProjectCard = ({ title, category, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl aspect-video mb-4">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <p className="text-lime-400 text-sm uppercase tracking-wider mb-1">{category}</p>
      <h3 className="text-xl font-semibold group-hover:text-lime-400 transition-colors">{title}</h3>
    </motion.div>
  );
};

// ============================================================================
// PROJECT CARD COMPONENT - Updated with Link to Case Study
// ============================================================================
const ProjectCard = ({ project, index }) => {
  return (
    <Link to={`/case-study/${project.id}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        whileHover={{ y: -8 }}
        className="group rounded-2xl overflow-hidden bg-[#161616] border border-white/10 hover:border-lime-400/40 transition-all duration-300 cursor-pointer"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            loading="lazy" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
            <div>
              <p className="text-lime-400 text-xs font-medium uppercase tracking-wider">{project.category}</p>
              <p className="text-white font-medium text-sm mt-1">{project.title}</p>
              <p className="text-lime-400 text-xs mt-1">View Case Study →</p>
            </div>
          </div>
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white/80">
              {project.category}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

// ============================================================================
// FILTER BUTTON COMPONENT
// ============================================================================
const FilterButton = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm rounded-full whitespace-nowrap transition-all ${
        isActive 
          ? "bg-lime-400 text-black font-semibold" 
          : "bg-[#161616] hover:bg-lime-400/10 border border-white/10 text-white/70 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
};

// ============================================================================
// SERVICE SECTION COMPONENT
// ============================================================================
const ServiceSection = ({ title, subtitle, description, image, features, index, imageLeft = true }) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
      index > 0 ? 'pt-20 border-t border-white/5' : ''
    }`}>
      {imageLeft ? (
        <>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img 
              src={image} 
              alt={title} 
              className="w-full h-[400px] object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <span className="text-lime-400 text-sm font-mono tracking-wider uppercase">{subtitle}</span>
            <h3 className="text-3xl sm:text-4xl font-bold">{title}</h3>
            <p className="text-white/60 leading-relaxed">{description}</p>
            <div className="space-y-2 pt-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-white/50">
                  <span className="text-lime-400 text-sm font-mono mt-1">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-lime-400 text-sm font-mono tracking-wider uppercase">{subtitle}</span>
            <h3 className="text-3xl sm:text-4xl font-bold">{title}</h3>
            <p className="text-white/60 leading-relaxed">{description}</p>
            <div className="space-y-2 pt-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-white/50">
                  <span className="text-lime-400 text-sm font-mono mt-1">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img 
              src={image} 
              alt={title} 
              className="w-full h-[400px] object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>
        </>
      )}
    </div>
  );
};

// ============================================================================
// SOCIAL MEDIA REEL CARD COMPONENT - UPDATED TO SUPPORT VIMEO
// ============================================================================
const SocialReelCard = ({ video, title, views, likes, index, isVimeo = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const iframeRef = useRef(null);

  // Extract Vimeo ID from URL
  const getVimeoId = (url) => {
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match ? match[1] : null;
  };

  const handlePlayPause = () => {
    if (isVimeo) {
      // For Vimeo, we'll use the iframe postMessage API or just reload the iframe
      const iframe = iframeRef.current;
      if (iframe) {
        if (isPlaying) {
          // Pause - reload iframe to stop video
          iframe.src = iframe.src;
        } else {
          // Play - reload with autoplay
          const vimeoId = getVimeoId(video);
          iframe.src = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&loop=1&muted=1&controls=0&portrait=0`;
        }
        setIsPlaying(!isPlaying);
      }
    } else {
      // For local videos
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    }
  };

  const vimeoId = isVimeo ? getVimeoId(video) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group rounded-2xl overflow-hidden bg-[#161616] border border-white/10 hover:border-lime-400/40 transition-all duration-300"
    >
      <div className="relative aspect-[9/16] overflow-hidden bg-black">
        {isVimeo && vimeoId ? (
          // Vimeo embed
          <iframe
            ref={iframeRef}
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=0&loop=1&muted=1&controls=0&portrait=0`}
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            title={title}
          />
        ) : (
          // Local video
          <video
            ref={videoRef}
            src={video}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loop
            muted
            playsInline
            preload="metadata"
          />
        )}
        
        {/* Overlay content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="w-full">
            <p className="text-white font-medium text-sm">{title}</p>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-white/50 text-xs">👁 {views}</span>
              <span className="text-white/50 text-xs">❤️ {likes}</span>
            </div>
          </div>
        </div>
        
        {/* Play button overlay */}
        <div 
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          onClick={handlePlayPause}
        >
          <div className="w-14 h-14 rounded-full bg-lime-400 flex items-center justify-center shadow-2xl shadow-lime-400/40 hover:scale-110 transition-transform">
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-black">
                <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-black ml-1">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        </div>
        
        {/* Reel badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white/80">
            📱 Reel
          </span>
        </div>
        
        {/* Vimeo badge */}
        {isVimeo && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-blue-500/60 backdrop-blur-sm border border-white/10 text-white/80">
              Vimeo
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// ============================================================================
// MAIN PROJECT DETAILS COMPONENT
// ============================================================================
const Projects = () => {
  const targetRef = useRef(null);
  const [filter, setFilter] = useState("All");
  const [animatedProjects, setAnimatedProjects] = useState([]);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // ============================================================
  // PROJECT IMAGES - High-quality authentic images
  // ============================================================
  
  const webDevImages = [
    WebDevelopmentDesign,
    WebDevelopmentDesign,
    WebDevelopmentDesign,
  ];

  const architectureImages = [
    ArchitectureInteriorDesign,
    ArchitectureInteriorDesign,
    ArchitectureInteriorDesign,
  ];

  const brandingImages = [
    BrandingIdentity,
    BrandingIdentity,
    BrandingIdentity,
  ];

  const uxImages = [
    UIUXProductDesign,
    UIUXProductDesign,
    UIUXProductDesign,
  ];

  const visualizationImages = [
    Visualization3DRendering,
    Visualization3DRendering,
    Visualization3DRendering,
  ];

  const socialMediaImages = [
    SocialMediaContent,
    SocialMediaContent,
    SocialMediaContent,
  ];

  // ============================================================
  // SOCIAL MEDIA REELS DATA
  // ============================================================
  // 
  // 🔥 HOW TO ADD VIMEO VIDEOS:
  // 1. Copy your Vimeo video URL (e.g., https://vimeo.com/123456789)
  // 2. Replace "video1" with your Vimeo URL
  // 3. Set "isVimeo: true" for that reel
  // 4. Leave "isVimeo: false" for local videos
  // 
  // Example: 
  // {
  //   id: 1,
  //   title: "Brand Identity Showcase",
  //   video: "https://vimeo.com/123456789", // 👈 Add your Vimeo URL here
  //   views: "2.4M",
  //   likes: "125K",
  //   isVimeo: true, // 👈 Set to true for Vimeo videos
  // }
  // ============================================================
  const socialReels = useMemo(() => [
    {
      id: 1,
      title: "Color Grade Showcase",
      video: "https://vimeo.com/1068495229", // 👈 REPLACE with your Vimeo URL
      views: "2.4M",
      likes: "125K",
      isVimeo: true, // 👈 SET to true for Vimeo
    },
    {
      id: 2,
      title: "Nischa video in Ali Abdaal's style",
      video: "https://vimeo.com/1066199796", // Keep as local video
      views: "1.8M",
      likes: "98K",
      isVimeo: true,
    },
    {
      id: 3,
      title: "Athlete Reel",
      video: "https://vimeo.com/1066154660", // 👈 REPLACE with your Vimeo URL
      views: "3.2M",
      likes: "210K",
      isVimeo: true, // 👈 SET to true for Vimeo
    },
    {
      id: 4,
      title: "Ali Abdaal style",
      video: "https://vimeo.com/1066092808", // Keep as local video
      views: "1.5M",
      likes: "76K",
      isVimeo: true,
    },
    {
      id: 5,
      title: "Pink Load Trailer Video",
      video: "https://vimeo.com/1066093854", // 👈 REPLACE with your Vimeo URL
      views: "4.1M",
      likes: "312K",
      isVimeo: true, // 👈 SET to true for Vimeo
    },
    {
      id: 6,
      title: "Guillaume reel",
      video:  "https://vimeo.com/1066091840", // Keep as local video
      views: "2.7M",
      likes: "156K",
      isVimeo: true,
    },
  ], []);

  // ============================================================
  // PROJECTS DATA
  // ============================================================
  const allProjects = useMemo(() => [
    {
      id: 1,
      title: "Smart Logistics Dashboard",
      category: "Web Development",
      description: "Real-time fleet management platform with GPS tracking and route optimization",
      image: webDevImages[0],
      tags: ["React", "Node.js", "Real-time"]
    },
    {
      id: 2,
      title: "Modern Corporate Identity",
      category: "Branding & Identity",
      description: "Complete brand overhaul for a tech company including logo, colors, and guidelines",
      image: brandingImages[0],
      tags: ["Branding", "Identity", "Corporate"]
    },
    {
      id: 3,
      title: "Luxury Villa Design",
      category: "Architecture & Interior",
      description: "Contemporary villa design blending modern architecture with interior elegance",
      image: architectureImages[0],
      tags: ["Architecture", "Interior", "Luxury"]
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      category: "UI/UX Design",
      description: "Intuitive user interface design for a high-traffic e-commerce platform",
      image: uxImages[0],
      tags: ["UI/UX", "E-commerce", "Mobile-first"]
    },
    {
      id: 5,
      title: "Product Visualization",
      category: "Visualization & 3D",
      description: "Photorealistic 3D product renderings for marketing and presentations",
      image: visualizationImages[0],
      tags: ["3D Rendering", "Visualization", "Product"]
    },
    {
      id: 6,
      title: "Social Media Campaign",
      category: "Social Media Handling",
      description: "Comprehensive social media strategy and content creation for brand awareness",
      image: socialMediaImages[0],
      tags: ["Social Media", "Content", "Engagement"]
    },
    {
      id: 7,
      title: "Corporate Website",
      category: "Web Designing",
      description: "Modern, responsive corporate website design with seamless user experience",
      image: webDevImages[1],
      tags: ["Web Design", "Responsive", "Corporate"]
    },
    {
      id: 8,
      title: "Interior Office Design",
      category: "Architecture & Interior",
      description: "Modern office interior design focusing on productivity and aesthetics",
      image: architectureImages[1],
      tags: ["Interior", "Office", "Modern"]
    },
  ], []);

  // ============================================================
  // SERVICES DATA
  // ============================================================
  const services = [
    {
      title: "Web Development & Design",
      subtitle: "01 — Digital Solutions",
      description: "We build high-performance websites and web applications that deliver exceptional user experiences. From e-commerce platforms to complex enterprise solutions, we craft digital experiences that drive results.",
      image: webDevImages[2],
      features: [
        "Custom web development with modern frameworks",
        "Responsive design for all devices",
        "E-commerce solutions with payment integration",
        "CMS development for easy content management",
        "Performance optimization & SEO"
      ]
    },
    {
      title: "Architecture & Interior Design",
      subtitle: "02 — Spatial Design",
      description: "Creating inspiring spaces that blend functionality with aesthetic excellence. Our architecture and interior design solutions transform environments into experiences.",
      image: architectureImages[2],
      features: [
        "Residential & commercial architecture",
        "Interior design & space planning",
        "3D visualization & walkthroughs",
        "Sustainable design solutions",
        "Project management & execution"
      ]
    },
    {
      title: "Branding & Identity",
      subtitle: "03 — Brand Strategy",
      description: "We create powerful brand identities that resonate with your audience and stand out in the market. From logos to complete brand guidelines, we build brands that tell compelling stories.",
      image: brandingImages[1],
      features: [
        "Brand strategy & positioning",
        "Logo design & visual identity",
        "Brand guidelines & style guides",
        "Packaging design",
        "Brand messaging & voice"
      ]
    },
    {
      title: "UI/UX & Product Design",
      subtitle: "04 — User Experience",
      description: "Designing intuitive interfaces that users love. Our UX research and UI design process ensures your digital products are not just beautiful but also functional and user-centric.",
      image: uxImages[1],
      features: [
        "User research & testing",
        "Wireframing & prototyping",
        "User interface design",
        "Design systems & components",
        "Accessibility & inclusive design"
      ]
    },
    {
      title: "Visualization & 3D Rendering",
      subtitle: "05 — Visual Storytelling",
      description: "Bringing concepts to life through photorealistic 3D visualization. From architectural renders to product visualizations, we create stunning visuals that captivate and convince.",
      image: visualizationImages[1],
      features: [
        "Architectural visualization",
        "Product rendering & animation",
        "Virtual tours & walkthroughs",
        "3D modeling & texturing",
        "Interactive 3D experiences"
      ]
    },
    {
      title: "Social Media & Content",
      subtitle: "06 — Digital Engagement",
      description: "Building brand presence and engagement through strategic social media management. We create content that connects with your audience and drives meaningful interactions.",
      image: socialMediaImages[1],
      features: [
        "Social media strategy",
        "Content creation & curation",
        "Community management",
        "Influencer collaboration",
        "Analytics & reporting"
      ]
    }
  ];

  const categories = useMemo(() => 
    ["All", "Social Media Reels", ...new Set(allProjects.map(p => p.category))], 
    [allProjects]
  );

  const filteredProjects = useMemo(() => {
    if (filter === "All") {
      return allProjects;
    } else if (filter === "Social Media Reels") {
      return [];
    } else {
      return allProjects.filter(p => p.category === filter);
    }
  }, [allProjects, filter]);

  useEffect(() => {
    setAnimatedProjects([]);
    const timer = setTimeout(() => {
      if (filter === "Social Media Reels") {
        setAnimatedProjects([]);
      } else {
        setAnimatedProjects(filteredProjects);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [filteredProjects, filter]);

  const verticalVideos = [
     video1,
     video1,
     video1,
  ];

  const testimonials = [
    {
      quote: "From start to finish, they exceeded every expectation. Their attention to detail and creative vision turned our idea into something far more powerful than we ever imagined.",
      author: "Sarah Johnson",
      role: "CEO, Creative Labs"
    },
    {
      quote: "Our brand has been completely reimagined. The team delivered a digital experience that's not just beautiful—it's driving real results for our business.",
      author: "Michael Chen",
      role: "Product Director, TechCorp"
    }
  ];

  const relatedProjects = [
    { title: "Quantum Interface", category: "Web Development", image: webDevImages[0] },
    { title: "Neural Studio", category: "Brand Identity", image: brandingImages[0] },
    { title: "Digital Frontier", category: "Campaign", image: socialMediaImages[0] }
  ];

  return (
    <div className="bg-[#0D0D0D] text-white font-sans antialiased overflow-x-hidden">
      {/* Subtle Grid Background */}
      <div className="fixed inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMzkuNSAwTDAgMzkuNSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4wMiIvPjwvc3ZnPg==')] bg-repeat" />

      {/* Radial Gradient Vignette */}
      <div className="fixed inset-0 pointer-events-none bg-radial-gradient from-transparent via-transparent to-[#0D0D0D]/90" />

      <Navigation />

      <main className="relative z-10" ref={targetRef}>
        {/* ========== HERO SECTION ========== */}
        <section className="relative pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[#0D0D0D]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-lime-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-lime-400/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container relative mx-auto text-center">
            <StaggerContainer>
              <StaggerItem>
                <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-lime-400 bg-lime-400/10 rounded-full">
                  ✦ OUR WORK
                </span>
              </StaggerItem>
              
              <StaggerItem>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text">
                  Our Journey
                </h1>
              </StaggerItem>
              
              <StaggerItem>
                <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-6 leading-relaxed">
                  Transforming ideas into immersive digital experiences — bridging physical and digital 
                  with real-time intelligence and flawless execution.
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* ========== FILTER BAR ========== */}
        <section className="py-6 px-4 sm:px-6 border-y border-white/5 backdrop-blur-sm sticky top-0 z-20 bg-[#0D0D0D]/80">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map(category => (
                <FilterButton
                  key={category}
                  label={category}
                  isActive={filter === category}
                  onClick={() => setFilter(category)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ========== PROJECTS GRID ========== */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filter === "Social Media Reels" ? (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-white">Social Media Reels</h2>
                  <p className="text-white/40 text-sm">Branding & social media video proof</p>
                </div>
                <span className="text-lime-400 text-sm">🔥 Trending</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                {socialReels.map((reel, idx) => (
                  <SocialReelCard 
                    key={reel.id} 
                    {...reel} 
                    index={idx}
                    isVimeo={reel.isVimeo || false}
                  />
                ))}
              </div>
            </div>
          ) : animatedProjects.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-white/40">Loading projects...</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {animatedProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </div>
          )}
          
          {filter !== "Social Media Reels" && filteredProjects.length === 0 && animatedProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-white/50">No projects found in this category.</p>
            </div>
          )}
        </section>

        {/* ========== SERVICES SECTION ========== */}
        <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16" delay={0.1}>
            <span className="text-lime-400 text-sm font-mono tracking-wider uppercase">What We Do</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4">Our Projects</h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto">
              Comprehensive solutions across design, development, and creative disciplines.
            </p>
          </AnimatedSection>

          <div className="space-y-16">
            {services.map((service, index) => (
              <ServiceSection
                key={index}
                {...service}
                index={index}
                imageLeft={index % 2 === 0}
              />
            ))}
          </div>
        </section>

        {/* ========== METRICS SECTION ========== */}
        <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16" delay={0.1}>
            <span className="text-lime-400 text-sm font-mono tracking-wider uppercase">Results</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4">Performance by the numbers</h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto">Real metrics that demonstrate our impact and commitment to excellence</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard value="2.5M" label="Total Impressions" />
            <MetricCard value="420K" label="Engagements" />
            <MetricCard value="98" label="Client Satisfaction" suffix="%" />
            <MetricCard value="35" label="Conversion Lift" suffix="%" />
          </div>
        </section>

        {/* ========== FLOATING CARDS SECTION ========== */}
        <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FloatingCard className="text-center">
              <div className="w-16 h-16 rounded-full bg-lime-400/10 flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-white/50">99th percentile Lighthouse scores with sub-100ms initial load times.</p>
            </FloatingCard>
            <FloatingCard className="text-center">
              <div className="w-16 h-16 rounded-full bg-lime-400/10 flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
              <p className="text-white/50">SOC2 compliant infrastructure with end-to-end encryption.</p>
            </FloatingCard>
            <FloatingCard className="text-center">
              <div className="w-16 h-16 rounded-full bg-lime-400/10 flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Scale</h3>
              <p className="text-white/50">Multi-region deployment serving users across 6 continents.</p>
            </FloatingCard>
          </div>
        </section>

        {/* ========== TESTIMONIALS SECTION ========== */}
        <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16" delay={0.1}>
            <span className="text-lime-400 text-sm font-mono tracking-wider uppercase">Testimonials</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4">Why Clients Choose Us</h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto">Hear from those who've worked with us.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </div>
        </section>

        {/* ========== RELATED PROJECTS ========== */}
        <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16" delay={0.1}>
            <span className="text-lime-400 text-sm font-mono tracking-wider uppercase">Explore More</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4">Related Projects</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((project, idx) => (
              <RelatedProjectCard key={idx} {...project} index={idx} />
            ))}
          </div>
        </section>

        {/* ========== CTA BANNER ========== */}
        <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#161616] via-[#1a1a1a] to-[#0D0D0D] border border-white/10 p-16 text-center shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-lime-400/10 via-transparent to-lime-400/10" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-lime-400/20 rounded-full filter blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-lime-400/10 rounded-full filter blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
                Ready to Build Your Next <br />
                <span className="text-lime-400">Digital Experience</span>?
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto mb-10 text-lg">
                Let's transform ambitious ideas into exceptional digital products with engineering excellence and creative precision.
              </p>
              <div className="flex flex-wrap justify-center gap-5">
                <MagneticButton
                  href="#"
                  className="px-10 py-4 rounded-full bg-lime-400 text-black font-semibold hover:bg-lime-500 transition-all duration-300 shadow-2xl shadow-lime-400/30 text-lg"
                >
                  Start Your Project
                </MagneticButton>
                <Link to="/contact">
                  <MagneticButton className="px-10 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-lg">
                    Book a Discovery Call
                  </MagneticButton>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </main>

      {/* Custom Styles */}
      <style>{`
        .bg-radial-gradient {
          background: radial-gradient(circle at center, transparent 0%, rgba(13, 13, 13, 0.8) 100%);
        }
        .border-l-3 {
          border-left-width: 3px;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
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

export default Projects;