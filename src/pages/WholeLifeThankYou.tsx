
import React, { useEffect, useState } from 'react';
import { CheckCircle, Calendar, Phone, Star, Heart } from 'lucide-react';
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
    console.log('Opening whole life insurance calendar booking...');
    alert('Calendar booking functionality would be integrated here for whole life insurance consultation');
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
        </div>
      </header>

      {/* Main Content */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Thank You{leadData?.firstName ? `, ${leadData.firstName}` : ''}!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your family's protection and Medicare coverage are our priority!
            </p>
          </div>

          {/* What Happens Next */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Personal Consultation
                    </h3>
                    <p className="text-gray-600">
                      Our licensed specialist will call you within 24 hours to discuss your life insurance and Medicare needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Schedule Now
                    </h3>
                    <p className="text-gray-600">
                      Prefer to choose your time? Book a convenient appointment for your comprehensive consultation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-green-600 text-white rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Future?</h2>
            <p className="text-xl mb-6 opacity-90">
              Book your free consultation for whole life insurance and Medicare guidance
            </p>
            <Button
              onClick={handleBookCall}
              className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold transform hover:scale-105 transition-all duration-200"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule My Free Consultation
            </Button>
            <p className="text-sm mt-4 opacity-75">
              Available Monday-Friday, 8 AM - 8 PM EST
            </p>
          </div>

          {/* Video Section Placeholder */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              What to Expect During Your Consultation
            </h3>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">▶</span>
                </div>
                <p className="text-gray-600">Video: Life Insurance & Medicare Overview</p>
                <p className="text-sm text-gray-500">(3 minutes)</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Assess your protection needs</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Compare life insurance options</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Review Medicare plans</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Questions? We're Here to Help
            </h3>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>1-800-LIFE-PRO</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>info@lifemedicarepro.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Heart className="text-white h-5 w-5" />
            </div>
            <span className="text-lg font-bold">Life & Medicare Pro</span>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Licensed insurance specialists helping protect families and secure Medicare coverage.
          </p>
          <p className="text-gray-400 text-xs">
            &copy; 2024 Life & Medicare Pro. Not connected with or endorsed by the United States government or the federal Medicare program.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WholeLifeThankYou;
