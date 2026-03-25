import React from 'react';

function Footer() {
  return (
    <footer className="w-full py-6 mt-auto border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo/Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            U
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-800">UserDirectory</span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} UserApp. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;