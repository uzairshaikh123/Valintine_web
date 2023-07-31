import React from 'react'
import "./category2.css" 
const Categories2 = () => {

    let cards=[
        {category:"anniversery",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/HomePage+Categories/Anniver.jpg"},
        {category:"baby",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/HomePage+Categories/baby.jpg"},
        {category:"babyshower",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/HomePage+Categories/babyshower.jpg"},
        {category:"anniversery",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/HomePage+Categories/backl.png"},
        {category:"Baloons",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/HomePage+Categories/bal+buq.jpg"},
        {category:"car",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/HomePage+Categories/car.jpg"},
        {category:"ceremony",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/HomePage+Categories/ceremony.jpg"},
        {category:"firstnight",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/HomePage+Categories/firstnight.png"},
        {category:"person",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/HomePage+Categories/person.jpg"},
        {category:"stage",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/HomePage+Categories/stage.jpg"}
    ]



  return (
    <div className='category-cont'>
{cards.map((el)=>{

      return <div>
        <img src={el.img} alt="" />
      </div>
})}
     
    </div>
  )
}

export default Categories2
