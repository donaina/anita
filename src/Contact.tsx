import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-40 pb-20 px-6 flex justify-center">
      <div className="w-full max-w-[1680px] mx-auto pl-24">
        <div className="w-full max-w-[760px]">
          <p className="text-gray-500 text-lg mb-4">Contact</p>
          <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-8 leading-tight">
            Let's connect!
          </h1>
          <div className="max-w-2xl">
            <p className="text-xl text-gray-600 font-light mb-2">
              Whether you have a project in mind, want to collaborate or just want
            </p>
            <p className="text-xl text-gray-600 font-light mb-2">
              to chat about Design, <span className="font-medium text-black">I'd love to hear from you.</span>
            </p>
          </div>

          <div className="space-y-12 mt-16">
            <div>
              <p className="text-gray-500 text-lg mb-4">Get in touch</p>
              <a href="mailto:rafarconceicao@gmail.com" className="flex items-center space-x-3 group cursor-pointer w-fit">
                <span className="text-xl text-black">aekhoragbon@gmail.com</span>
                <ArrowUpRight size={20} className="text-gray-400 group-hover:text-black transition-colors" />
              </a>
            </div>

            <div>
              <p className="text-gray-500 text-lg mb-4">Phone</p>
              <p className="text-xl text-black">+1 (416) 875 9719</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 