import React from 'react'
import './categories.css'
import { Link } from 'react-router-dom'
const Categories = () => {
  return (
    <div className='cont-cat'>
        <div>
        <Link to={'products?category=decoration'}>

            <img src="https://valentinesagaassets.s3.ap-south-1.amazonaws.com/HomePage+Categories/birthdayent.jpg" alt="" />
        </Link>
        </div>
        <div>
        <Link to={'products?category=decoration'}>

            <img src="https://valentinesagaassets.s3.ap-south-1.amazonaws.com/HomePage+Categories/candleight.jpg" alt="" />
        </Link>
        </div>
        <div className='cont-cat-3'>
        <Link to={'products?category=decoration'}>
            <img src="https://valentinesagaassets.s3.ap-south-1.amazonaws.com/HomePage+Categories/premium+decor.jpg" alt="" />
        </Link>
        </div>
    </div>
  )
}

export default Categories
