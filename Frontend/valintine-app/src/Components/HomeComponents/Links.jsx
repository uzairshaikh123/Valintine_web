import React from 'react'
import './links.css'
const Links = () => {

let links=[
    {
      "img": "https://valentinesaga.com/wp-content/uploads/2023/06/Private-Cabana-Dining-by-Umrao-4.1-100x100.png",
      "name": "Private Cabana Dining At Umrao",
      "price": "₹0.00"
    },
    {
      "img": "https://valentinesaga.com/wp-content/uploads/2023/06/Fountain-Dining-by-Umrao-3.1-100x100.png",
      "name": "Fountain Dining At Umrao",
      "price": "₹549.00"
    },
    {
      "img": "https://valentinesaga.com/wp-content/uploads/2023/06/Private-Gazebo-Dining-by-Umrao-2.1-100x100.png",
      "name": "Private Gazebo Dining At Umrao",
      "price": "₹799.00"
    },
    {
      "img": "https://valentinesaga.com/wp-content/uploads/2023/06/Poolside-Dining-by-Umrao-1.1-100x100.png",
      "name": "Poolside Dining At Umrao",
      "price": "₹999.00"
    },
    {
      "img": "https://valentinesaga.com/wp-content/uploads/2013/08/1night-100x100.jpg",
      "name": "Candle Night Dinner",
      "price": "₹599.00"
    },
    {
      "img": "https://valentinesaga.com/wp-content/uploads/2023/03/8-Mixed-Carnations-Bouquet-Small3.1-1-100x100.jpg",
      "name": "8 Mixed Carnations Bouquet- Small",
      "price": "₹899.00"
    },
    {
      "img": "https://valentinesaga.com/wp-content/uploads/2023/06/Aesthetic-Indoor-Dining15.1-100x100.png",
      "name": "Aesthetic Indoor Dining (Per Couple)",
      "price": "₹7,699.00"
    },
    {
      "img": "https://valentinesaga.com/wp-content/uploads/2023/04/25th-Anniversary-Decora25.1-100x100.png",
      "name": "25th Anniversary Decoration",
      "price": "₹1,049.00"
    },
    {
      "img": "https://valentinesaga.com/wp-content/uploads/2013/08/1night-100x100.jpg",
      "name": "Candle Night Dinner",
      "price": "₹649.00"
    },
    {
      "img": "https://valentinesaga.com/wp-content/uploads/2023/03/black1.1-100x100.jpg",
      "name": "Black Forest Cake",
      "price": "₹399.00"
    },
    {
      "img": "https://valentinesaga.com/wp-content/uploads/2023/03/kitkat-butter-4.1-100x100.jpg",
      "name": "KitKat Butterscotch Cake",
      "price": "₹999.00"
    },
    {
      "img": "https://valentinesaga.com/wp-content/uploads/2023/03/Creamy-Drip-Black-Forest-Cake1.1-100x100.jpg",
      "name": "Creamy Drip Black Forest Cake",
      "price": "₹1,199.00"
    },

]


  return (
    <div id='links-cont'>
        <div style={{display:"flex",flexDirection:"column",width:"100%",marginRight:"10px"}}>
            <h1 >LATEST</h1>
            <div>
    {links.map((link, index) => (
         index<=3 && <div key={index} className='items'>
            <img src={link.img} alt={link.name} />
            <div style={{marginTop:"15px",textAlign:"start"}} >
            <a href='' style={{textDecoration:"none"}}>{link.name}</a>
            <h3>{link.price}</h3>
            </div>    
        </div>
        
    ))}
</div>
        </div>
        <div style={{width:"100%"}}>
<h1>BEST SELLING</h1>
<div >
    {links.map((link, index) => (
        index>3 && index<=7 &&  <div key={index} className='items'>
            <img src={link.img} alt={link.name} />
            <div style={{marginTop:"15px",textAlign:"start"}}>

            <a href='' style={{textDecoration:"none"}}>{link.name}</a>
            <h3>{link.price}</h3>
            </div>
        </div>
    ))}
</div>
        </div>
        <div style={{width:"100%"}}>
            <h1>TOP RATED</h1>
            <div>
    {links.map((link, index) => (
        index>7 && index<=11 && <div key={index} className='items'>
            <img src={link.img} alt={link.name} />
            <div style={{marginTop:"15px",textAlign:"start"}}>
            <a href='' style={{textDecoration:"none"}}>{link.name}</a>
            <h3>{link.price}</h3>
            </div>
        </div>
    ))}
</div>
        </div>
    </div>
  )
}

export default Links