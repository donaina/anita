import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 md:py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-6 md:mb-8">
              Let's connect!
            </h2>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2 text-sm md:text-base"
            >
              <span>Contact Now</span>
              <ArrowUpRight size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
          <div className="flex flex-col items-start md:items-end space-y-4 md:space-y-6">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
              <button
                onClick={() => navigate('/')}
                className="text-gray-400 hover:text-white transition-colors text-left md:text-right"
              >
                Home
              </button>
              <button
                onClick={() => navigate('/about')}
                className="text-gray-400 hover:text-white transition-colors text-left md:text-right"
              >
                About
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="text-gray-400 hover:text-white transition-colors text-left md:text-right"
              >
                Contact
              </button>
            </div>
            <div className="text-gray-500 text-xs md:text-sm text-left md:text-right">
              <p>2025 // Built by Ayoola Aina</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer; 