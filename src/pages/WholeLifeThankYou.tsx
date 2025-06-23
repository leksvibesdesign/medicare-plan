
import React, { useEffect, useState } from 'react';
import { CheckCircle2, Calendar, Phone, Shield, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WholeLifeThankYou = () => {
  const [leadData, setLeadData] = useState<any>(null);

  useEffect(() => {
    const storedData = localStorage.getItem('wholeLifeLeadData');
    if (storedData) {
      setLeadData(JSON.parse(storedData));
    }
  }, []);

  const handleBookCall = () => {
    console.log('Opening calendar booking for whole life insurance...');
    alert('Calendar booking functionality would be integrated here (Calendly, ScheduleOnce, etc.)');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">SecureLife Partners</span>
          </div>
        </div>
      </header>

      {/* Main Content */}  
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle2 className="w-20 h-20 text-indigo-500 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Your Family is One Step Closer to Protection{leadData?.firstName ? `, ${leadData.firstName}` : ''}!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Let's secure your whole life insurance coverage and start building your cash value today.
            </p>
          </div>

          {/* What Happens Next */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Next Steps to Protection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Expert Review Call
                    </h3>
                    <p className="text-gray-600">
                      Our licensed advisor will call within 24 hours to review your options and find the perfect coverage amount for your family.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Quick Application
                    </h3>
                    <p className="text-gray-600">
                      Most applications are approved instantly with no medical exam required. You could be covered today!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-8 mb-12">
            <Heart className="w-16 h-16 mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Every Day Matters</h2>
            <p className="text-xl mb-6 opacity-90">
              The sooner you're protected, the sooner your cash value starts growing
            </p>
            <Button
              onClick={handleBookCall}
              className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold transform hover:scale-105 transition-all duration-200"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule My Protection Review Now
            </Button>
            <p className="text-sm mt-4 opacity-75">
              Available 7 days a week, 8 AM - 9 PM EST
            </p>
          </div>

          {/* Benefits Reminder */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              What Your Coverage Will Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-indigo-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Death Benefit Protection</h4>
                <p className="text-gray-600 text-sm">Guaranteed payout to your beneficiaries</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Cash Value Growth</h4>
                <p className="text-gray-600 text-sm">Build wealth you can borrow against</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-violet-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Peace of Mind</h4>
                <p className="text-gray-600 text-sm">Know your family is always protected</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Questions About Your Coverage?
            </h3>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>1-800-SECURE-LIFE</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>info@securelifepartners.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold">SecureLife Partners</span>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Licensed insurance professionals helping families secure their financial future.
          </p>
          <p className="text-gray-400 text-xs">
            &copy; 2024 SecureLife Partners. Coverage and benefits may vary by state and insurance company.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WholeLifeThankYou;
