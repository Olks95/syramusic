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
			<a href="https://music.apple.com/us/artist/syra/1544078309"
				className="apple Social-link" >
				<FontAwesomeIcon icon={faApple} className="icon-shadow" size="1x" />
			</a>
			<a href="https://open.spotify.com/artist/0gnCReeV7AEe4i0960GB0e"
				className="spotify Social-link" >
				<FontAwesomeIcon icon={faSpotify} className="icon-shadow" size="1x" />
			</a>
			<a href="https://www.amazon.com/gp/product/B093SPTFCZ"
				className="amazon Social-link" >
				<FontAwesomeIcon icon={faAmazon} className="icon-shadow" size="1x" />
			</a>
		</div>
	)
}

export default SocialFollow;