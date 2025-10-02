import React from 'react';
import { Users, Luggage, Wifi, Snowflake } from 'lucide-react';

const Fleet = () => {
  const vehicles = [
    {
      name: 'SEDAN',
      image: 'https://happyridedroptaxi.com/assets/sedan.png',
      passengers: '1-4',
      luggage: '2 bags',
      features: ['Air Conditioning', 'GPS Tracking', 'Phone Charger'],
      tariff: {
        oneWay: { ratePerKm: '₹14/KM', driverBata: '₹400', toll: 'One way Toll' },
        roundTrip: { ratePerKm: '₹13/KM', driverBata: '₹400', toll: 'Up & Down Toll' }
      }
    },
    {
      name: 'ETIOS',
      image: 'https://happyridedroptaxi.com/assets/etios.png',
      passengers: '1-4',
      luggage: '2 bags',
      features: ['Air Conditioning', 'GPS Tracking', 'Comfortable Seating'],
      tariff: {
        oneWay: { ratePerKm: '₹15/KM', driverBata: '₹400', toll: 'One way Toll' },
        roundTrip: { ratePerKm: '₹13/KM', driverBata: '₹400', toll: 'Up & Down Toll' }
      }
    },
    {
      name: 'SUV',
      image: 'https://happyridedroptaxi.com/assets/suv.png',
      passengers: '1-6',
      luggage: '4 bags',
      features: ['Luxury Interior', 'WiFi Available', 'Extra Space'],
      tariff: {
        oneWay: { ratePerKm: '₹19/KM', driverBata: '₹400', toll: 'One way Toll' },
        roundTrip: { ratePerKm: '₹18/KM', driverBata: '₹400', toll: 'Up & Down Toll' }
      }
    },
    {
      name: 'INNOVA',
      image: 'https://happyridedroptaxi.com/assets/innova.png',
      passengers: '1-8',
      luggage: '3 bags',
      features: ['Premium Comfort', 'Business Amenities', 'Professional Driver'],
      tariff: {
        oneWay: { ratePerKm: '₹20/KM', driverBata: '₹400', toll: 'One way Toll' },
        roundTrip: { ratePerKm: '₹18/KM', driverBata: '₹400', toll: 'Up & Down Toll' }
      }
    },
    {
      name: 'INNOVA CRYSTA',
      image: 'https://happyridedroptaxi.com/assets/innova-crysta.png',
      passengers: '1-8',
      luggage: '3 bags',
      features: ['Premium Comfort', 'Business Amenities', 'Professional Driver'],
      tariff: {
        oneWay: { ratePerKm: '₹25/KM', driverBata: '₹400', toll: 'One way Toll' },
        roundTrip: { ratePerKm: '₹23/KM', driverBata: '₹400', toll: 'Up & Down Toll' }
      }
    }
  ];

  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Fleet</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our diverse fleet of well-maintained vehicles to match your travel needs and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={`${vehicle.name} - Professional taxi service`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    console.error(`Failed to load image for ${vehicle.name}:`, vehicle.image);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{vehicle.name}</h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{vehicle.passengers}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Luggage className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{vehicle.luggage}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {vehicle.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tariff Section */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-700"><strong>One Way:</strong> {vehicle.tariff.oneWay.ratePerKm}, {vehicle.tariff.oneWay.driverBata}, {vehicle.tariff.oneWay.toll}</p>
                  <p className="text-sm text-gray-700"><strong>Round Trip:</strong> {vehicle.tariff.roundTrip.ratePerKm}, {vehicle.tariff.roundTrip.driverBata}, {vehicle.tariff.roundTrip.toll}</p>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Select Vehicle
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
