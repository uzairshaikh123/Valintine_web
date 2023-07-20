import React from 'react'
import './bookeh.css'
import { Link } from 'react-router-dom';
const BookehCard = ({id,img,name,desc,price,heading,multiple_price}) => {
console.log(multiple_price);
  return (
    <Link to={`/products/${id}`} style={{textDecoration:"none",color:"black"}}>

    <div id='bookeh-card'>
      <div>

<img className='card-image' width={"100%"} src={img} alt="" />
      </div>
<div>
    <span  >{desc}</span>
    <h3 >{name}</h3>
   <h4 >₹{price}</h4>
    {/* {multiple_price.length>0 && <h4>{price}</h4>} */} 
</div>
    </div>
    </Link>
    
  )
}

export default BookehCard