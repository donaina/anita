import React from 'react';

const About: React.FC = () => (
  <>
    <section className="w-full mt-[96px] pt-0 pb-32 bg-white overflow-x-hidden flex flex-col">
      <div className="w-full flex flex-col md:flex-row items-center gap-y-12 md:gap-x-0 px-4 md:px-0 flex-1">
        {/* Left column: Heading+SVG and paragraphs */}
        <div
          className="text-left w-full md:w-[65%] flex-shrink-0 mb-4 md:mb-0 md:pl-32"
          style={{ maxWidth: 1584 }}
        >
          {/* Heading and SVG in a row */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-y-4 md:gap-x-20 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold">Just call me Anita.</h2>
            <div className="flex justify-center md:justify-start mt-4 md:mt-0 md:ml-32 md:-mt-14">
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
        <div className="flex flex-col items-center justify-center w-full md:w-auto md:-ml-24 mb-0 pb-0">
          <img
            src="/anita.png"
            alt="Anita Ekhoragbon"
            style={{ width: 592, height: 495 }}
            className="object-cover rounded-2xl bg-gray-100 shadow-lg w-full max-w-[320px] md:max-w-none md:w-[592px] md:h-[495px] h-[220px]"
          />
        </div>
      </div>
    </section>
    {/* Skills/Tools Section */}
    <section className="w-full bg-gray-50 py-0 mt-0 pt-0">
      <div className="max-w-[1680px] h-[274px] mx-auto flex items-center justify-center">
        <div className="max-w-[1480px] h-[74px] w-full mx-auto flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-y-0 md:gap-x-24">
          {/* DESIGN */}
          <div className="flex flex-col items-center text-center flex-1">
            <span className="uppercase tracking-widest text-gray-400 text-base md:text-lg mb-2">Design</span>
            <span className="text-3xl md:text-4xl font-medium text-black whitespace-nowrap">Figma & Photoshop</span>
          </div>
          {/* NO CODE */}
          <div className="flex flex-col items-center text-center flex-1">
            <span className="uppercase tracking-widest text-gray-400 text-base md:text-lg mb-2">No Code</span>
            <span className="text-3xl md:text-4xl font-medium text-black whitespace-nowrap">Framer & Webflow</span>
          </div>
          {/* PROTOTYPE */}
          <div className="flex flex-col items-center text-center flex-1">
            <span className="uppercase tracking-widest text-gray-400 text-base md:text-lg mb-2">Prototype</span>
            <span className="text-3xl md:text-4xl font-medium text-black whitespace-nowrap">Play 2 & Figma</span>
          </div>
        </div>
      </div>
    </section>
    {/* Experience & Education Section */}
    <section className="w-full bg-white py-0 mt-8">
      <div className="max-w-[1680px] h-[1201px] mx-auto flex items-center justify-center">
        <div className="max-w-[1480px] h-[1001px] w-full mx-auto flex flex-col gap-y-24">
          {/* Work Experience */}
          <div className="h-[711px] flex flex-col">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-semibold text-black">Work Experience</h2>
              <div className="w-12 h-1 bg-black mt-2 mb-4" />
            </div>
            <div className="flex flex-col gap-y-16">
              {/* Experience Item 1 - NEW */}
              <div className="flex flex-row justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-3xl font-medium text-black mb-1">UX Designer</h3>
                  <div className="text-lg text-gray-400 mb-2">EnsuredNG - Lagos,Nigeria (Remote)</div>
                  <div className="text-lg text-black"> </div>
                </div>
                <div className="ml-8 flex-shrink-0">
                  <span className="inline-block px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-500 text-base font-medium shadow-sm">Nov 2024 - Present</span>
                </div>
              </div>
              {/* Experience Item 2 */}
              <div className="flex flex-row justify-between items-start border-t border-gray-200 pt-12">
                <div className="flex-1">
                  <h3 className="text-3xl font-medium text-black mb-1">Product Designer</h3>
                  <div className="text-lg text-gray-400 mb-2">Dataware Tech - Accra, Ghana (Remote)</div>
                  <div className="text-lg text-black">Led the redesign of the company's website and collaborated with cross-functional teams to define user requirements, communicate design goals, and deliver user-focused features—resulting in improved usability, increased engagement, and enhanced user satisfaction.</div>
                </div>
                <div className="ml-8 flex-shrink-0">
                  <span className="inline-block px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-500 text-base font-medium shadow-sm">Mar 2023 - Oct 2024</span>
                </div>
              </div>
              {/* Experience Item 3 */}
              <div className="flex flex-row justify-between items-start border-t border-gray-200 pt-12">
                <div className="flex-1">
                  <h3 className="text-3xl font-medium text-black mb-1">Product Designer</h3>
                  <div className="text-lg text-gray-400 mb-2">Global Accelerex Ltd. - Lagos, Nigeria (Hybrid)</div>
                  <div className="text-lg text-black">Assisted in designing and iterating user interfaces for web and mobile apps, contributed to cross-functional collaboration for efficient product development, participated in brainstorming and design critiques, and strengthened skills in user-centered design, prototyping, and UX research using tools like Figma.</div>
                </div>
                <div className="ml-8 flex-shrink-0">
                  <span className="inline-block px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-500 text-base font-medium shadow-sm">Apr 2022 - Mar 2023</span>
                </div>
              </div>
              {/* Experience Item 4 */}
              <div className="flex flex-row justify-between items-start border-t border-gray-200 pt-12">
                <div className="flex-1">
                  <h3 className="text-3xl font-medium text-black mb-1">UI/UX Design Intern</h3>
                  <div className="text-lg text-gray-400 mb-2">Cousant - Lagos, Nigeria (Remote)</div>
                  <div className="text-lg text-black">Collaborated with designers and developers to gather user requirements, maintain brand consistency, balance functional and aesthetic design, develop UI screens and prototypes for Yalo and Cousant Academy, and troubleshoot UX issues.</div>
                </div>
                <div className="ml-8 flex-shrink-0">
                  <span className="inline-block px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-500 text-base font-medium shadow-sm">Jan 2022 - May 2022</span>
                </div>
              </div>
            </div>
          </div>
          {/* Education */}
          <div className="h-[250px] flex flex-col mt-8">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-semibold text-black">Education</h2>
              <div className="w-12 h-1 bg-black mt-2 mb-4" />
            </div>
            <div className="flex flex-col gap-y-12">
              {/* Education Item 1 */}
              <div className="flex flex-row justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-3xl font-medium text-black mb-1">Postgraduate Degree in UX Design</h3>
                  <div className="text-lg text-gray-400 mb-2">Humber Polytechnic - Toronto, ON</div>
                </div>
                <div className="ml-8 flex-shrink-0">
                  <span className="inline-block px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-500 text-base font-medium shadow-sm">Sep 2024 - Present</span>
                </div>
              </div>
              {/* Education Item 2 */}
              <div className="flex flex-row justify-between items-start border-t border-gray-200 pt-8">
                <div className="flex-1">
                  <h3 className="text-3xl font-medium text-black mb-1">Bachelor's Degree in Graphic Design</h3>
                  <div className="text-lg text-gray-400 mb-2">Escola Superior de Propaganda e Marketing (ESPM) - São Paulo, Brazil</div>
                </div>
                <div className="ml-8 flex-shrink-0">
                  <span className="inline-block px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-500 text-base font-medium shadow-sm">Jan 2012 - Dec 2016</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About; 