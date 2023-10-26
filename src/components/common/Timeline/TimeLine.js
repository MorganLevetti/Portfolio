import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import Typography from '@mui/material/Typography'
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import VerifiedIcon from '@mui/icons-material/Verified';
import AOS from 'aos';
import { useEffect } from 'react'
import 'aos/dist/aos.css';

export default function TimeLine() {
  useEffect(() => {
    AOS.init(); // Initialisez AOS
  }, []);
  return (
    <Timeline className='mt-8 ' position="alternate-reverse">
      <TimelineItem data-aos="fade-up">
        <TimelineSeparator>
          <TimelineDot  color="secondary">
             <LaptopMacIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '10px', px: 2, color: 'white', mb: '20px' }}>
          <Typography variant="h6" component="span">
            Intégrateur Ruby
          </Typography>
          <Typography>Basic Labs</Typography>
          <Typography className='text-gray-400'>Ruby, OnRails</Typography>
          <Typography sx={{color: '#9c27b0'}}>2020</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem data-aos="fade-up">
        <TimelineSeparator>
          <TimelineDot  color="success">
          <PhoneIphoneIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '10px', px: 2, color: 'white', mb: '20px' }}>
          <Typography variant="h6" component="span">
            Concepteur d'application
          </Typography>
          <Typography>LaPlateforme</Typography>
          <Typography className='text-gray-400'>ReactJs, Js, Linux</Typography>
          <Typography sx={{color: '#2e7d32'}}>2021</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem data-aos="fade-up">
        <TimelineSeparator>
          <TimelineDot  color="primary">
          <BookmarkAddedIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '10px', px: 2, color: 'white', mb: '20px' }}>
          <Typography variant="h6" component="span">
            Concepteur développeur, RI7
          </Typography>
          <Typography className='text-gray-400'>ReactJs, Laravel, PHP</Typography>
          <Typography sx={{color: '#1976d2'}}>2022</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem data-aos="fade-up">
        <TimelineSeparator>
        <TimelineConnector />
          <TimelineDot  color="secondary">
            <VerifiedIcon/>
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '10px', px: 2, color: 'white', mb: '20px' }}>
          <Typography variant="h6" component="span">
          FullStack, Novanea
          </Typography>
          <Typography>CDI</Typography>
          <Typography className='text-gray-400'>ReactJs, MUI, Laravel</Typography>
          <Typography sx={{color: '#9c27b0'}}>2023</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}