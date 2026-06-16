import { useMemo, useState } from "react";
import { Building, Palette, Smartphone, Package, ArrowRight, Check, ChevronRight, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  
  // Services data extracted to a constant outside the component for better performance
  const SERVICES_DATA = [
    {
      icon: Building,
      title: "Architecture & Interiors",
      description:
        "From conceptual design to construction documentation, we create spaces that inspire and function beautifully. Our architectural solutions blend innovation with timeless design principles.",
      features: [
        "Residential Architecture",
        "Commercial Spaces",
        "Interior Design",
        "Space Planning",
      ],
      cta: "Explore Architecture Services",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-500",
    },
    {
      icon: Palette,
      title: "Branding & Identity",
      description:
        "We craft distinctive brand identities that resonate with your audience and stand out in the market. From logos to complete brand systems, we ensure consistency and impact.",
      features: [
        "Brand Strategy",
        "Logo Design",
        "Visual Identity Systems",
        "Brand Guidelines",
      ],
      cta: "Discover Branding Solutions",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-500/10",
      textColor: "text-amber-500",
    },
    {
      icon: Smartphone,
      title: "UI/UX & Web Design",
      description:
        "Creating digital experiences that are intuitive, engaging, and beautiful. We design interfaces that users love and that drive measurable results for your business.",
      features: [
        "Website Design",
        "Mobile App Design",
        "User Experience Research",
        "Prototyping & Testing",
      ],
      cta: "View Digital Design Services",
      color: "from-primary to-primary-foreground",
      bgColor: "bg-primary/10",
      textColor: "text-primary",
    },
    {
      icon: Package,
      title: "Visualization & 3D Rendering",
      description:
        "Bring your projects to life before they're built. Our photorealistic 3D renderings and animations help you visualize and communicate your design vision effectively.",
      features: [
        "Architectural Visualization",
        "Interior Renderings",
        "3D Animations",
        "Virtual Reality Tours",
      ],
      cta: "See Visualization Work",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-500/10",
      textColor: "text-emerald-500",
    },
  ];
  
  // Use the constant data with useMemo for better performance
  const services = useMemo(() => SERVICES_DATA, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative mx-auto text-center animate-fade-in">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full">OUR EXPERTISE</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text">Transforming Visions Into Reality</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive design solutions tailored to elevate your brand, space, and digital presence
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300">
              <Link to="/contact" className="flex items-center">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full hover:bg-primary/10 transition-all duration-300">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full">SERVICES</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Specialized Services</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Tailored solutions designed to meet your specific needs and exceed your expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveService(service.title)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full blur-3xl transition-all duration-500 group-hover:opacity-20 group-hover:scale-150" style={{ background: `linear-gradient(to bottom right, ${service.color.split(' ')[1]}, transparent)` }} />
                
                <div className="p-8 sm:p-10 space-y-6 relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${service.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-7 h-7 ${service.textColor}`} />
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-bold group-hover:text-primary transition-colors duration-300">{service.title}</h2>
                  
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 pt-2">
                    <h4 className="text-sm font-semibold">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-xs sm:text-sm">
                          <Check className={`w-4 h-4 mr-2 ${service.textColor}`} />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <Link 
                      to="/contact" 
                      className={`inline-flex items-center text-sm font-medium ${service.textColor} hover:underline`}
                    >
                      {service.cta} <ArrowUpRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff05_1px,transparent_1px),linear-gradient(135deg,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="container relative mx-auto max-w-5xl">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full">OUR APPROACH</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              A collaborative approach to bringing your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 relative">
            {/* Connection line */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block" />
            
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We start by understanding your goals, challenges, and vision through in-depth consultations.",
                icon: "🔍",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Our team develops creative concepts and refines them based on your feedback and requirements.",
                icon: "✏️",
              },
              {
                step: "03",
                title: "Delivery",
                description:
                  "We bring the design to life with meticulous execution and ongoing support to ensure success.",
                icon: "🚀",
              },
            ].map((phase, index) => (
              <div
                key={phase.step}
                className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/10 p-8 text-center space-y-5 animate-slide-up hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-background border border-primary/20 flex items-center justify-center text-xl z-10">
                  {phase.icon}
                </div>
                
                <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary/40 to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary-foreground transition-all duration-300">
                  {phase.step}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors">{phase.title}</h3>
                
                <p className="text-sm sm:text-base text-muted-foreground">{phase.description}</p>
                
                <div className="pt-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <ChevronRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff08_1px,transparent_1px),linear-gradient(135deg,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="container relative mx-auto text-center">
          <div className="max-w-3xl mx-auto bg-background/30 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-primary/20 shadow-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">Ready to Get Started?</h2>
            <p className="text-lg sm:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how we can help bring your project to life with our expert services
            </p>
            <Button size="lg" className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300" asChild>
              <Link to="/contact" className="flex items-center">
                Schedule a Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
