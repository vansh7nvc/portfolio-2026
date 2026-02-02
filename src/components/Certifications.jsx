import { certifications } from '../data';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = () => {
  return (
    <div className="section-padding" id="certifications">
      <div className="container">
        <div className="section-header">
           <h2 className="section-title">LICENSE <span className="text-neon">TO DRIVE</span></h2>
        </div>
        
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              className="cert-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="cert-icon">
                <Award size={32} color="var(--neon)" />
              </div>
              <div className="cert-content">
                <span className="cert-date text-muted">{cert.date}</span>
                <h3 className="cert-title">{cert.name}</h3>
                <p className="cert-issuer text-neon">{cert.issuer}</p>
                <p className="cert-desc text-muted">{cert.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
