import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
           VANSH <span className="text-neon">|</span> RESUME
        </div>
        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#skills">SKILLS</a>
          <a href="#certifications">CERTIFICATIONS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#experience">CAREER</a>
          <a href="#contact">CONTACT</a>
        </div>
        
        <button className="btn btn-outline" style={{ fontSize: '14px', padding: '8px 16px', clipPath: 'none', border: '1px solid var(--neon)', borderRadius: '4px' }} onClick={() => window.print()}>
            EXPORT DATA
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
