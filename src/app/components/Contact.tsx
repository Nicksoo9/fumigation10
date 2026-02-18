import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Quote request submitted! (This is a demo)");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Contact Daily Movers Fumigation
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to move your home or office in Nairobi? Need professional pest control in Kilimani? 
              Contact us today for a free, no-obligation quote. We serve all Nairobi areas 24/7.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Phone & WhatsApp</h4>
                  <p className="text-gray-600">+254 717 629 399</p>
                  <a href="https://wa.me/254717629399?text=Hello%20Daily%20Movers%2C%20I%20would%20like%20to%20get%20a%20free%20quote" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600">dailymoversandfumigation@gmail.com</p>
                  <p className="text-sm text-gray-500 mt-1">We respond within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Service Areas</h4>
                  <p className="text-gray-600">
                    Kilimani, Westlands, Lavington, Karen, Parklands, Runda, Muthaiga, and all Nairobi County
                  </p>
                  <p className="text-sm text-blue-600 mt-1 font-medium">Available 24/7 for emergencies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3">
            <Card className="shadow-lg border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl">Request a Free Quote - Moving & Fumigation</CardTitle>
                <p className="text-gray-600 text-sm mt-2">
                  Fill out the form below or call us directly at 0717629399 for immediate assistance
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" {...register("firstName", { required: true })} />
                      {errors.firstName && <span className="text-red-500 text-sm">Required</span>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" {...register("lastName", { required: true })} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" {...register("email", { required: true })} />
                      {errors.email && <span className="text-red-500 text-sm">Required</span>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" {...register("phone", { required: true })} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <select 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        {...register("service")}
                    >
                      <option value="moving">Moving Services</option>
                      <option value="fumigation">Fumigation / Pest Control</option>
                      <option value="both">Both (Moving + Fumigation)</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message / Details</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details like moving date, size of home, or type of pest issue..." 
                      className="min-h-[120px]"
                      {...register("message")}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Send Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}