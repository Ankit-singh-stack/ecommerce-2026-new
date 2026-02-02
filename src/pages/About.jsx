import React from 'react';
import { FiCheck, FiUsers, FiAward, FiGlobe, FiTruck } from 'react-icons/fi';

const About = () => {
  const features = [
    { icon: FiUsers, title: '10,000+', desc: 'Happy Customers' },
    { icon: FiAward, title: 'Premium', desc: 'Quality Products' },
    { icon: FiGlobe, title: '100+', desc: 'Countries Served' },
    { icon: FiTruck, title: 'Fast', desc: 'Worldwide Shipping' },
  ];

  const team = [
    { name: 'Sarah Johnson', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4d5?w=300&h=300&fit=crop' },
    { name: 'Michael Chen', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop' },
    { name: 'Emma Rodriguez', role: 'Marketing Director', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&h=300&fit=crop' },
    { name: 'David Park', role: 'Tech Lead', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-50 to-secondary-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">StyleHub</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to make premium fashion and lifestyle products accessible to everyone, everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2015, StyleHub began as a small boutique with a big vision: to revolutionize online shopping 
                by combining exceptional quality with affordable prices. What started as a passion project has grown 
                into a global e-commerce platform serving millions of satisfied customers worldwide.
              </p>
              <p className="text-gray-600 mb-8">
                Today, we partner with over 500 brands and artisans to bring you carefully curated collections 
                that blend timeless style with modern trends. Our commitment to quality, sustainability, and 
                customer satisfaction remains at the heart of everything we do.
              </p>
              
              <div className="space-y-4">
                {['Premium Quality Products', 'Sustainable Practices', '24/7 Customer Support', 'Global Shipping'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                      <FiCheck className="text-primary-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop"
                alt="Our Story"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold text-primary-600">8+ Years</div>
                <div className="text-gray-600">of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white text-2xl" />
                </div>
                <div className="text-3xl font-bold mb-2">{feature.title}</div>
                <div className="text-gray-600">{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind StyleHub's success
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center group hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card p-8">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To democratize fashion by making premium quality products accessible to everyone, 
                while maintaining the highest standards of sustainability and ethical practices.
              </p>
              <div className="bg-primary-100 text-primary-800 p-4 rounded-lg">
                "Style is a way to say who you are without having to speak."
              </div>
            </div>
            
            <div className="card p-8">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 mb-6">
                To become the world's most trusted and innovative e-commerce platform, 
                setting new standards for customer experience, product quality, and 
                environmental responsibility.
              </p>
              <div className="bg-secondary-100 text-secondary-800 p-4 rounded-lg">
                "Creating a world where everyone can express their unique style confidently."
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;