import React from 'react';

const About: React.FC = () => (
  <section className="w-full min-h-[calc(100vh-100px)] py-12 md:py-24 bg-white overflow-x-hidden flex flex-col">
    <div className="w-full flex flex-col md:flex-row items-center gap-y-12 md:gap-x-12 px-4 md:px-0 flex-1">
      {/* Left column: Heading+SVG and paragraphs */}
      <div
        className="text-left w-full md:w-[55%] flex-shrink-0 mb-4 md:mb-0 md:pl-32"
        style={{ maxWidth: 848 }}
      >
        {/* Heading and SVG in a row */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-y-4 md:gap-x-8 mb-8">
          <h2 className="text-4xl md:text-5xl font-bold">Just call me Rafa.</h2>
          <div className="flex justify-center md:justify-start mt-4 md:mt-0">
            <svg
              width="120" height="120" viewBox="0 0 120 120"
              className="animate-spin-slow md:w-[120px] md:h-[120px] w-[80px] h-[80px]"
            >
              <defs>
                <path id="circlePath" d="M60,60 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0" />
              </defs>
              <text fontSize="10" fill="#80CFA3" fontFamily="Inter, sans-serif">
                <textPath xlinkHref="#circlePath" startOffset="0">
                  GRAPHIC ✦ UI/UX ✦ PRODUCT ✦ GRAPHIC ✦ UI/UX ✦ PRODUCT ✦
                </textPath>
              </text>
            </svg>
          </div>
        </div>
        <p className="text-lg md:text-xl text-gray-500 mb-6">
          I am a Brazilian with 9 years of experience in Graphic Design and Brand Marketing.<br />
          I am currently studying UX Design at Humber Polytechnic.
        </p>
        <p className="text-lg md:text-xl text-gray-500">
          Having recently transitioned into this field, my focus is on deepening my <br />
          skills in UI Design, Prototyping and crafting intuitive digital experiences.
        </p>
      </div>
      {/* Right column: Profile image */}
      <div className="flex flex-col items-center justify-center w-full md:w-auto">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Anita Ekhoragbon"
          className="object-cover rounded-2xl bg-gray-100 shadow-lg w-full max-w-[320px] md:max-w-none md:w-[360px] md:h-[300px] h-[220px]"
        />
      </div>
    </div>
  </section>
);

export default About; 