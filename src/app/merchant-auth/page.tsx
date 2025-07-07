'use client'

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowLeft, Store, Phone, MapPin, Building2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const categories = [
  "Restroom Facilities",
  "Hotels & Accommodations",
  "Waiting Areas",
  "Clockrooms & Luggage Storage",
  "Cafes & Restaurants",
  "Rest Areas",
  "Transportation Hubs",
  "Shopping Centers"
];

export default function MerchantAuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    category: '',
    address: '',
    contactEmail: '',
    contactPhone: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      if (!formData.contactEmail || !formData.password) {
        alert('Please enter your email and password.');
        return;
      }
      localStorage.setItem('merchantType', 'merchant');
      router.push('/merchant-dashboard');
    } else {
      if (
        !formData.businessName ||
        !formData.category ||
        !formData.address ||
        !formData.contactEmail ||
        !formData.contactPhone ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        alert('Please fill in all required fields.');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      alert('Merchant signup successful! You can now log in.');
      setIsLogin(true);
      setFormData({
        businessName: '',
        category: '',
        address: '',
        contactEmail: '',
        contactPhone: '',
        password: '',
        confirmPassword: ''
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      businessName: '',
      category: '',
      address: '',
      contactEmail: '',
      contactPhone: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between lg:flex-row bg-transparent">
      {/* Left Side - Gradient Info Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-emerald-600 to-blue-600 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-12 left-12 w-32 h-32 rounded-full border border-white/30 shadow-lg shadow-white/10"></div>
        <div className="absolute top-32 right-20 w-20 h-20 rounded-full border border-white/25"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full border border-white/20"></div>
        <div className="absolute top-64 right-32 w-16 h-16 rounded-full border border-white/15"></div>
        <div className="absolute bottom-32 right-12 w-12 h-12 rounded-full border border-white/20"></div>
        {/* Store icon */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
          <div className="w-20 h-20 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border border-white/30">
            <Store size={32} className="text-white drop-shadow-lg" />
          </div>
        </div>
        {/* Content */}
        <div className="flex flex-col justify-center items-center text-white p-12 w-full pt-32">
          <div className="text-center max-w-md">
            <h1 className="text-5xl font-bold mb-6">Welcome Merchant!</h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Sign in to manage your business or sign up to join RestFree and reach more customers.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-white/90">
                <div className="w-3 h-3 rounded-full bg-white/80 mr-4 shadow-lg"></div>
                <span className="text-lg">Grow your business with RestFree</span>
              </div>
              <div className="flex items-center text-white/90">
                <div className="w-3 h-3 rounded-full bg-emerald-300 mr-4 shadow-lg"></div>
                <span className="text-lg">Access analytics and customer reviews</span>
              </div>
              <div className="flex items-center text-white/90">
                <div className="w-3 h-3 rounded-full bg-blue-300 mr-4 shadow-lg"></div>
                <span className="text-lg">Manage your listings and bookings</span>
              </div>
            </div>
          </div>
          {/* Switch Mode Button */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <button
              onClick={switchMode}
              className="bg-white/20 backdrop-blur-sm text-white text-xl font-semibold hover:bg-white/30 transition-all duration-300 px-8 py-3 rounded-full border border-white/30 shadow-lg hover:shadow-xl hover:scale-105"
            >
              {isLogin ? 'Create Merchant Account' : 'Sign In as Merchant'}
            </button>
          </div>
        </div>
      </div>
      {/* Right Side - Form Panel */}
      <div className="w-full lg:w-1/2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg flex flex-col border-l border-gray-200/50 dark:border-slate-700/50 flex-1">
        {/* Mobile Header */}
        <div className="lg:hidden bg-gradient-to-r from-emerald-600 to-blue-600 text-white p-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/30">
              <Store size={24} className="text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-2">Welcome Merchant</h1>
          <p className="text-white/90 text-sm">Grow your business with RestFree</p>
        </div>
        {/* Back to Home Button */}
        <div className="p-4 lg:p-6">
          <Link 
            href="/"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium text-sm transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-3 py-2 rounded-lg group"
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>
        {/* Form Container */}
        <div className="p-4 lg:p-6 flex-1">
          <div className="w-full max-w-md mx-auto">
            {/* Title */}
            <div className="text-center mb-6 lg:mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 lg:mb-3">
                {isLogin ? 'Merchant Sign In' : 'Merchant Sign Up'}
              </h2>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">
                {isLogin ? 'Enter your credentials to access your merchant dashboard' : 'Create your merchant account to get started'}
              </p>
            </div>
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              {/* Business Name (Sign Up only) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Business Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building2 className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-base"
                      placeholder="Enter your business name"
                      required={!isLogin}
                      autoComplete="organization"
                    />
                  </div>
                </div>
              )}
              {/* Business Category (Sign Up only) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Business Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-base"
                    required={!isLogin}
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              )}
              {/* Business Address (Sign Up only) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Business Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-base"
                      placeholder="Enter your business address"
                      required={!isLogin}
                      autoComplete="street-address"
                    />
                  </div>
                </div>
              )}
              {/* Contact Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contact Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-sm focus:shadow-md text-base"
                    placeholder="business@example.com"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              {/* Contact Phone (Sign Up only) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Contact Phone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-base"
                      placeholder="+91-9876-543210"
                      required={!isLogin}
                      autoComplete="tel"
                    />
                  </div>
                </div>
              )}
              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-sm focus:shadow-md text-base"
                    placeholder="Enter your password"
                    required
                    autoComplete={isLogin ? "current-password" : "new-password"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-50 dark:hover:bg-gray-700 rounded-r-lg transition-colors duration-200 min-h-[44px]"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                    )}
                  </button>
                </div>
              </div>
              {/* Confirm Password (Sign Up only) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-base"
                      placeholder="Confirm your password"
                      required={!isLogin}
                      autoComplete="new-password"
                    />
                  </div>
                </div>
              )}
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 transform hover:scale-[1.02] relative overflow-hidden group min-h-[48px]"
              >
                <span className="relative z-10">{isLogin ? 'Sign In' : 'Sign Up'}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              {/* Forgot Password (Login only) */}
              {isLogin && (
                <div className="text-center">
                  <button
                    type="button"
                    className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium text-sm hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-4 py-2 rounded-lg transition-all duration-200 min-h-[44px]"
                  >
                    Forgot your password?
                  </button>
                </div>
              )}
            </form>
            {/* Switch Mode (Mobile) */}
            <div className="lg:hidden text-center mt-6">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {isLogin ? "Don't have a merchant account?" : "Already have a merchant account?"}
                <button
                  onClick={switchMode}
                  className="ml-2 text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-3 py-2 rounded-lg transition-all duration-200 min-h-[44px]"
                >
                  {isLogin ? 'Sign up' : 'Sign In'}
                </button>
              </p>
            </div>
          </div>
        </div>
        {/* Decorative Bottom Section for Mobile */}
        <div className="block lg:hidden w-full">
          <div className="w-full bg-gradient-to-t from-emerald-200 to-blue-100 rounded-t-3xl flex flex-col items-center justify-center py-10 shadow-xl">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg mb-4">
              <Store size={36} className="text-emerald-600" />
            </div>
            <p className="text-gray-700 text-base font-semibold text-center max-w-xs mb-1">Manage, grow, and analyze your business with RestFree.</p>
            <p className="text-emerald-700 text-sm text-center max-w-xs">Join our merchant network and unlock new opportunities!</p>
          </div>
        </div>
      </div>
    </div>
  );
} 