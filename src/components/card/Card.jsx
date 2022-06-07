import React from 'react'
import './Card.css'
// import plane from "./paperplane.png"

function Card({title,data}) {
  return (
    <div className='card-container'>
      <div className="card-wrapper">
      <img className='icon' src={data} alt="" />
      <p className='card-title'>{title}</p>
      <div className='card-line'></div>
      <p className='card-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, excepturi?</p>
      </div>
    </div>
  )
}

export default Card