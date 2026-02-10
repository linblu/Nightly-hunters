import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-48 pb-32 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-glow -z-10"></div>
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-neon-purple/10 blur-[150px] rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-xs font-bold tracking-widest uppercase mb-8 hover:bg-neon-purple/20 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-purple opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-purple"></span>
          </span>
          7 Multidisciplinary Experts. 24/7 Automation.
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8">
          Automate While <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-primary to-neon-blue animate-gradient-x">
            You Sleep
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          We build bespoke AI ecosystems that function as your invisible workforce. 
          Scale your output infinitely without adding a single person to your payroll.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 h-16 bg-neon-purple hover:bg-neon-purple/90 text-white text-lg font-bold rounded-2xl transition-all shadow-2xl shadow-neon-purple/20 hover:shadow-neon-purple/40 hover:-translate-y-1 group">
            Get a Free Audit
            <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          
          <div className="flex items-center gap-4 px-6 h-16 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer backdrop-blur-sm">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img 
                  key={i}
                  alt={`Expert ${i}`} 
                  className="size-8 rounded-full border-2 border-background-dark object-cover" 
                  src={`https://picsum.photos/100/100?random=${i}`} 
                />
              ))}
              <div className="size-8 rounded-full border-2 border-background-dark bg-slate-800 flex items-center justify-center text-[10px] font-bold">+5</div>
            </div>
            <span className="text-sm font-medium text-slate-300">Trusted by 50+ Enterprises</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;