import React from 'react';

const links = [{
        name: "New Release - Green Leaves out now",
        src: "https://distrokid.com/hyperfollow/syra3/green-leaves",
        key: 1
},
{
        name: "YouTube",
        src: "https://www.youtube.com/channel/UCjXACzv_0uZw8Jqtya4CKqA",
        key: 2
    },
    {
        name: "Spotify",
        src: "https://open.spotify.com/artist/0gnCReeV7AEe4i0960GB0e",
        key: 3
    },
    {
        name: "Apple Music",
        src: "https://music.apple.com/us/artist/syra/1544078309",
        key: 4
    },
    {
        name: "Facebook",
        src: "https://www.facebook.com/SYRA-109231664539486",
        key: 5
    },
    {
        name: "TikTok",
        src: "https://www.tiktok.com/@syra.music?lang=en&fbclid=IwAR3iy4ZAxSd1JlVYGbwzb3Tx6hfOQyXAdKhaxrHUGjYDOWvJZBlc5JFgKJM",
        key: 6
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