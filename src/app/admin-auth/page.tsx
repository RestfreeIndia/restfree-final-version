"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowLeft, Shield } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminAuthPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email === 'admin@gmail.com' && formData.password === 'admin@123') {
      localStorage.setItem('userType', 'admin');
      router.push('/admin-dashboard');
    } else {
      setError('Invalid admin credentials.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="w-full max-w-md p-10 bg-white rounded-3xl shadow-2xl flex flex-col gap-8 items-center border border-blue-100">
        <div className="flex flex-col items-center gap-2 mb-4">
          <Shield className="w-14 h-14 text-emerald-600 mb-2" />
          <h2 className="text-3xl font-extrabold text-center text-gray-900">Admin Login</h2>
          <p className="text-center text-gray-500 text-lg">Sign in as platform admin</p>
        </div>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 shadow-sm focus:shadow-md text-base"
                placeholder="Enter admin email"
                required
                autoComplete="email"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 shadow-sm focus:shadow-md text-base"
                placeholder="Enter admin password"
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-50 rounded-r-lg transition-colors duration-200 min-h-[44px]"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
          </div>
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold py-3 rounded-lg">Sign In</Button>
        </form>
        <div className="w-full flex justify-between mt-2">
          <Link href="/choose-auth" className="text-emerald-600 hover:underline text-sm flex items-center">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back
          </Link>
        </div>
      </div>
    </div>
  );
} 