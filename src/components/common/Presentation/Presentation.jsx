import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React from 'react'
import linkdin from '../../../assets/linkedin-2.png'
import github from '../../../assets/github-2.png'
import log1 from '../../../assets/planet-uranus.png'
import sql from '../../../assets/mysql.png'
import log3 from '../../../assets/rocket-spaceship.png'
import minecraft from '../../../assets/06cd4c0616ca89d78f40b74224752308_e0fd5739385af0b157f707eca9974494.webp'
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
import '../Presentation/presentation.css'

function Presentation() {
  const [code] = useTypewriter({
    words: ['Compétences :', 'Skills :'],
    loop: 0,
  })
  const [title] = useTypewriter({
    words: ['Hello World', 'Bonjour Monde', 'こんにちは世界'],
    loop: 0,
  })
  const [Welcome] = useTypewriter({
    words: ['Voici mon portfolio', 'Here is my portfolio', 'これが私のポートフォリオです'],
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
        <img
            className="h-28 w-28 md:w-48 md:h-48 absolute right-2 top-60"
            src={log4}
            alt="Logo"
            data-aos="fade-left"
          />
          <Box className="md:text-center m-8 lg:mx-10 mt-20">
            <Typography sx={{marginTop: 10}}>
              <span className='font-mono typo mt-16'>
                {title}
              </span>
              <span className='text-yellow-400'>
                 <Cursor cursorStyle=' _'/>
              </span>
             
            </Typography>
            <Typography
              sx={{
                fontSize: [20, 20],
                color: 'white',
                margin: 5,
                display: 'flex',
                fontFamily: 'revert',
                textAlign: 'center', // Texte centré par défaut
                '@media (max-width: 768px)': {
                  textAlign: 'left', // Sur les écrans de largeur inférieure à 768px (taille typique des téléphones), alignez le texte à gauche
                },
              }}
              data-aos="fade-right"
            >
            <span className='typo2 mt-24 '> Morgan Levetti</span>
          </Typography>
          <Typography
            sx={{
              fontSize: [20, 20],
              color: 'white',
              marginTop: 35,
              fontFamily: 'revert',
              textAlign: ['left', 'center'], // Centrer le texte sur mobile et ordinateur
            }}
            data-aos="zoom-in-up"
          >
            Je suis Développeur <strong className='typo'>ReactJs / Laravel </strong>.
          </Typography>
        </Box>
        {/* container Text 2 */}
        <Box className="h-96 md:text-center m-8 mt-8 lg:mx-10 mt-10 ">
            <Typography
              sx={{
                fontSize: [20, 20],
                color: 'white',
                marginTop: 6,
                fontFamily: 'revert',
                textAlign: ['left', 'center'],
              }}
              data-aos="zoom-in-up"
              
            >
              Je suis le maître de mon code, sculptant des expériences numériques avec la précision d'un artisan.
            </Typography>
            <Typography
              sx={{
                fontSize: [20, 20],
                color: 'white',
                marginTop: 2,
                fontFamily: 'revert',
                textAlign: ['left', 'center'],
              }}
              data-aos="zoom-in-up"
              data-aos-delay="50"
            >
              Avec quatre années d'expertise en développement fullstack, je me suis enraciné dans l'écosystème de <strong className='typo6'>React JS</strong>, <strong className='typo4'>JavaScript</strong>, et <strong className='typo5'>Laravel</strong>, naviguant avec habileté dans les complexités du front-end.
            </Typography>
            {/* Media */}
            <Typography sx={{marginTop: 10}}>
              <span className='font-mono typo7 mt-16'>
                {Welcome}
              </span>
              <span className='text-yellow-400'>
                 <Cursor cursorStyle=' _'/>
              </span>
             
            </Typography>
          <ul className='flex text-center justify-center mt-36'>
            <Box data-aos="fade-right" className="mr-4 p-4 transform transition-transform hover:-translate-y-1 hover:scale-110">
              <a target="_blank" href='https://linkedin.com/in/morganlevetti'>
                <Tooltip title="LinkdIN">
                  <img className="h-24" src={linkdin} alt="Linkdin" />
                </Tooltip> 
              </a>
            </Box>
            <Box data-aos="fade-left" className="ml-4 transform transition-transform hover:-translate-y-1 hover:scale-110">
              <a target="_blank" href='https://github.com/MorganLevetti'>
              <Tooltip title="Git Hub">
                 <img className="h-28" src={github} alt="github" />
              </Tooltip>
              </a>
            </Box>
          </ul>
        </Box>
        {/* Box 1 */}
      </Box>
      <img className="h-28 w-28 md:w-48 md:h-48 absolute -left-10" src={log1} alt="Logo" data-aos="fade-right"/>
      <Box className="lg:block lg:justify-right mx-auto lg:mx-10 parcours mb-24 ">
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
        <img className="h-28 w-28 md:w-48 md:h-48 absolute right-10" src={log3} alt="Logo" data-aos="zoom-in-left"/>
      </Box>
      {/* Compétences */}
      <Box className="lg:block lg:justify-right mx-auto lg:mx-10 mb-8">
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
                <Tooltip title='My SQL'>
                <img className="h-32 my-6" src={sql} alt="Logo" data-aos="zoom-in-left" data-aos-delay="200"/>
                </Tooltip>
          </Box>     
      </Box>
      <Box className="lg:flex lg:justify-center mx-auto lg:mx-10 mt-20">
        <Typography sx={{ position: 'absolute', bot:  1}}>
                <strong className='typo'>A suivre...</strong>
        </Typography>
      <img className="h-200 sky" src={minecraft} alt="Logo"/>
      </Box>
    </Box>
    </div>
    </>
    
  );
}

export default Presentation;