import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { FiFilter, FiGrid, FiList, FiChevronDown } from 'react-icons/fi';

const Products = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');

  // Sample products data
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: 99.99 + (i * 20),
    originalPrice: i % 3 === 0 ? 149.99 + (i * 20) : null,
    rating: Math.floor(Math.random() * 2) + 3,
    image: `https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&${i}`,
    category: i % 4 === 0 ? 'Electronics' : i % 4 === 1 ? 'Fashion' : i % 4 === 2 ? 'Home' : 'Sports',
    isNew: i < 4,
    isSale: i % 3 === 0,
  }));

  const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Sports', 'Beauty'];
  const priceRanges = [
    { label: 'Under $50', range: [0, 50] },
    { label: '$50 - $100', range: [50, 100] },
    { label: '$100 - $200', range: [100, 200] },
    { label: 'Over $200', range: [200, Infinity] },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">All Products</h1>
          <p className="text-gray-600">Discover our premium collection of products</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Filters</h3>
                <FiFilter className="text-gray-500" />
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-gray-700">{category}</span>
                      <span className="text-gray-400 text-sm">({Math.floor(Math.random() * 50) + 10})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4">Price Range</h4>
                <div className="space-y-2">
                  {priceRanges.map((range, index) => (
                    <label key={index} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-gray-700">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div>
                <h4 className="font-semibold mb-4">Customer Rating</h4>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <label key={stars} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded text-primary-600 focus:ring-primary-500"
                      />
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < stars ? 'text-yellow-400' : 'text-gray-300'}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-gray-700">& Up</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full btn-primary mt-6">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Controls */}
            <div className="card p-4 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <span className="text-gray-600">{products.length} products found</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-500'}`}
                    >
                      <FiGrid size={20} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-500'}`}
                    >
                      <FiList size={20} />
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">Sort by:</span>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Customer Rating</option>
                      <option value="newest">Newest Arrivals</option>
                    </select>
                    <FiChevronDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Previous
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-4 py-2 rounded-lg ${page === 1 ? 'bg-primary-600 text-white' : 'hover:bg-gray-50'}`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;