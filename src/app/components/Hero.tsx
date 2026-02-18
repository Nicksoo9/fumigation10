import React from 'react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import heroImage from '../../assets/53e756cc37459aba88d9e4e22c7ebda26474a051.png';

export function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const headerOffset = 80;
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Daily Movers Fumigation - Moving Truck in Kilimani, Nairobi" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 mb-6 backdrop-blur-sm">
              <ShieldCheck size={16} />
              <span className="text-sm font-medium">Licensed & Insured Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2">
              Daily Movers Fumigation
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-blue-400 mb-6">
              Kilimani's Trusted Moving & Pest Control Experts
            </h2>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Professional house moving, office relocation, and comprehensive fumigation services in Kilimani, Nairobi. 
              We provide safe, reliable, and affordable solutions for homes and businesses across Nairobi County. 
              Licensed, insured, and available 24/7 for emergency services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg h-12 px-8" onClick={() => window.open('https://wa.me/254717629399?text=Hello%20Daily%20Movers%2C%20I%20would%20like%20to%20get%20a%20free%20quote', '_blank')}>
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 text-lg h-12 px-8" onClick={scrollToServices}>
                Our Services <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-white/80">
              <div>
                <p className="text-3xl font-bold text-white">5k+</p>
                <p className="text-sm">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">10+</p>
                <p className="text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-sm">Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}