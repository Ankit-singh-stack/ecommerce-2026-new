import React from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiShoppingCart, FiHeart } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  const { id, name, price, originalPrice, rating, image, category, isNew, isSale } = product;

  return (
    <div className="card group animate-fade-in">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {isNew && (
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              NEW
            </span>
          )}
          {isSale && (
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              SALE
            </span>
          )}
        </div>
        
        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-primary-50 hover:text-primary-600 transition-colors duration-300">
            <FiHeart size={18} />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-primary-50 hover:text-primary-600 transition-colors duration-300">
            <FiShoppingCart size={18} />
          </button>
        </div>
      </div>
      
      <div className="p-5">
        <span className="text-sm text-gray-500 uppercase tracking-wide">{category}</span>
        <Link to={`/product/${id}`}>
          <h3 className="text-lg font-semibold mt-1 mb-2 hover:text-primary-600 transition-colors duration-300 line-clamp-2">
            {name}
          </h3>
        </Link>
        
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                fill={i < rating ? 'currentColor' : 'none'}
                className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
                size={16}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">({rating}.0)</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">${price}</span>
            {originalPrice && (
              <span className="text-lg text-gray-500 line-through">${originalPrice}</span>
            )}
          </div>
          <button className="btn-primary text-sm py-2 px-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;