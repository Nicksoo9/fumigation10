import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const testimonials = [
  {
    name: "Sarah Wanjiku",
    role: "Homeowner - Kilimani",
    location: "Kilimani, Nairobi",
    content: "The moving team was incredible. They handled my furniture with such care during our house move from Kilimani to Lavington. Also used their fumigation service before moving in - spotless results!",
    rating: 5,
  },
  {
    name: "Michael Ochieng",
    role: "Office Manager - Westlands",
    location: "Westlands, Nairobi",
    content: "Daily Movers Fumigation handled our office relocation from Westlands perfectly. Minimal downtime for our team. Highly recommended for business moves in Nairobi.",
    rating: 5,
  },
  {
    name: "Grace Njeri",
    role: "Apartment Resident - Karen",
    location: "Karen, Nairobi",
    content: "I had a terrible bed bug issue in my Karen apartment. Their pest control team fixed it in one visit. Very professional, eco-friendly products, and polite staff.",
    rating: 5,
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Customer Reviews - Nairobi's Trusted Movers
          </h2>
          <p className="text-lg text-gray-600">
            Read real testimonials from satisfied customers across Kilimani, Westlands, Karen, and all Nairobi areas. 
            See why we're the top-rated moving and fumigation company in Nairobi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4 text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  {/* Using a placeholder avatar since I can't rely on randomuser.me staying up or being allowed, 
                      but for now standard img tags with fallbacks are fine or I can use initials. 
                      I'll use a colored div for safety if I didn't want external dependencies, 
                      but randomuser is usually fine for mocks. 
                      To be safe I'll use a colored circle with initials.
                  */}
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}