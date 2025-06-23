import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-5xl md:text-6xl font-light mb-8">
              Let's connect!
            </h2>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2"
            >
              <span>Contact Now</span>
              <ArrowUpRight size={20} />
            </button>
          </div>
          <div className="hidden md:flex flex-col items-end space-y-6">
            <div className="flex space-x-8">
              <button
                onClick={() => navigate('/')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => navigate('/about')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
            <div className="text-gray-500 text-sm text-right">
              <p>2025 // Designed by Rafael Rodrigues</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer; 