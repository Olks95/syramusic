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
	subtitle: 'for more official videos',
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
	title: 'Subscribe to SYRA',
	subtitle: 'on YouTube',
	alt: 'YouTube Link',
	href: "https://www.youtube.com/channel/UCjXACzv_0uZw8Jqtya4CKqA",
	id: 1004
}, {
	src: slideGreenLeavesTwo,
	title: 'Green Leaves',
	subtitle: 'Debut Single, listen now',
	alt: 'Spotify Pre-save Link',
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