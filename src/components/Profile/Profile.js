import React from 'react'
import './Profile.css'
import '../Timeline/Timeline.css'
import ProfileImage from '../../assets/profile_image.png'
import CustomTimeline, {CustomTimelineSeparator} from '../Timeline/Timeline'
import PersonIcon from '@material-ui/icons/Person';
import resumeData from '../../utils/resumeData'
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import { Typography } from '@material-ui/core';
import MyPDF from '../../assets/cv.pdf';



import GetAppIcon from '@material-ui/icons/GetApp';
import CustomButton from '../Button/Button'

const CustomTimelineItem = ({ text, link, icon, connector}) => (
	
	<TimelineItem >
		<CustomTimelineSeparator icon={icon} connector={connector}/>
		<TimelineContent className='timeline-content'>
			{link ? (
			<Typography className='timelineItem-text'>
				
					<a href={link} target='_blank'>
					{text}
				</a>
			</Typography>
			) : (
				<Typography className='timelineItem-text'>{text}</Typography>
			)}
		</TimelineContent>
	</TimelineItem>
);


function Profile() {
	return (
		<div className='profile'>
			<div className='profile-image'>
				<img src={ProfileImage} alt='' />
			</div>
			<div className='profile-info'>
				<CustomTimeline title={resumeData.name} icon={<PersonIcon />} >
						{
							Object.keys(resumeData.info).map((key) => (
							<CustomTimelineItem text={resumeData.info[key].text} icon={resumeData.info[key].icon}/>
							))
						}
						<CustomTimelineItem text={resumeData.linkedIn.text} icon={resumeData.linkedIn.icon} link={resumeData.linkedIn.link}/>
						<CustomTimelineItem text={resumeData.gitHub.text} icon={resumeData.gitHub.icon} link={resumeData.gitHub.link} connector={false}/>
				</CustomTimeline>
					

				<div className='btn-container'>
					<a className='btn-link' href={MyPDF} download="CV.pdf"><CustomButton text='Download CV' icon={<GetAppIcon/>}/></a>
				</div>
			</div>
		</div>
	)
}

export default Profile
