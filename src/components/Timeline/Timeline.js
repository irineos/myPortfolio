import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography } from '@material-ui/core';

import './Timeline.css'

function CustomTimeline({title, icon, children}) {

	return (
		<Timeline className='timeline'>

		<TimelineItem className='timeline-first'>
		  <TimelineSeparator>
			<TimelineDot className='timeline-header-dot' >
				{icon}
			</TimelineDot>
			<TimelineConnector />
		  </TimelineSeparator>
		  <TimelineContent>
			  <Typography variant='h6' className='timeline-header'>{title}</Typography>
		  </TimelineContent>
		</TimelineItem>
	
		{children}
		
	  </Timeline>
	);
};

export const CustomTimelineSeparator = ({icon,connector=true}) => (
	
		<TimelineSeparator className='separator-padding'>
			<TimelineDot  className='timeline-dot' >
				{icon}
			</TimelineDot>
			{connector ? <TimelineConnector /> : <></>}
		</TimelineSeparator>
	
);


export default CustomTimeline
