import React from 'react';

const LandingPage = () => {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      color: '#3a0ca3',
      padding: '0 1rem',
    },
    hero: {
      padding: '4rem 1rem',
      textAlign: 'center',
      background: '#f5f5f5',
    },
    heroTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#9d4edd',
      marginBottom: '1rem',
    },
    heroText: {
      fontSize: '1.1rem',
      color: '#4a3c67',
    },
    heroButton: {
      marginTop: '2rem',
      padding: '0.8rem 2rem',
      fontSize: '1rem',
      background: '#f72585',
      color: '#fff',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
      fontWeight: '600',
    },
    section: {
      padding: '4rem 1rem',
      textAlign: 'center',
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '1.5rem',
      color: '#9d4edd',
    },
    featureList: {
      listStyle: 'none',
      padding: 0,
      fontSize: '1.1rem',
      color: '#4a3c67',
    },
    testimonialWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1.5rem',
    },
    card: {
      background: '#fff',
      borderRadius: '16px',
      padding: '2rem',
      maxWidth: '350px',
      width: '100%',
      boxShadow: '0 8px 20px rgba(157, 78, 221, 0.15)',
      textAlign: 'left',
      flex: '1 1 300px',
    },
    quote: {
      fontSize: '1rem',
      fontStyle: 'italic',
      color: '#4a3c67',
    },
    author: {
      marginTop: '1rem',
      fontWeight: '600',
      color: '#f72585',
    },

    // Media query simulation using window.innerWidth (optional below)
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to Career Girl Global</h1>
        <p style={styles.heroText}>
          Your one-stop solution for modern web experiences and women-led opportunities.
        </p>
        <button style={styles.heroButton}>Get Started</button>
      </section>

      {/* Features Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Features</h2>
        <ul style={styles.featureList}>
          <li>🚀 Fast Performance</li>
          <li>🔒 Secure & Scalable</li>
          <li>🛠 Built with MERN Stack</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section style={{ ...styles.section, background: '#f9f9f9' }}>
        <h2 style={styles.sectionTitle}>Testimonials</h2>
        <div style={styles.testimonialWrapper}>
          <div style={styles.card}>
            <p style={styles.quote}>
              “Career Girl Global gave me the confidence and tools to launch my brand. Their platform is
              empowering and incredibly easy to use.”
            </p>
            <p style={styles.author}>– Alisha Verma, Fashion Blogger</p>
          </div>

          <div style={styles.card}>
            <p style={styles.quote}>
              “Joining this community was the best decision I made for my professional growth. I got my first
              client within a week!”
            </p>
            <p style={styles.author}>– Sneha Kapoor, Digital Marketer</p>
          </div>

          <div style={styles.card}>
            <p style={styles.quote}>
              “From branding to outreach, Career Girl Global has helped me level up in ways I never imagined.
              Highly recommended!”
            </p>
            <p style={styles.author}>– Meera Sharma, Entrepreneur</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
