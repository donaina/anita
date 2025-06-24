import React from 'react';
import Footer from './components/Footer';

const About: React.FC = () => (
  <>
    <section className="w-full mt-[96px] pt-0 pb-32 bg-white overflow-x-hidden flex flex-col">
      <div className="w-full flex flex-col md:flex-row items-center gap-y-12 md:gap-x-0 px-4 md:px-0 flex-1">
        {/* Left column: Heading+SVG and paragraphs */}
        <div
          className="text-left w-full md:w-[65%] flex-shrink-0 mb-4 md:mb-0 md:pl-32 px-4 md:px-0"
          style={{ maxWidth: 1584 }}
        >
          {/* Heading and SVG in a row */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-y-4 md:gap-x-20 mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Just call me Anita.</h2>
            <div className="flex justify-center md:justify-start mt-4 md:mt-0 md:ml-32 md:-mt-14">
              <svg
                width="160" height="160" viewBox="0 0 260 260"
                className="animate-spin-slow w-[120px] h-[120px] md:w-[240px] md:h-[240px]"
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
          <p className="text-base md:text-xl lg:text-2xl text-gray-500 mb-6">
            I am a Nigerian with 3 years of experience in Product Design and UI/UX Design. <br className="hidden md:block"/>
            I am currently studying UX Design at Humber College.
          </p>
          <p className="text-base md:text-xl lg:text-2xl text-gray-500">
            Having recently transitioned into this field, my focus is on deepening my <br className="hidden md:block"/>
            skills in UI Design, Prototyping and crafting intuitive digital experiences.
          </p>
        </div>
        {/* Right column: Profile image */}
        <div className="flex flex-col items-center justify-center w-full md:w-auto md:-ml-24 mb-0 pb-0 px-4 md:px-0">
          <img
            src="/anita.png"
            alt="Anita Ekhoragbon"
            className="object-cover rounded-2xl bg-gray-100 shadow-lg w-full max-w-[280px] sm:max-w-[320px] md:max-w-none md:w-[592px] md:h-[495px] h-[200px] sm:h-[220px]"
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
      <div className="max-w-[1680px] mx-auto flex items-center justify-center px-4 md:px-0">
        <div className="max-w-[1480px] w-full mx-auto flex flex-col gap-y-16 md:gap-y-24">
          {/* Work Experience */}
          <div className="flex flex-col">
            <div className="mb-6 md:mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black">Work Experience</h2>
              <div className="w-12 h-1 bg-black mt-2 mb-4" />
            </div>
            <div className="flex flex-col gap-y-12 md:gap-y-16">
              {/* Experience Item 1 - NEW */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-0">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-black mb-1">UX Designer</h3>
                  <div className="text-base md:text-lg text-gray-400 mb-2">EnsuredNG - Lagos,Nigeria (Remote)</div>
                  <div className="text-base md:text-lg text-black"> </div>
                </div>
                <div className="sm:ml-8 flex-shrink-0">
                  <span className="inline-block px-4 md:px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-500 text-sm md:text-base font-medium shadow-sm">Nov 2024 - Present</span>
                </div>
              </div>
              {/* Experience Item 2 */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start border-t border-gray-200 pt-8 md:pt-12 gap-4 sm:gap-0">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-black mb-1">Product Designer</h3>
                  <div className="text-base md:text-lg text-gray-400 mb-2">Dataware Tech - Accra, Ghana (Remote)</div>
                  <div className="text-base md:text-lg text-black">Led the redesign of the company's website and collaborated with cross-functional teams to define user requirements, communicate design goals, and deliver user-focused features—resulting in improved usability, increased engagement, and enhanced user satisfaction.</div>
                </div>
                <div className="sm:ml-8 flex-shrink-0">
                  <span className="inline-block px-4 md:px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-500 text-sm md:text-base font-medium shadow-sm">Mar 2023 - Oct 2024</span>
                </div>
              </div>
              {/* Experience Item 3 */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start border-t border-gray-200 pt-8 md:pt-12 gap-4 sm:gap-0">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-black mb-1">Product Designer</h3>
                  <div className="text-base md:text-lg text-gray-400 mb-2">Global Accelerex Ltd. - Lagos, Nigeria (Hybrid)</div>
                  <div className="text-base md:text-lg text-black">Assisted in designing and iterating user interfaces for web and mobile apps, contributed to cross-functional collaboration for efficient product development, participated in brainstorming and design critiques, and strengthened skills in user-centered design, prototyping, and UX research using tools like Figma.</div>
                </div>
                <div className="sm:ml-8 flex-shrink-0">
                  <span className="inline-block px-4 md:px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-500 text-sm md:text-base font-medium shadow-sm">Apr 2022 - Mar 2023</span>
                </div>
              </div>
              {/* Experience Item 4 */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start border-t border-gray-200 pt-8 md:pt-12 gap-4 sm:gap-0">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-black mb-1">UI/UX Design Intern</h3>
                  <div className="text-base md:text-lg text-gray-400 mb-2">Cousant - Lagos, Nigeria (Remote)</div>
                  <div className="text-base md:text-lg text-black">Collaborated with designers and developers to gather user requirements, maintain brand consistency, balance functional and aesthetic design, develop UI screens and prototypes for Yalo and Cousant Academy, and troubleshoot UX issues.</div>
                </div>
                <div className="sm:ml-8 flex-shrink-0">
                  <span className="inline-block px-4 md:px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-500 text-sm md:text-base font-medium shadow-sm">Jan 2022 - May 2022</span>
                </div>
              </div>
            </div>
          </div>
          {/* Education */}
          <div className="flex flex-col mt-8">
            <div className="mb-6 md:mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black">Education</h2>
              <div className="w-12 h-1 bg-black mt-2 mb-4" />
            </div>
            <div className="flex flex-col gap-y-8 md:gap-y-12">
              {/* Education Item 1 */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-0">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-black mb-1">Postgraduate Degree in UX Design</h3>
                  <div className="text-base md:text-lg text-gray-400 mb-2">Humber Polytechnic - Toronto, ON</div>
                </div>
                <div className="sm:ml-8 flex-shrink-0">
                  <span className="inline-block px-4 md:px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-500 text-sm md:text-base font-medium shadow-sm">Sep 2024 - Present</span>
                </div>
              </div>
              {/* Education Item 2 */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start border-t border-gray-200 pt-6 md:pt-8 gap-4 sm:gap-0">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-black mb-1">Bachelor's Degree in Sociology and Anthropology</h3>
                  <div className="text-base md:text-lg text-gray-400 mb-2">University Of Benin - Benin, Nigeria</div>
                </div>
                <div className="sm:ml-8 flex-shrink-0">
                  <span className="inline-block px-4 md:px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-500 text-sm md:text-base font-medium shadow-sm">Oct 2016 - Jul 2021 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Off the Clock Section */}
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1480px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-16 mb-8 md:mb-12 items-start">
          <div className="md:col-span-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-black">Off the clock</h2>
            <div className="w-12 h-1 bg-black mt-2"></div>
          </div>
          <div className="md:col-span-8 mt-6 md:mt-8 md:mt-0">
            <p className="text-lg md:text-xl text-gray-600 mb-4 md:mb-6">
              I'm all about sports, exploring new design trends and staying active. I also enjoy gaming and immersing myself in new challenges.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Recently, I've started trying out snowboarding and it has been both enjoyable and a thrilling learning experience!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <img
            src="https://images.pexels.com/photos/3624367/pexels-photo-3624367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Person holding a snowboard on a snowy hill"
            className="rounded-2xl object-cover w-full h-64 sm:h-80 md:h-96 shadow-lg"
          />
          <img
            src="https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Aerial view of New York City skyline"
            className="rounded-2xl object-cover w-full h-64 sm:h-80 md:h-96 shadow-lg"
          />
          <img
            src="https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="View of a baseball stadium from behind home plate"
            className="rounded-2xl object-cover w-full h-64 sm:h-80 md:h-96 shadow-lg"
          />
        </div>
      </div>
    </section>

    <Footer />
  </>
);

export default About; 