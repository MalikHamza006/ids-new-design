import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [query, setQuery] = useState("");

  const faqs = useMemo(
    () => [
      {
        id: "support",
        question: "Do you provide ongoing support?",
        answer:
          "Yes. We offer maintenance and retainer packages for ongoing support, updates, and monitoring. Packages include defined response times and scope — reach out for a customised plan.",
        topics: ["support", "payment"],
      },
      {
        id: "technologies",
        question: "What technologies do you use?",
        answer:
          "We work with modern web and cloud stacks: React, TypeScript, Node.js, Next.js, Tailwind CSS, Docker, Kubernetes, AWS/GCP, and analytics tools. For creative work we use Figma, Adobe Premiere, After Effects, and related tooling.",
        topics: ["technology"],
      },
      {
        id: "existing-systems",
        question: "Can you work with existing systems?",
        answer:
          "Absolutely. We integrate with existing APIs, databases, and third-party services. We can audit legacy systems, propose migration strategies, and implement incremental improvements to minimise disruption.",
        topics: ["integration"],
      },
      {
        id: "what-we-provide",
        question: "What do you provide?",
        answer:
          "We provide end-to-end services: product and website development, DevOps & infrastructure, branding & creative production, video production, and digital marketing. Each engagement is scoped with a written agreement.",
        topics: ["services"],
      },
      {
        id: "timeline",
        question: "Project Timeline",
        answer:
          "Timelines depend on scope. Small websites typically take 2–6 weeks, while larger platforms and films may take several months. We provide a project schedule during scoping.",
        topics: ["timeline"],
      },
      {
        id: "payments",
        question: "Payment Terms",
        answer:
          "Payments are per the contract or invoice. We usually request an upfront deposit, milestone payments for larger projects, and final payment on delivery. Late payments may incur fees.",
        topics: ["payment"],
      },
    ],
    []
  );

  const filtered = faqs.filter((f) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q) || f.topics.join(" ").includes(q);
  });

  const popularTopics = [
    { id: "timeline", label: "Project Timeline" },
    { id: "payment", label: "Payment Terms" },
    { id: "support", label: "Support & Maintenance" },
    { id: "technology", label: "Technology Stack" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-6 overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-lime-400/20 to-lime-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full">FAQ</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">Frequently Asked Questions</h1>
            <p className="text-sm sm:text-base text-muted-foreground">Get quick answers to common questions about our services, timelines, pricing, and support.</p>
          </div>
        </div>
      </section>

      <main className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Left: search + accordion (span 2 on lg) */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <label className="sr-only">Search FAQs</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center text-muted-foreground"><Search className="w-5 h-5" /></span>
                  <Input
                    value={query}
                    onChange={(e: any) => setQuery(e.target.value)}
                    placeholder="Search FAQs, topics, or keywords..."
                    className="pl-12"
                  />
                  {query && (
                    <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground hover:text-primary">
                      Clear
                    </button>
                  )}
                </div>
              </div>

              <div className="mb-6 flex flex-wrap gap-3">
                <Button asChild variant="outline">
                  <Link to="/contact">Contact Support</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link to="/services">View Services</Link>
                </Button>
                <Button asChild variant="link">
                  <Link to="/contact">Ask a Question</Link>
                </Button>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTopics.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setQuery(t.id)}
                      className={`px-3 py-1 text-sm rounded-full border transition ${query === t.id ? 'bg-primary text-primary-foreground border-primary' : 'bg-card/60 border-border hover:bg-primary/10'}`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <section className="mb-12">
                {filtered.length === 0 ? (
                  <div className="p-6 rounded-lg bg-card/50 border border-border text-center">
                    <p className="text-sm text-muted-foreground mb-4">No results found. Try different keywords or contact support.</p>
                    <Button asChild>
                      <Link to="/contact">Contact Support</Link>
                    </Button>
                  </div>
                ) : (
                  <Accordion type="single" collapsible defaultValue={filtered[0]?.id}>
                    {filtered.map((f) => (
                      <AccordionItem key={f.id} value={f.id}>
                        <AccordionTrigger className="text-lg font-medium">{f.question}</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm text-muted-foreground mb-3">{f.answer}</p>
                          <div className="flex flex-wrap gap-2">
                            {f.topics.map((topic) => (
                              <span key={topic} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{topic}</span>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                )}
              </section>
            </div>

            {/* Right: sidebar */}
            <aside className="hidden lg:block">
              <div className="p-6 rounded-2xl bg-card/50 border border-border/30 space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Still Have Questions?</h4>
                  <p className="text-sm text-muted-foreground mb-3">Can't find the answer you're looking for? Reach out and we'll get back to you quickly.</p>
                  <div className="flex flex-col space-y-3">
                    <Button asChild>
                      <Link to="/contact">Contact Support</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/services">View Services</Link>
                    </Button>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Popular Topics</h5>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>Project Timeline</li>
                    <li>Payment Terms</li>
                    <li>Support & Maintenance</li>
                    <li>Technology Stack</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
