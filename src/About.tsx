import React from 'react';

const About: React.FC = () => (
  <section className="w-full flex justify-center items-center min-h-[calc(100vh-100px)] py-24 bg-white">
    <div className="max-w-7xl w-full flex flex-row items-center gap-x-12 mx-auto">
      {/* Left column: Heading and paragraphs */}
      <div className="flex-1 text-left pl-8">
        <h2 className="text-5xl font-bold mb-8">Just call me Anita.</h2>
        <p className="text-xl text-gray-500 mb-6">
          I am a Nigerian with 3 years of experience in Product Design and Brand Marketing. I am currently studying UI/UX Design at [Your School/Location].
        </p>
        <p className="text-xl text-gray-500">
          Having recently transitioned into this field, my focus is on deepening my skills in UI Design, Prototyping, and crafting intuitive digital experiences.
        </p>
      </div>
      {/* Center column: Circular SVG text */}
      <div className="flex flex-col items-center justify-center min-w-[260px]">
        <svg width="220" height="220" viewBox="0 0 220 220" className="animate-spin-slow">
          <defs>
            <path id="circlePath" d="M110,110 m-90,0 a90,90 0 1,1 180,0 a90,90 0 1,1 -180,0" />
          </defs>
          <text fontSize="20" fill="#80CFA3" fontFamily="Inter, sans-serif">
            <textPath xlinkHref="#circlePath" startOffset="0">
              GRAPHIC ✦ UI/UX ✦ PRODUCT ✦ GRAPHIC ✦ UI/UX ✦ PRODUCT ✦
            </textPath>
          </text>
        </svg>
      </div>
      {/* Right column: Profile image */}
      <div className="flex flex-col items-center justify-center pr-8">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Anita Ekhoragbon"
          className="w-[340px] h-[340px] object-cover rounded-2xl bg-gray-100 shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default About; 