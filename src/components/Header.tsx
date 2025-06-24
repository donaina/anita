import React, { useState } from 'react';
import { Linkedin, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 font-sans">
      <div className="w-full px-4 md:px-0 py-4">
        <div className="flex items-center justify-between w-full md:px-32">
          {/* Logo/Name */}
          <div className="flex items-center space-x-2">
            <button onClick={() => navigate('/')} className="flex items-center space-x-2">
              <span className="text-lg md:text-xl font-semibold text-black">Anita</span>
              <span className="text-xl md:text-2xl" style={{ color: 'rgb(128, 207, 163)' }}>✦</span>
              <span className="text-lg md:text-xl font-semibold text-black">Ekhoragbon</span>
            </button>
          </div>
          
          {/* Desktop Navigation */}
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
          
          {/* Desktop LinkedIn Button */}
          <div className="hidden md:block">
            <a href="https://www.linkedin.com/in/anita-ekhoragbon-791778199?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrW9ad1ioTPGoDFX0WVMBQA%3D%3D" target="_blank" rel="noopener noreferrer">
              <button className="bg-black text-white px-4 md:px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2">
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <a href="https://www.linkedin.com/in/anita-ekhoragbon-791778199?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrW9ad1ioTPGoDFX0WVMBQA%3D%3D" target="_blank" rel="noopener noreferrer">
              <button className="bg-black text-white p-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
                <Linkedin size={16} />
              </button>
            </a>
            <button
              onClick={toggleMenu}
              className="p-2 text-black hover:text-green-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavigation('/')}
                className="text-base font-medium text-black hover:text-green-500 transition-colors text-left py-2"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('/about')}
                className="text-base font-medium text-black hover:text-green-500 transition-colors text-left py-2"
              >
                About
              </button>
              <button
                onClick={() => handleNavigation('/contact')}
                className="text-base font-medium text-black hover:text-green-500 transition-colors text-left py-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header; 