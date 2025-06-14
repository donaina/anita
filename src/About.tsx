import React from 'react';

const About: React.FC = () => (
  <section className="w-full min-h-[calc(100vh-100px)] mt-16 md:mt-24 py-12 md:py-24 bg-white overflow-x-hidden flex flex-col">
    <div className="w-full flex flex-col md:flex-row items-center gap-y-12 md:gap-x-0 px-4 md:px-0 flex-1">
      {/* Left column: Heading+SVG and paragraphs */}
      <div
        className="text-left w-full md:w-[65%] flex-shrink-0 mb-4 md:mb-0 md:pl-32"
        style={{ maxWidth: 1584 }}
      >
        {/* Heading and SVG in a row */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-y-4 md:gap-x-20 mb-8">
          <h2 className="text-4xl md:text-5xl font-bold">Just call me Anita.</h2>
          <div className="flex justify-center md:justify-start mt-4 md:mt-0 md:ml-32">
            <svg
              width="160" height="160" viewBox="0 0 260 260"
              className="animate-spin-slow md:w-[240px] md:h-[240px] w-[160px] h-[160px]"
            >
              <defs>
                <path id="circlePath" d="M130,130 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0" />
              </defs>
              <text fontSize="20" fill="#80CFA3" fontFamily="Inter, sans-serif">
                <textPath xlinkHref="#circlePath" startOffset="0">
                  GRAPHIC ✦ UI/UX ✦ PRODUCT ✦ GRAPHIC ✦ UI/UX ✦ PRODUCT ✦
                </textPath>
              </text>
            </svg>
          </div>
        </div>
        <p className="text-base md:text-2xl text-gray-500 mb-6">
          I am a Nigerian with 3 years of experience in Product Design and UI/UX Design. <br/>
          I am currently studying UX Design at Humber College.
        </p>
        <p className="text-base md:text-2xl text-gray-500">
          Having recently transitioned into this field, my focus is on deepening my <br/>
          skills in UI Design, Prototyping and crafting intuitive digital experiences.
        </p>
      </div>
      {/* Right column: Profile image */}
      <div className="flex flex-col items-center justify-center w-full md:w-auto md:-ml-24">
        <img
          src="/anita.png"
          alt="Anita Ekhoragbon"
          style={{ width: 592, height: 495 }}
          className="object-cover rounded-2xl bg-gray-100 shadow-lg w-full max-w-[320px] md:max-w-none md:w-[592px] md:h-[495px] h-[220px]"
        />
      </div>
    </div>
  </section>
);

export default About; 