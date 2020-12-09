import React from 'react'
import slideOneImg from '../images/green-leaves-1.jpg'
import slideTwoImg from '../images/instagram-current.jpg'
import slideThreeImg from '../images/Teardrop10.png'
import slideFourImg from '../images/green-leaves-2.jpg'
import slideFiveImg from '../images/green-leaves-lyric.jpg'

import Carousel from './Carousel.js'


const slides = [{
	src: slideOneImg,
	title: 'Green Leaves',
	subtitle: 'Debut Single, out 18th Dec 2020',
	alt: 'Green Leaves Album Cover',
	href: "https://www.spotify.com/",
	id: 1001
}, {
	src: slideTwoImg,
	title: 'Follow Me',
	subtitle: '@syra.music on Instagram',
	alt: 'Latest Instagram image',
	href: "https://www.instagram.com/syra.music/",
	id: 1002
},{
	src: slideThreeImg,
	title: 'Subscribe to SYRA',
	subtitle: 'on YouTube',
	alt: "YouTube Profile Image",
	href: "https://www.youtube.com/",
	id: 1003
},{
	src: slideFourImg,
	title: 'Green Leaves',
	subtitle: 'Debut Single, out 18th Dec 2020',
	alt: 'Green Leaves Picture',
	href: "https://www.spotify.com/",
	id: 1004
}, {
	src: slideFiveImg,
	title: 'Subscribe to SYRA',
	subtitle: 'on YouTube',
	alt: 'Lyric Video Cover',
	href: "https://www.youtube.com/",
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