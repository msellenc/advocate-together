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
              Empowering individuals to find their voice and create meaningful
              change in their lives.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <a
              href="tel:+15166592610"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <p className="text-gray-400 mb-2">Phone: (516) 659-2610</p>
            </a>
            <a
              href="mailto:advocatetogethercoaching@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <p className="text-gray-400">
                Email: advocatetogethercoaching@gmail.com
              </p>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Advocate Together Coaching LLC. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Proudly built by{" "}
            <a
              href="https://www.linkedin.com/in/john-castrillon-a50141b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors duration-200 font-medium"
            >
              John
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
