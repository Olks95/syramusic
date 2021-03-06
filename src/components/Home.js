import React from 'react'
import iWonder from '../images/i-wonder.jpg'
import slideYouTubeOne from '../images/carouselOption.png'
import wgly from '../images/wgly.jpg'
import slideYouTubeTwo from '../images/Teardrop10.png'
import slideInstaOne from '../images/instagram-current.jpg'


import Carousel from './Carousel.js'


const slides = [{
	src: slideYouTubeOne,
	title: 'Subscribe to SYRA',
	subtitle: 'for more official videos on YouTube',
	alt: 'YouTube Profile Image',
	href: "https://www.youtube.com/watch?v=XFDgPyesLqU&ab_channel=SYRA",
	id: 1002
},{
	src: wgly,
	title: "Who's Gonna Love You",
	subtitle: 'Coming Soon',
	alt: "Who's Gonna Love You teaser",
	href: "https://www.instagram.com/p/CKhZ_lzjcqE/",
	id: 1003
}, {
	src: iWonder,
	title: 'I Wonder (Live)',
	subtitle: 'Click to watch on YouTube',
	alt: "I Wonder Live Performance",
	href: "https://youtu.be/JjrAPa1cGYc",
	id: 1001
}, {
	src: slideInstaOne,
	title: 'Follow SYRA',
	subtitle: '@syra.music on Instagram',
	alt: 'Instagram',
	href: "https://www.instagram.com/syra.music/",
	id: 1005
},{
	src: slideYouTubeTwo,
	title: 'Listen to SYRA',
	subtitle: 'on Spotify',
	alt: 'Spotify Link',
	href: "https://open.spotify.com/artist/0gnCReeV7AEe4i0960GB0e",
	id: 1004
}]


function Home() {
	return (
		<>
			<Carousel slides={slides} />
		</>
	)
}

export default Home