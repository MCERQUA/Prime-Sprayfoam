
import React from 'react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, reverse }) => {
  return (
    <div className={`flex flex-col lg:flex-row gap-12 items-center mb-24 last:mb-0 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      {/* Image Container */}
      <div className="w-full lg:w-1/2 reveal opacity-0 translate-y-10 transition-all duration-1000">
        <div className="group relative overflow-hidden rounded-sm border border-gray-800">
          <img src={image} alt={title} className="w-full h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <div className="h-1 w-12 bg-prime-blue mb-4"></div>
            <h4 className="text-3xl font-display font-black text-white uppercase italic">{title}</h4>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-1/2 reveal opacity-0 translate-y-10 transition-all duration-1000 delay-200">
        <h3 className="text-prime-blue font-bold tracking-[0.3em] uppercase text-xs mb-4">Prime Insulation Solution</h3>
        <h4 className="text-4xl font-display font-black text-white italic mb-6 uppercase leading-tight">{title}</h4>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          {description}
        </p>
        
        <div className="space-y-4 mb-10">
          {['Airtight Seal', 'R-Value Excellence', 'Eco-Friendly Materials', 'Precision Application'].map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-prime-blue/10 flex items-center justify-center text-prime-blue">
                <i className="fa-solid fa-check text-xs"></i>
              </div>
              <span className="text-gray-200 font-medium uppercase text-sm tracking-widest">{feature}</span>
            </div>
          ))}
        </div>

        <a href="#contact" className="inline-flex items-center border-b-2 border-prime-blue pb-1 text-white hover:text-prime-blue transition-all group font-bold uppercase text-sm tracking-widest">
          Request Estimate
          <i className="fa-solid fa-arrow-right-long ml-3 group-hover:translate-x-2 transition-transform"></i>
        </a>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 reveal opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-prime-blue font-bold tracking-[0.4em] uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-5xl md:text-6xl font-display font-black text-white uppercase italic">Built For Performance</h3>
        </div>

        <ServiceCard 
          title="Pole Barns & Metal Buildings"
          description="Large agricultural or commercial storage structures often suffer from condensation and extreme temperature swings. Our spray foam solution provides a thermal break that regulates temperature and protects your assets."
          image="https://images.unsplash.com/photo-1590674033314-14371894a4b2?auto=format&fit=crop&q=80&w=1200"
        />

        <ServiceCard 
          title="Residential Insulation"
          description="From new construction walls to attic retrofits, we seal the most common air leak points in your home. This drastically improves HVAC efficiency and creates a sound barrier for a quieter, healthier environment."
          image="https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=1200"
          reverse
        />
      </div>
    </section>
  );
};

export default Services;
