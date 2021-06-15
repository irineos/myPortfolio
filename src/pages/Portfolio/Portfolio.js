import { Card, CardActionArea, CardContent, CardMedia, Grid, Grow, Typography } from '@material-ui/core'
import React from 'react'
import resumeData from '../../utils/resumeData'
import './Portfolio.css'

function Portfolio() {
	return (
		<Grid container  className='section pb-45'>
			<Grid item className="section-title mb-30"  xs={12}>
					<span></span>
					<Typography variant='h6' className="section-title" >Portfolio</Typography>
				</Grid>

				<Grid item   xs={12}>
					<Grid container spacing={3} >
						{resumeData.projects.map((project) => (	
							<Grid item xs={12} sm={6} md={4} >
								<Grow in timeout={1000}>
								<a href={project.links[0].link} className='card-link' target="_blank">
								<Card className="custom-card">
										<CardMedia className="custom-card-image" image={project.image} title={project.title} />
										<CardContent>
										<Typography className="custom-card-title">{project.title}</Typography>
										<Typography variant={'body2'} className="custom-card-description">{project.description}</Typography>
										</CardContent>
								</Card>
								</a>
								</Grow>
							</Grid>
						))}
					</Grid>
				</Grid>

		</Grid>
	)
}

export default Portfolio
