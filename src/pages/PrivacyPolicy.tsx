import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowUp, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sections for quick jump navigation
  const sections = [
    { id: "collection", title: "Information We Collect" },
    { id: "usage", title: "How We Use Your Information" },
    { id: "sharing", title: "Sharing of Information" },
    { id: "security", title: "Data Security" },
    { id: "cookies", title: "Cookies & Tracking" },
    { id: "rights", title: "Your Rights" },
    { id: "retention", title: "Data Retention" },
    { id: "international", title: "International Transfers" },
    { id: "children", title: "Children's Privacy" },
    { id: "changes", title: "Policy Changes" },
    { id: "contact", title: "Contact Us" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      const currentSection = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full">PRIVACY</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">Privacy Policy</h1>
            <p className="text-sm sm:text-base text-muted-foreground">Last Updated: September 21, 2025</p>
          </div>
        </div>
      </section>

      <main className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
            {/* Quick jump sidebar */}
            <aside className="lg:block">
              <div className="sticky top-24 space-y-6 lg:pr-6">
                <div className="hidden lg:block rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden">
                  <div className="p-4 border-b border-border/50">
                    <h3 className="font-medium">Quick Navigation</h3>
                  </div>
                  <nav className="p-2">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                          activeSection === section.id
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-primary/10"
                        }`}
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="hidden lg:block rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm p-4 space-y-3">
                  <h4 className="font-medium">Questions?</h4>
                  <p className="text-sm text-muted-foreground">Have questions about our privacy practices? Our team is here to help.</p>
                  <Button asChild className="w-full">
                    <Link to="/contact">Contact Us <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>

                <div className="hidden lg:block rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm p-4 space-y-3">
                  <h4 className="font-medium">Contact Information</h4>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary shrink-0" />
                      <a href="mailto:info@inventerdesignstudio.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@inventerdesignstudio.com
                      </a>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <p className="text-muted-foreground">
                        First Floor, Plaza No. 8, H, A4,<br />
                        Commercial Area Block H Valencia,<br />
                        Lahore, 54000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <section className="min-w-0">
              <div className="prose prose-sm dark:prose-invert max-w-none space-y-8">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  At Inventer Design Studio, we respect your privacy and are committed to protecting your personal information.
                  This Privacy Policy explains how we collect, use, and safeguard your data.
                </p>

            <div id="collection" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-semibold group">
                <span className="inline-block transition-transform group-hover:translate-x-1">Information We Collect</span>
              </h2>
              <ul className="grid sm:grid-cols-2 gap-4 pl-5 list-disc marker:text-primary">
                <li className="space-y-1">
                  <strong>Personal Information</strong>
                  <p className="text-muted-foreground">Name, email address, phone number, company name, billing details.</p>
                </li>
                <li className="space-y-1">
                  <strong>Technical Information</strong>
                  <p className="text-muted-foreground">IP address, browser type, operating system, device details, cookies, and analytics data.</p>
                </li>
                <li className="space-y-1">
                  <strong>Usage Data</strong>
                  <p className="text-muted-foreground">How you interact with our website and services.</p>
                </li>
                <li className="space-y-1">
                  <strong>Client Project Data</strong>
                  <p className="text-muted-foreground">Files, documents, or materials you provide for project completion.</p>
                </li>
              </ul>
            </div>

            <div id="usage" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-semibold group">
                <span className="inline-block transition-transform group-hover:translate-x-1">How We Use Your Information</span>
              </h2>
              <p className="text-muted-foreground">
                We use the collected data to deliver and improve our services, communicate with you regarding inquiries,
                contracts, and updates, process payments and invoices, send marketing or promotional material (with your consent),
                and ensure compliance with legal and security requirements.
              </p>
            </div>

            <div id="sharing" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-semibold group">
                <span className="inline-block transition-transform group-hover:translate-x-1">Sharing of Information</span>
              </h2>
              <p className="text-muted-foreground">
                We do not sell or rent your personal data. We may share information with trusted third-party vendors (for example,
                hosting, payment processors, and cloud storage), legal authorities if required by law or court order, and in connection
                with business transfers such as a merger, acquisition, or sale of assets.
              </p>
            </div>

            <div id="security" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-semibold group">
                <span className="inline-block transition-transform group-hover:translate-x-1">Data Security</span>
              </h2>
              <p className="text-muted-foreground">
                We use industry-standard measures (encryption, firewalls, secure servers) to protect your information. However, no system
                is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div id="cookies" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-semibold group">
                <span className="inline-block transition-transform group-hover:translate-x-1">Cookies &amp; Tracking Technologies</span>
              </h2>
              <p className="text-muted-foreground">
                Our website uses cookies and similar technologies to improve user experience, analyze traffic, and personalize content. You
                can disable cookies in your browser settings, but some site features may not function properly.
              </p>
            </div>

            <div id="rights" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-semibold group">
                <span className="inline-block transition-transform group-hover:translate-x-1">Your Rights</span>
              </h2>
              <p className="text-muted-foreground">
                Depending on your location, you may have rights to access, correct, or delete your personal data, withdraw consent for
                marketing communications, request a copy of the data we hold about you, or file a complaint with your local data protection
                authority. To exercise these rights, contact us at <a className="text-primary hover:underline" href="mailto:info@inventerdesignstudio.com">info@inventerdesignstudio.com</a>.
              </p>
            </div>

            <div id="retention" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-semibold group">
                <span className="inline-block transition-transform group-hover:translate-x-1">Data Retention</span>
              </h2>
              <p className="text-muted-foreground">
                We retain your data only as long as necessary to provide our services, comply with legal obligations, and resolve disputes.
              </p>
            </div>

            <div id="international" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-semibold group">
                <span className="inline-block transition-transform group-hover:translate-x-1">International Data Transfers</span>
              </h2>
              <p className="text-muted-foreground">
                If you access our services from outside Pakistan, your data may be transferred to servers located in other countries with different
                data protection laws.
              </p>
            </div>

            <div id="children" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-semibold group">
                <span className="inline-block transition-transform group-hover:translate-x-1">Children's Privacy</span>
              </h2>
              <p className="text-muted-foreground">
                Our services are not directed to children under 13. We do not knowingly collect personal data from children.
              </p>
            </div>

            <div id="changes" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-semibold group">
                <span className="inline-block transition-transform group-hover:translate-x-1">Changes to Privacy Policy</span>
              </h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy at any time. Updates will be posted on this page with the "Last Updated" date.
              </p>
            </div>

            <div id="contact" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-semibold group">
                <span className="inline-block transition-transform group-hover:translate-x-1">Contact Us</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <a href="mailto:info@inventerdesignstudio.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@inventerdesignstudio.com
                  </a>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    First Floor, Plaza No. 8, H, A4,<br />
                    Commercial Area Block H Valencia,<br />
                    Lahore, 54000
                  </p>
                </div>
              </div>
            </div>
              </div>
            </section>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`fixed right-4 bottom-4 p-3 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 ${
            showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
          }`}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
