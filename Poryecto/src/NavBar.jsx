import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <nav>
      <ul>
        <li><Link to="/" onClick={scrollToSection}>Inicio</Link></li>
        <li><Link to="/usestate" onClick={scrollToSection}>UseState</Link></li>
        <li><Link to="/useeffect" onClick={scrollToSection}>UseEffect</Link></li>
        <li><Link to="/useref" onClick={scrollToSection}>UseRef</Link></li>
        <li><Link to="/animaciones" onClick={scrollToSection}>Animaciones</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
