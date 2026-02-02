import { motion } from 'framer-motion';
import { profile } from '../data';
import { ArrowDown } from 'lucide-react';
import SpeedBackground from './SpeedBackground';

const Hero = () => {
  return (
    <div className="hero-section">
      <SpeedBackground />
      <div className="container hero-container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-content"
        >
          <div className="subtitle text-neon">
            /// {profile.title}
          </div>
          
          <h1 className="hero-title">
            <span className="block">VANSH</span>
            <span className="block outline text-transparent">SHARMA</span>
          </h1>

          <p className="hero-description">
            {profile.subtitle}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn">
              EXPLORE WORK
            </a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="btn btn-outline">
              GITHUB
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* USER: Replace this image with your own photo at src/assets/profile.png */}
          {/* For best results: Use a PNG with a transparent background (cutout) */}
          <img src="/profile_new.jpg" alt="Vansh Sharma" className="hero-image" onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://placehold.co/600x800/121212/D1F238?text=YOUR+PHOTO";
          }}/>
          <div className="hero-glow"></div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown color="var(--neon)" />
      </motion.div>
    </div>
  );
};

export default Hero;
