import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import Newsletter from '../components/Newsletter';
import { FiTruck, FiShield, FiRefreshCw, FiTag } from 'react-icons/fi';

const Home = () => {
  // Sample products data
  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 199.99,
      originalPrice: 299.99,
      rating: 4,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      category: 'Electronics',
      isNew: true,
      isSale: true,
    },
    {
      id: 2,
      name: 'Classic Leather Jacket',
      price: 89.99,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop',
      category: 'Fashion',
      isNew: true,
    },
    {
      id: 3,
      name: 'Smart Watch Series 5',
      price: 299.99,
      rating: 4,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w-400&h=400&fit=crop',
      category: 'Electronics',
      isSale: true,
    },
    {
      id: 4,
      name: 'Designer Handbag Collection',
      price: 159.99,
      originalPrice: 199.99,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop',
      category: 'Fashion',
    },
  ];

  const categories = [
    { id: 1, name: 'Electronics', count: 128, image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop' },
    { id: 2, name: 'Fashion', count: 256, image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop' },
    { id: 3, name: 'Home & Living', count: 89, image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=300&fit=crop' },
    { id: 4, name: 'Sports', count: 67, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop' },
  ];

  const features = [
    { icon: FiTruck, title: 'Free Shipping', desc: 'On orders over $50' },
    { icon: FiShield, title: 'Secure Payment', desc: '100% secure transactions' },
    { icon: FiRefreshCw, title: 'Easy Returns', desc: '30-day return policy' },
    { icon: FiTag, title: 'Best Price', desc: 'Guaranteed best prices' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-50 to-secondary-50 overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Discover Your
                <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Perfect Style
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Explore our curated collection of premium products designed to elevate your lifestyle. Quality meets style in every purchase.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn-primary inline-flex items-center justify-center">
                  Shop Now
                </Link>
                <Link to="/about" className="btn-outline inline-flex items-center justify-center">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
                alt="Hero"
                className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold text-primary-600">50% OFF</div>
                <div className="text-gray-600">Summer Collection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 hover:bg-gray-50 rounded-xl transition-colors duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our extensive collection of products across various categories
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Featured Products</h2>
              <p className="text-gray-600">Handpicked selection of premium items</p>
            </div>
            <Link to="/products" className="btn-outline">
              View All Products
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Summer Sale Up to 70% Off
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't miss this amazing opportunity to grab your favorite items at incredible prices
          </p>
          <Link to="/products" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg inline-block transition-colors duration-300">
            Shop the Sale
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Home;