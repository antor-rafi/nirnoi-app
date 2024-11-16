import React from 'react';
import './Footer.css';  // Custom styles for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">&copy; 2024 Nirnoi. All Rights Reserved.</p>
        <ul className="footer-links">
          <li><a href="/about" className="footer-link">About</a></li>
          <li><a href="/contact" className="footer-link">Contact</a></li>
          <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
        </ul>
        <div className="footer-socials">
          <a href="https://facebook.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://instagram.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};