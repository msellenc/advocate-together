// import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

// Contact Section
const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log('Form submitted:', formData);
  //   alert('Thank you for your message! We\'ll get back to you soon.');
  //   setFormData({ name: '', email: '', message: '' });
  // };

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Ready to start your transformation journey? Let's connect and explore how we can work together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-12 text-center">Contact Information</h3>
          <div className="space-y-8">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 text-pink-400 mr-4" />
              <div className="text-center">
                <h4 className="font-semibold">Phone</h4>
                <p className="text-purple-100">(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 text-pink-400 mr-4" />
              <div className="text-center">
                <h4 className="font-semibold">Email</h4>
                <p className="text-purple-100">info@advocatetogether.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 text-pink-400 mr-4" />
              <div className="text-center">
                <h4 className="font-semibold">Location</h4>
                <p className="text-purple-100">Virtual & In-Person Sessions Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;