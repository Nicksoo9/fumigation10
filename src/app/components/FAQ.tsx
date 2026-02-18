import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "How much does house moving cost in Nairobi?",
    answer: "Moving costs in Nairobi vary based on distance, volume of items, and specific requirements. At Daily Movers Fumigation, we offer competitive and transparent pricing for moves within Kilimani, Westlands, Karen, and all Nairobi areas. Contact us at 0717629399 for a free, no-obligation quote tailored to your needs."
  },
  {
    question: "What areas in Nairobi do you serve?",
    answer: "We proudly serve all areas across Nairobi County including Kilimani, Westlands, Lavington, Karen, Parklands, Runda, Muthaiga, Kileleshwa, South B, South C, Langata, and many more neighborhoods. We also provide services to surrounding areas within a 50km radius of Nairobi CBD."
  },
  {
    question: "How effective is your fumigation service?",
    answer: "Our fumigation services are highly effective against cockroaches, bedbugs, rodents, mosquitoes, and other pests. We use eco-friendly, licensed products that are safe for your family and pets. Most treatments show immediate results, with complete elimination within 24-48 hours. We also offer follow-up visits to ensure pest-free environments."
  },
  {
    question: "Do you provide packing materials?",
    answer: "Yes! We provide high-quality packing materials including boxes, bubble wrap, packing paper, tape, and protective covers for furniture. Our professional packers can handle the entire packing process, ensuring your belongings are safely prepared for transit. Packing services are available as part of our comprehensive moving packages."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. Daily Movers Fumigation is fully licensed by the relevant Kenyan authorities and carries comprehensive insurance coverage. This protects your belongings during transit and ensures you're working with a legitimate, professional moving and pest control company in Nairobi."
  },
  {
    question: "How far in advance should I book your services?",
    answer: "We recommend booking at least 1-2 weeks in advance for residential moves and 2-4 weeks for office relocations to ensure availability. However, we also handle last-minute moves and emergency pest control services. Contact us at 0717629399 and we'll do our best to accommodate your timeline."
  },
  {
    question: "Do you offer same-day fumigation services?",
    answer: "Yes! We understand that pest problems need immediate attention. We offer same-day and emergency fumigation services across Nairobi, subject to availability. Call us at 0717629399 for urgent pest control needs in Kilimani and surrounding areas."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We understand that plans change. You can cancel or reschedule your moving or fumigation appointment up to 48 hours before the scheduled time without any charges. Cancellations made within 48 hours may incur a small fee. Contact us to discuss your specific situation."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Common questions about our moving and fumigation services in Nairobi. 
            Don't see your question? Call us at 0717629399 or WhatsApp for instant answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-left transition-colors flex items-center justify-between gap-4"
              >
                <h3 className="font-semibold text-gray-900 text-lg pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  size={24} 
                  className={`text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-blue-50 rounded-b-lg">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions about our moving or pest control services in Nairobi?
          </p>
          <a 
            href="https://wa.me/254717629399?text=Hello%20Daily%20Movers%2C%20I%20have%20a%20question"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
