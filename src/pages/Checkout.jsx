import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCreditCard, FiLock, FiCheckCircle } from 'react-icons/fi';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const cartItems = [
    { id: 1, name: 'Premium Wireless Headphones', price: 199.99, quantity: 1 },
    { id: 2, name: 'Classic Leather Jacket', price: 89.99, quantity: 2 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const steps = [
    { number: 1, title: 'Shipping' },
    { number: 2, title: 'Payment' },
    { number: 3, title: 'Confirmation' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center">
            {steps.map((s) => (
              <div key={s.number} className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                    step >= s.number
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step > s.number ? <FiCheckCircle /> : s.number}
                </div>
                <span
                  className={`text-sm font-medium ${
                    step >= s.number ? 'text-primary-600' : 'text-gray-500'
                  }`}
                >
                  {s.title}
                </span>
              </div>
            ))}
          </div>
          <div className="relative mt-6">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2"></div>
            <div
              className="absolute top-1/2 left-0 h-0.5 bg-primary-600 -translate-y-1/2 transition-all duration-300"
              style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>
        </div>

        {step === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Shipping Form */}
            <div>
              <div className="card p-8 mb-6">
                <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input type="text" className="input-field" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input type="text" className="input-field" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input type="email" className="input-field" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <input type="text" className="input-field" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input type="text" className="input-field" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State *
                      </label>
                      <input type="text" className="input-field" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ZIP Code *
                      </label>
                      <input type="text" className="input-field" required />
                    </div>
                  </div>
                  <div>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded text-primary-600" />
                      <span className="text-gray-700">Save this information for next time</span>
                    </label>
                  </div>
                </form>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6">Shipping Method</h2>
                <div className="space-y-4">
                  <label className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <input
                        type="radio"
                        name="shipping"
                        defaultChecked
                        className="text-primary-600"
                      />
                      <div>
                        <div className="font-semibold">Standard Shipping</div>
                        <div className="text-gray-600">5-7 business days</div>
                      </div>
                    </div>
                    <div className="font-bold">$9.99</div>
                  </label>
                  <label className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <input
                        type="radio"
                        name="shipping"
                        className="text-primary-600"
                      />
                      <div>
                        <div className="font-semibold">Express Shipping</div>
                        <div className="text-gray-600">2-3 business days</div>
                      </div>
                    </div>
                    <div className="font-bold">$19.99</div>
                  </label>
                  <label className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <input
                        type="radio"
                        name="shipping"
                        className="text-primary-600"
                      />
                      <div>
                        <div className="font-semibold">Next Day Delivery</div>
                        <div className="text-gray-600">1 business day</div>
                      </div>
                    </div>
                    <div className="font-bold">$29.99</div>
                  </label>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="card p-8 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-600">Qty: {item.quantity}</div>
                      </div>
                      <div className="font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center bg-gray-50 p-4 rounded-lg mb-6">
                  <FiLock className="text-green-600 mr-2" />
                  <span className="text-sm text-gray-600">
                    Secure checkout. Your information is protected.
                  </span>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="btn-primary w-full"
                >
                  Continue to Payment
                </button>

                <Link to="/cart" className="block text-center text-primary-600 hover:text-primary-700 mt-4">
                  ← Return to cart
                </Link>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Payment Form */}
            <div>
              <div className="card p-8 mb-6">
                <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
                
                <div className="space-y-4 mb-8">
                  {['card', 'paypal', 'applepay'].map((method) => (
                    <label
                      key={method}
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer ${
                        paymentMethod === method
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-500'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method}
                        checked={paymentMethod === method}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="text-primary-600 mr-4"
                      />
                      <div className="flex items-center space-x-3">
                        {method === 'card' && (
                          <>
                            <FiCreditCard className="text-2xl" />
                            <div>
                              <div className="font-semibold">Credit/Debit Card</div>
                              <div className="text-sm text-gray-600">Pay with your card</div>
                            </div>
                          </>
                        )}
                        {method === 'paypal' && (
                          <>
                            <div className="w-8 h-8 bg-blue-600 rounded"></div>
                            <div className="font-semibold">PayPal</div>
                          </>
                        )}
                        {method === 'applepay' && (
                          <>
                            <div className="w-8 h-8 bg-black rounded"></div>
                            <div className="font-semibold">Apple Pay</div>
                          </>
                        )}
                      </div>
                    </label>
                  ))}
                </div>

                {paymentMethod === 'card' && (
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="input-field"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Date *
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="input-field"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVC *
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          className="input-field"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name on Card *
                      </label>
                      <input type="text" className="input-field" required />
                    </div>
                  </form>
                )}

                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-semibold mb-4">Billing Address</h3>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded text-primary-600" defaultChecked />
                    <span className="text-gray-700">Same as shipping address</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="btn-outline"
                >
                  ← Back to Shipping
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="btn-primary"
                >
                  Complete Order
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="card p-8 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                <div className="text-3xl font-bold text-primary-600 mb-6">
                  ${total.toFixed(2)}
                </div>
                
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                      <div className="flex-grow">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-600">Qty: {item.quantity}</div>
                      </div>
                      <div className="font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Shipping to:</span>
                    <span className="font-medium">New York, NY 10001</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping method:</span>
                    <span className="font-medium">Standard (5-7 days)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment method:</span>
                    <span className="font-medium">
                      {paymentMethod === 'card' ? 'Credit Card' : 
                       paymentMethod === 'paypal' ? 'PayPal' : 'Apple Pay'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="max-w-2xl mx-auto">
            <div className="card p-12 text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiCheckCircle className="text-green-600 text-5xl" />
              </div>
              
              <h2 className="text-4xl font-bold mb-4">Order Confirmed!</h2>
              <p className="text-gray-600 text-lg mb-8">
                Thank you for your purchase. Your order has been confirmed and is being processed.
              </p>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <div className="text-2xl font-bold text-primary-600 mb-2">
                  Order #ORD-2023-{Math.floor(Math.random() * 10000)}
                </div>
                <div className="text-gray-600">
                  We've sent a confirmation email to your registered email address.
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-600">Estimated Delivery:</span>
                  <span className="font-semibold">October 28, 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Amount:</span>
                  <span className="text-2xl font-bold">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/" className="btn-primary">
                  Continue Shopping
                </Link>
                <Link to="/orders" className="btn-outline">
                  View Order Details
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;