import React, { useReducer } from 'react';
import '../carousel.css';


function slideSetup( activeItems, slideOne, slideTwo, slideThree, slideFour, slideFive, ...additional ) {

	// If there are 5 or more slides 5 slides should render
	const slides = activeItems > 4 ?
	[
		{
			className: "gallery-item-first",
			src: slideOne.src,
			alt: slideOne.alt,
			id: slideOne.id,
			active: true
		},
		{
			className: "gallery-item-previous",
			src: slideTwo.src,
			alt: slideTwo.alt,
			id: slideTwo.id,
			active: true
		},
		{
			className: "gallery-item-selected",
			src: slideThree.src,
			alt: slideThree.alt,
			id: slideThree.id,
			active: true
		},
		{
			className: "gallery-item-next",
			src: slideFour.src,
			alt: slideFour.alt,
			id: slideFour.id,
			active: true
		},
		{
			className: "gallery-item-last",
			src: slideFive.src,
			alt: slideFive.alt,
			id: slideFive.id,
			active: true
		},

		// If there are more than 5 images, the rest should be hidden
		additional ? additional.map(( slide ) => ({
			className: "hidden",
			src: slide.src,
			alt: slide.alt,
			id: slide.id,
			active: 1
		})) : null
	] : 	//if there are 4 slides or fewer only 3 should render in the center 3 locations
	[
		{
			className: "hidden",
			src: "",
			alt: "",
			id: "",
			active: false
		},
		{
			className: "gallery-item-previous",
			src: slideOne.src,
			alt: slideOne.alt,
			id: slideOne.id,
			active: true
		},
		{
			className: "gallery-item-selected",
			src: slideTwo.src,
			alt: slideTwo.alt,
			id: slideTwo.id,
			active: true
		},
		{
			className: "gallery-item-next",
			src: slideThree.src,
			alt: slideThree.alt,
			id: slideThree.id,
			active: true
		},
		//If there are 4 slides the 4th should be hidden
		slideFour ? {
			className: "hidden",
			src: slideFour.src,
			alt: slideFour.alt,
			id: slideFour.id,
			active: true
		} : 
		{
			className: "hidden",
			src: "",
			alt: "",
			id: "",
			active: false
		},
	]

	const state = {
		slides: slides,
		activeItems: activeItems
	}
	return state;
}

function setControls(slides) {

}

const reducer = (state, action) => {
	let activeSlides = []
	state.slides.map(( slide ) => {
		if(slide.active) activeSlides = [...activeSlides, slide]
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
	const galleryNavClassName = "gallery-nav-item ";

	return (
		<div className="gallery">
		  <div className="gallery-container">
			<img className={galleryClassName + state.slides[0].className} src={state.slides[0].src} alt={state.slides[0].alt} key="first" />
			<img className={galleryClassName + state.slides[1].className} src={state.slides[1].src} alt={state.slides[1].alt} key="previous" />
			<img className={galleryClassName + state.slides[2].className} src={state.slides[2].src} alt={state.slides[2].alt} key="selected" />
			<img className={galleryClassName + state.slides[3].className} src={state.slides[3].src} alt={state.slides[3].alt} key="next" />
			<img className={galleryClassName + state.slides[4].className} src={state.slides[4].src} alt={state.slides[4].alt} key="last" />
			<ul className="gallery-nav" >
				{
					slides.map((slide, i) => (
						<li 
							className={galleryNavClassName + state.slides.find(el => el.id == slide.id).className} 
							key={"nav-" + slide.id} >
						</li>
					))
				}
			</ul>
		  </div>
		  <div className="gallery-controls">
		  	<button 
			  	className="gallery-controls-previous" 
			  	onClick={() => dispatch({ type: 'PREV' })} >
			  	Previous 
			</button>
		  	<button 
		  		className="gallery-controls-next" 
			  	onClick={() => dispatch({ type: 'NEXT' })} >
		  		Next </button>
		  </div>
		</div>
	)
}

export default Carousel