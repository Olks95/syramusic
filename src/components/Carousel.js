import React, { useReducer } from 'react';
import '../carousel.scss';

import Slide from './Slide.js';
import useInstagram from '../hooks/useInstagram.js'


function slideSetup( activeItems, slideOne, slideTwo, slideThree, slideFour, slideFive, ...additional ) {
	// console.log(additional)
	// If there are 5 or more slides 5 slides should render
	const slides = activeItems > 4 ?
	[
		{
			className: "gallery-item-first",
			id: slideOne.id,
			active: true
		},
		{
			className: "gallery-item-previous",
			id: slideTwo.id,
			active: true
		},
		{
			className: "gallery-item-selected",
			id: slideThree.id,
			active: true
		},
		{
			className: "gallery-item-next",
			id: slideFour.id,
			active: true
		},
		{
			className: "gallery-item-last",
			id: slideFive.id,
			active: true
		},

		// If there are more than 5 images, the rest should be hidden
		additional.length > 0 ? additional.map(( slide ) => ({
			className: "hidden",
			id: slide.id,
			active: true
		})) : {}
	] : 	//if there are 4 slides or fewer only 3 should render in the center 3 locations
	[
		{
			className: "hidden",
			id: 999,
			active: false
		},
		{
			className: "gallery-item-previous",
			id: slideOne.id,
			active: true
		},
		{
			className: "gallery-item-selected",
			id: slideTwo.id,
			active: true
		},
		{
			className: "gallery-item-next",
			id: slideThree.id,
			active: true
		},
		//If there are 4 slides the 4th should be hidden
		slideFour ? {
			className: "hidden",
			id: slideFour.id,
			active: true
		} : 
		{
			className: "hidden",
			id: "",
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
	state.slides.forEach((slide) => {
		if(slide.active) {
			activeSlides.push(slide)
		}
	})
	let firstSlide, prevSlide, nextSlide, lastSlide;

	// if(action.type === 'FIND') {

	// }
	switch (action.type) {
		case 'FIND':
			//Locate desired slide in the carousel (state)
			let selectThisSlide = activeSlides.findIndex((slide) => slide.id === action.payload)
			//As long as the selected slide is at an index of more than 2 it needs to move left
			for(selectThisSlide; selectThisSlide > 2; selectThisSlide--) {
				firstSlide = activeSlides.shift()
				activeSlides = [...activeSlides, firstSlide]
			}
			//As long as the selected slide is at an index of less than 2 it needs to move right
			for(selectThisSlide;selectThisSlide < 2; selectThisSlide++) {
				lastSlide = activeSlides.pop()
				activeSlides = [lastSlide, ...activeSlides]
			}
			return slideSetup(state.activeItems, ...activeSlides)
		case 'FIRST':
			lastSlide = activeSlides.pop()
			nextSlide = activeSlides.pop()
			return slideSetup(state.activeItems, nextSlide, lastSlide, ...activeSlides)
		case 'PREV': 
			lastSlide = activeSlides.pop()
			return slideSetup(state.activeItems, lastSlide, ...activeSlides)
		case 'NEXT':
			firstSlide = activeSlides.shift()
			return slideSetup(state.activeItems, ...activeSlides, firstSlide)
		case 'LAST':
			firstSlide = activeSlides.shift()
			prevSlide = activeSlides.shift()
			return slideSetup(state.activeItems, ...activeSlides, firstSlide, prevSlide)
		default: throw new Error();
	}
}

function Carousel({ slides }) {
	const [state, dispatch] = useReducer(
		reducer, 
		slideSetup(slides.length, ...slides)
		);
	// const [instaData, isLoaded] = useInstagram();

	const galleryNavClassName = "gallery-nav-item ";
	let gallerySlides = slides;

	//If the number of slides is less than 5, the first slide to be a hidden and empty slide so the slides are centered.
	if(slides.length < 5) {
		const slideFirst = {
			className: "hidden",
			src: "",
			alt: "",
			id: 999,
			href: "",
			title: "",
			subtitle: "",
			active: false
		}
		gallerySlides = [slideFirst, ...slides];
	}

	return (
		<div className="gallery">
		  	<div className="gallery-container">

		  	{
		  		gallerySlides.map((slide, i) => {
		  			if (slide.alt === 'Instagram') {
		  				return (
		  					<div id="instafeed" key={slide.id} ></div>
		  				)
		  			} else {
		  			 return	(
		  				<Slide image={slide.src} title={slide.title} subtitle={slide.subtitle} href={slide.href} key={slide.id} offset={state.slides.findIndex( (el) => el.id === slide.id) - 2 } />
		  				)
		  			}

		  		})
		  	}

			<ul className="gallery-nav" >
				{
					slides.map((slide, i) => (
						<li 
							className={galleryNavClassName + state.slides.find(el => el.id === slide.id).className}
							key={"nav-" + slide.id} 
							onClick={() => dispatch({ type: 'FIND', payload: slide.id })} >
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