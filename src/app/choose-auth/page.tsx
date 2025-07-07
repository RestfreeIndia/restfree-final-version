'use client'

import Link from 'next/link';
import { User, Shield, Store } from 'lucide-react';

export default function ChooseAuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-emerald-50 to-white">
      <div className="w-full max-w-lg p-10 bg-white rounded-3xl shadow-2xl flex flex-col gap-8 items-center border border-blue-100">
        <h2 className="text-4xl font-extrabold text-center mb-2 text-gray-900">Welcome! How would you like to continue?</h2>
        <p className="text-center text-gray-500 text-lg mb-4">Select your role to log in or sign up for the best experience.</p>
        <div className="flex flex-col gap-6 w-full">
          <Link href="/auth" className="flex items-center gap-4 w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white py-5 px-6 rounded-xl text-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200 group">
            <User className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
            <span className="flex-1 text-left">Continue as User</span>
          </Link>
          <Link href="/admin-auth" className="flex items-center gap-4 w-full bg-gradient-to-r from-black via-gray-800 to-gray-600 hover:from-black hover:via-gray-900 hover:to-gray-700 text-white py-5 px-6 rounded-xl text-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200 group">
            <Shield className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
            <span className="flex-1 text-left">Continue as Admin</span>
          </Link>
          <Link href="/merchant-auth" className="flex items-center gap-4 w-full bg-gradient-to-r from-emerald-600 to-blue-500 hover:from-emerald-700 hover:to-blue-600 text-white py-5 px-6 rounded-xl text-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200 group">
            <Store className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
            <span className="flex-1 text-left">Continue as Merchant</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 