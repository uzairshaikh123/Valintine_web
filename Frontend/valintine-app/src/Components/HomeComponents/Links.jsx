import React, { useEffect, useState } from 'react'
import './links.css'
import { useDispatch, useSelector } from "react-redux";
import { handlegetfilterproducts, handlegetproducts } from '../../Redux/action';
import { Link } from 'react-router-dom';
import DummyProduct from './dummyProduct';

const Links = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const { allproducts, city } = store;
  useEffect(() => {
    dispatch(handlegetproducts())
  }, [city])
  const TruncatedString = (inputString) => {
    const words = inputString.split(' ');
    const truncatedWords = words.slice(0, 3);
    const truncatedString = truncatedWords.join(' ');
    return <p>{truncatedString}{words.length > 3 ? '...' : ''}</p>;
  };
  // <div key={index} className='items'>
  //   <img src={link.image[0]} alt={link.name}/>
  //   <div>
  //     <a href='/'>{TruncatedString(link.name)}</a>
  //     <h3>₹ {link.price}</h3>
  //   </div>
  // </div>
  return (
    <div id='links-cont'>
      <div style={{margin:"auto"}}>
        <h1>LATEST</h1>
        <div>
          {allproducts?.reverse()?.map((link, index) => (
            index <= 3 && <Link to={`/products/${link._id}`}>
              <DummyProduct image={link?.image[0]} price={link?.price} name={link?.name} />
            </Link>
          ))}
        </div>
      </div>
      <div style={{margin:"auto"}}>
        <h1>BEST SELLING</h1>
        <div >
          {allproducts?.map((link, index) => (
            index > 3 && index <= 7 && <Link to={`/products/${link._id}`}>
              <div>
              <DummyProduct name={link.name} price={link.price} image={link.image[0]} />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div style={{margin:"auto"}}>
        <h1>TOP RATED</h1>
        <div>
          {allproducts?.map((link, index) => (
            index > 7 && index <= 11 && <Link to={`/products/${link._id}`} key={index}>
              <DummyProduct name={link.name} price={link.price} image={link.image[0]} />

            </Link>
          ))}
        </div>
      </div>
      <div style={{margin:"auto"}}>
        <h1>FEATURED</h1>
        <div>
          {allproducts?.map((link, index) => (
            index > 7 && index <= 11 && <Link to={`/products/${link._id}`} key={index}>
              <DummyProduct name={link.name} price={link.price} image={link.image[0]} />

            </Link>
          ))}
        </div>
      </div>
     
    </div>
  )
}

export default Links