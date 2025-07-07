import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      padding: '1rem 0',
      backgroundColor: '#fff0f6', // soft pink
      boxShadow: '0 2px 8px rgba(157, 78, 221, 0.1)',
      fontFamily: "'Poppins', sans-serif",
      fontWeight: '600',
    },
    link: {
      color: '#9d4edd',
      textDecoration: 'none',
      fontSize: '1.1rem',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      userSelect: 'none',
    },
    activeLink: {
      backgroundColor: '#f72585', // bright pink background
      color: '#fff',
      boxShadow: '0 4px 12px rgba(247, 37, 133, 0.5)',
    },
    hoverEffect: {
      cursor: 'pointer',
    },
  };

  return (
    <nav style={styles.nav}>
      <Link
        to="/"
        style={{
          ...styles.link,
          ...(location.pathname === '/' ? styles.activeLink : {}),
        }}
      >
        Home
      </Link>
      <Link
        to="/contact"
        style={{
          ...styles.link,
          ...(location.pathname === '/contact' ? styles.activeLink : {}),
        }}
      >
        Contact
      </Link>
      <Link
        to="/contact-details"
        style={{
          ...styles.link,
          ...(location.pathname === '/contact-details' ? styles.activeLink : {}),
        }}
      >
        Contact Details
      </Link>
    </nav>
  );
};

export default Navbar;
