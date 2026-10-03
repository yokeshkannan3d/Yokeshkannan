import React from 'react';
import { Linkedin, Mail, Instagram } from 'lucide-react';
import './ContactSection.css';

function ContactSection() {
  const socials = [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:yokeshkannan3d@gmail.com' },
    { icon: Instagram, label: 'Instagram', href: '#' },
  ];

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <div className="social-links">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className="social-link"
                aria-label={social.label}
                title={social.label}
              >
                <Icon size={28} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
