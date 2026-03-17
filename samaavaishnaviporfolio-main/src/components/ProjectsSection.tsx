import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Smartphone, Shield, Keyboard, Users, MessageSquare, ArrowUpRight, GraduationCap } from "lucide-react";

const projects = [
  {
    title: "Akshaya Thulir Project",
    description: "Contributed to community-driven educational initiative at Akshaya College of Engineering and Technology.",
    icon: Users,
    tags: ["Community", "Education", "Collaboration"],
    type: "Contribution",
    viewLink: "https://www.linkedin.com/posts/samaa-vaishnavi-s12_projectshowcase-expertdashboard-reactjs-activity-7437011106604154880-60je?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGVYUJIBSatp0VlBpE_ihrs2cpvLnQeX71A",
    showCode: true,
    codeLink: "https://github.com/Samaa-vaishnavi12/Akshyathulir_Student_Demo.git",
  },
  {
    title: "AR Based Culture Preservation App",
    description: "Developed an Augmented Reality application for preserving and showcasing cultural heritage through immersive AR experiences.",
    icon: Smartphone,
    tags: ["AR Development", "Mobile", "Unity"],
    type: "Major Project",
    viewLink: "https://www.linkedin.com/posts/samaa-vaishnavi-s12_augmentedreality-virtualreality-arvr-activity-7435621162556071937-oeor?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGVYUJIBSatp0VlBpE_ihrs2cpvLnQeX71A",
    showCode: false,
    codeLink: "",
  },
  {
    title: "Cyber Triage Tool",
    description: "Created a streamlined digital forensic investigation tool to enhance cybersecurity incident response.",
    icon: Shield,
    tags: ["Python", "Cybersecurity", "Forensics"],
    type: "Major Project",
    viewLink: "#",
    showCode: true,
    codeLink: "https://github.com/Samaa-vaishnavi12",
  },
  {
    title: "Smart Meeting Tool",
    description: "Record, transcribe & summarize meetings automatically using AI-powered speech recognition.",
    icon: MessageSquare,
    tags: ["AI/ML", "Speech Recognition", "Python"],
    type: "Featured",
    viewLink: "#",
    showCode: true,
    codeLink: "https://github.com/Samaa-vaishnavi12",
  },
  {
    title: "Typing Speed Tester",
    description: "An interactive web application to test and improve typing speed with real-time feedback.",
    icon: Keyboard,
    tags: ["React", "JavaScript", "Web App"],
    type: "Web Project",
    viewLink: "#",
    showCode: true,
    codeLink: "https://github.com/Samaa-vaishnavi12",
  },
  {
    title: "AI Scholar Discovery",
    description: "A web application that helps users discover academic scholars, research papers, and AI-driven insights to support learning and research exploration.",
    icon: GraduationCap,
    tags: ["React", "AI/ML", "Web App", "Python"],
    type: "Web App",
    viewLink: "#",
    showCode: true,
    codeLink: "https://github.com/Samaa-vaishnavi12",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] glow-orb opacity-40" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] glow-orb opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase mb-4"
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
          </div>

          {/* All Projects - Uniform Large Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-glass-premium rounded-2xl p-8 hover-glow gradient-border card-shine overflow-hidden flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-110">
                      <project.icon className="text-primary" size={28} />
                    </div>
                    <span className="px-3 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                      {project.type}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-auto">
                    {project.showCode && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-all duration-300 text-sm"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    <a
                      href={project.viewLink}
                      target={project.viewLink !== "#" ? "_blank" : undefined}
                      rel={project.viewLink !== "#" ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/20 text-primary transition-all duration-300 text-sm group/btn"
                    >
                      View
                      <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="section-divider mt-28 mx-auto max-w-4xl" />
    </section>
  );
};

export default ProjectsSection;
