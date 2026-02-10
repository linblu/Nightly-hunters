import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-background-dark/90 backdrop-blur-md border-white/10 py-4' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="size-10 bg-gradient-to-br from-primary to-neon-purple rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(188,19,254,0.4)] group-hover:shadow-[0_0_25px_rgba(188,19,254,0.6)] transition-all">
            <span className="material-symbols-outlined text-white text-2xl">nights_stay</span>
          </div>
          <span className="text-xl font-black tracking-tighter text-white">NIGHTLY</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Solutions', 'ROI Calculator', 'The Team'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-slate-400 hover:text-neon-purple transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-purple transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button className="px-6 h-10 bg-white/5 hover:bg-white/10 text-white text-sm font-bold border border-white/10 rounded-lg transition-all hover:border-neon-purple/50">
          Client Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;