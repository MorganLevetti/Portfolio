import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import Typography from '@mui/material/Typography'
import TimelineDot from '@mui/lab/TimelineDot';

export default function TimeLine() {
  return (
    <Timeline className='mt-8 ' position="alternate-reverse">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot  color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '10px', px: 2, color: 'white', mb: '20px' }}>
          <Typography variant="h6" component="span">
            Eat
          </Typography>
          <Typography>Because you need strength</Typography>
          <Typography sx={{color: 'purple'}}>2020</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot  color="success"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '10px', px: 2, color: 'white', mb: '20px' }}>
          <Typography variant="h6" component="span">
            Eat
          </Typography>
          <Typography>Because you need strength</Typography>
          <Typography sx={{color: 'green'}}>2022</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot  color="primary"/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '10px', px: 2, color: 'white', mb: '20px' }}>
          <Typography variant="h6" component="span">
            Eat
          </Typography>
          <Typography>Because you need strength</Typography>
          <Typography sx={{color: 'blue'}}>2023</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}