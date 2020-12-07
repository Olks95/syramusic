import React from 'react';

const links = [{
        name: "YouTube!",
        desc: "Check out this song, it's the first of many to come!",
        src: "https://www.youtube.com/channel/UCjXACzv_0uZw8Jqtya4CKqA?view_as=subscriber",
        key: 1
    },
    {
        name: "Spotify",
        desc: "This Halloween was spent crawling on the kitchen floor. It was worth it!",
        src: "https://www.instagram.com/p/CHBRa3PDVIE/?utm_source=ig_web_copy_link",
        key: 2
    },
    {
        name: "SoundCloud",
        desc: "This Halloween was spent crawling on the kitchen floor. It was worth it!",
        src: "https://www.instagram.com/p/CHBRa3PDVIE/?utm_source=ig_web_copy_link",
        key: 3
    }
]

function LinkTree() {
    return ( <
        >
        <div className="LinkTree-container ">
				<ul className="LinkTree-list" >
					{links.map((link) => {
						return (
							<li className="LinkTree-item container-shadow" key={ link.key } >
								<h3>{ link.name }</h3>
								{/*<p>{ link.desc }</p>*/}
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