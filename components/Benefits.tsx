
import React from 'react';
import { BenefitCardProps } from '../types';

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon, delay }) => (
  <div 
    className="reveal opacity-0 translate-y-10 transition-all duration-700 bg-black border border-gray-800 p-8 group hover:border-prime-blue hover:shadow-[0_0_30px_rgba(0,191,255,0.1)] transition-all flex flex-col items-center text-center"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="w-16 h-16 bg-prime-gray flex items-center justify-center mb-6 group-hover:bg-prime-blue transition-colors duration-500 rounded-sm">
      <i className={`fa-solid ${icon} text-2xl text-white group-hover:text-black`}></i>
    </div>
    <h4 className="text-xl font-display font-black italic text-white mb-4 uppercase">{title}</h4>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const Benefits: React.FC = () => {
  const benefits = [
    { title: "Lower Bills", desc: "Savings on heating and cooling often pay for the installation within a few years.", icon: "fa-dollar-sign" },
    { title: "Air Sealing", desc: "Prevents drafts and allergens from entering, vastly improving indoor air quality.", icon: "fa-wind" },
    { title: "Moisture Control", desc: "Reduces the risk of mold and mildew growth by sealing out moisture completely.", icon: "fa-droplet-slash" },
    { title: "Noise Reduction", desc: "Significant reduction in outside noise pollution for a quieter, more peaceful home.", icon: "fa-volume-xmark" }
  ];

  return (
    <section id="benefits" className="py-32 bg-prime-gray clip-path-slant relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-prime-blue font-bold tracking-[0.4em] uppercase text-sm mb-4">Why Choose Prime?</h2>
          <h3 className="text-5xl font-display font-black text-white italic uppercase">The Prime Advantage</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <BenefitCard key={i} title={b.title} description={b.desc} icon={b.icon} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
