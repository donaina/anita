import React from 'react';
import { Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 font-sans">
      <div className="w-full px-0 py-4">
        <div className="flex items-center justify-between w-full" style={{ paddingLeft: '8rem', paddingRight: '8rem' }}>
          {/* Logo/Name */}
          <div className="flex items-center space-x-2">
            <button onClick={() => navigate('/')} className="flex items-center space-x-2">
              <span className="text-xl font-semibold text-black">Anita</span>
              <span className="text-2xl" style={{ color: 'rgb(128, 207, 163)' }}>✦</span>
              <span className="text-xl font-semibold text-black">Ekhoragbon</span>
            </button>
          </div>
          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate('/')}
              className="text-base font-medium text-black hover:text-green-500 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => navigate('/about')}
              className="text-base font-medium text-black hover:text-green-500 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="text-base font-medium text-black hover:text-green-500 transition-colors"
            >
              Contact
            </button>
          </div>
          {/* LinkedIn Button */}
          <a href="https://www.linkedin.com/in/anita-ekhoragbon-791778199?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrW9ad1ioTPGoDFX0WVMBQA%3D%3D" target="_blank" rel="noopener noreferrer">
            <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2">
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header; 