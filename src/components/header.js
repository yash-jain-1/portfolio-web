import React from 'react';
import './Styling/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        
        <ul>
          <li>
          <section id="hero">
            <div className="containerX">
                <svg viewBox="0 0 960 300">
                    <symbol id="s-text">
                        <text textAnchor="middle" x="50%" y="80%">Yash Jain</text>
                    </symbol>

                    {/* Use the symbol directly */}
                    <g className="g-ants">
                        <use href="#s-text" className="text-copy"></use>
                        <use href="#s-text" className="text-copy"></use>
                        <use href="#s-text" className="text-copy"></use>
                        <use href="#s-text" className="text-copy"></use>
                        <use href="#s-text" className="text-copy"></use>
                    </g>
                </svg>

                </div>
                <div>
            </div>
        </section>
          </li>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
