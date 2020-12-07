import React from 'react'
import teardrop1 from '../images/Teardrop8.png'
import teardrop2 from '../images/Teardrop3.png'
import teardrop3 from '../images/Teardrop10.png'
import teardrop4 from '../images/halloween.png'
import teardrop5 from '../images/Teardrop5.1.png'
import Carousel from './Carousel.js'


const slides = [{
	src: teardrop1,
	title: 'Tears of Dispair',
	subtitle: 'Choking the Feelings',
	alt: 'Keeping it all inside',
	href: "https://www.instagram.com/syra.music/",
	id: 1001
}, {
	src: teardrop2,
	title: 'Phantom of the Tears',
	subtitle: 'Mask the Pain',
	alt: 'Masks upon masks',
	href: "https://www.instagram.com/syra.music/",
	id: 1002
},{
	src: teardrop3,
	title: 'Follow @syra.music',
	subtitle: 'on Instagram',
	alt: "Link to Syra's Instagram",
	href: "https://www.instagram.com/syra.music/",
	id: 1003
},{
	src: teardrop4,
	title: 'Phantom of the Tears',
	subtitle: 'Mask the Pain',
	alt: 'Masks upon masks',
	href: "https://www.instagram.com/syra.music/",
	id: 1004
}, {
	src: teardrop5,
	title: 'Tear Me Apart',
	subtitle: '',
	alt: 'Cry baby, cry',
	href: "https://www.instagram.com/syra.music/",
	id: 1005
}]


function Home() {
	return (
		<>
			<Carousel slides={slides} />
		</>
	)
}

export default Home