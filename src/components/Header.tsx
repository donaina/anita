import React from 'react';
import { Linkedin } from 'lucide-react';

const Header: React.FC<{ goHome?: () => void }> = ({ goHome }) => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 font-sans">
    <div className="w-full px-0 py-4">
      <div className="flex items-center justify-between w-full">
        {/* Logo/Name */}
        <div className="flex items-center space-x-2" style={{ paddingLeft: '8rem' }}>
          <button onClick={goHome} className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-black">Anita</span>
            <span className="text-2xl" style={{ color: 'rgb(128, 207, 163)' }}>✦</span>
            <span className="text-xl font-semibold text-black">Ekhoragbon</span>
          </button>
        </div>
        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => window.location.href = '/'}
            className="text-base font-medium text-black hover:text-green-500 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => window.location.href = '/about'}
            className="text-base font-medium text-black hover:text-green-500 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => window.location.href = '#contact'}
            className="text-base font-medium text-black hover:text-green-500 transition-colors"
          >
            Contact
          </button>
        </div>
        {/* LinkedIn Button */}
        <div className="mr-24">
          <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2">
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Header; 