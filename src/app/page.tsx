"use client";

import { useState, useEffect } from "react";
import { Home, Layers, Rocket, FileText, Mail, Sun, Moon, ChevronRight, Github, Linkedin, Instagram, MessageCircle, ExternalLink } from "lucide-react";

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "stack", icon: Layers, label: "Stack" },
  { id: "projects", icon: Rocket, label: "Projects" },
  { id: "cv", icon: FileText, label: "CV" },
];

const projects = [
  {
    id: 1,
    tag: "AI Automation",
    title: "Smart Business Agent",
    description: "AI-powered customer service agent that handles 85% of inquiries automatically",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    result: "+85% efficiency",
  },
  {
    id: 2,
    tag: "Web Development",
    title: "E-Commerce Platform",
    description: "Full-stack solution with AI recommendations and analytics dashboard",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    result: "+200% sales",
  },
  {
    id: 3,
    tag: "AI Integration",
    title: "Content Automation",
    description: "Automated content generation pipeline for MENA market brands",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    result: "10x faster",
  },
];

const skills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React/Next.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "AI/ML", level: 75 },
  { name: "Node.js", level: 70 },
];

const stats = [
  { value: "3+", label: "Projects" },
  { value: "8+", label: "AI Agents" },
  { value: "MENA", label: "Market" },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden">
      {/* Background Blobs */}
      <div className="blob-container">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0" />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 pt-10 pb-32 z-10">
        <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left relative">
            {/* Decorative SVG */}
            <div className="mb-[-20px] md:mb-[-40px] z-20 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <div className="transform -rotate-6 origin-left">
                <span className="font-marker text-2xl md:text-3xl text-white/80">Hi there, I'm</span>
              </div>
            </div>

            {/* Name */}
            <div className="z-10 uppercase flex flex-col gap-0 w-full max-w-[600px] font-display leading-[0.85]">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tighter self-start">
                {"Moh".split("").map((char, i) => (
                  <span
                    key={`first-${i}-${char}`}
                    className="char-animate inline-block"
                    style={{ animationDelay: `${0.2 + i * 0.05}s` }}
                  >
                    {char}
                  </span>
                ))}
              </span>
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tighter self-end mt-[-8px] sm:mt-[-15px] md:mt-[-25px]">
                {"Qanass".split("").map((char, i) => (
                  <span
                    key={`last-${i}-${char}`}
                    className="char-animate inline-block"
                    style={{ animationDelay: `${0.4 + i * 0.05}s` }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            </div>

            {/* Subtitle */}
            <div className="mt-[-5px] md:mt-[-30px] md:self-end z-20 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
              <div className="transform -rotate-3 origin-left">
                <span className="font-marker text-xl md:text-2xl gradient-text">AI Builder & Web Developer</span>
              </div>
            </div>

            {/* Dot Pattern */}
            <div className="hidden md:grid absolute top-1/2 left-0 -translate-x-8 translate-y-24 grid-cols-3 gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={`dot-${i}`} className="w-3 h-3 rounded-full border-2 border-green-500/40" />
              ))}
            </div>

            {/* Status Badges */}
            <div className="mt-12 md:mt-20 md:ml-4 relative z-50 opacity-0 animate-fade-in-up" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
              <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
                {/* Available Badge */}
                <div className="glass flex items-center gap-3 px-7 py-3.5 rounded-full cursor-default hover-lift">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 pulse-ring" />
                  </div>
                  <span className="text-[15px] font-bold tracking-tight">Available</span>
                </div>

                {/* Timezone Badge */}
                <div className="px-6 py-3 rounded-full font-semibold text-[15px] border border-white/10 shadow-lg bg-black/60 backdrop-blur-xl">
                  UTC+01:00
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 flex gap-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}>
              {stats.map((stat, i) => (
                <div key={`stat-${stat.label}-${i}`} className="text-center md:text-left">
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative flex justify-center mt-8 md:mt-0 opacity-0 animate-scale-in" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            <div className="relative inline-block max-w-full animate-float">
              {/* Background Frames */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-white/10 backdrop-blur-md border border-white/20 z-0 rounded-lg scale-[0.85] md:scale-100" />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-white/10 backdrop-blur-md border border-white/20 z-0 rounded-lg scale-[0.85] md:scale-100" />

              {/* Main Image Container */}
              <div className="relative p-4 border border-white/10 z-10 rounded-2xl glass-panel">
                <div className="relative w-full max-w-[320px] aspect-[4/5] overflow-hidden bg-white/5 rounded-lg">
                  <img
                    src="/img/foto1.img.png"
                    alt="Mohamad Qanass"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop";
                    }}
                  />
                </div>

                {/* Version Labels */}
                <div className="absolute -left-8 top-1/2 -rotate-90 font-bold text-xl hidden sm:block text-white/30">
                  v4.0
                </div>
                <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 font-bold text-xl text-white/30">
                  2025
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}>
          <button
            onClick={() => scrollToSection("contact")}
            className="glass flex items-center gap-2 px-6 py-3 rounded-full hover-lift group"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">Contact</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-6 md:px-12 lg:px-20 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <span className="text-green-500 font-medium mb-2 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-display uppercase">Featured Projects</h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Each project tells a story of problem-solving and real business impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden glass-panel hover-lift cursor-pointer opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.3 + i * 0.15}s`, animationFillMode: "forwards" }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-500/20 text-green-400 rounded-full mb-3">
                    {project.tag}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-bold">{project.result}</span>
                    <ExternalLink className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="stack" className="relative py-20 px-6 md:px-12 lg:px-20 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-green-500 font-medium mb-2 block">Tech Stack</span>
            <h2 className="text-4xl md:text-5xl font-display uppercase">Skills & Abilities</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className="glass-panel rounded-xl p-6 hover-lift"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-green-400 font-bold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="relative py-20 px-6 md:px-12 lg:px-20 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-green-500 font-medium mb-2 block">Experience</span>
            <h2 className="text-4xl md:text-5xl font-display uppercase">Digital CV</h2>
          </div>

          <div className="space-y-8">
            {/* About */}
            <div className="glass-panel rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                About Me
              </h3>
              <p className="text-white/70 leading-relaxed">
                I'm a passionate frontend web developer and AI builder based in Vienna, Austria.
                I specialize in creating visually appealing, user-friendly websites and AI-powered
                automation solutions for businesses in the MENA market. Always eager to learn
                new technologies and deliver high-quality digital experiences.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-panel rounded-xl p-6">
                <h4 className="text-sm text-white/50 mb-1">Age</h4>
                <p className="font-semibold">25</p>
              </div>
              <div className="glass-panel rounded-xl p-6">
                <h4 className="text-sm text-white/50 mb-1">Location</h4>
                <p className="font-semibold">Vienna, Austria</p>
              </div>
              <div className="glass-panel rounded-xl p-6">
                <h4 className="text-sm text-white/50 mb-1">Email</h4>
                <p className="font-semibold">mohamad.qanass@gmail.com</p>
              </div>
              <div className="glass-panel rounded-xl p-6">
                <h4 className="text-sm text-white/50 mb-1">Availability</h4>
                <p className="font-semibold text-green-400">Open to opportunities</p>
              </div>
            </div>

            {/* Services */}
            <div className="glass-panel rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Services
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Web Development", desc: "Building websites with HTML, CSS, JavaScript & React" },
                  { title: "Responsive Design", desc: "100% responsive for all devices" },
                  { title: "AI Integration", desc: "Smart automation & AI-powered solutions" },
                  { title: "Support", desc: "Ongoing support after project delivery" },
                ].map((service, i) => (
                  <div key={service.title} className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <h4 className="font-semibold mb-1">{service.title}</h4>
                    <p className="text-sm text-white/60">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6 md:px-12 lg:px-20 z-10 mb-24">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-green-500 font-medium mb-2 block">Let's Work Together</span>
          <h2 className="text-4xl md:text-5xl font-display uppercase mb-6">Get In Touch</h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">
            Ready to transform your business with AI solutions? Let's discuss your next project.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-10">
            <a
              href="https://www.instagram.com/963m.q?igsh=N3hubHc0dXl2bnRj&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full glass flex items-center justify-center hover-lift group"
            >
              <Instagram className="w-6 h-6 group-hover:text-green-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamad-qanass-635017256"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full glass flex items-center justify-center hover-lift group"
            >
              <Linkedin className="w-6 h-6 group-hover:text-green-400 transition-colors" />
            </a>
            <a
              href="https://wa.me/+436765112599"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full glass flex items-center justify-center hover-lift group"
            >
              <MessageCircle className="w-6 h-6 group-hover:text-green-400 transition-colors" />
            </a>
            <a
              href="https://github.com/mqanass"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full glass flex items-center justify-center hover-lift group"
            >
              <Github className="w-6 h-6 group-hover:text-green-400 transition-colors" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:mohamad.qanass@gmail.com"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href="https://wa.me/+436765112599"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

          {/* Email Display */}
          <p className="mt-8 text-white/40 text-sm">
            mohamad.qanass@gmail.com
          </p>
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-max max-w-[95%]">
        <div className="flex items-center gap-3 p-3 px-6 rounded-3xl backdrop-blur-xl bg-black/60 border border-white/10 shadow-2xl">
          <div className="flex items-center gap-1.5">
            {navItems.map((item) => (
              <div key={item.id} className="relative nav-item">
                <button
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => setHoveredNav(item.id)}
                  onMouseLeave={() => setHoveredNav(null)}
                  className={`
                    p-3 rounded-2xl transition-all duration-200
                    ${activeSection === item.id
                      ? "bg-green-500/15 text-green-500 border border-green-500/30"
                      : "text-white/50 hover:text-white hover:scale-110 border border-transparent"
                    }
                  `}
                >
                  <item.icon className="w-6 h-6" />
                </button>

                {/* Tooltip */}
                <div className={`nav-tooltip ${hoveredNav === item.id ? "show" : ""}`}>
                  <div className="nav-tooltip-inner">{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Separator */}
          <div className="w-px h-8 bg-white/10" />

          {/* Contact & Theme */}
          <div className="flex items-center gap-1.5">
            <div className="relative nav-item">
              <button
                onClick={() => scrollToSection("contact")}
                onMouseEnter={() => setHoveredNav("contact")}
                onMouseLeave={() => setHoveredNav(null)}
                className="p-3 rounded-2xl text-white/50 hover:text-white hover:scale-110 transition-all duration-200"
              >
                <Mail className="w-6 h-6" />
              </button>
              <div className={`nav-tooltip ${hoveredNav === "contact" ? "show" : ""}`}>
                <div className="nav-tooltip-inner">Contact</div>
              </div>
            </div>

            <button
              onClick={() => setIsDark(!isDark)}
              className="p-3 rounded-2xl text-white/50 hover:text-white hover:scale-110 transition-all duration-200"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Secret Page Button */}
      <button
        aria-label="Go to CV"
        onClick={() => scrollToSection("cv")}
        className="fixed right-0 top-1/2 -translate-y-1/2 glass rounded-l-xl p-3 z-40 hover:bg-white/10 transition-colors"
      >
        <ChevronRight className="w-5 h-5 text-white/50" />
      </button>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center text-white/30 text-sm mb-20">
        <p>&copy; 2025 Mohamad Qanass. All rights reserved.</p>
      </footer>
    </main>
  );
}
