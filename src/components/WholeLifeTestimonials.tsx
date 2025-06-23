
import React from 'react';
import { Star, Quote } from 'lucide-react';

const WholeLifeTestimonials = () => {
  const testimonials = [
    {
      name: "Robert K.",
      age: "58",
      location: "Phoenix, AZ",
      text: "SecureLife Partners made getting life insurance so easy. No medical exam, approved in 15 minutes, and now my family has $100,000 in protection. The cash value is already growing!",
      rating: 5
    },
    {
      name: "Maria L.",
      age: "52",
      location: "Miami, FL", 
      text: "I was worried about getting life insurance at my age, but they found me coverage with guaranteed acceptance. The whole process was stress-free and professional.",
      rating: 5
    },
    {
      name: "James T.",
      age: "64",
      location: "Chicago, IL",
      text: "The cash value feature is amazing - it's like having a savings account that also protects my wife. I wish I had started this policy years ago!",
      rating: 5
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Real Stories from Protected Families
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-indigo-200 mb-2" />
              <p className="text-gray-700 mb-4 text-base leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800">
                  {testimonial.name}, Age {testimonial.age}
                </p>
                <p className="text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WholeLifeTestimonials;
