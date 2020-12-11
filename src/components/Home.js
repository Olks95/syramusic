import React from 'react'
import slideGreenLeavesOne from '../images/green-leaves-1.jpg'
import slideInstaOne from '../images/instagram-current.jpg'
import slideYouTubeOne from '../images/carouselOption.png'
import slideGreenLeavesTwo from '../images/green-leaves-2.jpg'
import slideYouTubeTwo from '../images/Teardrop10.png'

import Carousel from './Carousel.js'


const slides = [{
	src: slideInstaOne,
	title: 'Follow SYRA',
	subtitle: '@syra.music on Instagram',
	alt: 'Instagram',
	href: "https://www.instagram.com/syra.music/",
	id: 1001
}, {
	src: slideYouTubeOne,
	title: 'Subscribe to SYRA',
	subtitle: 'for more official videos on YouTube',
	alt: 'YouTube Profile Image',
	href: "https://www.youtube.com/channel/UCjXACzv_0uZw8Jqtya4CKqA",
	id: 1002
},{
	src: slideGreenLeavesOne,
	title: 'Green Leaves',
	subtitle: 'Click here to stream now',
	alt: "Green Leaves Album Cover",
	href: "https://distrokid.com/hyperfollow/syra3/green-leaves",
	id: 1003
},{
	src: slideYouTubeTwo,
	title: 'Listen to SYRA',
	subtitle: 'on Spotify',
	alt: 'Spotify Link',
	href: "https://open.spotify.com/artist/0gnCReeV7AEe4i0960GB0e",
	id: 1004
}, {
	src: slideGreenLeavesTwo,
	title: 'Green Leaves',
	subtitle: 'Debut Single, listen now',
	alt: 'Distrokid Link',
	href: "https://distrokid.com/hyperfollow/syra3/green-leaves",
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