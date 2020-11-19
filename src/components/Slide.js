import React from 'react'

function Slide({ slide, offset}) {
  const active = offset === 0 ? true : null;
  return <div 
      className="slide" 
      data-active={active} 
      style={{ 
        '--offset': offset,
        '--dir': offset > 0 ? 1 : -1,
        backgroundImage: `url(${slide.image})`
      }}>
  {slide.title} {offset}</div>
}

export default Slide