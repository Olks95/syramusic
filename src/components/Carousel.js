import React, { useReducer, useState } from 'react';
import '../carousel.scss';

import Slide from './Slide.js';

function slideSetup( activeItems, slides ) {
	// Creating arrays to hold the unique values for the different slides for later assembly
	let slideClasses = [];
	let slideIds = [];
	let carousel = [];

	// If there are enough slides to fill the full 5 width fill them, 
	// if not the first and last should be hidden
	slideClasses = [
		activeItems > 4 ? "gallery-item-first" : "hidden",
		"gallery-item-previous",
		"gallery-item-selected",
		"gallery-item-next",
		activeItems > 4 ? "gallery-item-last" : "hidden"
	]
	// As long as there are more active items than classes add a hidden slide at the end.
	// This will only occur with 6 or more slides and they should therefore all be hidden.
	while(activeItems > slideClasses.length) {
		slideClasses.push("hidden");
	}

	//Making the array of IDs and adding empty string for the first since it will be empty (4th slide would be added to the end)
	slideIds = slides.map(slide => slide.id)
	if(activeItems < 5) {
		slideIds = ["", ...slideIds];
	}

	//
	while(slideIds.length > 0) {
		const slideId = slideIds.shift();
		carousel.push({
			className: slideClasses.shift(),
			id: slideId,
			active: slideId ? true : false
		})
	}

	const state = {
		slides: carousel,
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
			return slideSetup(state.activeItems, activeSlides)
		case 'FIRST':
			lastSlide = activeSlides.pop()
			nextSlide = activeSlides.pop()
			activeSlides = [nextSlide, lastSlide, ...activeSlides];
			return slideSetup(state.activeItems, activeSlides)
		case 'PREV': 
			lastSlide = activeSlides.pop()
			activeSlides = [lastSlide, ...activeSlides];
			return slideSetup(state.activeItems, activeSlides)
		case 'NEXT':
			firstSlide = activeSlides.shift()
			activeSlides = [ ...activeSlides, firstSlide];
			return slideSetup(state.activeItems, activeSlides)
		case 'LAST':
			firstSlide = activeSlides.shift()
			prevSlide = activeSlides.shift()
			activeSlides = [...activeSlides, firstSlide, prevSlide];
			return slideSetup(state.activeItems, activeSlides)
		default: throw new Error();
	}
}

function Carousel({ slides }) {
	const [state, dispatch] = useReducer(
		reducer, 
		slideSetup(slides.length, slides)
		);

	const [xStartPosition, setXStartPosition] = useState(0);
	const [xCurrentPosition, setXCurrentPosition] = useState(0);

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

	const handleTouchStart = e => {
		const startPos = e.changedTouches[0].pageX;
		setXStartPosition(startPos);
	}

	const handleTouchMove = e => {
		const currentPos = e.changedTouches[0].pageX;
		setXCurrentPosition(currentPos);
	}

	const handleTouchEnd = e => {
		const endPos = e.changedTouches[0].pageX;
		const diff = xStartPosition - endPos;
		if(Math.abs(diff) > 50) {
			if(diff > 0) {
				dispatch({ type: 'NEXT' })
			} else {
				dispatch({ type: 'PREV' })
			}
		}
	}

	return (
		<div className="gallery">
		  	<div className="gallery-container"
			  	onTouchStart={handleTouchStart}
	  	        onTouchMove={handleTouchMove}
	  	        onTouchEnd={handleTouchEnd}
		  	>

		  	{
		  		gallerySlides.map((slide, i) => (
		  			<Slide slide={slide} key={slide.id} offset={state.slides.findIndex( (el) => el.id === slide.id) - 2 } />
		  		))
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