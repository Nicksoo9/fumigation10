import React from 'react';
import { Button } from './ui/button';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router';
import aboutImage from '../../assets/211e086f830eaa7fd95a2d4116bc5badf82961aa.png';

export function About() {
  const benefits = [
    "Professional & Trained Staff",
    "Eco-Friendly Fumigation Products",
    "Fully Insured & Licensed in Kenya",
    "Transparent Pricing - No Hidden Fees",
    "24/7 Customer Support in Nairobi",
    "Timely Delivery Guarantee"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImage}
                alt="Daily Movers Fumigation - Professional TV Mounting & Moving Services in Kilimani, Nairobi" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block border border-gray-100">
              <p className="text-4xl font-bold text-blue-600 mb-2">15+</p>
              <p className="text-gray-700 font-medium">Years delivering excellence in moving and pest control services across Nairobi.</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nairobi's Most Trusted Partner for <br />
              <span className="text-blue-600">Relocation & Pest Control</span>
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Based in Kilimani, Nairobi, Daily Movers Fumigation has been serving residential and commercial clients across Nairobi County for over 15 years. We understand that house moving can be stressful and pest infestations can disrupt your daily life.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our licensed and insured team combines professional moving expertise with advanced pest control solutions to ensure a seamless transition to your new location and a clean, pest-free environment. We serve all Nairobi areas including Kilimani, Westlands, Lavington, Karen, Parklands, and beyond.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
                More About Us
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}