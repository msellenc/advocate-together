import { Heart, ChevronDown, Users, Target } from 'lucide-react';

import useAppContext from "../hooks";

// Services Section
const Services = () => {
  const { activeService, setActiveService } = useAppContext();
  
  const services = [
    {
      id: 1,
      icon: <Heart className="w-8 h-8" />,
      title: "Personal Development",
      description: "Build self-confidence, overcome limiting beliefs, and discover your authentic self.",
      details: "Our personal development coaching focuses on helping you understand your values, strengths, and goals. We work together to create actionable plans that align with your vision for personal growth and fulfillment."
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8" />,
      title: "Relationship Coaching",
      description: "Improve communication skills and build stronger, healthier relationships.",
      details: "Learn effective communication strategies, conflict resolution techniques, and how to build meaningful connections with others. Whether it's family, friends, or romantic relationships, we'll help you navigate challenges with confidence."
    },
    {
      id: 3,
      icon: <Target className="w-8 h-8" />,
      title: "Goal Achievement",
      description: "Transform your dreams into actionable plans with strategic guidance.",
      details: "We'll break down your big dreams into manageable steps, create accountability systems, and develop strategies to overcome obstacles. From career transitions to personal milestones, we'll help you achieve what matters most."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive coaching services designed to help you unlock your potential and create lasting change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer"
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              {activeService === service.id && (
                <div className="mt-4 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <p className="text-gray-700">{service.details}</p>
                </div>
              )}
              
              <div className="flex items-center text-purple-600 font-medium mt-4">
                Learn More 
                <ChevronDown 
                  className={`ml-2 transform transition-transform ${
                    activeService === service.id ? 'rotate-180' : ''
                  }`} 
                  size={20} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;