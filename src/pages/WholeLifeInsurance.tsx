
import React from 'react';
import { useNavigate } from 'react-router-dom';
import WholeLifeLeadForm from '@/components/WholeLifeLeadForm';
import WholeLifeTestimonials from '@/components/WholeLifeTestimonials';
import WholeLifeTrustIndicators from '@/components/WholeLifeTrustIndicators';
import { Phone, Mail, Shield, Heart, Users, Award } from 'lucide-react';

const WholeLifeInsurance = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (data: any) => {
    console.log('Whole Life Insurance form submitted:', data);
    localStorage.setItem('wholeLifeLeadData', JSON.stringify(data));
    navigate('/whole-life-thank-you');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">SecureLife Partners</span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>1-800-SECURE-LIFE</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>Expert Advisors Available</span>
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
                Protect Your Family's Future with{' '}
                <span className="text-indigo-600">Guaranteed Life Insurance</span>{' '}
                Coverage
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Build wealth while protecting your loved ones. Our whole life insurance provides lifelong coverage with guaranteed cash value growth — all with no medical exam required.
              </p>
              <div className="flex flex-wrap gap-4 text-lg">
                <div className="flex items-center space-x-2 text-indigo-600">
                  <Shield className="w-5 h-5" />
                  <span>No Medical Exam Required</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-600">
                  <Heart className="w-5 h-5" />
                  <span>Guaranteed Acceptance</span>
                </div>
                <div className="flex items-center space-x-2 text-violet-600">
                  <Award className="w-5 h-5" />
                  <span>Cash Value Builds Wealth</span>
                </div>
              </div>
              
              {/* Hero Image for Mobile */}
              <div className="lg:hidden">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop"
                  alt="Happy family enjoying life together"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="space-y-6">
              {/* Hero Image for Desktop */}
              <div className="hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop"
                  alt="Happy family enjoying life together"
                  className="w-full h-80 object-cover rounded-lg shadow-xl mb-6"
                />
              </div>
              <WholeLifeLeadForm onSubmit={handleFormSubmit} />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <WholeLifeTrustIndicators />

      {/* Benefits Section with Images */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Whole Life Insurance?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlike term life insurance, whole life provides permanent protection with additional benefits that grow over time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop"
                  alt="Financial security and planning"
                  className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-6">Lifelong Protection</h3>
              <p className="text-gray-600">
                Your coverage never expires as long as premiums are paid. Guaranteed protection for your entire life, not just a term.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop"
                  alt="Growing wealth and investments"
                  className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-6">Build Wealth</h3>
              <p className="text-gray-600">
                Your policy accumulates cash value you can borrow against. It's like a savings account that also protects your family.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop"
                  alt="Family protection and love"
                  className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-violet-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-6">Peace of Mind</h3>
              <p className="text-gray-600">
                Know that your family will be financially secure no matter what happens. Sleep better knowing they're protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Coverage Options Available
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['$25,000', '$50,000', '$100,000', '$250,000+'].map((amount, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-2 border-transparent hover:border-indigo-200 transition-all duration-200">
                <div className="text-2xl font-bold text-indigo-600 mb-2">{amount}</div>
                <p className="text-gray-600">Coverage Amount</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-600 mt-8">
            <strong>Ages 45-85 eligible.</strong> No medical exam required for most applicants.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <WholeLifeTestimonials />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Wait — Protect Your Family Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Every day without coverage is a day your family is at financial risk. Get your free quote in under 2 minutes.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>50,000+ Families Protected</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>A+ Rated Insurance Companies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}  
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">SecureLife Partners</span>
              </div>
              <p className="text-gray-300">
                Protecting American families with reliable life insurance solutions since 2010.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 1-800-SECURE-LIFE</p>
                <p>✉️ info@securelifepartners.com</p>
                <p>📍 Licensed in all 50 states</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Important Information</h4>
              <p className="text-gray-300 text-sm">
                We are licensed insurance agents representing top-rated insurance companies. Coverage and benefits may vary by state and insurance company.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
            <p>&copy; 2024 SecureLife Partners. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WholeLifeInsurance;
