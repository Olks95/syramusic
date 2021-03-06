import React from 'react'
import slideOne from '../images/carouselOption.png'
import slideTwo from '../images/wgly.jpg'
import slideThree from '../images/i-wonder.jpg'
import slideFour from '../images/Teardrop10.png'
import slideFive from '../images/instagram-current.jpg'
import slideSix from '../images/green-leaves-1.jpg'


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
	title: "Who's Gonna Love You",
	subtitle: 'Coming Soon',
	alt: "Who's Gonna Love You teaser",
	href: "https://www.instagram.com/p/CKhZ_lzjcqE/",
	id: 1002
}, {
	src: slideThree,
	title: 'I Wonder (Live)',
	subtitle: 'Click to watch on YouTube',
	alt: "I Wonder Live Performance",
	href: "https://youtu.be/JjrAPa1cGYc",
	id: 1003
}, {
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
},{
	src: slideSix,
	title: 'Testing Slide 6',
	subtitle: 'For improvements',
	alt: 'Please Work',
	href: "https://www.tiktok.com/@syra.music?lang=en&fbclid=IwAR3iy4ZAxSd1JlVYGbwzb3Tx6hfOQyXAdKhaxrHUGjYDOWvJZBlc5JFgKJM",
	id: 1006
}]


function Home() {
	return (
		<>
			<Carousel slides={slides} />
		</>
	)
}

export default Home