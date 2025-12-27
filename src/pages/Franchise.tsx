import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-image.jpg";

const franchiseBenefits = [
  {
    title: "Established Brand",
    description: "Leverage OGGI's reputation as Kerala's premier menswear destination.",
  },
  {
    title: "Premium Identity",
    description: "Minimalist aesthetic with a strong, recognizable brand presence.",
  },
  {
    title: "Growing Community",
    description: "Join a loyal customer base and expanding product portfolio.",
  },
  {
    title: "Complete Support",
    description: "Expert guidance for design, marketing, launch, and operations.",
  },
];

// Update the branches array to include map links
const branches = [
  {
    name: "Valanchery",
    address: "Valanchery, Malappuram",
    mapLink: "https://maps.app.goo.gl/Z1KGz7qZPSa13hLs6",
  },
  {
    name: "Chattiparamba",
    address: "Chattiparamba, Malappuram",
    mapLink: "https://maps.app.goo.gl/4X1BpK91HQ8Ni1Ub9",
  },
  {
    name: "Kottakal",
    address: "Kottakkal, Malappuram",
    mapLink: "https://maps.app.goo.gl/QLz36HpUT4onoEk48",
  },
  {
    name: "Perinthalmanna",
    address: "Perinthalamanna, Malappuram",
    mapLink: "https://maps.app.goo.gl/NVZzLYVznywHxFCH7",
  },
  {
    name: "Tirur",
    address: "Tirur, Malappuram",
    mapLink: "https://maps.app.goo.gl/2xTBruXSZ5Jw8mDVA",
  },
  {
    name: "Malappuram",
    address: "Munduparamba, Malappuram",
    mapLink: "https://maps.app.goo.gl/1hcjPpUV3vqz4WAf8",
  },
  {
    name: "Edappal",
    address: "Edappal, Malappuram",
    mapLink: "https://maps.app.goo.gl/XEcz55S2FatvPiJd8",
  },
  {
    name: "Vengara",
    address: "Vengara, Malappuram",
    mapLink: "https://maps.app.goo.gl/STEAKe7rizh1GUnU7",
  },
  {
    name: "Mukkam",
    address: "Mukkam, Malappuram",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Mukkam+Malappuram+Kerala",
  },
  {
    name: "Pattambi",
    address: "Pattambi, Palakkad",
    mapLink: "https://maps.app.goo.gl/9GSHogm9C4NTh8W59",
  },
  {
    name: "Manjeri",
    address: "Manjeri, Malappuram",
    mapLink: "https://maps.app.goo.gl/nXLrTgUqg5GVCbTL8",
  },
  {
    name: "Kondotty",
    address: "Kondotty, Malappuram",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Kondotty+Malappuram+Kerala",
  },
];

const Franchise = () => {
  const { toast } = useToast();
  const benefitsRef = useRef(null);
  const branchesRef = useRef(null);
  const formRef = useRef(null);
  const ctaRef = useRef(null);

  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const branchesInView = useInView(branchesRef, { once: true, margin: "-100px" });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Received!",
      description: "We'll get back to you within 2-3 business days.",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "",
      budget: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "brightness(0.4)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <div
            className="glass-panel p-12 md:p-16 rounded-[28px] border border-white/10"
            style={{
              background: "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(65, 105, 225, 0.1)",
            }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-6">
              Partner With OGGI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Bring premium menswear experiences to your city.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg rounded-full group"
              onClick={() => document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Apply for Franchise
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Why Franchise With OGGI */}
      <section ref={benefitsRef} className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
              Why Franchise With OGGI
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join Kerala's fastest-growing premium menswear brand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {franchiseBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className="group glass-panel p-8 rounded-[20px] border border-white/10"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 0 20px rgba(65, 105, 225, 0.05)",
                }}
              >
                <div
                  className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(65, 105, 225, 0.1), transparent)",
                    border: "1px solid rgba(65, 105, 225, 0.3)",
                  }}
                />
                <CheckCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Branches */}
      <section ref={branchesRef} className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={branchesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
              Current Branches
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              OGGI locations across Kerala.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.name}
                initial={{ opacity: 0, y: 40 }}
                animate={branchesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group relative glass-panel p-8 rounded-[20px] border border-white/10"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 0 20px rgba(65, 105, 225, 0.05)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <div
                  className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(65, 105, 225, 0.1), transparent)",
                    border: "1px solid rgba(65, 105, 225, 0.3)",
                    transition: "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />

                <div className="relative mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 group-hover:bg-primary/20"
                    style={{
                      transition: "background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="relative">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    {branch.name}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-6">
                    {branch.address}
                  </p>
                  
                  <a
  href={branch.mapLink}
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground group/btn relative overflow-hidden"
                    style={{
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    onClick={() => {}}
                  >
                    <motion.span 
                      className="relative z-10 flex items-center justify-center gap-2"
                      whileHover={{ gap: 12 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      View on Map
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-primary/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section
        id="application-form"
        ref={formRef}
        className="py-24 px-6 md:px-12 bg-background relative overflow-hidden"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
              Franchise Application
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Tell us about your vision and we'll guide you through the journey.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="glass-panel p-10 rounded-[24px] border border-white/10"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 0 20px rgba(65, 105, 225, 0.05)",
            }}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-foreground font-medium mb-2">Name *</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="bg-background/50 border-white/10 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">Phone *</label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                  className="bg-background/50 border-white/10 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">Email *</label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="bg-background/50 border-white/10 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">City *</label>
                <Input
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="Your city name"
                  className="bg-background/50 border-white/10 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">Investment Budget *</label>
                <Select
                  required
                  value={formData.budget}
                  onValueChange={(value) => setFormData({ ...formData, budget: value })}
                >
                  <SelectTrigger className="bg-background/50 border-white/10 focus:border-primary">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10-25">₹10-25 Lakhs</SelectItem>
                    <SelectItem value="25-50">₹25-50 Lakhs</SelectItem>
                    <SelectItem value="50-100">₹50 Lakhs - ₹1 Crore</SelectItem>
                    <SelectItem value="100+">₹1 Crore+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your vision and experience..."
                  rows={5}
                  className="bg-background/50 border-white/10 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg rounded-full group relative overflow-hidden"
                style={{
                  boxShadow: "0 0 20px rgba(65, 105, 225, 0.3)",
                }}
              >
                <span className="relative z-10">Submit Application</span>
                <motion.div
                  className="absolute inset-0 bg-primary-foreground/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Final CTA */}
      <section
        ref={ctaRef}
        className="py-32 px-6 md:px-12 bg-background relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-8 leading-tight">
            Let's build the future of men's fashion in Kerala — together.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg rounded-full"
              onClick={() => document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-10 py-6 text-lg rounded-full"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Team
            </Button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Franchise;
