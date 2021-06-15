import { Typography } from '@material-ui/core'
import React from 'react'
import './Footer.css'

function Footer() {
	return (
		<div className='footer'>
			<div className='footer-left'>
				<Typography className='footer-name'>
					Irineos Kyritsis
				</Typography>
			</div>
			<div className='footer-right'>
			<Typography className='footer-copyrights'>
				Developed by Irineos Kyritsis
			</Typography>
			</div>
		</div>
	)
}

export default Footer
