import React, { useEffect, useState } from 'react'
import Header from '../Components/HomeComponents/Header'
import Slider from '../Components/HomeComponents/Slider'
import Celebrate from '../Components/HomeComponents/Celebrate'
import Bookeh from '../Components/HomeComponents/Bookeh'
import Walls from '../Components/HomeComponents/Walls'
import Cakes from '../Components/HomeComponents/Cakes'
import Candlelight from '../Components/HomeComponents/CandleLight'
import Services from '../Components/HomeComponents/Services'
import Testimonials from '../Components/HomeComponents/testimonials'
import News from '../Components/HomeComponents/News'
import Links from '../Components/HomeComponents/Links'
import { useDispatch } from 'react-redux'
import { handle_erase_admin_token } from '../Redux/action'
import Categories from '../Components/HomeComponents/Categories'
import Categories2 from '../Components/HomeComponents/Categories2'

const Home = () => {
  let imgbig = [{ img: "https://i.ibb.co/LgQxrzP/cherishx-partystore-courier.gif", id: 1 }, { id: 2, img: "https://deowgxgt4vwfe.cloudfront.net/website_static/img/cherishx-custom-decorations.gif" }]
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handle_erase_admin_token())
  }, [])
  return (
    <>
      {/* <Navbardropdown /> */}
      <div style={{ overflow: "hidden" }}>
        {/* <MenuBar/> */}

        <div style={{marginTop:"25px"}}> 
        <Header />
        </div>
        <Slider />
          
        {/*  */}
        <div style={{ backgroundColor: "#f7f9fc" }}>
          <Categories />
          <Categories2 />
          <Celebrate img={imgbig} />
          {/* <Celeb2 img={smallimg} /> */}
          <Bookeh />
          <Walls />
          <Cakes />
          <Candlelight />
          <Services />
          <Testimonials />
          <News />
        </div>
        <Links />

      </div>
    </>
  )
}

export default Home