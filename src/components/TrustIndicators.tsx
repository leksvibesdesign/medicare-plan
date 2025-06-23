
import React from 'react';
import { Shield, Users, Award, Clock } from 'lucide-react';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Shield,
      title: "Licensed & Certified",
      description: "All our agents are properly licensed and certified"
    },
    {
      icon: Users,
      title: "10,000+ Clients Served",
      description: "Trusted by thousands of Medicare beneficiaries"
    },
    {
      icon: Award,
      title: "A+ BBB Rating",
      description: "Accredited business with excellent reviews"
    },
    {
      icon: Clock,
      title: "Free Consultation",
      description: "No obligation, no pressure - just honest advice"
    }
  ];

  return (
    <div className="bg-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map((indicator, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <indicator.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {indicator.title}
              </h4>
              <p className="text-gray-600">
                {indicator.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;
