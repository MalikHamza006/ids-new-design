import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sections for quick jump navigation
  const sections = [
    { id: "acceptance", title: "Acceptance of Terms" },
    { id: "eligibility", title: "Eligibility" },
    { id: "services", title: "Services Provided" },
    { id: "responsibilities", title: "User Responsibilities" },
    { id: "payments", title: "Payments & Billing" },
    { id: "intellectual-property", title: "Intellectual Property" },
    { id: "third-party", title: "Third-Party Services" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "indemnification", title: "Indemnification" },
    { id: "termination", title: "Termination" },
    { id: "governing-law", title: "Governing Law" },
    { id: "changes", title: "Changes to Terms" },
  ];

  useEffect(() => {
    const onScroll = () => {
      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 500);

      // Update active section based on scroll position
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
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full">TERMS</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">Terms of Service</h1>
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
                  <h4 className="font-medium">Need Help?</h4>
                  <p className="text-sm text-muted-foreground">Have questions about our terms? Our support team is here to help.</p>
                  <Button asChild className="w-full">
                    <Link to="/contact">Contact Support <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <section className="min-w-0">
              <div className="prose prose-sm dark:prose-invert max-w-none space-y-8">
                <p>
                  Welcome to Inventer Design Studio ("Company," "we," "our," or "us"). By using our website
                  (www.inventerdesignstudio.com) and related services, you ("User," "you," or "your") agree to
                  the following Terms of Service. If you do not agree with these terms, do not use our services.
                </p>

            <div id="acceptance" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-semibold group">
                <span className="inline-block transition-transform group-hover:translate-x-1">Acceptance of Terms</span>
              </h2>
              <p>
                By accessing or using our website, services, or products, you confirm that you have read,
                understood, and agree to be bound by these Terms of Service and our Privacy Policy.
              </p>
            </div>

            <div id="eligibility" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-semibold group">
                <span className="inline-block transition-transform group-hover:translate-x-1">Eligibility</span>
              </h2>
              <p>
                You must be at least 18 years old or the legal age of majority in your jurisdiction. If you
                use our services on behalf of a business or organization, you represent that you have the
                authority to bind that entity to these Terms.
              </p>
            </div>

            <div id="services" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-semibold group">
                <span className="inline-block transition-transform group-hover:translate-x-1">Services Provided</span>
              </h2>
              <p>We provide, but are not limited to, the following services:</p>
              <ul className="grid sm:grid-cols-2 gap-2 pl-5 list-disc marker:text-primary">
                <li>Website and application development</li>
                <li>Digital marketing and social media management</li>
                <li>SEO and online visibility solutions</li>
                <li>DevOps and IT infrastructure services</li>
                <li>Graphic design, branding, and creative production</li>
                <li>Video pre-production and post-production editing</li>
              </ul>

              <p>
                The scope of work for each project will be outlined in a separate written agreement,
                quotation, or invoice.
              </p>
            </div>

            <div id="responsibilities" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-semibold group">
                <span className="inline-block transition-transform group-hover:translate-x-1">User Responsibilities</span>
              </h2>
              <p>
                You agree to use our services lawfully and not for fraudulent, harmful, or illegal activities.
                You will provide accurate, complete, and current information when engaging with us, and you
                are responsible for maintaining the confidentiality of any account credentials provided to you.
              </p>
            </div>

            <h2 className="text-lg font-semibold">Payments &amp; Billing</h2>
            <p>
              All fees are payable in accordance with agreed invoices, contracts, or proposals. Payments must
              be made on time; late payments may incur penalties. Refunds, if applicable, are subject to the
              terms outlined in individual service agreements. We reserve the right to suspend or terminate
              services for overdue accounts.
            </p>

            <h2 className="text-lg font-semibold">Intellectual Property</h2>
            <p>
              All content, graphics, designs, code, and creative work produced by us remain our intellectual
              property unless expressly transferred under a written agreement. Clients retain rights to
              materials specifically developed for them upon full payment. You may not copy, distribute, or
              use our content without prior written consent.
            </p>

            <h2 className="text-lg font-semibold">Third-Party Services</h2>
            <p>
              We may integrate or rely on third-party tools (e.g., hosting providers, APIs, cloud services).
              We are not responsible for interruptions, errors, or damages caused by these third-party
              providers.
            </p>

            <h2 className="text-lg font-semibold">Limitation of Liability</h2>
            <p>
              Our services are provided "as is" and "as available." We do not guarantee uninterrupted,
              error-free service or specific business results. We are not liable for any indirect, incidental,
              consequential, or punitive damages. Our total liability under any claim shall not exceed the
              amount you paid for the service in question.
            </p>

            <h2 className="text-lg font-semibold">Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Inventer Design Studio and its employees,
              officers, and partners from any claims, liabilities, damages, or expenses arising from your use
              of our services or breach of these Terms.
            </p>

            <h2 className="text-lg font-semibold">Termination</h2>
            <p>
              We may suspend or terminate services at any time if you breach these Terms. Upon termination,
              your right to access our services will end immediately, but payment obligations will remain.
            </p>

            <h2 className="text-lg font-semibold">Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms are governed by the laws of Pakistan. Any disputes will be resolved in the courts
              of Lahore, Punjab.
            </p>

            <h2 className="text-lg font-semibold">Changes to Terms</h2>
            <p>
              We reserve the right to update or modify these Terms at any time. Updates will be posted on
              this page with a revised "Last Updated" date. Continued use of our services means you accept the
              updated Terms.
            </p>
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

export default TermsOfService;
