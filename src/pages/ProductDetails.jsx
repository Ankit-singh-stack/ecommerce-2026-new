import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiShoppingCart, FiHeart, FiShare2, FiTruck, FiShield, FiRefreshCw } from 'react-icons/fi';

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');

  const product = {
    id: 1,
    name: 'Premium Wireless Headphones',
    brand: 'AudioPro',
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.5,
    reviews: 128,
    description: 'Experience premium sound quality with our latest wireless headphones. Featuring noise cancellation, 30-hour battery life, and premium comfort for extended use.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium comfort design',
      'Built-in microphone',
      'Bluetooth 5.0 connectivity',
    ],
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop',
    ],
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'Silver', value: '#c0c0c0' },
      { name: 'Blue', value: '#3b82f6' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 15,
    sku: 'AUDIO-2023-PRO',
    category: 'Electronics',
  };

  const relatedProducts = [
    { id: 2, name: 'Wireless Earbuds', price: 89.99, image: 'https://images.unsplash.com/photo-1590658165737-15a047b8b5e9?w=300&h=300&fit=crop' },
    { id: 3, name: 'Bluetooth Speaker', price: 129.99, image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=300&h=300&fit=crop' },
    { id: 4, name: 'Studio Headphones', price: 149.99, image: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=300&h=300&fit=crop' },
  ];

  const reviews = [
    { id: 1, name: 'Alex Johnson', rating: 5, date: '2023-10-15', comment: 'Excellent sound quality and very comfortable!' },
    { id: 2, name: 'Maria Garcia', rating: 4, date: '2023-10-10', comment: 'Great battery life, noise cancellation works perfectly.' },
    { id: 3, name: 'David Smith', rating: 5, date: '2023-10-05', comment: 'Best headphones I have ever owned. Worth every penny!' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link to="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-primary-600">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-24 h-24 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary-600' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="text-sm text-primary-600 font-semibold uppercase tracking-wide">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold mt-2 mb-3">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                        className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="text-gray-700">{product.rating} ({product.reviews} reviews)</span>
                </div>
                <span className="text-green-600 font-semibold">In Stock ({product.stock} left)</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                <span className="text-2xl text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-semibold">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              </div>
              <p className="text-gray-600 mb-6">{product.description}</p>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`flex items-center space-x-2 px-4 py-2 border-2 rounded-lg ${
                      selectedColor === color.name ? 'border-primary-600' : 'border-gray-200'
                    }`}
                  >
                    <div
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: color.value }}
                    />
                    <span>{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Size</h3>
              <div className="flex space-x-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center border-2 rounded-lg font-semibold ${
                      selectedSize === size
                        ? 'border-primary-600 bg-primary-50 text-primary-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="mb-8">
              <div className="flex items-center space-x-6">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-6 py-3">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <div className="flex space-x-4">
                  <button className="btn-primary flex items-center space-x-2">
                    <FiShoppingCart />
                    <span>Add to Cart</span>
                  </button>
                  <button className="btn-outline flex items-center space-x-2">
                    <FiHeart />
                    <span>Wishlist</span>
                  </button>
                  <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <FiShare2 />
                  </button>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                <FiTruck className="text-primary-600" />
                <div>
                  <div className="font-semibold">Free Shipping</div>
                  <div className="text-sm text-gray-600">Over $50</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                <FiShield className="text-primary-600" />
                <div>
                  <div className="font-semibold">2-Year Warranty</div>
                  <div className="text-sm text-gray-600">Guaranteed</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                <FiRefreshCw className="text-primary-600" />
                <div>
                  <div className="font-semibold">30-Day Returns</div>
                  <div className="text-sm text-gray-600">Easy returns</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          fill={i < review.rating ? 'currentColor' : 'none'}
                          className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="card group hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-primary-600">
                    {relatedProduct.name}
                  </h3>
                  <div className="font-bold text-lg">${relatedProduct.price.toFixed(2)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;