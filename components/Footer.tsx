
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-display font-black italic text-white uppercase mb-6">PRIME <span className="text-prime-blue">SPRAY FOAM</span></h2>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed mb-8">
              The premier spray foam insulation provider serving Russellville, KY. We combine professional equipment with expert application to deliver lifetime energy savings.
            </p>
            <div className="flex space-x-6">
              {['facebook', 'instagram', 'twitter'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 bg-prime-gray rounded-full flex items-center justify-center text-gray-400 hover:bg-prime-blue hover:text-black transition-all duration-300">
                  <i className={`fa-brands fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Services', 'Benefits', 'Contact', 'Quote'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-500 hover:text-prime-blue transition-colors text-sm uppercase font-bold tracking-widest">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Business Info</h4>
            <div className="space-y-4">
              <p className="text-gray-500 text-sm leading-relaxed">
                <span className="text-white block font-bold mb-1 uppercase tracking-tighter">Office</span>
                Russellville, Kentucky 42276
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                <span className="text-white block font-bold mb-1 uppercase tracking-tighter">Hours</span>
                Mon — Fri: 8AM - 6PM
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-gray-600 text-[10px] uppercase font-black tracking-[0.2em] gap-6">
          <p>&copy; {new Date().getFullYear()} Prime Spray Foam LLC. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-prime-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-prime-blue transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
