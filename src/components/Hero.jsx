import { motion } from 'framer-motion';
import SpeedBackground from './SpeedBackground';
import { Download, Mail, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import NeonCore from './NeonCore';

const Hero = () => {
  return (
    <section className="hero-section">
      <SpeedBackground />
      
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="status-badge">
            <span className="pulsing-dot"></span>
            AVAILABLE FOR HIRE
          </div>
          
          <h1 className="hero-title">
            VANSH <span className="neon-text">SHARMA</span>
          </h1>
          
          <p className="hero-subtitle">
            Full Stack Developer & <br/>
            High Performance Designer
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              VIEW PROJECTS <ChevronRight size={20} />
            </a>
            <a href="/resume.pdf" download className="btn btn-outline">
              DOWNLOAD RESUME <Download size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
           {/* 3D Neon Core */}
           <div style={{ width: '100%', height: '500px', cursor: 'grab', position: 'relative' }}>
               <NeonCore />
               <div className="scan-line"></div>
               <div className="corner-brackets"></div>
           </div>
           
           <div className="telemetry-tag" style={{ position: 'absolute', bottom: '-20px', right: '0', zIndex: 10 }}>
               POWER UNIT v2.0
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
