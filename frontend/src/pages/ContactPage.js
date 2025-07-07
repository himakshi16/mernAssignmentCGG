import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  const styles = {
    container: {
      padding: '2rem 1rem',
      maxWidth: '600px',
      margin: '0 auto',
      fontFamily: "'Poppins', sans-serif",
      color: '#3a0ca3',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '1.5rem',
      textAlign: 'center',
      color: '#9d4edd',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
