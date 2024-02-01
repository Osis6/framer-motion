/** @format */

import { useRef } from 'react';
import './services.scss';
import { motion, useInView } from 'framer-motion';
import { FaFigma } from 'react-icons/fa';
import { TbBrandTailwind } from 'react-icons/tb';
import { BiSolidFileHtml } from 'react-icons/bi';
import { TbBrandTypescript } from 'react-icons/tb';
import { TbBrandThreejs } from 'react-icons/tb';
import { FaReacteurope } from 'react-icons/fa6';
import { SiRuby } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiCsharp } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { RxVercelLogo } from 'react-icons/rx';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <motion.div
      className='services'
      variants={variants}
      initial='initial'
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={'animate'}
    >
      <motion.div className='textContainer' variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='/people.webp' alt='' />
          <h1>
            Des idées{' '}
            <motion.b whileHover={{ color: 'orange' }}>Uniques</motion.b>
          </h1>
        </div>
        <div className='title'>
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>pour votre</motion.b>{' '}
            entreprise.
          </h1>
          <button>Mes Compétences ?</button>
        </div>
      </motion.div>
      <motion.div className='listContainer' variants={variants}>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Design</h2>
          <ul>
            <span>
              <li>
                <span>
                  <FaFigma />
                </span>
                <span>Figma</span>
              </li>
            </span>
            <span>
              <li>
                <span>
                  <TbBrandTailwind />
                </span>
                <span>Tailwind</span>
              </li>
            </span>
          </ul>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Front-end</h2>
          <ul>
            <span>
              <li>
                <span>
                  <BiSolidFileHtml />
                </span>
                <span>html & css</span>
              </li>
            </span>
            <span>
              <li>
                <span>
                  <TbBrandTypescript />
                </span>
                <span>typescript</span>
              </li>
            </span>
            <span>
              <li>
                <span>
                  <TbBrandThreejs />
                </span>
                <span>three.js</span>
              </li>
            </span>
            <span>
              <li>
                <span>
                  <FaReacteurope />
                </span>
                <span>react</span>
              </li>
            </span>
          </ul>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Back-end</h2>
          <ul>
            <span>
              <li>
                <span>
                  <SiRuby />
                </span>
                <span>rails</span>
              </li>
            </span>
            <span>
              <li>
                <span>
                  <FaNodeJs />
                </span>
                <span>node.js</span>
              </li>
            </span>
            <span>
              <li>
                <span>
                  <SiCsharp />
                </span>
                <span>csharp</span>
              </li>
            </span>
          </ul>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Other</h2>
          <ul>
            <span>
              <li>
                <span>
                  <FaGithub />
                </span>
                <span>Git & Github</span>
              </li>
            </span>
            <span>
              <li>
                <span>
                  <RxVercelLogo />
                </span>
                <span>Vercel</span>
              </li>
            </span>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
