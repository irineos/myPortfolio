import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import './Resume.css'
import resumeData from '../../utils/resumeData'
import CustomTimeline, {CustomTimelineSeparator} from '../../components/Timeline/Timeline'
import WorkIcon from '@material-ui/icons/Work';
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import SchoolIcon from '@material-ui/icons/School';

function Resume() {
	return (
		<div className='resume-container'>
			<Grid container className='section pb-45'>
				<Grid item className="section-title mb-30"  xs={12}>
					<span></span>
					<Typography variant='h6' className="section-title" >About Me</Typography>
				</Grid>
				<Grid item xs={12}>
				<Typography variant='body1' className="about-text">{resumeData.about}</Typography>
				</Grid>
			</Grid>

			<Grid container className='section'>
				<Grid item className="section-title mb-30"  xs={12}>
					<span></span>
					<Typography variant='h6' className="section-title" >Resume</Typography>
				</Grid>

				<Grid item xs={12}>
					<Grid container className='resume-timeline'>
						{/* experience */}
						<Grid item sm={12} md={6}>
							<CustomTimeline 
							title='Experience' 
							icon={<WorkIcon/>}>
								{resumeData.experiences.map((experience) => (
									<TimelineItem>
										<TimelineSeparator className='separator-padding-main'>
											<TimelineDot  className='timeline-dot-main' />
											 <TimelineConnector /> 
										</TimelineSeparator>
										<TimelineContent className='job-content'>
											<Typography className='job-title'>{experience.title}</Typography>
											<Typography className='job-date' variant='caption'>{experience.date}</Typography>
											<Typography className='job-description' variant='body2'>{experience.description}</Typography>
										</TimelineContent>
									</TimelineItem>
								))}
							</CustomTimeline>
						</Grid>
						{/* education */}
						<Grid item sm={12} md={6}>
							<CustomTimeline 
							title='Education' 
							icon={<SchoolIcon/>}>
								{resumeData.education.map((e) => (
									<TimelineItem>
										<TimelineSeparator className='separator-padding-main'>
											<TimelineDot  className='timeline-dot-main' />
											 <TimelineConnector /> 
										</TimelineSeparator>
										<TimelineContent className='job-content'>
											<Typography className='job-title'>{e.title}</Typography>
											<Typography className='job-description' variant='body2'>{e.description}</Typography>
											<Typography className='job-date' variant='caption'>{e.date}</Typography>
											
										</TimelineContent>
									</TimelineItem>
								))}
							</CustomTimeline>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			 
			<Grid container className='section '>
				<Grid item className="section-title mb-30"  xs={12}>
					<span></span>
					<Typography variant='h6' className="section-title" >Skills</Typography>
				</Grid>
					{resumeData.skills.map((skill) => (
						<Grid item xs={12} sm={6} md={3} className='p-10' >
							<Paper elevation={3} className='skill' >
								<Typography variant='h6' className='skill-title'>
									{skill.title}
								</Typography>
								{skill.description.map((e) => (
									<Typography variant='body2' className='skill-description'>
									<TimelineDot variant={'outlined'} className='skill-dot' />
									{e}
									</Typography>
								))}
							</Paper>
						</Grid>
					))}
					
				</Grid>
			

			
		</div>
	)
}

export default Resume
