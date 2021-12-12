import React from 'react';

const links = [{    
        name: "Gaslight EP - Listen on Spotify Now!",
        src: "https://distrokid.com/hyperfollow/syra3/gaslight-ep",
        key: 1
    },
    {
        name: "Gaslight EP - Listen on YouTube Now!",
        src: "https://youtube.com/playlist?list=PL4QGGgwA13ay7N3DZ9RYaK7j5kPBg2dTF",
        key: 2
    },
    {
        name: "If I Had Ended It - Official Lyric Video",
        src: "https://youtu.be/qVimZYsi6iU",
        key: 3
    },
    {
        name: "Spotify",
        src: "https://open.spotify.com/artist/0gnCReeV7AEe4i0960GB0e",
        key: 4
    },
    {
        name: "TikTok",
        src: "https://www.tiktok.com/@syra.music?lang=en&fbclid=IwAR3iy4ZAxSd1JlVYGbwzb3Tx6hfOQyXAdKhaxrHUGjYDOWvJZBlc5JFgKJM",
        key: 5
    },
    {
        name: "YouTube",
        src: "https://www.youtube.com/channel/UCjXACzv_0uZw8Jqtya4CKqA",
        key: 6
    },
    {
        name: "Apple Music",
        src: "https://music.apple.com/us/artist/syra/1544078309",
        key: 7
    }
]

function LinkTree() {
    return ( 
        <>
        <div className="LinkTree-container ">
				<ul className="LinkTree-list" >
					{links.map((link) => {
						return (
							<li className="LinkTree-item container-shadow" key={ link.key } >
								<h2>{ link.name }</h2>
								<a href={ link.src }>
									<span className="LinkTree-link"></span>
								</a> 
							</li>
						)
					})}
				</ul>
			</div> 
		</>
    )
}

export default LinkTree