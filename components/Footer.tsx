import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 bg-gradient-to-br from-primary to-neon-purple rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-2xl">nights_stay</span>
              </div>
              <span className="text-xl font-black tracking-tighter text-white">NIGHTLY</span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed text-sm">
              The elite AI automation agency specializing in autonomous infrastructure and custom workflow orchestration.
              <br /><br />
              Automation that works while you sleep.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-neon-purple transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-neon-purple transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-neon-purple transition-colors">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Solutions</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-neon-purple transition-colors">Finance AI</a></li>
                <li><a href="#" className="hover:text-neon-purple transition-colors">Ops Sync</a></li>
                <li><a href="#" className="hover:text-neon-purple transition-colors">Marketing Pipelines</a></li>
              </ul>
            </div>
             <div>
              <h4 className="text-white font-bold mb-6">Connect</h4>
              <div className="flex gap-4">
                  {['mail', 'link', 'forum'].map(icon => (
                       <a key={icon} href="#" className="size-10 rounded-full bg-surface-dark flex items-center justify-center hover:bg-primary transition-colors text-white">
                        <span className="material-symbols-outlined text-lg">{icon}</span>
                       </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-sm font-medium">© 2024 Nightly AI. Built for the autonomous age.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-slate-600 hover:text-white transition-colors text-sm font-medium">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-white transition-colors text-sm font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;