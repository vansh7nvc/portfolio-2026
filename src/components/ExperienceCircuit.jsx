import { education, achievements } from '../data';
import { motion } from 'framer-motion';

const ExperienceCircuit = () => {
  // Combine landmarks
  const events = [
    { type: 'edu', ...education[0], year: '2024 - 2028' }, // Start
    ...achievements.map(a => ({ type: 'ach', ...a, year: a.date }))
  ].sort((a, b) => {
    // simple sort, putting education at bottom as "Foundation" usually, but here it's current.
    // Let's just manually order them for the visual: Education (Base), then Achievements (Milestones)
    return 0; 
  });

  return (
    <div className="section-padding bg-dark">
      <div className="container">
        <h2 className="section-title">CAREER <span className="text-neon">CIRCUIT</span></h2>
        
        <div className="circuit-container">
            {/* The Track Line */}
            <div className="circuit-track"></div>

            {events.map((item, index) => (
                <motion.div 
                    className={`circuit-checkpoint ${index % 2 === 0 ? 'left' : 'right'}`}
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <div className="checkpoint-marker"></div>
                    <div className="checkpoint-content card">
                        <span className="circuit-year text-neon">{item.year || item.duration}</span>
                        <h3 className="circuit-title">{item.institution || item.title}</h3>
                        <p className="circuit-desc text-muted">
                            {item.degree ? `${item.degree} - ${item.specialization}` : item.desc}
                        </p>
                        {item.org && <span className="circuit-org badge">{item.org}</span>}
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCircuit;
