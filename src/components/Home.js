import React from 'react'
import teardrop1 from '../images/Teardrop8.jpg'
import teardrop2 from '../images/Teardrop3.jpg'
import teardrop3 from '../images/Teardrop10.jpg'
import teardrop4 from '../images/halloween.jpg'
import teardrop5 from '../images/Teardrop5.1.png'
import Carousel from './Carousel.js'


const slides = [{
	src: teardrop1,
	title: 'Tears of Dispair',
	subtitle: 'Choking the Feelings',
	alt: 'Keeping it all inside',
	id: 1001
}, {
	src: teardrop2,
	title: 'Phantom of the Tears',
	subtitle: 'Mask the Pain',
	alt: 'Masks upon masks',
	id: 1002
},{
	src: teardrop3,
	title: 'Phantom of the Tears',
	subtitle: 'Mask the Pain',
	alt: 'Masks upon masks',
	id: 1003
},{
	src: teardrop4,
	title: 'Phantom of the Tears',
	subtitle: 'Mask the Pain',
	alt: 'Masks upon masks',
	id: 1004
}, {
	src: teardrop5,
	title: 'Tear Me Apart',
	subtitle: '',
	alt: 'Cry baby, cry',
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