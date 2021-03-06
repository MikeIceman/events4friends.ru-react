import React from 'react'
import './ButtonExternalLink.css'

function ButtonExternalLink({ href, icon, title, style }) {
  return (
    <a className="link" href={href} style={style}>
      <img src={icon} alt="le-icon" className="link__image" />
      { title && (
        <span className="link__text"> {title} </span>
      )}
    </a>
  ) 
}

export default ButtonExternalLink;
