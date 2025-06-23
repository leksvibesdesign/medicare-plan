
import React, { useEffect, useState } from 'react';
import { CheckCircle, Calendar, Phone, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThankYou = () => {
  const [leadData, setLeadData] = useState<any>(null);

  useEffect(() => {
    const storedData = localStorage.getItem('leadData');
    if (storedData) {
      setLeadData(JSON.parse(storedData));
    }
  }, []);

  const handleBookCall = () => {
    // In a real application, this would open a calendar booking widget
    console.log('Opening calendar booking...');
    alert('Calendar booking functionality would be integrated here (Calendly, ScheduleOnce, etc.)');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Medicare Connect</span>
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
              You're All Set{leadData?.firstName ? `, ${leadData.firstName}` : ''}!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Let's get your Medicare questions answered!
            </p>
          </div>

          {/* What Happens Next */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      We'll Call You Soon
                    </h3>
                    <p className="text-gray-600">
                      Our licensed agent will reach out within 24 hours to discuss your Medicare options.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Or Book Now
                    </h3>
                    <p className="text-gray-600">
                      Prefer to schedule at your convenience? Book a time that works best for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-blue-600 text-white rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Talk Now?</h2>
            <p className="text-xl mb-6 opacity-90">
              Book a convenient time for your free Medicare consultation
            </p>
            <Button
              onClick={handleBookCall}
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold transform hover:scale-105 transition-all duration-200"
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
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">▶</span>
                </div>
                <p className="text-gray-600">Video: Medicare Consultation Overview</p>
                <p className="text-sm text-gray-500">(2 minutes)</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Review your current situation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Compare available plans</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Answer all your questions</span>
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
                <span>1-800-MEDICARE</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>info@medicareconnect.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="text-lg font-bold">Medicare Connect</span>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Licensed insurance agents helping Americans navigate Medicare with confidence.
          </p>
          <p className="text-gray-400 text-xs">
            &copy; 2024 Medicare Connect. Not connected with or endorsed by the United States government or the federal Medicare program.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ThankYou;
