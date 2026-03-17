import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, CheckCircle, MapPin, Calendar, Award, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Intern",
    company: "Aroganam Technologies",
    duration: "September 2025 – April 2026",
    location: "Coimbatore, Tamil Nadu",
    certificate: null,
    achievements: [
      "Built and deployed full stack web applications using React.js and Node.js",
      "Developed RESTful APIs and integrated with frontend components for seamless user experiences",
      "Collaborated with the team on database design using MongoDB and optimized query performance",
    ],
  },
  {
    title: "Python with Data Science Intern",
    company: "Accent Techno Soft",
    duration: "June 2025 – July 2025",
    location: "Coimbatore, Tamil Nadu",
    certificate: "/S.Samaa Vaishnavi Internship Certificate.pdf",
    achievements: [
      "Developed and executed Python scripts for data collection, cleaning, and preprocessing using Pandas and NumPy",
      "Built and evaluated machine learning models for data analysis and prediction tasks",
      "Performed exploratory data analysis (EDA) and created visualizations using Matplotlib and Seaborn",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] glow-orb opacity-40" />
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
              Experience
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold"
            >
              Professional <span className="text-gradient">Journey</span>
            </motion.h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

              <div className="space-y-10">
                {experiences.map((exp, i) => (
                  <div key={exp.title} className="relative">
                    {/* Timeline node */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                      className="absolute left-0 md:left-8 top-6 w-4 h-4 rounded-full bg-primary -translate-x-1/2 animate-pulse-glow z-10"
                    />

                    {/* Card */}
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
                      className="ml-8 md:ml-20"
                    >
                      <div className="bg-glass-premium rounded-2xl p-8 hover-glow gradient-border card-shine">
                        {/* Header */}
                        <div className="flex flex-wrap items-start gap-4 mb-6">
                          <div className="p-3 rounded-xl bg-gradient-primary/10 border border-primary/20">
                            <Briefcase className="text-primary" size={24} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-heading font-semibold">
                              {exp.title}
                            </h3>
                            <p className="text-primary font-medium mt-1">{exp.company}</p>
                          </div>
                        </div>

                        {/* Meta */}
                        <div className="flex flex-wrap gap-4 mb-8">
                          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50">
                            <Calendar size={16} className="text-accent" />
                            <span className="text-sm text-muted-foreground">{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50">
                            <MapPin size={16} className="text-accent" />
                            <span className="text-sm text-muted-foreground">{exp.location}</span>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-4">
                          <h4 className="text-sm font-medium text-accent uppercase tracking-wider">
                            Key Achievements
                          </h4>
                          <ul className="space-y-4">
                            {exp.achievements.map((achievement, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 + idx * 0.1 }}
                                className="flex items-start gap-4 group"
                              >
                                <div className="p-1.5 rounded-full bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors mt-0.5">
                                  <CheckCircle className="text-primary" size={14} />
                                </div>
                                <span className="text-muted-foreground leading-relaxed">
                                  {achievement}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Certificate Button */}
                        {exp.certificate && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.7 + i * 0.15 }}
                            className="mt-6 pt-6 border-t border-border/30"
                          >
                            <a
                              href={exp.certificate}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary/20 to-accent/10 border border-primary/30 hover:border-primary/60 hover:from-primary/30 hover:to-accent/20 text-primary font-medium text-sm transition-all duration-300 group"
                            >
                              <Award size={16} className="group-hover:scale-110 transition-transform" />
                              View Certificate
                              <ExternalLink size={13} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                            </a>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="section-divider mt-28 mx-auto max-w-4xl" />
    </section>
  );
};

export default ExperienceSection;
