import React from 'react';
import { Clock, Shield, Star, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Clock,
      title: '24/7 Taxi Service',
      description: 'Instant booking available day and night across Tamil Nadu. Whether it’s airport drop, urgent travel, or planned trips, we are always ready.'
    },
    {
      icon: Shield,
      title: 'Licensed & Safe Rides',
      description: 'All our drivers are verified with Tamil Nadu Transport Department. Every ride includes GPS tracking, passenger safety alerts, and full insurance coverage.'
    },
    {
      icon: Star,
      title: 'Clean & Comfortable Cars',
      description: 'We offer AC sedans, SUVs, and premium cars that are regularly sanitized and maintained to ensure a smooth travel experience for families and business travelers.'
    },
    {
      icon: Headphones,
      title: 'Local Language Support',
      description: 'Tamil and English-speaking support team available 24/7 to assist with bookings, route information, and any travel support during your journey.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Happyridedroptaxi?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted outstation and one-way taxi service based in Tiruchirappalli, serving all major cities and airports in Tamil Nadu with transparent pricing and verified drivers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
