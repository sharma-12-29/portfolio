import React from 'react'
import { SkillsInfo } from '../../constants'
import Tilt from 'react-parallax-tilt';

const skills = () => {
  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient overflow-hidden clip-path-custom -mt-1"

        // className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient overflow-hidden clip-path-custom"
      >
      {/* section-title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          SKILLS
        </h2>
        <div className='w-24 h-1 bg-[#8245ec] mx-auto mt-2'></div>
     <p className='text-gray-400 mt-4 text-lg font-semibold'>A Collection of my technical skills and expertise honed through varous projects and experiences</p>
       
      </div>
      {/* skills different catogries */}
      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>
          <Tilt
            // 
            key={category.title}

            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            transitionSpeed={1000}
            scale={1.05}
            gyroscope={true}
>
          {/* skills items with logo and name  */}
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 width-full gap-4'>
        {category.skills.map((skill) => (
            <div
              key={skill.name}
className="flex flex-col  items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-8 h-8 sm:w-10 sm:h-8 md:w-12 md:h-10 object-contain"
            ></img>
            <span className='text-xs sm:text-sm  text-gray-300 font-semibold'>
              {skill.name}
            </span>
            
        </div>
        ))}
            </div>
            </Tilt>
        </div>
      ))}
      </div>
      {/* end of skills different catogries */}
    </section>
  )
}

export default skills;
