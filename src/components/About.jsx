import { Heart, Users, Target } from "lucide-react";

// About Section
const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Advocate Together Coaching LLC</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We empower families, educators, and students through expert coaching in special education advocacy. Our mission is to simplify complex systems, support inclusive practices, and ensure every child receives the services they deserve. We offer personalized guidance on IEPs, 504 Plans, and school collaboration, while fostering confidence and clarity for parents navigating their child’s educational journey. Together, we build bridges, champion equity, and drive meaningful change in education. We will ensure that your child’s privacy is secure by following FERPA and HIPAA laws.
            </p>
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