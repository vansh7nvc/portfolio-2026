import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: "POWER UNIT (LANGUAGES)",
    items: ["Python", "C++", "JavaScript", "SQL", "C"],
    level: 92
  },
  {
    name: "AERODYNAMICS (ML/AI)",
    items: ["PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "GANs"],
    level: 88
  },
  {
    name: "CHASSIS (WEB/TOOLS)",
    items: ["React", "Node.js", "FastAPI", "Git", "Docker"],
    level: 85
  }
];

const Skills = () => {
  return (
    <div className="section-padding bg-dark-alt" id="skills">
      <div className="container">
        <h2 className="section-title">LIVE <span className="text-neon">TELEMETRY</span></h2>
        
        <div className="telemetry-grid">
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              className="telemetry-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="telemetry-header">
                <h3>{cat.name}</h3>
                <span className="telemetry-value text-neon">{cat.level}%</span>
              </div>
              
              <div className="telemetry-bar-bg">
                <motion.div 
                  className="telemetry-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${cat.level}%` }}
                  transition={{ duration: 1.5, ease: "circOut" }}
                />
              </div>

              <div className="telemetry-items">
                {cat.items.map((item, i) => (
                  <span key={i} className="telemetry-tag">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
