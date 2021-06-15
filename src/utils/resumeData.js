import InfoIcon from '@material-ui/icons/Info';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import nnLibraryImage from '../assets/nnlibrary.png'
import voeskaImage from '../assets/voeskaImage.jpg'
import portfolioImage from '../assets/portfolioImage.png'

const resumeData = {
	name: 'Irineos Kyritsis',
	
	linkedIn: {
		link: 'http://linkedin.com/in/irineos-kyritsis-3780b21a7',
		text: 'Irineos Kyritsis',
		icon: <LinkedInIcon />
	},
	gitHub: {
		link: 'http://github.com/irineos',
		text: 'github.com/irineos',
		icon: <GitHubIcon />
	},

	info: {
		email: {
			text: 'irineosk@gmail.com',
			icon: <EmailIcon />
		},
		address: {
			text: 'Larissa, Greece',
			icon: <LocationOnIcon />
		},
		phone: {	
			text: '6989299931',
			icon: <PhoneAndroidIcon />
		},
	},

	about: "Computer Science and Engineering Student with fundamental knowledge of software design, development and testing. Seeking to utilize broad educational background at the right place, for further growth.",

	experiences:[
		{
			title:"Terracom S.A.",
			date: "April-May 2021",
			description: "Created a gamification mobile app, that was part of Voeska Project, using Flutter/Dart framework."
		}
	],

	education:[
		{
			title:"Computer Science and Engineering",
			date: "2016-Present",
			description: 'University of Ioannina'
		},
		{
			title:"High School",
			date: "Graduated Class of 2016",
			description:'Makryhori, Larissa'
		}
	],

	skills:[
		{
			title:'FRONT-END',
			description:['Flutter/ Dart', 'React', 'Bootstrap', 'MaterialUI']
		},
		{
			title:'BACK-END',
			description:['Java', 'Python', 'NodeJS']
		},
		{
			title:'DATABASES',
			description:['MySQL', 'MongoDB']
		},
		{
			title:'SOURCE CONTROL',
			description:['Git', 'GitHub']
		},
	],

	projects: [
		{
			tag: 'Flutter/Dart',
			image: voeskaImage,
			title: 'Voeska Mobile App',
			description: "A gamification mobile app, that is part of Voeska Project.",
			links: [
				{link:'https://www.voeska.com', icon: <GitHubIcon/>}
			]
		},
		{
			tag: 'React',
			image: portfolioImage,
			title: 'This website',
			description: "My portfolio website.",
			links: [
				{link:'https://github.com/irineos/myPortfolio', icon: <GitHubIcon/>}
			]
		},
		{
			tag: 'C',
			image: 'https://github.com/irineos/Small-NN-Learns-MNIST-Dataset/raw/main/testMNISTScreenshot.png',
			title: 'Small Neural Network Learns MNIST Dataset',
			description: "MNIST is a Dataset that contains 70000 (60000 Train and 10000 Test) Labeled Images with Handwritten Digits. I made a small neural network with my Simple Neural Network Library and trained it in this Dataset.",
			links: [
				{link:'https://github.com/irineos/Small-NN-MNIST-Dataset', icon: <GitHubIcon/>}
			]
		},
		{
			tag: 'Java',
			image: 'https://github.com/irineos/Beginner-Weather-App/raw/main/weatherAppScreenshot.png',
			title: 'Simple Weather App',
			description: "A Simple JavaFX Weather App that uses OpenWeatherMap's API",
			links: [
				{link:'https://github.com/irineos/OpenWeatherMap-Weather-App', icon: <GitHubIcon/>}
			]
		},
		{
			tag: 'C',
			image: 'https://github.com/irineos/Rock-Scissors-Paper-Board-Game/raw/main/gameplay.png',
			title: 'Rock-Scissors-Paper Board Game(OpenGL/ GLUT)',
			description: "A Board Game that combines 'Rock Scissors Paper' and 'Connect 4' game rules",
			links: [
				{link:'https://github.com/irineos/Rock-Scissors-Paper-Board-Game', icon: <GitHubIcon/>}
			]
		},
		{
			tag: 'Java',
			image: 'https://github.com/irineos/SimpleText2SpeechEditor/raw/main/ClassDiagram.png',
			title: 'Text To Speech Editor',
			description: "A Simple Editor Application that can turn text into audio",
			links: [
				{link:'https://github.com/irineos/SimpleText2SpeechEditor', icon: <GitHubIcon/>}
			]
		},
		{
			tag: 'Python',
			image: 'https://github.com/irineos/PiDay2019/raw/main/mc_piday2019.png',
			title: 'Pi Day 2019',
			description: "Estimating Pi using the Monte Carlo Method",
			links: [
				{link:'https://github.com/irineos/PiDay2019', icon: <GitHubIcon/>}
			]
		},
		{
			tag: 'C',
			image: nnLibraryImage,
			title: 'Primitive Neural Network library',
			description: "A simple neural network implementation in pure C",
			links: [
				{link:'https://github.com/irineos/simple-Neural-Network-library-in-C', icon: <GitHubIcon/>}
			]
		},
		
	]
	
}
 

export default resumeData;

/*
const resumeData = {

		name: {
			
			text:'Irineos Kyritsis',
			icon: <InfoIcon />
		},
		email: {
			
			text: 'irineosk@gmail.com',
			icon: <EmailIcon />
		},
		address: {
			
			text: 'Larissa, Greece',
			icon: <LocationOnIcon />
		},
		phone: {
			
			text: '6989299931',
			icon: <PhoneAndroidIcon />
		},
		linkedIn: {
			link: 'http://linkedin.com/in/irineos-kyritsis-3780b21a7',
			text: 'Irineos Kyritsis',
			icon: <LinkedInIcon />
		},
		gitHub: {
			link: 'http://github.com/irineos',
			text: 'github.com/irineos',
			icon: <GitHubIcon />
		},
	
}
*/