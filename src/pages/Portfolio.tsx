import { useMemo, useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import interiorProject from "@/assets/project-interior-1.jpg";
import architectureProject from "@/assets/project-architecture-1.jpg";
import brandingProject from "@/assets/project-branding-1.jpg";
import digitalProject from "@/assets/project-digital-1.jpg";
import { ArrowRight, Filter, Tag } from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [animatedProjects, setAnimatedProjects] = useState([]);
  
  const allProjects = useMemo(() => [
    {
      id: 1,
      title: "Urban Residence",
      category: "Interior Design",
      description: "Luxury apartment transformation with minimalist aesthetics and functional elegance",
      image: interiorProject,
      client: "Private Client",
      year: "2024",
      tags: ["Residential", "Minimalist", "Luxury"]
    },
    {
      id: 2,
      title: "Modern Complex",
      category: "Architecture",
      description: "Contemporary commercial building featuring geometric patterns and sustainable design",
      image: architectureProject,
      client: "Urban Development Corp",
      year: "2024",
      tags: ["Commercial", "Sustainable", "Modern"]
    },
    {
      id: 3,
      title: "Brand Identity",
      category: "Branding",
      description: "Complete brand overhaul for a tech startup, including logo and visual identity",
      image: brandingProject,
      client: "Tech Innovators",
      year: "2024",
      tags: ["Tech", "Identity", "Digital"]
    },
    {
      id: 4,
      title: "Digital Platform",
      category: "UI/UX Design",
      description: "Intuitive web platform design with focus on user experience and accessibility",
      image: digitalProject,
      client: "Digital Solutions Inc",
      year: "2024",
      tags: ["Web", "Mobile", "Accessible"]
    },
  ], []);
  
  const categories = useMemo(() => ["All", ...new Set(allProjects.map(p => p.category))], [allProjects]);
  
  const filteredProjects = useMemo(() => {
    return filter === "All" ? allProjects : allProjects.filter(p => p.category === filter);
  }, [allProjects, filter]);
  
  useEffect(() => {
    setAnimatedProjects([]);
    const timer = setTimeout(() => {
      setAnimatedProjects(filteredProjects);
    }, 100);
    return () => clearTimeout(timer);
  }, [filteredProjects]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Header */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative mx-auto text-center animate-fade-in">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full">OUR WORK</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text">Our Portfolio</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A curated collection of our most impactful projects, showcasing innovation across
            architecture, interior design, branding, and digital experiences.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 px-4 sm:px-6 border-y border-border/30 backdrop-blur-sm sticky top-0 z-10 bg-background/80">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <Filter className="w-4 h-4 text-primary mr-1" />
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm rounded-full whitespace-nowrap transition-all ${
                  filter === category 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-background hover:bg-primary/10 border border-border/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="space-y-24 sm:space-y-32 md:space-y-40">
            {animatedProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center animate-slide-up ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        <Tag className="w-3 h-3 mr-1" /> {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                      {project.category}
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                  </div>
                  
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-8 text-sm border-t border-border/30 pt-6">
                    <div>
                      <p className="font-semibold mb-1 text-primary/80">Client</p>
                      <p className="text-muted-foreground">{project.client}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-primary/80">Year</p>
                      <p className="text-muted-foreground">{project.year}</p>
                    </div>
                    <div className="ml-auto self-end">
                      <button className="flex items-center text-primary font-medium group-hover:underline">
                        View Details <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div
                  className={`relative overflow-hidden rounded-2xl ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">Ready to Start Your Project?</h2>
            <p className="text-lg sm:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with exceptional design and innovation
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105"
            >
              Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
