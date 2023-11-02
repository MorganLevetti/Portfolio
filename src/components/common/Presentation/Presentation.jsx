import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React from 'react'
import linkdin from '../../../assets/linkedin-2.png'
import github from '../../../assets/github-2.png'
import log1 from '../../../assets/rudra.png'
import log2 from '../../../assets/earth.png'
import log3 from '../../../assets/rocket-spaceship.png'
import react from '../../../assets/react.png'
import javascript from '../../../assets/javascript.png'
import typescript from '../../../assets/typescript.png'
import laravel from '../../../assets/laravel-framework-logo.png'
import log4 from '../../../assets/planet.png'
import TimeLine from '../Timeline/TimeLine'
import Tooltip from '@mui/material/Tooltip'
import AOS from 'aos';
import { useEffect } from 'react'
import 'aos/dist/aos.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Presentation() {
  const [text] = useTypewriter({
    words: ['Je suis Développeur', 'Je suis Designer'],
    loop: 0,
  })
  const [code] = useTypewriter({
    words: ['<p>Compétences</p', 'Compétences :'],
    loop: 0,
  })
  const [title] = useTypewriter({
    words: ['Hello World'],
    loop: 0,
  })
  useEffect(() => {
    AOS.init(); // Initialisez AOS
  }, []);
  return (
    <>
    <div className='aos-init'>
    <Box className="block">
      <Box className="lg:block lg:justify-center mx-auto lg:mx-10 mb-8">
        {/* container Text 1 */}
          <img className="h-28 absolute right-2" src={log2} alt="Logo" data-aos="fade-left"/>
          <Box className="md:text-center m-8 lg:mx-10 mt-20">
          <h1 className='text-white text-2xl mb-4 mt-10 font-bold'>
              <span className='text-white-600 text-3xl '>
                {title}
              </span>
              <span className='text-yellow-400'>
                 <Cursor cursorStyle=' _'/>
              </span>
             
            </h1>
            <h1 className='text-white text-2xl mt-20'>
              <span className='text-yellow-400 bold'>
                {text}
              </span>
              <span className='text-yellow-400'>
                 <Cursor cursorStyle=' _'/>
              </span>
             
            </h1>
          <Typography
            sx={{
              fontSize: [20, 20],
              color: 'white',
              fontFamily: 'revert',
              textAlign: ['left', 'center'], // Centrer le texte sur mobile et ordinateur
            }}
            data-aos="fade-right"
          >
            Développeur <strong>ReactJs / Laravel</strong>.
          </Typography>
        </Box>
        {/* container Text 2 */}
        <Box className="h-96 md:text-center m-8 mt-8 lg:mx-10 mt-10">
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
              Un développeur spécialisé dans
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
              qui s'efforce de créer des solutions web innovantes
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
          <ul className='flex text-center mt-20 justify-center'>
            <Box data-aos="fade-right" className="mr-4 p-4 transform transition-transform hover:-translate-y-1 hover:scale-110">
              <a href='https://linkedin.com/in/morganlevetti'>
                <Tooltip title="LinkdIN">
                  <img className="h-24" src={linkdin} alt="Linkdin" />
                </Tooltip> 
              </a>
            </Box>
            <Box data-aos="fade-left" className="ml-4 transform transition-transform hover:-translate-y-1 hover:scale-110">
              <a href='https://github.com/MorganLevetti'>
              <Tooltip title="Git Hub">
                 <img className="h-28" src={github} alt="github" />
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
              marginTop: 20,
              color: 'white',
              textAlign: 'center',
              fontFamily: 'sans-serif', 
              }}
              >
              {code}
              <Cursor cursorStyle={'_'}/>
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              alignContent: 'center',
              padding: 6,
              '@media (min-width: 768px)': { // Taille typique d'un écran d'ordinateur portable
                flexDirection: 'row',
                flexWrap: 'wrap',
                '& > :nth-child(odd)': {
                  marginRight: '10px', // Marge pour aligner deux images par ligne
                },
                '& > :nth-child(even)': {
                  marginLeft: '10px', // Marge pour aligner deux images par ligne
                },
                  },
                }}
              >
              <Tooltip title='JavaScript'>
                <img className="h-32 my-6" src={javascript} alt="Logo" data-aos="zoom-in-right" data-aos-delay="200"/>
              </Tooltip>
              <Tooltip title='React Js'>
                <img className="h-32 my-6" src={react} alt="Logo" data-aos="zoom-in-left" data-aos-delay="200"/>
                </Tooltip>
              <Tooltip title='TypeScript'>
                 <img className="h-32 my-6" src={typescript} alt="Logo" data-aos="zoom-in-right" data-aos-delay="200"/>
                 </Tooltip>
              <Tooltip title='Laravel'>
                <img className="h-32 my-6" src={laravel} alt="Logo" data-aos="zoom-in-left" data-aos-delay="200"/>
                </Tooltip>
                <img className="h-32 ml-60" src={log4} alt="Logo" data-aos="zoom-in-right" data-aos-delay="200"/>
          </Box>
          
        </Box>
      </Box>
    </Box>
    </div>
    </>
    
  );
}

export default Presentation;