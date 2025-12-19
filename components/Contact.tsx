
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const contactInfo = [
    { label: "Phone", value: "+1 (270) 571-8100", icon: "fa-phone", href: "tel:+12705718100" },
    { label: "Email", value: "rylan@primesprayfoamllc.com", icon: "fa-envelope", href: "mailto:rylan@primesprayfoamllc.com" },
    { label: "Location", value: "Russellville, KY 42276", icon: "fa-map-pin" }
  ];

  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      {/* Decorative slant */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-prime-blue/5 skew-x-12 pointer-events-none translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Details */}
          <div className="reveal opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-prime-blue font-bold tracking-[0.4em] uppercase text-sm mb-4">Get In Touch</h2>
            <h3 className="text-6xl font-display font-black text-white italic mb-10 uppercase leading-[0.9]">
              READY TO <br /><span className="text-prime-blue">INSULATE?</span>
            </h3>
            <p className="text-gray-400 text-lg mb-12 max-w-lg leading-relaxed">
              Contact Rylan at Prime Spray Foam for a free consultation. We serve Russellville and the surrounding Kentucky counties with unmatched precision.
            </p>
            
            <div className="space-y-10">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center group">
                  <div className="w-14 h-14 bg-prime-gray border border-gray-800 rounded-full flex items-center justify-center group-hover:bg-prime-blue group-hover:border-prime-blue transition-all duration-300">
                    <i className={`fa-solid ${item.icon} text-prime-blue group-hover:text-black transition-colors`}></i>
                  </div>
                  <div className="ml-6">
                    <p className="text-xs text-gray-500 uppercase font-black tracking-[0.3em] mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-xl font-bold text-white hover:text-prime-blue transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-xl font-bold text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300">
            <div className="bg-prime-gray/50 backdrop-blur-xl p-10 rounded-sm border border-gray-800 shadow-2xl">
              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-prime-blue text-black rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h4 className="text-3xl font-display font-black uppercase italic mb-2">Message Sent!</h4>
                  <p className="text-gray-400">We'll get back to you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-prime-blue font-bold uppercase text-sm tracking-widest hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-gray-500">Your Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-black border border-gray-800 text-white px-5 py-4 focus:outline-none focus:border-prime-blue transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-gray-500">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        className="w-full bg-black border border-gray-800 text-white px-5 py-4 focus:outline-none focus:border-prime-blue transition-colors"
                        placeholder="(270) 555-0123"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-gray-500">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-black border border-gray-800 text-white px-5 py-4 focus:outline-none focus:border-prime-blue transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-gray-500">Project Details</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full bg-black border border-gray-800 text-white px-5 py-4 focus:outline-none focus:border-prime-blue transition-colors resize-none"
                      placeholder="Tell us about your building and insulation needs..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-prime-blue text-black font-black uppercase py-5 rounded-sm hover:bg-white hover:scale-[1.01] transition-all duration-300 shadow-[0_10px_30px_rgba(0,191,255,0.2)] disabled:opacity-50"
                  >
                    {isSubmitting ? <i className="fa-solid fa-circle-notch animate-spin"></i> : "Get Your Free Quote"}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
