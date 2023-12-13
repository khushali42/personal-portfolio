import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.jpg";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.jpg";
import Img4 from '../assets/quiz.jpg';
import Img5 from '../assets/agriscan.jpg';
export const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div 
          variants={fadeIn('right',0.2)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <div>
              <h2 className="h2 leading-tight text-accent">
                Projects
              </h2>
            </div>
            <a href="https://github.com/khushali42/amazon-clone">
            <div
              className="group relative overflow-hidden border-2 border-white/50 
            rounded-xl"
            >
              <div
                className="group-hover:bg-black/70 w-full h-full absolute z-40 
              transition-all duration-300"
              ></div>
              <img
                className="group-hover:scale125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all 
              duration-500 z-50'>Amazon clone web application</div>
            </div>
            </a>
          </motion.div>
          <motion.div 
          variants={fadeIn('left',0.2)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className="flex-1 flex flex-col gap-y-10">
            <a href="https://github.com/khushali42/Web-Search-Engine">
            <div
              className="group relative overflow-hidden border-2 border-white/50 
            rounded-xl"
            >
              <div
                className="group-hover:bg-black/70 w-full h-full absolute z-40 
              transition-all duration-300"
              ></div>
              <img
                className="group-hover:scale125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all 
              duration-500 z-50'>Web Search Engine</div>
              
            </div>
            </a>
            <a href="">
            <div
              className="group relative overflow-hidden border-2 border-white/50 
            rounded-xl"
            >
              <div
                className="group-hover:bg-black/70 w-full h-full absolute z-40 
              transition-all duration-300"
              ></div>
              <img
                className="group-hover:scale125 transition-all duration-500"
                src={Img5}
                alt=""
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all 
              duration-500 z-50'>AgriScan App</div>
            </div>
            </a>
          </motion.div>
          <motion.div 
          variants={fadeIn('left',0.2)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className="flex-1 flex flex-col gap-y-10">
            <a href="https://github.com/khushali42/QuizApp">
            <div
              className="group relative overflow-hidden border-2 border-white/50 
              rounded-xl"
            >
              <div
                className="group-hover:bg-black/70 w-full h-full absolute z-40 
                transition-all duration-300"
              ></div>
              <img
                className="group-hover:scale125 transition-all duration-500"
                src={Img4}
                alt=""
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all 
              duration-500 z-50'>Quiz Web App</div>
            </div>
            </a>
            <a href="https://github.com/khushali42/Pet-Care-Smart-System">
            <div
              className="group relative overflow-hidden border-2 border-white/50 
            rounded-xl"
            >
              <div
                className="group-hover:bg-black/70 w-full h-full absolute z-40 
              transition-all duration-300"
              ></div>
              <img
                className="group-hover:scale125 transition-all duration-500"
                src={Img3}
                alt=""
                />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all 
              duration-500 z-50'>Pet Care Smart System</div>
            </div>
              </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
