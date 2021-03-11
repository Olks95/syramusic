import React from 'react'
import slideOne from '../images/carouselOption.png'
import slideTwo from '../images/i-wonder.jpg'
import slideThree from '../images/wgly-release.jpg'
import slideFour from '../images/instagram-current.jpg'
import slideFive from '../images/Teardrop10.png'
// import slideSix from '../images/green-leaves-1.jpg'


import Carousel from './Carousel.js'


const slides = [{
	src: slideOne,
	title: 'Subscribe to SYRA',
	subtitle: 'for more official videos on YouTube',
	alt: 'YouTube Profile Image',
	href: "https://www.youtube.com/watch?v=XFDgPyesLqU&ab_channel=SYRA",
	id: 1001
},{
	src: slideTwo,
	title: 'I Wonder (Live)',
	subtitle: 'Click to watch on YouTube',
	alt: "I Wonder Live Performance",
	href: "https://youtu.be/JjrAPa1cGYc",
	id: 1002
},{
	src: slideThree,
	title: "Who's Gonna Love You",
	subtitle: 'Click to stream now',
	alt: "Who's Gonna Love You",
	href: "https://distrokid.com/hyperfollow/syra3/whos-gonna-love-you",
	id: 1003
},{
	src: slideFour,
	title: 'Follow SYRA',
	subtitle: '@syra.music on Instagram',
	alt: 'Instagram',
	href: "https://www.instagram.com/syra.music/",
	id: 1004
},{
	src: slideFive,
	title: 'Listen to SYRA',
	subtitle: 'on Spotify',
	alt: 'Spotify Link',
	href: "https://open.spotify.com/artist/0gnCReeV7AEe4i0960GB0e",
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