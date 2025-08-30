import { Heart, Users, Target } from "lucide-react";

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

export default About;