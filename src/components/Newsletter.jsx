import React, { useState } from 'react';
import { FiMail } from 'react-icons/fi';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Subscribed:', email);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiMail className="text-white text-3xl" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Stay Updated with StyleHub
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about exclusive deals, new arrivals, and fashion tips.
            </p>
          </div>

          {isSubscribed ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center max-w-md mx-auto animate-fade-in">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">Welcome Aboard!</h3>
              <p className="text-green-700">
                Thank you for subscribing! Check your inbox for our welcome email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-grow px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-primary-500/20"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-4 px-8 rounded-xl hover:opacity-90 transition-opacity duration-300 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </div>
              <p className="text-gray-400 text-sm text-center mt-4">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </form>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-gray-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">500K+</div>
              <div className="text-gray-400">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">Weekly</div>
              <div className="text-gray-400">Updates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">Exclusive</div>
              <div className="text-gray-400">Deals</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">No Spam</div>
              <div className="text-gray-400">Ever</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;