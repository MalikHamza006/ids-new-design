import { useState, useCallback, useMemo } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight, Clock, MessageSquare } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ErrorBoundary from "@/components/ui/error-boundary";
import { BackToTop } from "@/components/ui/back-to-top";
import { MaskedInput } from "@/components/ui/masked-input";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFormStatus("success");
      
      // Reset form status after showing success
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1000);
  }, [toast]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        <Navigation />
        <BackToTop />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative mx-auto text-center animate-fade-in">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full">GET IN TOUCH</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text">Let's Build Something Extraordinary</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Have a project in mind? We'd love to hear from you. Get in touch and let's create
            something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            {/* Contact Info */}
            <div className="space-y-8 sm:space-y-10 animate-fade-in">
              <div>
                <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full">CONTACT US</span>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Get in Touch</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                  Whether you have a question about our services, need a quote, or want to discuss a
                  potential project, our team is ready to answer all your questions.
                </p>
              </div>

              {useMemo(() => (
                <div className="space-y-6 sm:space-y-8">
                  <div className="group flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left space-y-3 sm:space-y-0 sm:space-x-5 p-4 sm:p-5 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Email</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">info@inventerdesignstudio.com</p>
                      <a href="mailto:info@inventerdesignstudio.com" className="inline-flex items-center mt-2 text-xs sm:text-sm font-medium text-primary hover:underline">
                        Send an email <ArrowRight className="ml-1 w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-start space-x-4 sm:space-x-5 p-4 sm:p-5 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Phone</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">+92 370 4441788</p>
                      <a href="tel:+923704441788" className="inline-flex items-center mt-2 text-xs sm:text-sm font-medium text-primary hover:underline">
                        Call us <ArrowRight className="ml-1 w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-start space-x-4 sm:space-x-5 p-4 sm:p-5 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Office</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        First Floor, Plaza No. 8, H, A4
                        <br />
                        Commercial Area Block H Valencia
                        <br />
                        Lahore, 54000
                      </p>
                      <a href="https://www.google.com/maps/search/?api=1&query=First+Floor+Plaza+No.+8+H+A4+Commercial+Area+Block+H+Valencia+Lahore+54000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-2 text-xs sm:text-sm font-medium text-primary hover:underline">
                        Get directions <ArrowRight className="ml-1 w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ), [])}
              
              {/* Business Hours */}
              <div className="p-6 sm:p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-base sm:text-lg">Business Hours</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-primary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
                
                <div className="flex items-center space-x-3 mb-6">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <h2 className="text-xl sm:text-2xl font-bold">Send us a message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="bg-background/50 border-primary/20 focus:border-primary"
                        required
                        autoFocus
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        className="bg-background/50 border-primary/20 focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                      Phone
                    </label>
                    <MaskedInput
                      id="phone"
                      name="phone"
                      mask="+99 999 9999999"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="bg-background/50 border-primary/20 focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you need"
                      rows={5}
                      className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
                    disabled={formStatus !== "idle"}
                  >
                    {formStatus === "idle" && (
                      <>
                        Send Message <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                    {formStatus === "submitting" && "Sending..."}
                    {formStatus === "success" && "Message Sent!"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-2xl overflow-hidden border border-primary/10 shadow-lg relative">
            <div className="aspect-[16/9] lg:aspect-[21/9] w-full relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.0092145433196!2d74.25561227638392!3d31.402662074509806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919019f198f755d%3A0xdc111946570f5e55!2sFirst%20Floor%2C%20Plaza%20No.%208%2C%20H%2C%20A4%2C%20Commercial%20Area%20Block%20H%20Valencia%2C%20Lahore%2C%2054000!5e0!3m2!1sen!2s!4v1698757144809!5m2!1sen!2s"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="INVENTER Design Studio Location"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4 sm:p-6 backdrop-blur-sm">
              <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold">Interactive Map</h3>
                    <p className="text-sm text-muted-foreground">Our office location in the heart of the Creative District</p>
                  </div>
                  <Button variant="outline" className="rounded-full hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto">
                    <a 
                      href="https://www.google.com/maps/dir//First+Floor,+Plaza+No.+8,+H,+A4,+Commercial+Area+Block+H+Valencia,+Lahore,+54000/@31.4026357,74.1757766,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3919019f198f755d:0xdc111946570f5e55!2m2!1d74.2581779!2d31.4026621" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-center w-full"
                    >
                      Get Directions <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </ErrorBoundary>
  );
};

export default Contact;
