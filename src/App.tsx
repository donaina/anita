import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Linkedin } from 'lucide-react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import About from './About';
import Header from './components/Header';

function HomePage() {
  const [currentPage, setCurrentPage] = useState('home');

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'contact') {
      setCurrentPage('contact');
    } else {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const goHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen bg-white">
        {/* Fixed Navigation */}
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
                  onClick={() => scrollToSection('home')}
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
                  onClick={() => scrollToSection('contact')}
                  className="text-base font-medium text-black hover:text-green-500 transition-colors"
                >
                  Contact
                </button>
              </div>
              {/* LinkedIn Button */}
              <div>
                <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2">
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Contact Page Content */}
        <div className="pt-24 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-gray-500 text-lg mb-4">Contact</p>
              <h1 className="text-5xl md:text-6xl font-normal text-black mb-8 leading-tight">
                Let's connect!
              </h1>
              <div className="max-w-2xl">
                <p className="text-xl text-gray-600 mb-2">
                  Whether you have a project in mind, want to collaborate or just want
                </p>
                <p className="text-xl text-gray-600 mb-2">
                  to chat about Design, <span className="font-semibold text-black">I'd love to hear from you.</span>
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <p className="text-gray-500 text-lg mb-4">Get in touch</p>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <span className="text-xl text-black">rafarconceicao@gmail.com</span>
                  <ArrowUpRight size={20} className="text-gray-400 group-hover:text-black transition-colors" />
                </div>
              </div>

              <div>
                <p className="text-gray-500 text-lg mb-4">Phone</p>
                <p className="text-xl text-black">+1 (647) 638 7050</p>
              </div>
            </div>

            <div className="mt-20 pt-8 border-t border-gray-200">
              <p className="text-gray-400 text-sm">2025 // Designed by Rafael Rodrigues</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header goHome={goHome} />
      {/* Hero Section */}
      <section id="home" className="w-full min-h-screen flex items-center bg-white font-sans">
        <div className="w-[1428px] h-[326px] flex flex-col items-start ml-32">
          <div className="flex flex-col items-start space-y-4 w-full">
            {/* Intro Line */}
            <div className="w-[1000px] h-[57.6px] flex items-center">
              <span className="text-4xl md:text-5xl mr-3" style={{ color: 'rgb(128, 207, 163)' }}>✦</span>
              <span className="text-4xl md:text-5xl font-light text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                Hello, I'm Anita Ekhoragbon.
              </span>
            </div>
            {/* Main Headline */}
            <div className="w-[1000px] h-[115.2px] flex items-center">
              <h2 className="text-4xl md:text-5xl font-medium text-black leading-tight w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
                A Product and UI/UX Designer studying<br />
                and living in Toronto.
              </h2>
            </div>
            {/* Subtitle/Description and Badges Row */}
            <div className="flex flex-row items-center w-full gap-8">
              <div className="w-[700px] h-[100.81px] flex items-center">
                <h3 className="text-lg md:text-xl text-gray-400 font-normal leading-relaxed w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
                  With 3 years of experience and a background in Product Design,<br />
                  I love understanding people's needs to solve their problems<br />
                  with digital solutions.
                </h3>
              </div>
              {/* Badges */}
              <div className="flex flex-col gap-6 h-full justify-center">
                {/* Teamwork Badge */}
                <div className="relative flex flex-col items-center animate-float-slow">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="absolute -top-8 -left-8 z-0">
                    <defs>
                      <linearGradient id="cursor3d-green" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#44C08A" />
                        <stop offset="1" stopColor="#2A7A5E" />
                      </linearGradient>
                    </defs>
                    <path d="M4 4L32 16L18 20L22 32L4 4Z" fill="url(#cursor3d-green)" filter="url(#shadow-green)" />
                    <filter id="shadow-green" x="0" y="0" width="36" height="36">
                      <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.2"/>
                    </filter>
                  </svg>
                  <div className="bg-green-400 text-white px-5 py-2 rounded-full text-base font-medium shadow-lg relative z-10">Teamwork</div>
                </div>
                {/* Creative Badge */}
                <div className="relative flex flex-col items-center animate-float-delayed">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="absolute -top-8 -left-8 z-0">
                    <defs>
                      <linearGradient id="cursor3d-purple" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#B197FC" />
                        <stop offset="1" stopColor="#7C5DC9" />
                      </linearGradient>
                    </defs>
                    <path d="M4 4L32 16L18 20L22 32L4 4Z" fill="url(#cursor3d-purple)" filter="url(#shadow-purple)" />
                    <filter id="shadow-purple" x="0" y="0" width="36" height="36">
                      <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.2"/>
                    </filter>
                  </svg>
                  <div className="bg-purple-400 text-white px-5 py-2 rounded-full text-base font-medium shadow-lg relative z-10">Creative</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-8 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 justify-center">
            {/* AR.ange Project */}
            <div className="w-[694px] h-[500px] bg-gray-100 rounded-3xl overflow-hidden mb-6 relative p-8 flex flex-col items-center justify-center">
              <img
                src="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AR.ange VR Experience"
                className="w-full h-80 object-cover rounded-2xl mb-4"
              />
              <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium absolute top-8 left-8">
                Product Design
              </div>
              <span className="text-gray-500 text-sm mb-2">Study Case • AR.ange</span>
              <h3 className="text-2xl font-semibold text-black group-hover:text-gray-600 transition-colors text-center">
                The Art of Placement: Smarter Walls with AR.ange
              </h3>
            </div>
            {/* Shoppers Drug Mart Project */}
            <div className="w-[694px] h-[500px] bg-red-500 rounded-3xl overflow-hidden mb-6 relative p-8 flex flex-col items-center justify-center">
              <div className="bg-white rounded-2xl p-4 shadow-2xl transform rotate-12 mb-4">
                <img
                  src="https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Mobile App Interface"
                  className="w-64 h-auto rounded-xl"
                />
              </div>
              <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium absolute top-8 left-8">
                Product Design
              </div>
              <span className="text-gray-500 text-sm mb-2">Study Case • Shoppers Drug Mart</span>
              <h3 className="text-2xl font-semibold text-black group-hover:text-gray-600 transition-colors text-center">
                Creating a Voice User Interface Experience
              </h3>
            </div>
            {/* Anthropologie Project */}
            <div className="w-[694px] h-[500px] bg-teal-600 rounded-3xl overflow-hidden mb-6 relative p-8 flex flex-col items-center justify-center">
              <div className="bg-white rounded-lg shadow-2xl transform -rotate-3 mb-4">
                <img
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Anthropologie Website"
                  className="w-80 h-auto rounded-lg"
                />
              </div>
              <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium absolute top-8 left-8">
                UX Research
              </div>
              <span className="text-gray-500 text-sm mb-2">Study Case • Anthropologie</span>
              <h3 className="text-2xl font-semibold text-black group-hover:text-gray-600 transition-colors text-center">
                Purchase Experience of Anthropologie
              </h3>
            </div>
            {/* Mirvish Project */}
            <div className="w-[694px] h-[500px] bg-gradient-to-br from-red-500 to-yellow-400 rounded-3xl overflow-hidden mb-6 relative p-8 flex flex-col items-center justify-center">
              <div className="bg-gray-800 rounded-lg shadow-2xl transform rotate-6 p-2 mb-4">
                <img
                  src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Lion King Website"
                  className="w-80 h-auto rounded"
                />
              </div>
              <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium absolute top-8 left-8">
                UX/UI Design
              </div>
              <span className="text-gray-500 text-sm mb-2">Study Case • Mirvish</span>
              <h3 className="text-2xl font-semibold text-black group-hover:text-gray-600 transition-colors text-center">
                Mirvish's Website Information Architecture
              </h3>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-5xl md:text-6xl font-light mb-8">
                Let's connect!
              </h2>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2"
              >
                <span>Contact Now</span>
                <ArrowUpRight size={20} />
              </button>
            </div>
            <div className="hidden md:flex flex-col items-end space-y-6">
              <div className="flex space-x-8">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
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
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<><Header /><About /></>} />
    </Routes>
  );
}

export default App;