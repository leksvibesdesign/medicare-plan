
import React from 'react';
import { useNavigate } from 'react-router-dom';
import WholeLifeLeadForm from '@/components/WholeLifeLeadForm';
import WholeLifeTrustIndicators from '@/components/WholeLifeTrustIndicators';
import WholeLifeTestimonials from '@/components/WholeLifeTestimonials';
import { Phone, Mail, Shield, Heart, DollarSign } from 'lucide-react';

const WholeLifeInsurance = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (data: any) => {
    console.log('Whole Life Insurance form submitted:', data);
    localStorage.setItem('wholeLifeLeadData', JSON.stringify(data));
    navigate('/whole-life-thank-you');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Heart className="text-white h-6 w-6" />
            </div>
            <span className="text-xl font-bold text-gray-800">Life & Medicare Pro</span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>1-800-LIFE-PRO</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>Licensed Specialists</span>
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
                Protect Your Family with{' '}
                <span className="text-green-600">Whole Life Insurance</span>{' '}
                & Get Medicare Coverage
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Secure your family's financial future while ensuring your Medicare needs are covered. Get personalized guidance from licensed professionals.
              </p>
              <div className="flex flex-wrap gap-4 text-lg">
                <div className="flex items-center space-x-2 text-green-600">
                  <Shield className="w-5 h-5" />
                  <span>Lifetime Protection</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-600">
                  <DollarSign className="w-5 h-5" />
                  <span>Cash Value Growth</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-600">
                  <Heart className="w-5 h-5" />
                  <span>Medicare Guidance</span>
                </div>
              </div>
            </div>
            <div>
              <WholeLifeLeadForm onSubmit={handleFormSubmit} />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <WholeLifeTrustIndicators />

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Why Choose Our Comprehensive Coverage?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Dual Protection</h3>
              <p className="text-gray-600">
                Get both life insurance protection and Medicare guidance in one comprehensive consultation.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Cash Value Building</h3>
              <p className="text-gray-600">
                Whole life insurance builds cash value over time that you can borrow against or use for emergencies.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Expert Guidance</h3>
              <p className="text-gray-600">
                Our licensed professionals help you navigate both life insurance and Medicare options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <WholeLifeTestimonials />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Heart className="text-white h-5 w-5" />
                </div>
                <span className="text-lg font-bold">Life & Medicare Pro</span>
              </div>
              <p className="text-gray-300">
                Protecting families and securing Medicare coverage since 2015.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 1-800-LIFE-PRO</p>
                <p>✉️ info@lifemedicarepro.com</p>
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
            <p>&copy; 2024 Life & Medicare Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WholeLifeInsurance;
