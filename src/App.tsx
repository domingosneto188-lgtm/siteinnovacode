import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Divider from './components/Divider';
import Mission from './components/Mission';
import Services from './components/Services';
import Contact from './components/Contact';
import Quote from './components/Quote';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Divider />
      <Mission />
      <Services />
      <Contact />
      <Quote />
      <Footer />
    </div>
  );
}

export default App;