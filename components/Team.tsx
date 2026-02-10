import React from 'react';

const experts = [
  { role: 'Lead Architect', name: 'Elias Thorne', imgId: 10 },
  { role: 'Strategy Director', name: 'Sarah Jenkins', imgId: 22 },
  { role: 'DevOps Lead', name: 'Marcus Chen', imgId: 33 },
  { role: 'Data Scientist', name: 'Priya Patel', imgId: 44 },
  { role: 'Backend Engineer', name: 'David Kim', imgId: 55 },
  { role: 'AI Systems', name: 'Elena Rodriguez', imgId: 66 },
  { role: 'Security Ops', name: 'James Wilson', imgId: 77 },
];

const Team: React.FC = () => {
  return (
    <section id="the-team" className="py-32 px-6 bg-background-dark relative overflow-hidden">
        {/* Subtle background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-primary font-black text-sm tracking-[0.3em] uppercase mb-4">The Technical Backbone</h2>
        <h3 className="text-4xl md:text-5xl font-black text-white mb-16">Meet your 24/7 night squad.</h3>
        
        <div className="flex flex-wrap justify-center gap-8 mb-24">
          {experts.map((expert, idx) => (
            <div key={idx} className="group flex flex-col items-center">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-neon-purple rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                <img 
                  alt={expert.name} 
                  className="relative size-24 rounded-2xl object-cover ring-2 ring-white/10 group-hover:ring-neon-purple transition-all duration-300 grayscale group-hover:grayscale-0" 
                  src={`https://picsum.photos/200/200?random=${expert.imgId}`} 
                />
              </div>
              <h4 className="text-white font-bold text-sm mb-1">{expert.name}</h4>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest group-hover:text-primary transition-colors">{expert.role}</span>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-card-dark border border-white/5 rounded-3xl p-12 text-center relative hover:border-white/10 transition-colors">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-dark px-4 text-neon-purple">
                <span className="material-symbols-outlined text-4xl">format_quote</span>
            </span>
          <p className="text-2xl md:text-3xl text-slate-300 font-medium italic mb-10 leading-relaxed">
            "We didn't just want an agency. We wanted a team that understood the nuances of our business. Nightly delivered a custom engine that saved us 40 hours a week in our first month."
          </p>
          
          <div className="flex flex-col items-center">
            <img 
              alt="Marcus Thorne" 
              className="size-16 rounded-full object-cover mb-4 ring-2 ring-neon-purple shadow-[0_0_15px_rgba(188,19,254,0.3)]" 
              src="https://picsum.photos/200/200?random=99" 
            />
            <p className="text-white font-black text-lg">Marcus Thorne</p>
            <p className="text-neon-purple font-bold text-sm tracking-widest uppercase">CTO, Vertex Logistics</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;