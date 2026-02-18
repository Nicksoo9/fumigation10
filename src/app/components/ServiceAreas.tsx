import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';

export function ServiceAreas() {
  const areas = [
    "Kilimani", "Westlands", "Lavington", "Karen", 
    "Parklands", "Runda", "Muthaiga", "Kileleshwa",
    "Spring Valley", "Riverside", "Hurlingham", "South B",
    "South C", "Langata", "Kitisuru", "Loresho"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-4">
            <MapPin size={20} />
            <span className="font-semibold">Serving All Nairobi</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Moving & Fumigation Services Across Nairobi
          </h2>
          <p className="text-lg text-gray-600">
            Daily Movers Fumigation provides expert house moving, office relocation, and comprehensive pest control services 
            throughout Nairobi County. We're your local trusted partner for all relocation and fumigation needs.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              We Proudly Serve These Nairobi Neighborhoods & More
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600">
                <strong className="text-gray-900">Service Area:</strong> We serve all areas within Nairobi County and surrounding regions. 
                <br className="hidden md:block" />
                <span className="text-blue-600 font-semibold">Call 0717629399</span> to confirm service availability in your area.
              </p>
            </div>
          </div>
        </div>

        {/* SEO Keywords Section */}
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <p className="text-sm text-gray-500 leading-relaxed">
            Looking for <strong>movers in Kilimani</strong>, <strong>fumigation services Nairobi</strong>, 
            <strong> house moving companies Kenya</strong>, <strong>pest control Westlands</strong>, 
            <strong> office relocation Nairobi</strong>, <strong>affordable movers Lavington</strong>, 
            <strong> bedbug treatment Karen</strong>, or <strong>professional moving services Nairobi</strong>? 
            Daily Movers Fumigation is your trusted local expert for all residential and commercial moving, 
            fumigation, and pest control needs across Nairobi County.
          </p>
        </div>
      </div>
    </section>
  );
}
