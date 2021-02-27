import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faApple,
  faInstagram,
  faSpotify,
  faAmazon,
  faFacebookF,
  faTiktok
} from "@fortawesome/free-brands-svg-icons";
// import {
// 	faEnvelope
// } from "@fortawesome/free-regular-svg-icons";

function SocialFollow() {
	return (
		<div className="Social-container">
			<a href="https://www.facebook.com/SYRA-109231664539486/"
				className="facebook Social-link" >
				<FontAwesomeIcon icon={faFacebookF} className="icon-shadow" size="1x" />
			</a>
			<a href="https://www.youtube.com/channel/UCjXACzv_0uZw8Jqtya4CKqA"
				className="youtube Social-link" >
				<FontAwesomeIcon icon={faYoutube} className="icon-shadow" size="1x"/>
			</a>
			<a href="https://www.instagram.com/syra.music/"
				className="instagram Social-link" >
				<FontAwesomeIcon icon={faInstagram} className="icon-shadow" size="1x" />
			</a>
			<a href="https://www.tiktok.com/@syra.music?lang=en&fbclid=IwAR3iy4ZAxSd1JlVYGbwzb3Tx6hfOQyXAdKhaxrHUGjYDOWvJZBlc5JFgKJM"
				className="tiktok Social-link" >
				<FontAwesomeIcon icon={faTiktok} className="icon-shadow" size="1x" />
			</a>
			<a href="https://music.apple.com/us/album/green-leaves-single/1544087608?uo=4"
				className="apple Social-link" >
				<FontAwesomeIcon icon={faApple} className="icon-shadow" size="1x" />
			</a>
			<a href="https://open.spotify.com/album/5V3EF1MjaaBlQKw3UEuNhr"
				className="spotify Social-link" >
				<FontAwesomeIcon icon={faSpotify} className="icon-shadow" size="1x" />
			</a>
			<a href="https://www.amazon.com/gp/product/B08Q4DP8WR"
				className="amazon Social-link" >
				<FontAwesomeIcon icon={faAmazon} className="icon-shadow" size="1x" />
			</a>
		</div>
	)
}

export default SocialFollow;