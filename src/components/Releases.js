import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const youtubeLinkOne = "https://www.youtube.com/embed/JjrAPa1cGYc";
const youtubeLinkTwo = "https://www.youtube.com/embed/X5mShN4AfjU";
// const youtubeLinkOne = "https://www.youtube.com/embed/tgbNymZ7vqY?&rel=0"

function Releases() {
	return (
			<div className="Releases-container">
				<div className="Releases-card">
					<div className="Releases-header">
						<h1>I Wonder (Live Performance)</h1>
					</div>
					<div className="Releases-body">
						<iframe id="Releases-video" type="text/html" src={youtubeLinkOne} frameBorder="0" allowFullScreen allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  title="I Wonder Live Video">
							Browser Not Compatible.
						</iframe>
					</div>
				</div>
				<div className="Releases-card">
					<div className="Releases-header">
						<h1>Who's Gonna Love You</h1>
					</div>
					<div className="Releases-body">
						<iframe id="Releases-video" type="text/html" src={youtubeLinkTwo} frameBorder="0" allowFullScreen allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  title="Who's Gonna Love You">
							Browser Not Compatible.
						</iframe>
					</div>
				</div>
				<div className="Releases-footer">
					<h2 className="cta">
						Watch more videos
					</h2>
					<a className="btn btn-lg btn-dark cta-youtube" href="https://www.youtube.com/channel/UCjXACzv_0uZw8Jqtya4CKqA">
						<FontAwesomeIcon icon={faYoutube} className="cta-youtube-icon" size="2x"/>Visit YouTube
					</a>
				</div>
			</div>
	)
}

export default Releases