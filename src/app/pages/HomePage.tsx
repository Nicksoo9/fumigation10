import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Gallery } from '../components/Gallery';
import { ServiceAreas } from '../components/ServiceAreas';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Gallery />
      <ServiceAreas />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
