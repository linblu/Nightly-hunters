import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import ROICalculator from './components/ROICalculator';
import Team from './components/Team';
import Footer from './components/Footer';
import CTA from './components/CTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-dark text-white font-sans selection:bg-neon-purple selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <ROICalculator />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;