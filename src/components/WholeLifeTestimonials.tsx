
import React from 'react';
import { Star, Quote } from 'lucide-react';

const WholeLifeTestimonials = () => {
  const testimonials = [
    {
      name: "Michael S.",
      age: "42",
      location: "Dallas, TX",
      text: "They helped me secure a $500,000 whole life policy and guided me through Medicare options for my parents. Couldn't be happier with the service!",
      rating: 5
    },
    {
      name: "Sarah T.",
      age: "38",
      location: "Denver, CO",
      text: "The consultation was incredibly thorough. They explained both life insurance and Medicare in terms I could understand. No pressure, just great advice.",
      rating: 5
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
          What Our Clients Are Saying
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-green-200 mb-2" />
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
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
