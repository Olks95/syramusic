import React, { useReducer } from 'react';
import '../carousel.scss';


function slideSetup( activeItems, slideOne, slideTwo, slideThree, slideFour, slideFive, ...additional ) {
	// console.log(additional)
	// If there are 5 or more slides 5 slides should render
	const slides = activeItems > 4 ?
	[
		{
			className: "gallery-item-first",
			src: slideOne.src,
			alt: slideOne.alt,
			id: slideOne.id,
			href: slideOne.href,
			title: slideOne.title,
			subtitle: slideOne.subtitle,
			active: true
		},
		{
			className: "gallery-item-previous",
			src: slideTwo.src,
			alt: slideTwo.alt,
			id: slideTwo.id,
			href: slideTwo.href,
			title: slideTwo.title,
			subtitle: slideTwo.subtitle,
			active: true
		},
		{
			className: "gallery-item-selected",
			src: slideThree.src,
			alt: slideThree.alt,
			id: slideThree.id,
			href: slideThree.href,
			title: slideThree.title,
			subtitle: slideThree.subtitle,
			active: true
		},
		{
			className: "gallery-item-next",
			src: slideFour.src,
			alt: slideFour.alt,
			id: slideFour.id,
			href: slideFour.href,
			title: slideFour.title,
			subtitle: slideFour.subtitle,
			active: true
		},
		{
			className: "gallery-item-last",
			src: slideFive.src,
			alt: slideFive.alt,
			id: slideFive.id,
			href: slideFive.href,
			title: slideFive.title,
			subtitle: slideFive.subtitle,
			active: true
		},

		// If there are more than 5 images, the rest should be hidden
		additional.length > 0 ? additional.map(( slide ) => ({
			className: "hidden",
			src: slide.src,
			alt: slide.alt,
			id: slide.id,
			href: slide.href,
			title: slide.title,
			subtitle: slide.subtitle,
			active: true
		})) : {}
	] : 	//if there are 4 slides or fewer only 3 should render in the center 3 locations
	[
		{
			className: "hidden",
			src: "",
			alt: "",
			id: "",
			href: "",
			title: "",
			subtitle: "",
			active: false
		},
		{
			className: "gallery-item-previous",
			src: slideOne.src,
			alt: slideOne.alt,
			id: slideOne.id,
			href: slideOne.href,
			title: slideOne.title,
			subtitle: slideOne.subtitle,
			active: true
		},
		{
			className: "gallery-item-selected",
			src: slideTwo.src,
			alt: slideTwo.alt,
			id: slideTwo.id,
			href: slideTwo.href,
			title: slideTwo.title,
			subtitle: slideTwo.subtitle,
			active: true
		},
		{
			className: "gallery-item-next",
			src: slideThree.src,
			alt: slideThree.alt,
			id: slideThree.id,
			href: slideThree.href,
			title: slideThree.title,
			subtitle: slideThree.subtitle,
			active: true
		},
		//If there are 4 slides the 4th should be hidden
		slideFour ? {
			className: "hidden",
			src: slideFour.src,
			alt: slideFour.alt,
			id: slideFour.id,
			href: slideFour.href,
			title: slideFour.title,
			subtitle: slideFour.subtitle,
			active: true
		} : 
		{
			className: "hidden",
			src: "",
			alt: "",
			id: "",
			href: "",
			title: "",
			subtitle: "",
			active: false
		}
	]

	const state = {
		//filter slides with className to remove any empty objects in the array while keeping slides that are hidden
		slides: slides.filter((slide) => slide.className),
		activeItems: activeItems
	}
	return state;
}

const reducer = (state, action) => {
	let activeSlides = []
	state.slides.map(function(slide) {
		if(slide.active) {
			activeSlides.push(slide)
		}
	})
	switch (action.type) {
		case 'NEXT':
			const firstSlide = activeSlides.shift()
			return slideSetup(state.activeItems, ...activeSlides, firstSlide)
		case 'PREV': 
			const lastSlide = activeSlides.pop()
			return slideSetup(state.activeItems, lastSlide, ...activeSlides)
		default: throw new Error();
	}
}

function Carousel({ slides }) {
	const [state, dispatch] = useReducer(
		reducer, 
		slideSetup(slides.length, ...slides)
		);

	const galleryClassName = "gallery-item ";
	const gallerySlide = "gallery-slide ";
	const galleryNavClassName = "gallery-nav-item ";

	return (
		<div className="gallery">
		  <div className="gallery-container">
			<div className={gallerySlide + "gallery-slide-first"}>
				<img className={galleryClassName + state.slides[0].className} src={state.slides[0].src} alt={state.slides[0].alt} key="first" />
				<div className="gallery-item-text first-text">
					<h1>{state.slides[0].title}</h1>
					<h3>{state.slides[0].subtitle}</h3>
				</div>
			</div>
			<div className={gallerySlide + "gallery-slide-previous"}>
				<img className={galleryClassName + state.slides[1].className} src={state.slides[1].src} alt={state.slides[1].alt} key="previous" />
				<div className="gallery-item-text previous-text">
					<h1>{state.slides[1].title}</h1>
					<h3>{state.slides[1].subtitle}</h3>
				</div>
			</div>

			{
				// Main Slide with a link to related content. Can be external or internal
			}

			<a className={gallerySlide + "gallery-slide-selected"} 
			href={state.slides[2].href}
			>
				<img className={galleryClassName + state.slides[2].className } src={state.slides[2].src} alt={state.slides[2].alt} key="selected" />
				<div className="gallery-item-text selected-text">
					<h1>{state.slides[2].title}</h1>
					<h3>{state.slides[2].subtitle}</h3>
				</div>
			</a>

			<div className={gallerySlide + "gallery-slide-next"}>
				<img className={galleryClassName + state.slides[3].className} src={state.slides[3].src} alt={state.slides[3].alt} key="next" />
				<div className="gallery-item-text next-text">
					<h1>{state.slides[3].title}</h1>
					<h3>{state.slides[3].subtitle}</h3>
				</div>
			</div>
			<div className={gallerySlide + "gallery-slide-last"}>
				<img className={galleryClassName + state.slides[4].className} src={state.slides[4].src} alt={state.slides[4].alt} key="last" />
				<div className="gallery-item-text last-text">
					<h1>{state.slides[4].title}</h1>
					<h3>{state.slides[4].subtitle}</h3>
				</div>
			</div>
			<ul className="gallery-nav" >
				{
					slides.map((slide, i) => (
						<li 
							className={galleryNavClassName + state.slides.find(el => el.id === slide.id).className}
							key={"nav-" + slide.id} >
						</li>
					))
				}
			</ul>
		  </div>
		  <div className="gallery-controls">
		  	<button 
			  	className="gallery-controls-previous btn btn-lg btn-dark" 
			  	onClick={() => dispatch({ type: 'PREV' })} >
			  	&lt;
			</button>
		  	<button 
		  		className="gallery-controls-next btn btn-lg btn-dark" 
			  	onClick={() => dispatch({ type: 'NEXT' })} >
		  		&gt;
		  	</button>
		  </div>
		</div>
	)
}

export default Carousel