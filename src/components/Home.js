import React, { useReducer } from 'react'
import teardrop3 from '../images/Teardrop8.jpg'
import teardrop2 from '../images/Teardrop10.jpg'
import teardrop from '../images/Teardrop5.1.png'
import Slide from './Slide.js'


const slides = [{
	image: teardrop,
	background: true,
	title: 'Tears of Dispair',
	subtitle: 'Choking the Feelings',
	description: 'Keeping it all inside'
}, {
	image: teardrop2,
	background: false,
	title: 'Phantom of the Tears',
	subtitle: 'Mask the Pain',
	description: 'Masks upon masks'
}, {
	image: teardrop3,
	background: false,
	title: 'Tear Me Apart',
	subtitle: '',
	description: 'Masks upon masks'
}]


const initialState = {
    slideIndex: 0
  }

const slidesReducer = (state, event) => {
	if(event.type === 'NEXT') {
	  return {
	    ...state,
	    slideIndex: (state.slideIndex + 1) % slides.length
	  }
	}
	if(event.type === 'PREV') {
	 return {
	    ...state,
	    slideIndex: state.slideIndex === 0
	      ? slides.length - 1
	      : state.slideIndex - 1
	  }
	}
}

function Home() {
	const [state, dispatch] = useReducer(slidesReducer, initialState)

	return (
		<>
			<div className="Home-image-container">
				<div className="slides">
					{slides.map( (slide, i) => {
						let slideCenter = Math.round(slides.length / 2 )
						let offset = Math.abs( state.slideIndex - i ) < slideCenter ? (state.slideIndex - i) : slides.length + (state.slideIndex - i);
						return <Slide slide={slide} offset={offset} key={i} />
					})}
				</div>
			</div>
			<div className="Home-image-container">
				<div className="arrows left" onClick={() => { dispatch({type: 'PREV'}) }} > &lt;</div>
				<div className="arrows right" onClick={() => { dispatch({type: 'NEXT'}) }} >&gt;</div>
			</div>
			</>
	)
}

export default Home