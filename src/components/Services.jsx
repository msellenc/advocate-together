import { Heart, ChevronDown, Users, Target } from 'lucide-react';

import useAppContext from "../hooks";

// Services Section
const Services = () => {
  const { activeService, setActiveService } = useAppContext();
  
  const services = [
    {
      id: 1,
      icon: <Heart className="w-8 h-8" />,
      title: "About Me",
      description: "Inspire students with engaging and innovative curriculums.",
      details: "I have over 27 years of experience working with special needs students and their families. I started my career as a paraprofessional and became a certified general and special education teacher. I am board certified in special education  through the National Association of Special Education Teachers (NASET) and I’m on their advisory board. I have also served as a UFT Teacher Center Site Coach and an IEP Coordinator for the New York City Public Schools."
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8" />,
      title: "Advocacy Coach",
      description: "We will make a difference for your students together.",
      details: "We will assist students with disabilities to receive appropriate services and accommodations by accompanying parents to their child's IEP or 504 meetings. We aim to help families navigate complex educational systems and understand their rights under IDEA and section 504. We will ensure schools comply with federal and state special education laws. We will stay updated on legal changes and help institutions adapt policies accordingly. We will help develop appropriate Functional Behavioral Assessments (FBAs) and Behavior Intervention Plans (BIPs.)"
    },
    {
      id: 3,
      icon: <Target className="w-8 h-8" />,
      title: "Educational Consultant",
      description: "Become the highly effective teacher you were meant to be.",
      details: "We will analyze student data and assessments to recommend tailored interventions. We will support the creation and implementation of effective IEPs and 504 plans. We will coach educators in developing inclusive lesson plans and assessments."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Educational consultant and special education advocacy coach.
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