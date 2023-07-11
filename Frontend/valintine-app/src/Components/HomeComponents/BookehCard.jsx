import React from 'react'
import './bookeh.css'
const BookehCard = ({img,name,desc,price,heading}) => {

  return (
    <>
    <div id='bookeh-card'>
<img className='card-image' width={"100%"} src={img} alt="" />
<div>
    <span>{desc}</span>
    <h3>{name}</h3>
    <h4>{price}</h4>
</div>
    </div>
    </>
  )
}

export default BookehCard