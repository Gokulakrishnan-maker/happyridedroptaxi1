import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, AlertTriangle, CreditCard, Users } from 'lucide-react';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Happyridedroptaxi | Taxi Booking Terms & Conditions</title>
        <meta name="description" content="Happyridedroptaxi Terms of Service - Booking terms, cancellation policy, payment terms, and service agreement for taxi booking across Tamil Nadu. Licensed taxi service." />
        <meta name="keywords" content="Happyridedroptaxi terms of service, taxi booking terms, cancellation policy, payment terms, Tamil Nadu taxi service, licensed taxi operator" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://happyridedroptaxi.com/terms-of-service" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Terms of Service - Happyridedroptaxi | Taxi Service Terms" />
        <meta property="og:description" content="Happyridedroptaxi Terms of Service - Booking terms, cancellation policy, and service agreement for taxi booking across Tamil Nadu." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://happyridedroptaxi.com/terms-of-service" />
        <meta property="og:site_name" content="Happyridedroptaxi" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Terms of Service - Happyridedroptaxi" />
        <meta name="twitter:description" content="Happyridedroptaxi Terms of Service - Booking terms and service agreement for taxi booking." />
        
        {/* Structured Data for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Service - Happyridedroptaxi",
            "description": "Happyridedroptaxi Terms of Service - Booking terms, cancellation policy, and service agreement for taxi booking across Tamil Nadu",
            "url": "https://happyridedroptaxi.com/terms-of-service",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Happyridedroptaxi",
              "url": "https://happyridedroptaxi.com"
            },
            "about": {
              "@type": "Organization",
              "name": "Happyridedroptaxi",
              "description": "Licensed taxi service across Tamil Nadu with transparent pricing",
              "telephone": "+91-9087520500",
              "email": "happyridedroptaxi@gmail.com",
              "areaServed": "Tamil Nadu, India"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-12">
            <FileText className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: January 2025</p>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="h-6 w-6 text-blue-600 mr-2" />
                Service Agreement
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  By using Happyridedroptaxi services, you agree to these terms and conditions. 
                  Our taxi service operates under Tamil Nadu Transport Department regulations.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Service available 24/7 across Tiruchirappali and Tamil Nadu</li>
                  <li>Licensed drivers with valid permits and insurance</li>
                  <li>Vehicles regularly inspected and maintained</li>
                  <li>Compliance with local transportation laws</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Terms</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Booking Process</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Advance booking recommended</li>
                    <li>• Immediate pickup subject to availability</li>
                    <li>• Confirmation via SMS/call</li>
                    <li>• Driver details shared before pickup</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-3">Cancellation Policy</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Free cancellation up to 15 minutes before pickup</li>
                    <li>• ₹50 cancellation fee after driver dispatch</li>
                    <li>• No-show charges: ₹100</li>
                    <li>• Outstation trips: 24-hour notice required</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CreditCard className="h-6 w-6 text-blue-600 mr-2" />
                Payment Terms
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Accepted Payments</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Cash payments to driver</li>
                      <li>• UPI (PhonePe, Google Pay, Paytm)</li>
                      <li>• Credit/Debit cards</li>
                      <li>• Net banking</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Fare Structure</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Transparent pricing with no hidden fees</li>
                      <li>• Meter-based or fixed rates</li>
                      <li>• Night surcharge: 25% (11 PM - 5 AM)</li>
                      <li>• Toll charges additional</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-blue-600 mr-2" />
                Passenger Responsibilities
              </h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Provide accurate pickup location and contact details</li>
                  <li>Be ready at the pickup location at scheduled time</li>
                  <li>Treat drivers and vehicles with respect</li>
                  <li>No smoking, drinking, or illegal activities in vehicles</li>
                  <li>Inform about additional stops or route changes</li>
                  <li>Pay the agreed fare amount</li>
                  <li>Report any issues immediately to customer support</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Liability & Insurance</h2>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Happy Ride Drop Taxi maintains comprehensive insurance coverage for all vehicles and operations:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Third-party liability insurance as per Motor Vehicle Act</li>
                  <li>Passenger insurance coverage during trips</li>
                  <li>Driver insurance and licensing compliance</li>
                  <li>Vehicle fitness certificates and permits</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact for Legal Matters</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  For any legal questions or concerns regarding these terms:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Phone:</strong> +91 9087520500</p>
                  <p><strong>Email:</strong> happyridedroptaxi@gmail.com</p>
                  <p><strong>Address:</strong> Tiruchirappali, Tamil Nadu, India</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default TermsOfService;
