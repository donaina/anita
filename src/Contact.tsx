import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-24 md:pt-40 pb-12 md:pb-20 px-4 md:px-6 flex justify-center">
      <div className="w-full max-w-[1680px] mx-auto md:pl-24">
        <div className="w-full max-w-[760px]">
          <p className="text-gray-500 text-base md:text-lg mb-3 md:mb-4">Contact</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6 md:mb-8 leading-tight">
            Let's connect!
          </h1>
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl text-gray-600 font-light mb-2">
              Whether you have a project in mind, want to collaborate or just want
            </p>
            <p className="text-lg md:text-xl text-gray-600 font-light mb-2">
              to chat about Design, <span className="font-medium text-black">I'd love to hear from you.</span>
            </p>
          </div>

          <div className="space-y-8 md:space-y-12 mt-12 md:mt-16">
            <div>
              <p className="text-gray-500 text-base md:text-lg mb-3 md:mb-4">Get in touch</p>
              <a href="mailto:aekhoragbon@gmail.com" className="flex items-center space-x-3 group cursor-pointer w-fit">
                <span className="text-lg md:text-xl text-black">aekhoragbon@gmail.com</span>
                <ArrowUpRight size={18} className="md:w-5 md:h-5 text-gray-400 group-hover:text-black transition-colors" />
              </a>
            </div>

            <div>
              <p className="text-gray-500 text-base md:text-lg mb-3 md:mb-4">Phone</p>
              <p className="text-lg md:text-xl text-black">+1 (416) 875 9719</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 