import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Server, Database, Cpu, GitBranch, Heart, Glasses, BrainCircuit } from "lucide-react";

const skillCategories = [
  {
    title: "Front-End Development",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Back-End Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "RESTful APIs", "Python"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Database Management",
    icon: Database,
    skills: ["MongoDB", "MySQL"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Augmented Reality",
    icon: Glasses,
    skills: ["Unity", "AR Development", "3D Modeling"],
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "AI & Data Science",
    icon: BrainCircuit,
    skills: ["Machine Learning", "Data Science", "Python", "Data Analysis"],
    color: "from-cyan-500/20 to-teal-500/20",
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub"],
    color: "from-red-500/20 to-rose-500/20",
  },
  {
    title: "Soft Skills",
    icon: Heart,
    skills: ["Problem Solving", "Communication", "Team Collaboration", "Debugging"],
    color: "from-violet-500/20 to-indigo-500/20",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 relative" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] glow-orb opacity-30" />
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
              Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold"
            >
              Skills & <span className="text-gradient">Technologies</span>
            </motion.h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="group bg-glass-premium rounded-2xl p-6 hover-glow gradient-border card-shine overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300">
                      <category.icon className="text-primary" size={22} />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-gradient-lavender">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        className="px-3 py-2 bg-secondary/60 text-foreground text-sm rounded-lg border border-border/50 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Section Divider */}
      <div className="section-divider mt-28 mx-auto max-w-4xl" />
    </section>
  );
};

export default SkillsSection;
