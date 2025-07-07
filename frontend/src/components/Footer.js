import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      marginTop: 'auto',
      padding: '1rem',
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
      fontFamily: "'Poppins', sans-serif",
    },
  };

  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Career Girl Global. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
