
import React from 'react';
import { Shield, Users, Award, Clock } from 'lucide-react';

const WholeLifeTrustIndicators = () => {
  const indicators = [
    {
      icon: Shield,
      title: "Licensed & Trusted",
      description: "All our advisors are properly licensed and certified"
    },
    {
      icon: Users,
      title: "50,000+ Families Protected",
      description: "Trusted by thousands for life insurance protection"
    },
    {
      icon: Award,
      title: "A+ Insurance Partners",
      description: "We work with only the highest-rated insurance companies"
    },
    {
      icon: Clock,
      title: "Quick & Easy Process",
      description: "Get approved in minutes, not weeks"
    }
  ];

  return (
    <div className="bg-indigo-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map((indicator, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                <indicator.icon className="w-8 h-8 text-indigo-600" />
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

export default WholeLifeTrustIndicators;
