import React from 'react'

function Slide({ image, title, subtitle, href, offset}) {
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
      className={galleryStyle}
      href={href}
      style={{
        '--offset': offset, 
        backgroundImage: `url(${image})`
      }}>
      {/*<img src={slide.src} alt={slide.alt} />*/}
      <h1 className={"gallery-item-title " + textStyle}> {title}</h1>
      <h3 className={"gallery-item-subtitle " + textStyle}> {subtitle}</h3>
    </a>
  )
}

export default Slide