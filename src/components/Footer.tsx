import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  scrollToSection?: (sectionId: string) => void;
  setCurrentPage?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection, setCurrentPage }) => {
  const handleContactClick = () => {
    if (setCurrentPage) {
      setCurrentPage('contact');
    } else {
      // If we're on the about page, navigate to home and then contact
      window.location.href = '/#contact';
    }
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-5xl md:text-6xl font-light mb-8">
              Let's connect!
            </h2>
            <button 
              onClick={handleContactClick}
              className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2"
            >
              <span>Contact Now</span>
              <ArrowUpRight size={20} />
            </button>
          </div>
          <div className="hidden md:flex flex-col items-end space-y-6">
            <div className="flex space-x-8">
              <button
                onClick={() => window.location.href = '/'}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => window.location.href = '/about'}
                className="text-gray-400 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={handleContactClick}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
            <div className="text-gray-500 text-sm text-right">
              <p>2025 // Built by Ayoola Aina</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer; 