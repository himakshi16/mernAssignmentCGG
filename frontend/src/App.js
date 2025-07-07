import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import ContactDetails from './pages/ContactDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };

  return (
    <Router>
      <div style={layoutStyle}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact-details" element={<ContactDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
