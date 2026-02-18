import React from 'react';
import { motion } from 'motion/react';
import galleryImage1 from '../../assets/53e756cc37459aba88d9e4e22c7ebda26474a051.png';
import galleryImage2 from '../../assets/d0a16681a1fda23cf54d165da9c4ced54994062d.png';
import galleryImage3 from '../../assets/211e086f830eaa7fd95a2d4116bc5badf82961aa.png';
import galleryImage4 from '../../assets/12c0e8a541fc147b71fc06ef3b6a0c563d30376c.png';
import galleryImage5 from '../../assets/01060e5bc9b7d5606340dbb218d5bcb94fb0e42e.png';
import galleryImage6 from '../../assets/9c7227fb127648dbf0193869d4a9aea22c657afe.png';

export function Gallery() {
  const galleryItems = [
    {
      image: galleryImage1,
      title: "Professional Moving Services in Nairobi",
      description: "Our reliable moving trucks ready to transport your belongings safely across Kilimani and Nairobi",
      alt: "Daily Movers Fumigation moving truck - Professional moving services Nairobi"
    },
    {
      image: galleryImage4,
      title: "Expert Packing & Loading Services",
      description: "Professional furniture packing and secure loading for residential and office moves in Nairobi",
      alt: "Professional packing and loading services - Daily Movers Fumigation Nairobi"
    },
    {
      image: galleryImage2,
      title: "Expert TV Mounting & Installation",
      description: "Professional TV wall mounting and installation services for homes and offices in Nairobi",
      alt: "TV wall mount installation - Daily Movers Fumigation Kilimani"
    },
    {
      image: galleryImage5,
      title: "Complete Living Room Setup",
      description: "Full living room setup with professional TV mounting and LED lighting installation in Nairobi homes",
      alt: "Professional living room setup with TV mounting - Kilimani Nairobi"
    },
    {
      image: galleryImage6,
      title: "Bedroom Furniture Setup & Installation",
      description: "Expert bedroom furniture assembly and curtain installation services across Nairobi",
      alt: "Bedroom furniture setup - Daily Movers Fumigation Nairobi"
    },
    {
      image: "https://images.unsplash.com/photo-1674485117944-08d58861b2ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXN0JTIwY29udHJvbCUyMGZ1bWlnYXRpb24lMjBwcm9mZXNzaW9uYWwlMjBzZXJ2aWNlfGVufDF8fHx8MTc3MTM5NTQzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Professional Fumigation Services",
      description: "Comprehensive pest control and fumigation services for residential and commercial properties in Kilimani",
      alt: "Professional fumigation and pest control - Daily Movers Fumigation Nairobi"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Moving & Fumigation Work in Nairobi
          </h2>
          <p className="text-lg text-gray-600">
            Real photos from our professional moving and fumigation projects across Kilimani, Westlands, and Nairobi. 
            See the quality and care we bring to every residential and commercial job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}