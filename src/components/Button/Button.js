import { Button } from '@material-ui/core'
import React from 'react'
import './Button.css'

function CustomButton({text, icon, onClick}) {
	return (
		<Button onClick={onClick} className='btn' endIcon={icon ? (<div className='icon-container'>{icon}</div>) : null}>
			<span className='btn-text'>{text}</span>
		</Button>
	)
}

export default CustomButton
