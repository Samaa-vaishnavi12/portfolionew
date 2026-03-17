import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code, Sparkles, Zap } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: Sparkles,
      title: "Who I Am",
      content: "Aspiring Full Stack Developer with hands-on experience in building responsive and user-friendly web applications. Skilled in front-end and back-end development, with strong problem-solving, debugging, and communication abilities, AR app development. Passionate about leveraging technical expertise to deliver innovative, real-world solutions in collaborative environments.",
    },
    {
      icon: Zap,
      title: "Current Journey",
      content: (
        <>
          Aspiring Student at <span className="text-accent font-medium">Nxtwave Academy</span> and Full Stack Intern at <span className="text-accent font-medium">Aroganam Technologies</span>. Constantly learning and growing in the field of Artificial Intelligence and Data Science.
        </>
      ),
    },
  ];

  return (
    <section id="about" className="py-28 relative" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] glow-orb opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase mb-4"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold"
            >
              Know Me <span className="text-gradient">Better</span>
            </motion.h2>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group bg-glass-premium rounded-2xl p-8 hover-glow card-shine gradient-border"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-gradient-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors">
                    <card.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold">
                    {card.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {card.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-glass-premium rounded-2xl p-8 hover-glow gradient-border"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-primary/10 border border-primary/20">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold">
                Education
              </h3>
            </div>
            
            <div className="relative pl-6 border-l-2 border-primary/30">
              <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary -translate-x-[7px] animate-pulse-glow" />
              <div className="bg-secondary/40 rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-foreground">
                      B.Tech in Artificial Intelligence and Data Science
                    </h4>
                    <p className="text-muted-foreground mt-1">
                      Akshaya College of Engineering and Technology
                    </p>
                  </div>
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                    Expected: 2027
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Section Divider */}
      <div className="section-divider mt-28 mx-auto max-w-4xl" />
    </section>
  );
};

export default AboutSection;
