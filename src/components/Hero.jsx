import { ArrowRight } from "lucide-react"

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
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Start Your Journey
                <ArrowRight className="inline ml-2" size={20} />
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div> */}
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

export default Hero;