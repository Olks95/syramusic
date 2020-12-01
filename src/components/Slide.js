import React from 'react'

function Slide({ slide, offset}) {
  // const active = offset === 0 ? true : null;
  let galleryStyle = "hidden";
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
      galleryStyle = "hidden"
  }
  return (
    <a 
      className={"gallery-item " + galleryStyle}
      href={offset === 0 ? slide.href : '#null'}
      style={{
        '--offset': offset,
        backgroundImage: `url(${slide.src})`
      }}>
      <h1 className={"gallery-item-text " + textStyle}> {slide.title}</h1>
      <h3 className={"gallery-item-text " + textStyle}> {slide.subtitle}</h3>
    </a>
  )
}

export default Slide