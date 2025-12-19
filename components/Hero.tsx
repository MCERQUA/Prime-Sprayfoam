
import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Using a placeholder for the exterior house image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury House Construction" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="md:w-3/4 lg:w-2/3">
          <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 delay-100">
            <span className="inline-block mb-4 px-4 py-1 border border-prime-blue/50 rounded-full bg-black/50 backdrop-blur-sm text-prime-blue font-bold text-xs uppercase tracking-[0.2em]">
              <i className="fa-solid fa-location-dot mr-2"></i> Serving Russellville, KY & Surrounding Areas
            </span>
          </div>
          
          <h1 className="reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300 text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[0.9] mb-8 italic">
            EFFICIENCY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-prime-blue to-white drop-shadow-[0_2px_10px_rgba(0,191,255,0.4)]">STARTS HERE.</span>
          </h1>
          
          <p className="reveal opacity-0 translate-y-10 transition-all duration-1000 delay-500 text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
            Stop throwing money out the window. Upgrade to the premier spray foam insulation solution in Kentucky. Seal your home, lower your bills, and increase comfort.
          </p>
          
          <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 delay-700 flex flex-col sm:flex-row gap-5">
            <a href="#contact" className="group bg-prime-blue text-black px-10 py-5 rounded-sm font-bold uppercase tracking-wider flex items-center justify-center hover:bg-white transition-all duration-300 shadow-[0_5px_25px_rgba(0,191,255,0.3)]">
              Start Your Project
              <i className="fa-solid fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform"></i>
            </a>
            <a href="tel:+12705718100" className="border-2 border-white/20 text-white px-10 py-5 rounded-sm font-bold uppercase tracking-wider flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 backdrop-blur-sm">
              <i className="fa-solid fa-phone mr-3 text-prime-blue"></i> (270) 571-8100
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block text-prime-blue/50 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Explore</span>
          <i className="fa-solid fa-chevron-down text-xl"></i>
        </div>
      </div>
    </header>
  );
};

export default Hero;
