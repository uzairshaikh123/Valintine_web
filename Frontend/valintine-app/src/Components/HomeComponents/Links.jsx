import React, { useEffect, useState } from 'react'
import './links.css'
import { useDispatch, useSelector } from "react-redux";
import { handlegetproducts } from '../../Redux/action';
import { Link } from 'react-router-dom';
const Links = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const { loading, error, products } = store;
  useEffect(() => {
    dispatch(handlegetproducts());
  }, [])
  return (
    <div id='links-cont'>
      <div>
        <h1>LATEST</h1>
        <div>
          {products.map((link, index) => (
            index <= 3 && <Link><div key={index} className='items'>
              <img src={link.image[0]} alt={link.name}/>
              <div>
                <a href=''>{link.name}</a>
                <h3>{link.price}</h3>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
      <div >
        <h1>BEST SELLING</h1>
        <div >
          {products.map((link, index) => (
            index > 3 && index <= 7 && <Link><div key={index} className='items'>
              <img src={link.image[0]} alt={link.name} />
              <div>

                <a href=''>{link.name}</a>
                <h3>{link.price}</h3>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h1>TOP RATED</h1>
        <div>
          {products.map((link, index) => (
            index > 7 && index <= 11 && <Link to="" key={index}> <div className='items'>
              <img src={link.image[1]} alt={link.name}/>
              <div>
                <a href=''>{link.name}</a>
                <h3>{link.price}</h3>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Links