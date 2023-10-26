import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React from 'react'
import linkdin from '../../../assets/linkedin-2.png'
import github from '../../../assets/github-2.png'
import log1 from '../../../assets/rudra.png'
import log2 from '../../../assets/earth.png'
import log3 from '../../../assets/rocket-spaceship.png'
import log4 from '../../../assets/planet.png'
import TimeLine from '../Timeline/TimeLine'
import Tooltip from '@mui/material/Tooltip'
import Paper from '@mui/material/Paper';
import AOS from 'aos';
import { useEffect } from 'react'
import 'aos/dist/aos.css';


function Presentation() {
  useEffect(() => {
    AOS.init(); // Initialisez AOS
  }, []);
  return (
    <>
    <div className='aos-init'>
    <Box className="block">
      <Box className="lg:block lg:justify-center mx-auto lg:mx-10 mb-8">
        {/* container Text 1 */}
          <img className="h-28 absolute -right-1" src={log2} alt="Logo" data-aos="fade-left"/>
          <Box className="md:text-center m-8 lg:mx-10">
          <Typography
            sx={{
              fontSize: [45, 40],
              marginTop: [6, 15], // Ajustez les marges pour mobile et ordinateur
              color: 'rgb(255, 165, 0)',
              fontFamily: 'revert-layer',
              textAlign: ['left', 'center'],
              zIndex: 1, // Centrer le texte sur mobile et ordinateur
              marginBottom: 8,
            }}
          >
            Hello World!
          </Typography>
          <Typography
            sx={{
              fontSize: [22, 20],
              color: 'white',

              fontFamily: 'revert',
              textAlign: ['left', 'center'], // Centrer le texte sur mobile et ordinateur
            }}
            data-aos="fade-right"
          >
            Je suis <strong className='border-4 bg-indigo-400/50 border-indigo-500/75 p-1 rounded-lg'>Morgan Levetti</strong>,
          </Typography>
          <Typography
            sx={{
              fontSize: [20, 20],
              color: 'white',

              fontFamily: 'revert',
              textAlign: ['left', 'center'], // Centrer le texte sur mobile et ordinateur
            }}
            data-aos="fade-right"
          >
            Développeur <strong className='text-black border-2 p-1 bg-gray-100/50 rounded-lg'>Front-end</strong>.
          </Typography>
        </Box>
        {/* container Text 2 */}
        <Box className="h-96 md:text-center m-8 mt-8 lg:mx-10">
          <ul>
            <Typography
              sx={{
                fontSize: [20, 20],
                color: 'white',
           
                fontFamily: 'revert',
                textAlign: ['left', 'center'], // Centrer le texte sur mobile et ordinateur
              }}
              data-aos="fade-right"
            >
              Un développeur front-end spécialisé dans
            </Typography>
            <Typography
              sx={{
                fontSize: [18, 20],
                color: 'white',

                fontFamily: 'revert',
                textAlign: ['left', 'center'], // Centrer le texte sur mobile et ordinateur
              }}
              data-aos="fade-right"
            >
              <strong className='border-2 p-1 bg-green-200/50 border-green-400 rounded-lg'>ReactJs, JavaScript et MUI</strong>
            </Typography>
            <Typography
              sx={{
                fontSize: [20, 20],
                color: 'white',
      
                fontFamily: 'revert',
                textAlign: ['left', 'center'], // Centrer le texte sur mobile et ordinateur
              }}
              data-aos="fade-right"
            >
              qui s'efforce de créer des solutions <stong className="border-4 bg-yellow-200/50  border-yellow-400 rounded-lg p-1">web innovantes</stong>
            </Typography>
            <Typography
              sx={{
                fontSize: [20, 20],
                color: 'white',
            
                fontFamily: 'revert',
                textAlign: ['left', 'center'],
              }}
              data-aos="fade-right"
            >
              tout en se concentrant sur une conception utilisateur <strong className='border-2 p-1 rounded-lg border-pink-400 bg-pink-200/50'>(UI/UX)</strong>.
            </Typography>
          </ul>
            {/* Media */}
          <ul className='flex text-center mt-10 justify-center'>
            <Box data-aos="fade-right" className="mr-4 p-4 transform transition-transform hover:-translate-y-1 hover:scale-110">
              <a href='#'>
                <Tooltip title="LinkdIN">
                  <img className="h-24" src={linkdin} alt="Logo" />
                </Tooltip> 
              </a>
            </Box>
            <Box data-aos="fade-left" className="ml-4 transform transition-transform hover:-translate-y-1 hover:scale-110">
              <a href='#'>
              <Tooltip title="Git Hub">
                 <img className="h-28" src={github} alt="Logo" />
              </Tooltip>
              </a>
            </Box>
          </ul>
        </Box>
        {/* Box 1 */}
      </Box>
      <img className="h-28 absolute -left-10" src={log1} alt="Logo" data-aos="fade-right"/>
      <Box className="lg:block lg:justify-right mx-auto lg:mx-10 mt-32 mb-24">
  {/* Votre contenu Box 1 ici */}
        <Typography 
          sx={{
            fontSize: 35,
            color: 'white',
            textAlign: 'center',
            fontFamily: 'sans-serif', 
            }}
            data-aos="zoom-in">
            Mon Parcours
        </Typography>
        <TimeLine className="w-full h-auto" position="alternate-reverse"/>
        <img className="h-32 absolute right-10" src={log3} alt="Logo" data-aos="zoom-in-left"/>
      </Box>
      <Box className="lg:block lg:justify-right mx-auto lg:mx-10 mb-8">
        <Box className="md:mt-8 h-96">
          <Typography 
            sx={{
              fontSize: 35,
              color: 'white',
              textAlign: 'center',
              fontFamily: 'sans-serif', 
              }}
              data-aos="zoom-in" data-aos-delay="200"
              >
              Skills
          </Typography>
          <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center', // Ajoutez cette ligne pour centrer horizontalement
                  '& > :not(style)': {
                    m: 2,
                    alignItems: 'center',
                    width: 128,
                    height: 128,
                  },
                }}
              >
            
          </Box>
          <img className="h-32 absolute left-10" src={log4} alt="Logo" data-aos="zoom-in-right" data-aos-delay="200"/>
        </Box>
      </Box>
    </Box>
    </div>
    </>
    
  );
}

export default Presentation;