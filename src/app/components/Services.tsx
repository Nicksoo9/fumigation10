import React from 'react';
import { Truck, Bug, Box, Shield, Home, SprayCan } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function Services() {
  const services = [
    {
      title: "Residential Moving Services",
      description: "Expert house moving in Kilimani and across Nairobi. We carefully pack, load, transport, and unpack your household belongings with professional care and attention.",
      icon: Home,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Office Relocation & Corporate Moving",
      description: "Seamless business relocation services in Nairobi. Minimize downtime with our efficient office moving, IT equipment handling, and furniture transportation.",
      icon: Truck,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Pest Control & Fumigation",
      description: "Professional pest control services in Kilimani, Nairobi. Complete elimination of cockroaches, rodents, bedbugs, mosquitoes, and other pests using eco-friendly methods.",
      icon: Bug,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Disinfection & Sanitization",
      description: "Comprehensive disinfection services for homes and offices in Nairobi. Professional sanitization to ensure a clean, healthy, and safe environment for your family or staff.",
      icon: SprayCan,
      color: "bg-teal-100 text-teal-600",
    },
    {
      title: "Professional Packing Services",
      description: "Premium packing solutions in Nairobi using high-quality materials. Our expert packers ensure your valuables, furniture, and fragile items are protected during transit.",
      icon: Box,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Secure Storage Solutions",
      description: "Safe storage facilities in Nairobi for short-term and long-term needs. Climate-controlled warehouses with 24/7 security for your peace of mind.",
      icon: Shield,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Moving & Pest Control Services in Nairobi
          </h2>
          <p className="text-lg text-gray-600">
            From residential house moving to commercial pest control, Daily Movers Fumigation provides complete relocation and fumigation services across Kilimani, Westlands, Lavington, and all Nairobi areas. Licensed professionals, affordable rates, and guaranteed satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${service.color}`}>
                  <service.icon size={28} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 mb-6">
                  {service.description}
                </CardDescription>
                <Button variant="link" className="p-0 h-auto font-semibold text-blue-600 hover:text-blue-700">
                  Learn More &rarr;
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}