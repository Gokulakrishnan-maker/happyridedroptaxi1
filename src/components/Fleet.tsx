import React from 'react';
import { Users, Luggage, Wifi, Snowflake } from 'lucide-react';

const Fleet = () => {
  const vehicles = [
    {
      name: 'SEDAN',
      image: 'https://www.happyridedroptaxi.com/assets/sedan.png',
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
      image: 'https://www.happyridedroptaxi.com/assets/etios.png',
      passengers: '1-4',
      luggage: '2 bags',
      features: ['Air Conditioning', 'GPS Tracking', 'Comfortable Seating'],
      tariff: {
        oneWay: { ratePerKm: '₹15/KM', driverBata: '₹400', toll: 'One way Toll' },
        roundTrip: { ratePerKm: '₹14/KM', driverBata: '₹400', toll: 'Up & Down Toll' }
      }
    },
    {
      name: 'SUV',
      image: 'https://www.happyridedroptaxi.com/assets/suv.png',
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
      image: 'https://www.happyridedroptaxi.com/assets/innova.png',
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
      image: 'https://www.happyridedroptaxi.com/assets/innova-crysta.png',
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
    <section id="fleet" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Meet Our Fleet</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium vehicles with unmatched comfort and amenities for your journey. Pick what suits your style and travel plans.
          </p>
        </div>

        {/* Fleet Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-500 group"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => (e.target.style.display = 'none')}
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {vehicle.name}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Passengers & Luggage */}
                <div className="flex justify-between text-gray-600 text-sm">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5" /> <span>{vehicle.passengers}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Luggage className="h-5 w-5" /> <span>{vehicle.luggage}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {vehicle.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Tariff */}
                <div className="border-t border-gray-200 pt-4 space-y-1">
                  <p className="text-sm text-gray-700">
                    <strong>One Way:</strong> {vehicle.tariff.oneWay.ratePerKm}, {vehicle.tariff.oneWay.driverBata}, {vehicle.tariff.oneWay.toll}
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Round Trip:</strong> {vehicle.tariff.roundTrip.ratePerKm}, {vehicle.tariff.roundTrip.driverBata}, {vehicle.tariff.roundTrip.toll}
                  </p>
                </div>

                <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-800 transition-all">
                  Book Now
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
