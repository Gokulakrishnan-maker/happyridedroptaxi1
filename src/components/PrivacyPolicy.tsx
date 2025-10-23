import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Eye, Lock, Database, Cookie, RefreshCw } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Happyridedroptaxi | Secure Taxi Service in Tamil Nadu</title>
        <meta name="description" content="Happyridedroptaxi Privacy Policy - Learn how we protect your personal information, location data, and ensure secure taxi booking across Tamil Nadu. GDPR & Indian data protection aligned." />
        <meta name="keywords" content="Happyridedroptaxi privacy policy, data protection, secure taxi booking, Tamil Nadu taxi privacy, GDPR compliance, personal information security" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://happyridedroptaxi.com/privacy-policy" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Privacy Policy - Happyridedroptaxi | Secure Taxi Service" />
        <meta property="og:description" content="Learn how Happyridedroptaxi protects your personal information and ensures secure taxi booking across Tamil Nadu." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://happyridedroptaxi.com/privacy-policy" />
        <meta property="og:site_name" content="Happyridedroptaxi" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy - Happyridedroptaxi" />
        <meta name="twitter:description" content="Learn how Happyridedroptaxi protects your personal information and ensures secure taxi booking." />

        {/* Structured Data for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy - Happyridedroptaxi",
            "description": "Happyridedroptaxi Privacy Policy - Data protection and security information for taxi booking service in Tamil Nadu",
            "url": "https://happyridedroptaxi.com/privacy-policy",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Happyridedroptaxi",
              "url": "https://happyridedroptaxi.com"
            },
            "about": {
              "@type": "Organization",
              "name": "Happyridedroptaxi",
              "description": "Professional taxi service across Tamil Nadu",
              "telephone": "+91-9087520500",
              "email": "happyridedroptaxi@gmail.com"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-12">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
              <p className="text-gray-600">Last updated: October 23, 2025</p>
            </div>

            <div className="prose max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-blue-600 mr-2" />
                  Information We Collect
                </h2>
                <div className="bg-blue-50 p-6 rounded-lg mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Name, phone number, and email address for booking</li>
                    <li>Pickup and dropoff locations for trip planning</li>
                    <li>Payment information for transaction processing (handled via certified payment gateways)</li>
                    <li>Trip history and preferences for better service</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Location Data</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>GPS location for accurate pickup and navigation</li>
                    <li>Route information for fare calculation</li>
                    <li>Real-time tracking during trips for safety</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Database className="h-6 w-6 text-blue-600 mr-2" />
                  How We Use Your Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Service Delivery</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Process and fulfill your taxi bookings</li>
                      <li>• Provide real-time trip tracking</li>
                      <li>• Calculate accurate fares and routes</li>
                      <li>• Send booking confirmations and updates</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Safety & Support</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Ensure passenger and driver safety</li>
                      <li>• Provide customer support assistance</li>
                      <li>• Improve service quality and reliability</li>
                      <li>• Comply with transportation regulations</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Lock className="h-6 w-6 text-blue-600 mr-2" />
                  Data Protection
                </h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    We implement industry-standard security measures to protect your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Encrypted data transmission and storage (TLS/HTTPS)</li>
                    <li>Secure payment processing through certified gateways</li>
                    <li>Limited access to personal data on a need-to-know basis</li>
                    <li>Regular security audits and updates</li>
                    <li>Compliance with applicable Indian data protection laws and alignment with international best practices</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    We do not sell your personal data. Personal information is only used to provide and improve our services.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention & Third-Party Sharing</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    We retain your personal data only for as long as necessary to fulfill the purposes described in this policy, to comply with legal obligations, resolve disputes, and enforce our agreements. Booking records are typically retained for a minimum of 2 years for operational and legal reasons, after which they may be anonymized or deleted unless a longer retention period is required by law.
                  </p>
                  <p className="text-gray-700">
                    We may share limited data with trusted third-party service providers such as payment processors, mapping/navigation providers, and drivers strictly for fulfilling your taxi booking request. We do not sell or rent personal data to third parties for marketing purposes. All third-party partners are contractually required to use your data only for the purposes we specify and to maintain appropriate security measures.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and improve our services. Cookies may include necessary cookies (to enable core site functionality), performance cookies (to understand site usage), and functionality cookies (to remember preferences).
                  </p>
                  <p className="text-gray-700 mb-2">
                    By using our website, you consent to the use of cookies as described. You can control cookie preferences through your browser settings and opt out of analytics tracking where applicable.
                  </p>
                  <p className="text-gray-700">
                    For more details about the specific cookies we use and how to manage them, please contact us at happyridedroptaxi@gmail.com.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white border-2 border-blue-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">Access</h3>
                    <p className="text-gray-600 text-sm">Request access to your personal data</p>
                  </div>
                  <div className="bg-white border-2 border-green-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-2">Correction</h3>
                    <p className="text-gray-600 text-sm">Update or correct your information</p>
                  </div>
                  <div className="bg-white border-2 border-red-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-red-900 mb-2">Deletion</h3>
                    <p className="text-gray-600 text-sm">Request deletion of your data</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies & Consent Management</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    If you wish to change or withdraw consent related to cookies and tracking, you can do so via your browser settings. We recommend clearing your browser cookies or using the privacy controls available in modern browsers.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will post the updated policy on this page with the revised "Last updated" date.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance Statement</h2>
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    Happyridedroptaxi complies with applicable Indian data protection laws and follows international best practices, including principles aligned with the GDPR where applicable, to protect personal data and privacy rights.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    For any privacy-related questions, data access requests, or concerns, please contact us:
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

export default PrivacyPolicy;
