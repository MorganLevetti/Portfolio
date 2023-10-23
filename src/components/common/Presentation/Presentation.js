import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Presentation() {
  return (
    <Box className="md:flex md:justify-center">
      <Box className="md:w-1/2 text-center">
        <Typography
          sx={{
            fontSize: [45, 40],
            marginTop: 15,
            color: 'rgb(255, 165, 0)',
            fontFamily: 'monospace',
            textAlign: ['left', 'center'], // Alignement différent pour mobile et ordinateur
          }}
        >
          Hello World!
        </Typography>
        <Typography
          sx={{
            fontSize: [30, 30],
            color: 'white',
            fontFamily: 'monospace',
            textAlign: ['left', 'center'], // Alignement différent pour mobile et ordinateur
          }}
        >
          Je suis Morgan,
        </Typography>
        <Typography
          sx={{
            fontSize: [20, 20],
            color: 'white',
            fontFamily: 'initial',
            textAlign: ['left', 'center'], // Alignement différent pour mobile et ordinateur
          }}
        >
          Développeur <strong className='text-blue-400'>Front-end</strong>,
        </Typography>
      </Box>
    </Box>
  );
}

export default Presentation;