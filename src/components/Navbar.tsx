import { useState } from 'react';
import { business } from '../data/business';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const whatsappLink = `https://wa.me/${business.whatsapp}`;

  return (
    <nav className="navbar">
      <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <a href="#hero" className="logo">{business.name}</a>

      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li><a href="#services" onClick={closeMenu}>Servicios</a></li>
        <li><a href="#gallery" onClick={closeMenu}>Galería</a></li>
        <li><a href="#testimonials" onClick={closeMenu}>Opiniones</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
        <li>
          <a
            href={whatsappLink}
            target="_blank"
            onClick={closeMenu}
            className="reserve-link"
          >
            <button className="reserve-btn">Reservar</button>
          </a>
        </li>
      </ul>
    </nav>
  );
}