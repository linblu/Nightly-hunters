import React, { useState, useMemo } from 'react';

const industries = [
  'Logistics & Supply Chain',
  'FinTech & Banking',
  'Healthcare Operations',
  'E-commerce & Retail',
  'SaaS & Technology',
  'Real Estate'
];

interface Workflow {
  id: string;
  label: string;
  icon: string;
}

const workflows: Workflow[] = [
  { id: 'data', label: 'Data Entry', icon: 'check_circle' },
  { id: 'support', label: 'Customer Support', icon: 'headset_mic' },
  { id: 'reporting', label: 'Report Generation', icon: 'analytics' },
  { id: 'research', label: 'Lead Research', icon: 'search' },
];

const ROICalculator: React.FC = () => {
  const [industry, setIndustry] = useState(industries[0]);
  const [teamSize, setTeamSize] = useState(42);
  const [selectedWorkflows, setSelectedWorkflows] = useState<string[]>(['data', 'reporting']);

  const toggleWorkflow = (id: string) => {
    setSelectedWorkflows(prev => 
      prev.includes(id) ? prev.filter(w => w !== id) : [...prev, id]
    );
  };

  // Calculation Logic
  const results = useMemo(() => {
    // Heuristic: Each team member wastes approx 16 hours/mo on automatable tasks
    // Each selected workflow adds a multiplier
    const baseHoursPerEmployee = 10;
    const workflowMultiplier = 1 + (selectedWorkflows.length * 0.3);
    
    const hoursRecovered = Math.round(teamSize * baseHoursPerEmployee * workflowMultiplier);
    
    // Avg hourly cost $60 (fully loaded)
    const annualSavings = Math.round(hoursRecovered * 60 * 12);
    
    // Efficiency boost formula
    const efficiency = Math.min(95, Math.round(20 + (Math.log(teamSize) * 8) + (selectedWorkflows.length * 5)));

    return {
      hoursRecovered,
      annualSavings,
      efficiency
    };
  }, [teamSize, selectedWorkflows]);

  return (
    <section id="roi-calculator" className="py-32 px-6 bg-slate-900/50 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-neon-purple font-black text-sm tracking-[0.3em] uppercase block mb-4">Phase 2: ROI Assessment</span>
          <h2 className="text-4xl md:text-5xl font-black text-white">Calculate Your AI Advantage</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-10">
            <div className="bg-card-dark p-8 rounded-3xl border border-white/10 shadow-2xl">
              
              {/* Industry Select */}
              <div className="mb-10">
                <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Select Industry</label>
                <div className="relative">
                  <select 
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full bg-background-dark border border-white/10 text-white rounded-xl h-16 px-6 focus:ring-2 focus:ring-neon-purple focus:border-neon-purple outline-none appearance-none font-medium text-lg transition-all"
                  >
                    {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                  </select>
                  <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                </div>
              </div>

              {/* Team Size Slider */}
              <div className="mb-10">
                <div className="flex justify-between items-center mb-6">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Team Size</label>
                  <span className="text-2xl font-black text-neon-purple">{teamSize} Members</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="500" 
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-3 bg-background-dark rounded-lg appearance-none cursor-pointer accent-neon-purple hover:accent-neon-blue transition-all"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
                  <span>5</span>
                  <span>500+</span>
                </div>
              </div>

              {/* Workflows */}
              <div>
                <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Target Workflows</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {workflows.map((wf) => {
                    const active = selectedWorkflows.includes(wf.id);
                    return (
                      <button 
                        key={wf.id}
                        onClick={() => toggleWorkflow(wf.id)}
                        className={`flex items-center justify-between p-4 rounded-xl border font-medium transition-all duration-300 ${
                          active 
                            ? 'border-neon-purple bg-neon-purple/10 text-white shadow-[0_0_15px_rgba(188,19,254,0.2)]' 
                            : 'border-white/10 hover:border-white/30 text-slate-400 hover:text-white bg-background-dark'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className={`material-symbols-outlined ${active ? 'text-neon-purple' : 'text-slate-500'}`}>{wf.icon}</span>
                          {wf.label}
                        </span>
                        <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${active ? 'scale-100 opacity-100 text-neon-purple' : 'scale-0 opacity-0'}`}>check_circle</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Results Card */}
          <div className="lg:col-span-5 h-full">
            <div className="bg-gradient-to-br from-card-dark to-[#1a1c2e] p-10 rounded-3xl border border-neon-purple/30 relative overflow-hidden h-full flex flex-col justify-between shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-10 border-b border-white/5 pb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-neon-purple">equalizer</span>
                  Estimated Impact
                </h3>
                
                <div className="space-y-12 mb-12">
                  <div className="flex items-end justify-between group">
                    <div>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Hours Recovered / Mo</p>
                      <p className="text-5xl lg:text-6xl font-black text-white group-hover:text-neon-purple transition-colors duration-300">
                        {results.hoursRecovered.toLocaleString()}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-neon-purple text-5xl mb-1 opacity-50 group-hover:opacity-100 transition-opacity">schedule</span>
                  </div>
                  
                  <div className="flex items-end justify-between group">
                    <div>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Annual Cost Savings</p>
                      <p className="text-5xl lg:text-6xl font-black text-white group-hover:text-neon-blue transition-colors duration-300">
                        ${(results.annualSavings / 1000).toFixed(0)}k
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-neon-blue text-5xl mb-1 opacity-50 group-hover:opacity-100 transition-opacity">payments</span>
                  </div>
                  
                  <div className="flex items-end justify-between group">
                    <div>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Efficiency Boost</p>
                      <p className="text-5xl lg:text-6xl font-black text-white group-hover:text-emerald-400 transition-colors duration-300">
                        {results.efficiency}%
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-emerald-400 text-5xl mb-1 opacity-50 group-hover:opacity-100 transition-opacity">trending_up</span>
                  </div>
                </div>
              </div>

              <button className="w-full h-16 bg-neon-purple hover:bg-neon-purple/90 text-white font-bold rounded-2xl shadow-xl shadow-neon-purple/30 transition-all flex items-center justify-center gap-3 group">
                Get Detailed Analysis Report
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">description</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;