import { projects } from '../data';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="section-header">
           <h2 className="section-title">SELECTED <span className="text-neon">WORKS</span></h2>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="card project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="card-top">
                <span className="badge">{project.category}</span>
                <span className="year text-muted">{project.date}</span>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              
              <p className="project-desc">{project.desc}</p>
              
              <div className="tech-stack text-neon">
                {project.tech}
              </div>
              
              <div className="icon-overlay">
                <ArrowUpRight size={32} color="var(--black)" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
