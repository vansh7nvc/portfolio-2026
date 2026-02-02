import { motion } from 'framer-motion';
import SpeedBackground from './SpeedBackground';
import { Download, Mail, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import NeonCore from './NeonCore';

const Hero = () => {
  const [imgError, setImgError] = useState(false);

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
           {/* Premium Driver Card Design */}
           <div className="driver-card">
              <div className="card-glass-frame">
                {!imgError ? (
                  <img 
                    src="/profile_new.jpg" 
                    alt="Vansh Sharma" 
                    className="profile-img"
                    onError={() => setImgError(true)}
                  />
                ) : (
                    <div className="profile-placeholder">
                      <span>VS</span>
                    </div>
                )}
                
                {/* Overlay Interface */}
                <div className="card-interface">
                   <div className="card-stat top-left">
                     <span className="label">ROLE</span>
                     <span className="value">DEV</span>
                   </div>
                   <div className="card-stat top-right">
                     <span className="label">TEAM</span>
                     <span className="value">LN4</span>
                   </div>
                   <div className="card-stat bottom-left">
                     <span className="label">LOC</span>
                     <span className="value">IND</span>
                   </div>
                   <div className="card-stat bottom-right">
                     <div className="status-indicator online"></div>
                   </div>
                </div>

                <div className="scan-line"></div>
                <div className="corner-brackets"></div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
