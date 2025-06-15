import React from 'react';
import { Linkedin } from 'lucide-react';

const Header: React.FC<{ goHome?: () => void }> = ({ goHome }) => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 font-sans py-2">
    <div className="w-full px-0 py-0">
      <div className="flex items-end justify-between w-full">
        {/* Logo/Name */}
        <div className="flex items-end space-x-2 m-0 p-0" style={{ paddingLeft: '8rem' }}>
          <button onClick={goHome} className="flex items-end space-x-2 m-0 p-0">
            <span className="text-xl font-semibold text-black">Anita</span>
            <span className="text-2xl" style={{ color: 'rgb(128, 207, 163)' }}>✦</span>
            <span className="text-xl font-semibold text-black">Ekhoragbon</span>
          </button>
        </div>
        {/* Navigation */}
        <div className="hidden md:flex items-end space-x-8 m-0 p-0">
          <button
            onClick={() => window.location.href = '/'}
            className="text-base font-medium text-black hover:text-green-500 transition-colors m-0 p-0"
          >
            Home
          </button>
          <button
            onClick={() => window.location.href = '/about'}
            className="text-base font-medium text-black hover:text-green-500 transition-colors m-0 p-0"
          >
            About
          </button>
          <button
            onClick={() => window.location.href = '#contact'}
            className="text-base font-medium text-black hover:text-green-500 transition-colors m-0 p-0"
          >
            Contact
          </button>
        </div>
        {/* LinkedIn Button */}
        <div className="mr-24 items-end m-0 p-0">
          <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors flex items-end space-x-2 m-0 p-0">
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Header; 