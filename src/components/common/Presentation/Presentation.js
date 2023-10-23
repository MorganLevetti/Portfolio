import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function Presentation() {
  return (
    <>
    <Box className="md:block md:justify-center">
      <Box className="md:w-1/2 md:text-center m-8">
        <Typography
          sx={{
            fontSize: [45, 40],
            marginTop: [8, 15], // Ajustez les marges pour mobile et ordinateur
            color: 'rgb(255, 165, 0)',
            fontFamily: 'monospace',
            textAlign: ['left', 'center'], // Centrer le texte sur mobile et ordinateur
          }}
        >
          Hello World!
        </Typography>
        <Typography
          sx={{
            fontSize: [26, 30],
            color: 'white',
            fontFamily: 'monospace',
            textAlign: ['left', 'center'], // Centrer le texte sur mobile et ordinateur
          }}
        >
          Je suis <strong className='border-4 bg-indigo-400/50 border-indigo-500/75 p-1 rounded-lg'>Morgan Levetti</strong>,
        </Typography>
        <Typography
          sx={{
            fontSize: [20, 20],
            color: 'white',
            fontFamily: 'initial',
            textAlign: ['left', 'center'], // Centrer le texte sur mobile et ordinateur
          }}
        >
          Développeur <strong className='text-black border-2 p-1 bg-gray-100/50 rounded-lg'>Front-end</strong>,
        </Typography>
      </Box>
      <Box className="md:w-1/2 h-96 md:text-center m-8 mt-8">
        <ul>
          <Typography
            sx={{
              fontSize: [20, 20],
              color: 'white',
              fontFamily: 'initial',
              textAlign: ['left', 'center'], // Centrer le texte sur mobile et ordinateur
            }}
          >
            Un développeur front-end spécialisé dans
          </Typography>
          <Typography
            sx={{
              fontSize: [20, 20],
              color: 'white',
              fontFamily: 'initial',
              textAlign: ['left', 'center'], // Centrer le texte sur mobile et ordinateur
            }}
          >
            <strong className='border-4 p-1 bg-green-200/50 border-green-400 rounded-lg'>React, MUI et Tailwind CSS</strong>
          </Typography>
          <Typography
            sx={{
              fontSize: [20, 20],
              color: 'white',
              fontFamily: 'initial',
              textAlign: ['left', 'center'], // Centrer le texte sur mobile et ordinateur
            }}
          >
            qui s'efforce de créer des solutions <stong className="border-4 bg-yellow-200/50  border-yellow-400 rounded-lg p-1">web innovantes</stong>
          </Typography>
          <Typography
            sx={{
              fontSize: [20, 20],
              color: 'white',
              fontFamily: 'initial',
              textAlign: ['left', 'center'], // Centrer le texte sur mobile et ordinateur
            }}
          >
            tout en se concentrant sur une conception utilisateur <strong className='border-2 p-1 rounded-lg border-pink-400 bg-pink-200/50'>(UI/UX)</strong>
          </Typography>
        </ul>
        <ul className='flex text-center mt-10'>
          <Typography className='p-2 flex bg-gray-200/50 rounded-lg'>
            <Box className="p-1">
              <a href='#'>
                <svg fill="#ffffff" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 310 310">
              <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
                C77.16,101.969,74.922,99.73,72.16,99.73z"/>
              <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
                c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
              <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
                c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
                c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
                C310,145.43,300.549,94.761,230.454,94.761z"/>
      
            </svg>
              </a>
          </Box>
          <a href='https://github.com/MorganLevetti'>
          <svg width="44" height="44" viewBox="0 0 1024 1024" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#1B1F23"/>
          </svg>
          </a>
          
          </Typography>
        </ul>
      </Box>
      <Box className="border md:mt-8 mt-8 h-96"> {/* Ajustez la marge pour mobile et ordinateur */}
        Contenu de la boîte 1
      </Box>
      <Box className="border md:mt-8 mt-8 h-96"> {/* Ajustez la marge pour mobile et ordinateur */}
        Contenu de la boîte 2
      </Box>
    </Box>
    </>
    
  );
}

export default Presentation;