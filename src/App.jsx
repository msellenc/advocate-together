import React, { useState, createContext, useContext } from 'react';
import { Menu, X, Heart, Users, Target, Star, Phone, Mail, MapPin, ArrowRight, ChevronDown } from 'lucide-react';

// Context for global state management
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

  return (
    <AppContext.Provider value={{
      isMenuOpen,
      setIsMenuOpen,
      activeService,
      setActiveService
    }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

// Header Component
const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Advocate Together Coaching LLC
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
              <a href="#services" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Services</a>
              <a href="#about" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
              <a href="#testimonials" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">Home</a>
              <a href="#services" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">Services</a>
              <a href="#about" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">About</a>
              <a href="#testimonials" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering You to
              <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Advocate Together
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your life through personalized coaching that helps you find your voice, 
              build confidence, and create meaningful change in your personal and professional journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Start Your Journey
                <ArrowRight className="inline ml-2" size={20} />
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <img 
                src="advocate-together-hero.jpg"
                alt="Advocate Together Coaching LLC Logo"
                className="relative max-w-md w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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

// About Section
const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Advocate Together</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Advocate Together Coaching LLC, we believe that everyone has the power to create positive 
              change in their lives. Our mission is to provide personalized coaching that empowers individuals 
              to find their voice, build confidence, and advocate for themselves and others.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With years of experience in personal development and a deep commitment to helping others, 
              we create a safe, supportive environment where transformation can happen. Together, we'll 
              navigate challenges, celebrate victories, and build the skills you need for lasting success.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <Heart className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-gray-700">Compassionate Approach</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <Users className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-gray-700">Personalized Support</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <Target className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-gray-700">Results-Driven</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20"></div>
              <div className="absolute inset-8 bg-white rounded-full shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                    100+
                  </div>
                  <p className="text-gray-600 font-medium">Lives Transformed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Professional",
      content: "Working with Advocate Together has been life-changing. I found my voice and confidence I never knew I had.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Entrepreneur",
      content: "The personalized approach and genuine care made all the difference in achieving my goals.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Teacher",
      content: "I learned to advocate for myself and others with confidence. The transformation has been incredible.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from people who have transformed their lives through our coaching programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-purple-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Ready to start your transformation journey? Let's connect and explore how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-pink-400 mr-4" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-purple-100">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-pink-400 mr-4" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-purple-100">info@advocatetogether.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-pink-400 mr-4" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-purple-100">Virtual & In-Person Sessions Available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
                  placeholder="Tell us about your goals and how we can help..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Advocate Together Coaching LLC
            </h3>
            <p className="text-gray-400 mb-4">
              Empowering individuals to find their voice and create meaningful change in their lives.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <p className="text-gray-400 mb-2">Phone: (555) 123-4567</p>
            <p className="text-gray-400">Email: info@advocatetogether.com</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Advocate Together Coaching LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <AppProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </AppProvider>
  );
};

export default App;