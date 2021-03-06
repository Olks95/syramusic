import React from 'react'

function Slide({ slide, offset}) {
  // const active = offset === 0 ? true : null;
  let galleryStyle = "hidden-slide";
  let textStyle = "";
  switch(offset) {
    case -2:
      galleryStyle = "gallery-item-first";
      break;
    case -1:
      galleryStyle = "gallery-item-previous"
      break;
    case 0:
      galleryStyle = "gallery-item-selected"
      textStyle = "selected-text";
      break;
    case 1:
      galleryStyle = "gallery-item-next"
      break;
    case 2:
      galleryStyle = "gallery-item-last"
      break;
    default:
      galleryStyle = "hidden-slide"
  }
  return (
    <a 
      className={galleryStyle}
      href={slide.href}
      style={{
        '--offset': offset, 
        backgroundImage: `url(${slide.src})`
      }}>
      {/*<img src={slide.src} alt={slide.alt} />*/}
      <h1 className={"gallery-item-title " + textStyle}> {slide.title}</h1>
      <h3 className={"gallery-item-subtitle " + textStyle}> {slide.subtitle}</h3>
    </a>
  )
}

export default Slide