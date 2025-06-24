import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import About from './About';
import Contact from './Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section id="home" className="w-full min-h-screen flex items-center bg-white font-sans px-4 md:px-0">
        <div className="w-full max-w-[1428px] mx-auto md:ml-32 flex flex-col items-start">
          <div className="flex flex-col items-start space-y-4 w-full">
            {/* Intro Line */}
            <div className="w-full md:w-[1000px] flex items-center">
              <span className="text-2xl md:text-4xl lg:text-5xl mr-3" style={{ color: 'rgb(128, 207, 163)' }}>✦</span>
              <span className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                Hello, I'm Anita Ekhoragbon.
              </span>
            </div>
            {/* Main Headline */}
            <div className="w-full md:w-[1000px] flex items-center">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-black leading-tight w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
                A Product and UI/UX Designer studying<br className="hidden md:block" />
                and living in Toronto.
              </h2>
            </div>
            {/* Subtitle/Description and Badges Row */}
            <div className="flex flex-col md:flex-row items-start md:items-center w-full gap-6 md:gap-8">
              <div className="w-full md:w-[700px] flex items-center">
                <h3 className="text-base md:text-lg lg:text-xl text-gray-400 font-normal leading-relaxed w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
                  With 3 years of experience and a background in Product Design,<br className="hidden md:block" />
                  I love understanding people's needs to solve their problems<br className="hidden md:block" />
                  with digital solutions.
                </h3>
              </div>
              {/* Badges */}
              <div className="flex flex-row md:flex-col gap-4 md:gap-6 h-full justify-center">
                {/* Teamwork Badge */}
                <div className="relative flex flex-col items-center animate-float-slow">
                  <svg width="28" height="28" viewBox="0 0 36 36" fill="none" className="absolute -top-6 -left-6 md:-top-8 md:-left-8 z-0 md:w-9 md:h-9">
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
                  <div className="bg-green-400 text-white px-3 md:px-5 py-1.5 md:py-2 rounded-full text-sm md:text-base font-medium shadow-lg relative z-10">Teamwork</div>
                </div>
                {/* Creative Badge */}
                <div className="relative flex flex-col items-center animate-float-delayed">
                  <svg width="28" height="28" viewBox="0 0 36 36" fill="none" className="absolute -top-6 -left-6 md:-top-8 md:-left-8 z-0 md:w-9 md:h-9">
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
                  <div className="bg-purple-400 text-white px-3 md:px-5 py-1.5 md:py-2 rounded-full text-sm md:text-base font-medium shadow-lg relative z-10">Creative</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 md:gap-y-16">

            {/* Project 1: BookBuddi */}
            <div>
              <a href="https://www.behance.net/gallery/176190791/BookBuddi-Case-Study" target="_blank" rel="noopener noreferrer" className="block h-[280px] md:h-[440px] rounded-2xl md:rounded-3xl relative group overflow-hidden bg-gray-100">
                <img
                  src="/previews/BookBuddi.jpg"
                  alt="BookBuddi project preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-4 md:top-8 left-4 md:left-8 bg-white/50 backdrop-blur-sm text-gray-900 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium">
                  Product Design
                </div>
                <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 w-10 h-10 md:w-14 md:h-14 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform">
                  <ArrowUpRight size={20} className="md:w-7 md:h-7 text-black" />
                </div>
              </a>
              <div className="text-left mt-3 md:mt-4">
                <span className="text-gray-500 text-xs md:text-sm mb-1 block">Study Case • BookBuddi</span>
                <h3 className="text-lg md:text-2xl font-semibold text-black">
                  BookBuddi: A new way to discover books
                </h3>
              </div>
            </div>

            {/* Project 2: Law Firm Website */}
            <div>
              <a href="https://www.behance.net/gallery/171655211/Law-Firm-Website" target="_blank" rel="noopener noreferrer" className="block h-[280px] md:h-[440px] rounded-2xl md:rounded-3xl relative group overflow-hidden bg-[#C74141]">
                <img
                  src="/previews/LawFirm.jpg"
                  alt="Law Firm Website preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-4 md:top-8 left-4 md:left-8 bg-white/30 backdrop-blur-sm text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium">
                  Web Design
                </div>
                <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 w-10 h-10 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform">
                  <ArrowUpRight size={20} className="md:w-7 md:h-7 text-white" />
                </div>
              </a>
              <div className="text-left mt-3 md:mt-4">
                <span className="text-gray-500 text-xs md:text-sm mb-1 block">Study Case • Law Firm Website</span>
                <h3 className="text-lg md:text-2xl font-semibold text-black">
                  Modernizing a Law Firm's Online Presence
                </h3>
              </div>
            </div>

            {/* Project 3: Opspad */}
            <div>
              <a href="https://www.behance.net/gallery/170294819/Opspad-Server-Management-Platform-UXUI-Case-Study" target="_blank" rel="noopener noreferrer" className="block h-[280px] md:h-[440px] rounded-2xl md:rounded-3xl relative group overflow-hidden bg-teal-600">
                <img
                  src="/previews/opspad.png"
                  alt="Opspad project preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-4 md:top-8 left-4 md:left-8 bg-white/20 backdrop-blur-sm text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium">
                  UX/UI Case Study
                </div>
                <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 w-10 h-10 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform">
                  <ArrowUpRight size={20} className="md:w-7 md:h-7 text-white" />
                </div>
              </a>
              <div className="text-left mt-3 md:mt-4">
                <span className="text-gray-500 text-xs md:text-sm mb-1 block">Study Case • Opspad</span>
                <h3 className="text-lg md:text-2xl font-semibold text-black">
                  Opspad: Server Management Platform
                </h3>
              </div>
            </div>

            {/* Project 4: Interior Landing Page */}
            <div>
              <a href="https://www.behance.net/gallery/134366115/ReDesigned-Interior-Landing-Page" target="_blank" rel="noopener noreferrer" className="block h-[280px] md:h-[440px] rounded-2xl md:rounded-3xl relative group overflow-hidden bg-yellow-500">
                <img
                  src="/previews/ReDesigned.jpg"
                  alt="Interior Landing Page preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-4 md:top-8 left-4 md:left-8 bg-white/20 backdrop-blur-sm text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium">
                  Landing Page Design
                </div>
                <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 w-10 h-10 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform">
                  <ArrowUpRight size={20} className="md:w-7 md:h-7 text-white" />
                </div>
              </a>
              <div className="text-left mt-3 md:mt-4">
                <span className="text-gray-500 text-xs md:text-sm mb-1 block">Study Case • Interior Design</span>
                <h3 className="text-lg md:text-2xl font-semibold text-black">
                  ReDesigned Interior Landing Page
                </h3>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<><Header /><About /></>} />
      <Route path="/contact" element={<><Header /><Contact /></>} />
    </Routes>
  );
}

export default App;