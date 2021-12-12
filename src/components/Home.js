import React from 'react'
import slideOne from '../images/carouselOption.png'
import slideTwo from '../images/iihei.jpg'
import slideThree from '../images/gaslightSplatteryTexture.png'
import slideFour from '../images/instagram-current.jpg'
import slideFive from '../images/Teardrop10.png'
// import slideSix from '../images/green-leaves-1.jpg'


import Carousel from './Carousel.js'


const slides = [{
	src: slideOne,
	title: 'Subscribe to SYRA',
	subtitle: 'for more official videos on YouTube',
	alt: 'YouTube Profile Image',
	href: "https://youtube.com/playlist?list=PL4QGGgwA13ay7N3DZ9RYaK7j5kPBg2dTF",
	id: 1001
},{
// 	src: slideTwo,
// 	title: 'I Wonder (Live)',
// 	subtitle: 'Click to watch on YouTube',
// 	alt: "I Wonder Live Performance",
// 	href: "https://youtu.be/JjrAPa1cGYc",
// 	id: 1006
// },{
	src: slideTwo,
	title: "If I had Ended It",
	subtitle: 'Listen Now',
	alt: "If I had Ended It",
	href: "https://open.spotify.com/track/4Xma81Jmo59XfSiw5Qv4mr?si=dbbe20bbe6e9465e",
	id: 1002
},{
	src: slideThree,
	title: "",
	subtitle: 'EP Out Now! Click HERE',
	alt: "Gaslight",
	href: "https://open.spotify.com/album/0VXKrC0CB6caXZGCvoDCSJ?si=IWDd4wZYTWeke2j7Fuaa2A",
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