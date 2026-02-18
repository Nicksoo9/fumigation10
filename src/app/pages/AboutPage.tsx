import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { motion } from 'motion/react';
import { CheckCircle, Award, Users, TrendingUp, Shield, Clock, Heart, Target } from 'lucide-react';
import { Link } from 'react-router';
import aboutImage from '../../assets/211e086f830eaa7fd95a2d4116bc5badf82961aa.png';
import teamImage1 from '../../assets/12c0e8a541fc147b71fc06ef3b6a0c563d30376c.png';
import teamImage2 from '../../assets/01060e5bc9b7d5606340dbb218d5bcb94fb0e42e.png';

export function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We prioritize the safety of your belongings and your property with professional handling and eco-friendly pest control products."
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Punctual service and timely delivery. We respect your schedule and ensure all projects are completed on time."
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "Your satisfaction is our priority. We provide 24/7 support and personalized service for every client in Nairobi."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We maintain the highest standards in every move and fumigation service we provide across Nairobi County."
    }
  ];

  const milestones = [
    {
      year: "2009",
      title: "Company Founded",
      description: "Started serving Kilimani with 1 truck and a vision for excellence"
    },
    {
      year: "2015",
      title: "Expanded Services",
      description: "Added professional fumigation and pest control to our offerings"
    },
    {
      year: "2020",
      title: "5000+ Customers",
      description: "Reached milestone of serving over 5000 satisfied clients across Nairobi"
    },
    {
      year: "2026",
      title: "Industry Leader",
      description: "Recognized as one of Nairobi's most trusted moving and fumigation companies"
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "5000+", label: "Happy Clients" },
    { number: "15", label: "Service Areas" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Daily Movers Fumigation | 15+ Years Serving Nairobi</title>
        <meta name="description" content="Learn about Daily Movers Fumigation - Nairobi's trusted moving and pest control experts since 2009. Licensed, insured, and serving Kilimani with excellence for 15+ years." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Daily Movers Fumigation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Serving Kilimani and Nairobi with professional moving and pest control services since 2009. 
              Licensed, insured, and trusted by over 5000+ happy customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <img 
                src={aboutImage}
                alt="Daily Movers Fumigation - Professional Services" 
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009 in the heart of Kilimani, Nairobi, Daily Movers Fumigation started with a simple mission: 
                  to provide reliable, professional moving services that families and businesses could trust.
                </p>
                <p>
                  Over the years, we've grown from a single moving truck to a full-service company offering comprehensive 
                  moving solutions and professional pest control services. Our expansion was driven by listening to our 
                  customers' needs and consistently delivering excellence.
                </p>
                <p>
                  Today, we're proud to be one of Nairobi's most trusted names in residential and commercial moving, 
                  office relocation, and fumigation services. We've served over 5,000 satisfied customers across Kilimani, 
                  Westlands, Lavington, Karen, and all of Nairobi County.
                </p>
                <p>
                  Our team of licensed professionals brings decades of combined experience, ensuring every move is smooth 
                  and every pest problem is solved effectively. We're not just a service provider – we're your partner in 
                  making life transitions easier.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide every service we provide across Nairobi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones in our 15+ year journey serving Nairobi
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-8 items-start"
                >
                  <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-xl min-w-[100px] text-center">
                    {milestone.year}
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Team
            </h2>
            <p className="text-lg text-gray-600">
              Experienced, licensed, and dedicated professionals serving Nairobi with excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src={teamImage1}
                alt="Daily Movers Fumigation Team - Professional Loading Services" 
                className="w-full h-80 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src={teamImage2}
                alt="Daily Movers Fumigation - Professional Home Setup Team" 
                className="w-full h-80 object-cover"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <Users className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Trained Professionals</h3>
              <p className="text-gray-600 text-sm">All team members undergo rigorous training and certification</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <Award className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600 text-sm">Fully licensed by Kenya authorities and comprehensively insured</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <TrendingUp className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Continuous Improvement</h3>
              <p className="text-gray-600 text-sm">Regular training updates on latest industry standards and techniques</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience the Daily Movers Difference?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join over 5,000 satisfied customers who trust us with their moving and pest control needs in Nairobi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg h-12 px-8"
                onClick={() => window.open('https://wa.me/254717629399?text=Hello%20Daily%20Movers%2C%20I%20would%20like%20to%20get%20a%20free%20quote', '_blank')}
              >
                Get a Free Quote
              </Button>
              <Link to="/">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent text-white border-white hover:bg-white/10 text-lg h-12 px-8"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}