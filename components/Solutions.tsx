import React from 'react';

const SolutionCard: React.FC<{
  title: string;
  description: string;
  icon: string;
  color: 'purple' | 'blue' | 'cyan';
  features: string[];
}> = ({ title, description, icon, color, features }) => {
  const colorClasses = {
    purple: {
      text: 'text-neon-purple',
      bg: 'bg-neon-purple/10',
      border: 'border-neon-purple/20',
      hoverBorder: 'hover:border-neon-purple/50',
      iconText: 'text-neon-purple',
      glow: 'group-hover:shadow-[0_0_30px_rgba(188,19,254,0.15)]'
    },
    blue: {
      text: 'text-primary',
      bg: 'bg-primary/10',
      border: 'border-primary/20',
      hoverBorder: 'hover:border-primary/50',
      iconText: 'text-primary',
      glow: 'group-hover:shadow-[0_0_30px_rgba(43,108,238,0.15)]'
    },
    cyan: {
      text: 'text-neon-blue',
      bg: 'bg-neon-blue/10',
      border: 'border-neon-blue/20',
      hoverBorder: 'hover:border-neon-blue/50',
      iconText: 'text-neon-blue',
      glow: 'group-hover:shadow-[0_0_30px_rgba(0,243,255,0.15)]'
    }
  };

  const theme = colorClasses[color];

  return (
    <div className={`group relative p-10 rounded-3xl bg-card-dark border border-white/5 ${theme.hoverBorder} ${theme.glow} transition-all duration-500 overflow-hidden`}>
      <div className={`absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500`}>
        <span className={`material-symbols-outlined text-9xl ${theme.iconText}`}>{icon}</span>
      </div>
      
      <div className={`size-16 rounded-2xl ${theme.bg} flex items-center justify-center mb-8 border ${theme.border}`}>
        <span className={`material-symbols-outlined ${theme.iconText} text-4xl`}>{icon}</span>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-400 leading-relaxed mb-8 min-h-[80px]">
        {description}
      </p>
      
      <ul className="space-y-4">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-slate-300">
            <span className={`material-symbols-outlined ${theme.text} text-xl`}>check_circle</span>
            <span className="text-sm font-medium">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-32 px-6 bg-background-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-neon-purple font-black text-sm tracking-[0.3em] uppercase block mb-4">Phase 1: Custom Workflows</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight max-w-4xl">
            Building Your Autonomous Infrastructure
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SolutionCard
            title="Enterprise Integration"
            description="We bridge the gap between legacy systems and modern AI, creating a unified data fabric that flows across your entire tech stack."
            icon="hub"
            color="purple"
            features={['API Orchestration', 'Legacy System Uplift']}
          />
          <SolutionCard
            title="Intelligent LLM Agents"
            description="Deploy specialized AI agents that think, reason, and execute complex business logic autonomously 24 hours a day."
            icon="psychology"
            color="blue"
            features={['Autonomous Reasoning', 'Context-Aware Memory']}
          />
          <SolutionCard
            title="Data Orchestration"
            description="Turn raw data into actionable insights through automated processing, cleaning, and real-time visualization pipelines."
            icon="database"
            color="cyan"
            features={['Real-time ETL Pipelines', 'Predictive Modeling']}
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;