import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiPlus, FiMinus, FiArrowLeft } from 'react-icons/fi';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 199.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w-200&h=200&fit=crop',
      color: 'Black',
      size: 'Standard',
    },
    {
      id: 2,
      name: 'Classic Leather Jacket',
      price: 89.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w-200&h=250&fit=crop',
      color: 'Brown',
      size: 'M',
    },
    {
      id: 3,
      name: 'Smart Watch Series 5',
      price: 299.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w-200&h=200&fit=crop',
      color: 'Silver',
      size: '42mm',
    },
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some items to get started!</p>
            <Link to="/products" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 border-b last:border-b-0">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-32 h-32 object-cover rounded-lg"
                      />
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                            <div className="flex items-center space-x-4 text-gray-600 mb-4">
                              <span>Color: {item.color}</span>
                              <span>Size: {item.size}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FiTrash2 size={20} />
                          </button>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                            <div className="flex items-center border border-gray-300 rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-2 hover:bg-gray-100"
                              >
                                <FiMinus />
                              </button>
                              <span className="px-4 py-2">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-2 hover:bg-gray-100"
                              >
                                <FiPlus />
                              </button>
                            </div>
                            <div className="text-lg font-bold">
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>
                          </div>
                          <div className="text-2xl font-bold">
                            ${item.price.toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/products" className="inline-flex items-center text-primary-600 hover:text-primary-700 mt-6">
                <FiArrowLeft className="mr-2" />
                Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div>
              <div className="card p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-center bg-green-50 text-green-700 p-3 rounded-lg">
                    <span className="text-sm">Free shipping on orders over $100</span>
                  </div>
                  
                  <Link to="/checkout" className="btn-primary w-full text-center">
                    Proceed to Checkout
                  </Link>
                  
                  <button className="btn-outline w-full">
                    Apply Promo Code
                  </button>
                </div>

                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-semibold mb-4">We Accept</h3>
                  <div className="flex space-x-4">
                    <div className="w-12 h-8 bg-gray-200 rounded"></div>
                    <div className="w-12 h-8 bg-gray-200 rounded"></div>
                    <div className="w-12 h-8 bg-gray-200 rounded"></div>
                    <div className="w-12 h-8 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;