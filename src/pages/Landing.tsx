
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LeadForm from '@/components/LeadForm';
import Testimonials from '@/components/Testimonials';
import TrustIndicators from '@/components/TrustIndicators';
import { Phone, Mail, MapPin } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // Store form data in localStorage for the thank you page
    localStorage.setItem('leadData', JSON.stringify(data));
    navigate('/thank-you');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Medicare Connect</span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>1-800-MEDICARE</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>Licensed Agents</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Turning 65? Get a{' '}
                <span className="text-blue-600">Free, Personalized</span>{' '}
                Medicare Plan Comparison
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Avoid confusion. Speak with a licensed agent and find a plan that fits your needs — no obligation, no pressure.
              </p>
              <div className="flex flex-wrap gap-4 text-lg">
                <div className="flex items-center space-x-2 text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>100% Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Licensed Agents Only</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>No Obligation</span>
                </div>
              </div>
            </div>
            <div>
              <LeadForm onSubmit={handleFormSubmit} />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Why Choose Our Medicare Guidance?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Personalized Matching</h3>
              <p className="text-gray-600">
                We analyze your specific needs, health conditions, and budget to find the perfect Medicare plan for you.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Save Money</h3>
              <p className="text-gray-600">
                Our clients typically save hundreds of dollars per year by choosing the right Medicare plan.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Ongoing Support</h3>
              <p className="text-gray-600">
                We're here for you beyond enrollment with ongoing support and annual plan reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <span className="text-lg font-bold">Medicare Connect</span>
              </div>
              <p className="text-gray-300">
                Helping Americans navigate Medicare with confidence since 2010.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 1-800-MEDICARE</p>
                <p>✉️ info@medicareconnect.com</p>
                <p>📍 Licensed in all 50 states</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Compliance</h4>
              <p className="text-gray-300 text-sm">
                We are licensed insurance agents. This website and its content are not connected with or endorsed by the United States government or the federal Medicare program.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
            <p>&copy; 2024 Medicare Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
