import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

export const About = () => {
  const [ref,inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center 
        lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* <motion.div
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[600px]
          mix-blend-lighten bg-top'>
          </motion.div> */}
          <motion.div 
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'>
            <h2 className='h2 text-accent'>About me</h2>
            {/* <h3 className='h3 mb-4'>I'm student, pursuing my Masters of Applied Computing from University of Windsor. 
              I'm actively looking for an co-op for Fall 2023
            </h3> */}
            <p>
            I'm frontend developer dedicated to crafting engaging and user-centric web experiences. 
            With 2 years of hands-on experience, I specialize in turning design concepts into responsive and dynamic websites. 
            Proficient in HTML, CSS, JavaScript, and TypeScript, I bring technical prowess to the table, with expertise in 
            React JS, Angular, Next JS, Axios, Redux. I pride myself on my problem-solving skills, 
            tackling issues efficiently and finding innovative solutions. Collaboration is at the heart of my approach, having successfully 
            worked with UI/UX designers to bring creative visions to life during. I'm well-versed in Git for version control, ensuring a 
            streamlined development process.
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient 
                mb-2'>
                  {
                    inView ?
                  <CountUp start={0} end={2} duration={3}/> : null
                  }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br/>
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient 
                mb-2'>
                  {
                    inView ?
                  <CountUp start={0} end={13} duration={3}/> : null
                  }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br/>
                  Completed 
                </div>
              </div>
              <div className='flex gap-x-8 items-center'>
                <button className='btn btn-lg'>Contact me</button>
                <a href='#' className='text-gradient btn-link'></a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
