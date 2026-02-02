import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [lights, setLights] = useState(0);
  const [showCar, setShowCar] = useState(false);
  
  // Pre-calculate delays for deterministic rendering to avoid 'impure render' lint error
  const delays = useMemo(() => [0.1, 0.05, 0.2, 0.0, 0.15], []);

  useEffect(() => {
    // Sequence: 5 Red Lights
    const timer = setInterval(() => {
      setLights(prev => {
        if (prev < 5) return prev + 1;
        clearInterval(timer);
        return 5;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (lights === 5) {
      // Wait a moment with all red lights, then trigger Green + Start Race
      const launchTimeout = setTimeout(() => {
        setLights(6); // 6 represents "Green Light" / GO state
        setShowCar(true);
        
        // Wait for cars to zoom past before completing
        const finishTimeout = setTimeout(() => {
          onComplete();
        }, 800); 
        return () => clearTimeout(finishTimeout);
      }, 1000); // 1 second hold on red lights
      return () => clearTimeout(launchTimeout);
    }
  }, [lights, onComplete]);

  return (
    <motion.div 
      className="preloader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="lights-container" style={{ zIndex: 20 }}>
         {/* 5 Lights */}
         {[...Array(5)].map((_, i) => (
            <div key={i} className={`light-housing`}>
               <motion.div 
                 className={`light ${i < lights && lights !== 6 ? 'on' : ''} ${lights === 6 ? 'green-on' : ''}`}
                 initial={{ opacity: 0.2 }}
                 animate={{ 
                   opacity: (i < lights || lights === 6) ? 1 : 0.2, 
                   backgroundColor: lights === 6 ? '#00ff00' : (i < lights ? '#ff0000' : '#330000'),
                   boxShadow: lights === 6 ? '0 0 30px #00ff00, 0 0 60px #00ff00' : (i < lights ? '0 0 30px #ff0000, 0 0 60px #ff0000' : 'inset 0 0 10px #000')
                 }}
               />
            </div>
         ))}
      </div>

      {/* Tech Starting Grid */}
      <div className="starting-grid">
        {['AI/ML', 'WEB DEV', 'CLOUD', 'DSA', 'DATA'].map((tech, index) => (
          <motion.div 
            key={tech}
            className="tech-car"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: showCar ? [1, 1, 0] : 0.5, // Fade in, then fade out as they pass
              y: showCar ? 1000 : 0, // Move forward (down/past camera)
              scale: showCar ? 3 : 1, // Get bigger as they approach
            }}
            transition={{ 
              duration: 0.8, 
              ease: "circIn",
              delay: showCar ? delays[index] : 0 
            }}
            style={{ 
               left: `${(index - 2) * 150 + (typeof window !== 'undefined' ? window.innerWidth/2 : 0)}px`, 
               marginLeft: '-40px'
            }}
          >
            <div className="car-body">
              <span className="car-label">{tech}</span>
              <div className="car-spoiler"></div>
            </div>
          </motion.div>
        ))}
        
        {/* Track Lines */}
        <div className="track-perspective">
           <div className="track-line"></div>
           <div className="track-line right"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
