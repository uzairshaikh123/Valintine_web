import React, { useEffect, useState } from 'react'
import "./category2.css" 
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Categories2 = () => {
  const {city} = useSelector(store=>store)

    let cards=[
        {category:"balloonsandbouquet",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Balloons+%26+Bouquet.png"},
        {category:"bacholorettedecoration",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/bacholorette+decoration.png"},
        {category:"babywelcomedecoration",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Baby+welcome+decoration.png"},
        {category:"anniversarydecoration",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/anniversary+Decoration.png"},
        {category:"babyshower",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Baby+shower.png"},
        {category:"carboothdecoration",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Car+booth+decoration.png"},
        {category:"stagedecoration",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Stage+decoration.png"},
        {category:"namingcelebrationdecoration",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Naming+celebration+decoration.png"},
        {category:"personalizedgifts",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/personalized+gifts.png"},
        {category:"firstnightdecoration",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/first+night+decoration.png"}
    ]



  return (
    <div className='category-cont'>
{cards.map((el)=>{

      return <div>
        <Link to={`products?city=${city}&category=${el.category}`}>
        <img className='cat2-img' src={el.img} alt="" />
        </Link>
      </div>
})}
     
    </div>
  )
}

export default Categories2
