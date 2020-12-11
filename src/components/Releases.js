import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const youtubeLink = null;
// const youtubeLink = "https://www.youtube.com/embed/tgbNymZ7vqY?&rel=0"

function Releases() {
	return (
			<div className="Releases-container">
				<div className="Releases-header">
					<h1>Green Leaves - Official Lyric Video</h1>
				</div>
				<div className="Releases-body">
					<iframe id="Releases-video" type="text/html" src={youtubeLink} frameBorder="0" allowFullScreen allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  title="Newest Syra Video">
						Browser Not Compatible.
					</iframe>
					<div className="Releases-coming-soon Shows-container">
						<h1>COMING SOON</h1>
						<h2></h2>
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