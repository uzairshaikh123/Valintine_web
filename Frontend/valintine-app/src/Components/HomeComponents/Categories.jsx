import React, { useEffect, useState } from 'react'
import './categories.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Categories = () => {
  const { city } = useSelector(store => store)


  return (
    <div className='cont-cat'>
      <div>
        <Link to={`products?city=${city}&category=decorations`}>

          <img src="https://valentinesagaassets.s3.ap-south-1.amazonaws.com/HomePage+Categories/birthdayent.jpg" alt="" />
        </Link>
      </div>
      <div>
        <Link to={`products?city=${city}&category=candlelightdinner`}>
          <img src="https://valentinesagaassets.s3.ap-south-1.amazonaws.com/HomePage+Categories/candleight.jpg" alt="" />
        </Link>
      </div>
      <div className='cont-cat-3'>
        <Link to={`products?city=${city}&category=decorations`}>
          <img src="https://valentinesagaassets.s3.ap-south-1.amazonaws.com/HomePage+Categories/premium+decor.jpg" alt="" />
        </Link>
      </div>
    </div>
  )
}

export default Categories
