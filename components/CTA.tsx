import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto rounded-[3rem] bg-gradient-to-br from-primary to-blue-900 p-16 md:p-24 text-center relative overflow-hidden shadow-[0_0_50px_rgba(43,108,238,0.3)] group">
        
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            Ready to Wake Up <br />
            to Progress?
          </h2>
          
          <p className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-medium">
            The autonomous future doesn't wait. Join the top 1% of enterprises operating at the speed of AI.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-12 h-20 bg-white text-primary text-xl font-black rounded-2xl hover:bg-slate-50 transition-all shadow-2xl flex items-center justify-center gap-3 transform hover:-translate-y-1">
              Schedule Your Free Audit
              <span className="material-symbols-outlined">calendar_today</span>
            </button>
            
            <div className="flex items-center gap-3 px-4 py-2 bg-black/20 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="size-10 rounded-full border-2 border-white/20 bg-emerald-500/20 flex items-center justify-center animate-pulse">
                <span className="material-symbols-outlined text-emerald-400 text-xl">bolt</span>
              </div>
              <p className="text-white/90 text-sm font-bold tracking-tight text-left">
                Available for<br/>3 new partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;