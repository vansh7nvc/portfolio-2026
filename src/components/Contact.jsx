import { profile } from '../data';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <div className="section-padding contact-section">
      <div className="container text-center">
        <h2 className="huge-text">LET'S TALK</h2>
        
        <div className="contact-links">
           <a href={`mailto:${profile.email}`} className="contact-pill">
             <Mail size={20} />
             {profile.email}
           </a>
           <a href={`tel:${profile.phone}`} className="contact-pill">
             <Phone size={20} />
             {profile.phone}
           </a>
        </div>

        <div className="social-row">
           <a href={profile.socials.linkedin} className="social-icon">
             <Linkedin size={32} />
           </a>
           <a href={profile.socials.github} className="social-icon">
             <Github size={32} />
           </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
