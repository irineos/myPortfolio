import React from 'react'
import { 
	Button,
	Form,
	FormControl,
	Nav,
	Navbar,
	NavDropdown
 } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@material-ui/core';
import {Link, NavLink, withRouter } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import resumeData from '../../utils/resumeData'
import './Header.css'

function Header(props) {
	const pathName = props?.location?.pathname;

	return (
		<Navbar sticky='top' className='navbar'>
				<Nav.Link as={NavLink} to='/' className='header-navlink'>
					<Navbar.Brand className='nav-home'>
						<HomeIcon/>
					</Navbar.Brand>
				</Nav.Link>

				<Navbar.Toggle />

				<Navbar.Collapse>
						<Nav className='navbar-left'>
							<Nav.Link 
								as={NavLink} 
								to='/' 
								className={pathName === '/' ? 'header-link-active' : 'header-link'}>
								Resume
							</Nav.Link>
							<Nav.Link 
								as={NavLink} 
								to='/portfolio'
								className={pathName === '/portfolio' ? 'header-link-active' : 'header-link'}>
								Portfolio
							</Nav.Link>
						</Nav>

						<div className='navbar-right'>
							<a href={resumeData.linkedIn.link} target="_blank">{resumeData.linkedIn.icon}</a>
							<a href={resumeData.gitHub.link} target="_blank">{resumeData.gitHub.icon}</a>
						</div>
				</Navbar.Collapse>
		</Navbar>
	)
}

export default withRouter(Header)
