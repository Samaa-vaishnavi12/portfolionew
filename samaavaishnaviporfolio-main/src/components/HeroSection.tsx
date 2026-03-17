import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] glow-orb animate-orb-float"
        />
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] glow-orb animate-orb-float"
          style={{ animationDelay: "-4s" }}
        />
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] glow-orb animate-orb-float"
          style={{ animationDelay: "-8s" }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(167, 175, 223, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167, 175, 223, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-primary/30 shadow-lg shadow-primary/20 overflow-hidden">
                <img
                  src="/me.jpeg"
                  alt="S.Samaa Vaishnavi"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <span className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-background" />
            </div>
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-glass-premium text-accent text-sm font-medium border border-accent/20 backdrop-blur-xl">
              <Sparkles size={16} className="text-primary" />
              Welcome to my Portfolio
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-[1.1]"
          >
            Hi, I'm{" "}
            <span className="name-glitch text-gradient">
              S.Samaa Vaishnavi
              <span className="p p1" aria-hidden="true" />
              <span className="p p2" aria-hidden="true" />
              <span className="p p3" aria-hidden="true" />
              <span className="p p4" aria-hidden="true" />
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-10 font-light max-w-3xl mx-auto leading-relaxed"
          >
            Aspiring Full Stack Developer | Building{" "}
            <span className="text-accent font-medium">Scalable</span> &{" "}
            <span className="text-accent font-medium">User-Friendly</span> Web Applications
          </motion.p>

          {/* CTA Buttons — same fixed width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button asChild size="lg"
              className="relative bg-gradient-primary text-primary-foreground hover:opacity-90 transition-all duration-300 font-semibold text-lg rounded-xl overflow-hidden group w-44"
            >
              <a href="#projects">
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg"
              className="border-accent/30 text-foreground hover:bg-accent/10 hover:border-accent/50 font-semibold text-lg rounded-xl transition-all duration-300 w-44"
            >
              <a href="/Samaa_Vaishnavi_Resume.pdf" target="_blank" rel="noopener noreferrer">View CV</a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex gap-6 justify-center"
          >
            {[
              { href: "https://github.com/Samaa-vaishnavi12",      icon: Github,   label: "GitHub"   },
              { href: "https://linkedin.com/in/samaa-vaishnavi-s", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:samaavaishnavi12@gmail.com",         icon: Mail,     label: "Email"    },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="group relative p-4 rounded-xl bg-glass hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <social.icon size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 group">
            <span className="text-xs text-muted-foreground uppercase tracking-widest group-hover:text-accent transition-colors">
              Scroll Down
            </span>
            <div className="p-2 rounded-full border border-border group-hover:border-primary/50 transition-colors animate-bounce">
              <ArrowDown className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
