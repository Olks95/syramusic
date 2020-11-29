import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const youtubeLink = "https://www.youtube.com/embed/tgbNymZ7vqY"

function Releases() {
	return (
		<>
			<div className="Releases-container">
				<div className="Releases-header">
					<h1>Green Leaves - Official Music Video</h1>
				</div>
				<div className="Releases-body">
					<iframe className="Releases-video" src={youtubeLink} allowFullScreen>
					</iframe>
				</div>
				<div className="Releases-footer">
					<h2 className="cta">
						Watch more videos
					</h2>
					<a className="btn btn-lg btn-dark cta-youtube" href="https://www.youtube.com">
						<FontAwesomeIcon icon={faYoutube} className="cta-youtube-icon" size="2x"/>Visit YouTube
					</a>
				</div>
			</div>
		</>
	)
}

export default Releases