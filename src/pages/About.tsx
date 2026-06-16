import { useMemo, useState, useEffect } from "react";
import { Target, Lightbulb, Award, Users, MapPin, Calendar, Briefcase, ArrowRight, ChevronRight, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import studioImage from "@/assets/about-studio.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  
  const values = useMemo(() => [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries with creative solutions that challenge conventions",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Meticulous attention to detail in every aspect of our work",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality in every project",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building partnerships that inspire and create lasting impact",
    },
  ], []);

  const storyContent = (
    <div className="space-y-6">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Story</h2>
      <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
        <p>
          Founded in 2018, Inventer Design Studio emerged from a shared vision: to create
          design solutions that transcend trends and stand the test of time. What began as a
          small collective of architects and designers has evolved into a full-service design
          studio.
        </p>
        <p>
          Our multidisciplinary approach brings together expertise in architecture, interior
          design, branding, and digital experiences. We believe that great design happens at
          the intersection of form and function, where creativity meets purpose.
        </p>
        <p>
          Today, we work with clients around the globe, transforming spaces and brands
          through innovative thinking, meticulous craftsmanship, and a relentless pursuit of
          excellence.
        </p>
      </div>
      <div className="pt-6 flex items-center gap-2 text-primary">
        <Star className="w-5 h-5 fill-primary" />
        <Star className="w-5 h-5 fill-primary" />
        <Star className="w-5 h-5 fill-primary" />
        <Star className="w-5 h-5 fill-primary" />
        <Star className="w-5 h-5 fill-primary" />
        <span className="ml-2 text-sm font-medium">Trusted by over 500+ clients worldwide</span>
      </div>
    </div>
  );

  const missionContent = (
    <div className="space-y-6">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
      <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
        <p>
          At Inventer Design Studio, our mission is to create meaningful design solutions that elevate human experiences, inspire connection, and drive positive change in the world.
        </p>
        <p>
          We strive to push the boundaries of what's possible, combining innovative thinking with technical excellence to deliver work that not only meets our clients' needs but exceeds their expectations.
        </p>
        <p>
          Through thoughtful collaboration and a deep commitment to our craft, we aim to create designs that are not only visually compelling but also functionally superior and environmentally responsible.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
        <div className="flex items-center gap-3 p-4 rounded-lg border border-border/30 bg-card/50">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <ChevronRight className="w-5 h-5 text-primary" />
          </div>
          <p className="text-sm">Sustainable design practices</p>
        </div>
        <div className="flex items-center gap-3 p-4 rounded-lg border border-border/30 bg-card/50">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <ChevronRight className="w-5 h-5 text-primary" />
          </div>
          <p className="text-sm">Human-centered approach</p>
        </div>
      </div>
    </div>
  );

  const approachContent = (
    <div className="space-y-6">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Approach</h2>
      <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
        <p>
          Our design process is collaborative, iterative, and deeply rooted in understanding the unique needs of each client and project. We begin by listening and researching, gathering insights that inform our creative direction.
        </p>
        <p>
          From concept to completion, we maintain open communication, ensuring that our clients are partners in the creative journey. We believe that the best solutions emerge from a thoughtful dialogue between designer and client.
        </p>
        <p>
          Every project is approached with fresh eyes and an open mind, allowing us to discover unexpected opportunities and create designs that are both innovative and appropriate to their context.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <div className="flex-1 p-5 rounded-xl border border-border/30 bg-card/50">
          <h4 className="font-semibold mb-2">Discovery</h4>
          <p className="text-sm text-muted-foreground">Understanding goals, challenges, and vision</p>
        </div>
        <div className="flex-1 p-5 rounded-xl border border-border/30 bg-card/50">
          <h4 className="font-semibold mb-2">Design</h4>
          <p className="text-sm text-muted-foreground">Creating concepts based on insights</p>
        </div>
        <div className="flex-1 p-5 rounded-xl border border-border/30 bg-card/50">
          <h4 className="font-semibold mb-2">Delivery</h4>
          <p className="text-sm text-muted-foreground">Executing with precision and care</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative mx-auto text-center animate-fade-in">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full">ABOUT US</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text">We Design Experiences That Shape Tomorrow</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Inventer Design Studio is a collective of creative minds dedicated to crafting spaces,
            brands, and digital experiences that inspire and endure.
          </p>
        </div>
      </section>

      {/* Studio Image */}
      <section className="px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto">
          <div className="overflow-hidden rounded-2xl animate-slide-up relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <img
              src={studioImage}
              alt="Inventer Design Studio"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 z-20">
              <div className="bg-background/30 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-primary/20 shadow-xl max-w-2xl mx-auto transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">Our Creative Space</h3>
                <p className="text-muted-foreground">Where innovation meets design excellence, our studio is the birthplace of transformative ideas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="hidden md:flex flex-wrap border-b border-border/30 mb-8">
            <button 
              onClick={() => setActiveTab("story")}
              className={`px-6 py-3 text-sm font-medium transition-all relative ${
                activeTab === "story" 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Our Story
              {activeTab === "story" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
            <button 
              onClick={() => setActiveTab("mission")}
              className={`px-6 py-3 text-sm font-medium transition-all relative ${
                activeTab === "mission" 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Our Mission
              {activeTab === "mission" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
            <button 
              onClick={() => setActiveTab("approach")}
              className={`px-6 py-3 text-sm font-medium transition-all relative ${
                activeTab === "approach" 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Our Approach
              {activeTab === "approach" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          </div>
          {/* Mobile accordion (visible on small screens) */}
          <div className="md:hidden mb-6">
            <Accordion type="single" collapsible>
              <AccordionItem value="story">
                <AccordionTrigger>Our Story</AccordionTrigger>
                <AccordionContent>{storyContent}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="mission">
                <AccordionTrigger>Our Mission</AccordionTrigger>
                <AccordionContent>{missionContent}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="approach">
                <AccordionTrigger>Our Approach</AccordionTrigger>
                <AccordionContent>{approachContent}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Desktop / tablet tabs content (hidden on small screens) */}
          <div className="animate-fade-in hidden md:block">
            {activeTab === "story" && storyContent}
            {activeTab === "mission" && missionContent}
            {activeTab === "approach" && approachContent}
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff05_1px,transparent_1px),linear-gradient(135deg,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="container relative mx-auto max-w-5xl">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full">WHO WE ARE</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Industry Leaders</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering cutting-edge solutions since 2024 with unmatched expertise and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="group flex flex-col p-6 sm:p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 animate-slide-up">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">Global Headquarters</h3>
              <p className="text-muted-foreground font-medium text-lg">Fort Worth, Texas</p>
              <p className="text-sm text-muted-foreground/80 mt-2 italic">Strategically located in the heart of innovation</p>
              <div className="mt-6 space-y-3 text-sm">
                <p className="text-muted-foreground">500 Main Street, Suite 300</p>
                <p className="text-muted-foreground">Technology District</p>
                <p className="text-muted-foreground">76102, United States</p>
                <div className="pt-4 mt-4 border-t border-border/30">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-xs text-muted-foreground">24/7 Security & Access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-xs text-muted-foreground">LEED Certified Building</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="group flex flex-col p-6 sm:p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 animate-slide-up">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">Established</h3>
              <p className="text-muted-foreground font-medium text-lg">2024</p>
              <p className="text-sm text-muted-foreground/80 mt-2 italic">Building the future of technology</p>
              <div className="mt-6 space-y-3 text-sm">
                <p className="text-muted-foreground">Pioneering digital transformation</p>
                <p className="text-muted-foreground">Driving industry innovation</p>
                <p className="text-muted-foreground">Shaping tomorrow's solutions</p>
                <div className="pt-4 mt-4 border-t border-border/30">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-xs text-muted-foreground">Rapid growth in first year</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-xs text-muted-foreground">Global expansion planned for 2025</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="group flex flex-col p-6 sm:p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 animate-slide-up">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">Core Expertise</h3>
              <div className="mt-6 space-y-6 text-sm">
                <div>
                  <p className="text-primary font-semibold mb-2">Enterprise Solutions</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs">Website Development</span>
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs">Mobile Apps</span>
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs">E-Commerce</span>
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs">UI/UX Design</span>
                  </div>
                </div>
                <div>
                  <p className="text-primary font-semibold mb-2">IT Infrastructure</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs">IT Services</span>
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs">Networking</span>
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs">DevOps</span>
                  </div>
                </div>
                <div>
                  <p className="text-primary font-semibold mb-2">Security & Cloud</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs">Cybersecurity</span>
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs">Cloud Solutions</span>
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs">Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 md:py-24 px-6 bg-gradient-to-b from-background to-background/95">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full">OUR PRINCIPLES</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide every decision and design we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/10 p-8 text-center space-y-4 animate-slide-up hover:border-primary/20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">Let's Build Something Extraordinary</h2>
            <p className="text-lg sm:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your vision into reality? We'd love to hear about your project.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105"
            >
              Start a Conversation <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
