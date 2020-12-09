import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebookF,
  faTwitter,
  faInstagram,
  faSpotify
} from "@fortawesome/free-brands-svg-icons";
import {
	faEnvelope
} from "@fortawesome/free-regular-svg-icons";

function SocialFollow() {
	return (
		<div className="Social-container">
			<a href="https://www.youtube.com/channel/UCjXACzv_0uZw8Jqtya4CKqA"
				className="youtube Social-link" >
				<FontAwesomeIcon icon={faYoutube} className="icon-shadow" size="1x"/>
			</a>
{/*			<a href="https://facebook.com"
				className="facebook Social-link" >
				<FontAwesomeIcon icon={faFacebookF} className="icon-shadow" size="1x" />
			</a>*/}
			<a href="https://www.instagram.com/syra.music/"
				className="instagram Social-link" >
				<FontAwesomeIcon icon={faInstagram} className="icon-shadow" size="1x" />
			</a>
{/*			<a href="https://www.twitter.com"
				className="twitter Social-link" >
				<FontAwesomeIcon icon={faTwitter} className="icon-shadow" size="1x" />
			</a>*/}
			<a href="https://www.spotify.com"
				className="spotify Social-link" >
				<FontAwesomeIcon icon={faSpotify} className="icon-shadow" size="1x" />
			</a>
			<a href="mailto:musician92@hotmail.co.uk"
				className="email Social-link" >
				<FontAwesomeIcon icon={faEnvelope} className="icon-shadow" size="1x" />
			</a>
		</div>
	)
}

export default SocialFollow;