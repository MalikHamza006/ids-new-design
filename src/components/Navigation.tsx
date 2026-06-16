import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg"; // ✅ Updated logo import
import { motion } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "FAQ", path: "/faq" },
    { name: "Terms", path: "/terms-of-service" },
    { name: "Privacy", path: "/privacy-policy" },
    { name: "Contact", path: "/contact" },
    
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* ✅ Updated Logo */}
          <Link to="/" className="group flex items-center hover:opacity-90 transition-opacity">
            <motion.img 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              src={logo} 
              alt="Inventer Vision Studio" 
              className="h-10 sm:h-12 md:h-14 rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative group ${
                    isActive(link.path) 
                      ? "text-primary" 
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive(link.path) ? "w-full" : "group-hover:w-full"
                    }`}
                  />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Button 
                variant="default" 
                size="sm" 
                className="ml-2 lg:ml-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium group" 
                asChild
              >
                <Link to="/contact" className="flex items-center gap-1">
                  Let's Talk
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="md:hidden text-foreground p-2 rounded-lg hover:bg-card/80 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-3 pb-3 space-y-1 bg-card/95 backdrop-blur-xl rounded-xl p-4 shadow-md border border-border/50"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2.5 px-3 text-sm font-medium transition-colors rounded-lg ${
                    isActive(link.path) 
                      ? "text-primary bg-primary/10" 
                      : "text-foreground hover:bg-card hover:text-primary"
                  }`}
                >
                  {link.name}
                  <ChevronRight size={16} className={isActive(link.path) ? "text-primary" : "text-muted-foreground"} />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="pt-2 mt-2 border-t border-border/50"
            >
              <Button 
                variant="default" 
                size="sm" 
                className="w-full mt-1 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium" 
                asChild
              >
                <Link 
                  to="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1"
                >
                  Let's Talk
                  <ArrowRight size={14} />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
