import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: FiMail, title: 'Email', info: 'support@stylehub.com', desc: 'We reply within 24 hours' },
    { icon: FiPhone, title: 'Phone', info: '+1 (555) 123-4567', desc: 'Mon-Fri, 9AM-6PM EST' },
    { icon: FiMapPin, title: 'Location', info: '123 Fashion Street', desc: 'New York, NY 10001' },
    { icon: FiClock, title: 'Business Hours', info: '9:00 AM - 6:00 PM', desc: 'Monday to Friday' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3 animate-fade-in">
              <FiCheckCircle className="text-green-600 text-2xl" />
              <div>
                <h3 className="font-semibold text-green-800">Message Sent Successfully!</h3>
                <p className="text-green-700">We'll get back to you within 24 hours.</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="input-field resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>
              
              <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
                <FiSend />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="card p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <info.icon className="text-primary-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                      <p className="text-gray-900 font-medium">{info.info}</p>
                      <p className="text-gray-600 text-sm mt-1">{info.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Find Us Here</h3>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                {/* Replace with actual map component */}
                <div className="w-full h-64 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📍</div>
                    <p className="text-gray-700 font-semibold">Interactive Map</p>
                    <p className="text-gray-600 text-sm">Map integration would go here</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mt-4">
                Visit our flagship store in New York City. Experience our products in person and meet our friendly staff.
              </p>
            </div>

            {/* FAQ Preview */}
            <div className="card p-6 mt-6">
              <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">What's your return policy?</h4>
                  <p className="text-gray-600 text-sm">We offer a 30-day return policy for all unused items.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Do you ship internationally?</h4>
                  <p className="text-gray-600 text-sm">Yes, we ship to over 100 countries worldwide.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">How can I track my order?</h4>
                  <p className="text-gray-600 text-sm">Track your order through your account or using the tracking number sent via email.</p>
                </div>
              </div>
              <button className="text-primary-600 hover:text-primary-700 font-medium mt-4">
                View all FAQs →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;