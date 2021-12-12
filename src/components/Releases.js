import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

//Click share on the youtube video, click embeded and copy only the src link into one of the two variables below. (Link one on the left/first depending on resolution)
const youtubeLinkOne = "https://www.youtube.com/embed/bWgSA3SKhwE";
const youtubeLinkTwo = "https://www.youtube.com/embed/JjrAPa1cGYc";

const videoTitleOne = "Gaslight";
const videoTitleTwo = "I Wonder";

function Releases() {
	return (
			<div className="Releases-container">
				<div className="Releases-card">
					<div className="Releases-header">
						<h1>{videoTitleOne}</h1>
					</div>
					<div className="Releases-body">
						<iframe id="Releases-video" type="text/html" src={youtubeLinkOne} frameBorder="0" allowFullScreen allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  title="I Wonder Live Video">
							Browser Not Compatible.
						</iframe>
					</div>
				</div>
				<div className="Releases-card">
					<div className="Releases-header">
						<h1>{videoTitleTwo}</h1>
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