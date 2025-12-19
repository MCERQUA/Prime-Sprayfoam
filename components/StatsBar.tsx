
import React from 'react';

const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: "fa-bolt",
      title: "Energy Efficient",
      desc: "Reduce energy costs by up to 50% immediately."
    },
    {
      icon: "fa-shield-halved",
      title: "Lifetime Durability",
      desc: "Will not sag, settle, or degrade over time."
    },
    {
      icon: "fa-house-chimney",
      title: "Local Experts",
      desc: "Proudly serving the 42276 area with precision."
    }
  ];

  return (
    <div className="bg-prime-gray border-b border-gray-800 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700/50">
        {stats.map((stat, i) => (
          <div 
            key={i} 
            className="reveal opacity-0 translate-y-10 transition-all duration-700 p-10 text-center flex flex-col items-center group"
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-prime-blue transition-all duration-500 shadow-xl border border-gray-800">
              <i className={`fa-solid ${stat.icon} text-prime-blue group-hover:text-black text-2xl`}></i>
            </div>
            <h3 className="text-xl font-display font-black uppercase tracking-tight mb-2 italic">{stat.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">{stat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
