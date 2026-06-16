import { Link } from "react-router-dom";
import {
  Instagram,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ExternalLink,
  Heart,
} from "lucide-react";
import logo from "@/assets/logo.jpeg"; // ✅ Updated logo import
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Brand and Social */}
          <div className="space-y-4 sm:space-y-5 col-span-1 sm:col-span-2 lg:col-span-1">
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              src={logo} 
              alt="Inventer Vision Studio" 
              className="h-12 sm:h-14 md:h-16 mb-2 sm:mb-3 rounded-lg"
            />
            <p className="text-xs sm:text-sm text-muted-foreground/90 leading-relaxed">
              INVENTER Design Studio A creative technology studio bridging software development and visual storytelling.
              We build digital products and create cinematic content.
            </p>
            <div className="flex space-x-3 sm:space-x-4 pt-2 sm:pt-3">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/70 hover:bg-primary/10 flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="GitHub"
              >
                <Github size={16} className="sm:size-18 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/70 hover:bg-primary/10 flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="sm:size-18 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/70 hover:bg-primary/10 flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="Instagram"
              >
                <Instagram size={16} className="sm:size-18 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/70 hover:bg-primary/10 flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="YouTube"
              >
                <Youtube size={16} className="sm:size-18 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-5 relative inline-block">
              Navigation
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-primary/80 to-transparent"></span>
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-5 relative inline-block">
              What We Do
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-primary/80 to-transparent"></span>
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                Software Development
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                Video Production
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                Creative Agency
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                Digital Innovation
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-5 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-primary/80 to-transparent"></span>
            </h4>
            <a 
              href="mailto:info@inventervisionstudio.com"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors flex items-center mb-3 sm:mb-4 group"
            >
              <div className="w-6 flex justify-center mr-2">
                <Mail size={14} className="sm:size-16 group-hover:text-primary transition-colors" />
              </div>
              <span>info@inventerdesignstudio.com</span>
              <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
            </a>
            <a 
              href="tel:+923704441788"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors flex items-center mb-3 sm:mb-4 group"
            >
              <div className="w-6 flex justify-center mr-2">
                <Phone size={14} className="sm:size-16 group-hover:text-primary transition-colors" />
              </div>
              <span>+92 370 4441 788</span>
              <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
            </a>
            <a 
              href="https://share.google/22EChxAzOwTvM5Z1I"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group"
            >
              <div className="w-6 flex justify-center mr-2">
                <MapPin size={14} className="sm:size-16 group-hover:text-primary transition-colors" />
              </div>
              <span>Lahore, Pakistan</span>
              <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 p-4 sm:p-6 md:p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 items-center">
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Subscribe to our newsletter for the latest updates and insights.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 h-10 px-3 py-2 text-sm rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="h-10 px-4 py-2 text-sm font-medium rounded-lg bg-primary/90 hover:bg-primary text-white transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 sm:mt-10 md:mt-12 lg:mt-16 pt-6 sm:pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} INVENTER Vision Studio. All rights reserved.
              <span className="hidden sm:inline-flex items-center text-xs text-muted-foreground/70 ml-2">
                Made with <Heart size={12} className="mx-1 text-red-500" /> in Lahore
              </span>
            </p>
            <div className="flex items-center justify-center sm:justify-end space-x-4 sm:space-x-6 md:space-x-8">
              <Link to="/privacy-policy" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
