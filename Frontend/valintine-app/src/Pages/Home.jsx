import React from 'react'
import Navbar from './Navbar'
import Header from '../Components/HomeComponents/Header'
import Slider from '../Components/HomeComponents/Slider'
import Celebrate from '../Components/HomeComponents/Celebrate'
import Celeb2 from '../Components/HomeComponents/Celeb2'
import Bookeh from '../Components/HomeComponents/Bookeh'
import Walls from '../Components/HomeComponents/Walls'
import Cakes from '../Components/HomeComponents/Cakes'
import Candlelight from '../Components/HomeComponents/CandleLight'
import Services from '../Components/HomeComponents/Services'
import Testimonials from '../Components/HomeComponents/testimonials'
import News from '../Components/HomeComponents/News'
import Links from '../Components/HomeComponents/Links'
import Footer from '../Components/HomeComponents/Footer'

const Home = () => {

let imgbig=[{img:"https://i.ibb.co/LgQxrzP/cherishx-partystore-courier.gif",id:1},{id:2,img:"https://deowgxgt4vwfe.cloudfront.net/website_static/img/cherishx-custom-decorations.gif"}]
let smallimg=[{id:1,img:"https://valentinesaga.com/wp-content/uploads/2023/07/Candlelight-Diner-Banner-ValentineSaga.png"},{id:2,img:"https://valentinesaga.com/wp-content/uploads/2023/07/Flawers-Banner-With-Valentine-Saga-1.jpg"},{id:3,img:"https://valentinesaga.com/wp-content/uploads/2023/05/Flawers-and-Gift-Combo-Banner.png"},{id:4,img:"https://valentinesaga.com/wp-content/uploads/2023/05/Happy-Birthday-Banner-12321.png"}]



  return (
    <div style={{overflow:"hidden"}}>
        <Header/>
        <Slider/>
        {/*  */}
        <div style={{backgroundColor:"#f78da7"}}>

        <Celebrate img={imgbig}/>
        <Celeb2 img={smallimg}/>
        <Bookeh/>
        <Walls/>
        <Cakes/>
        <Candlelight/>
        <Services/>
        <Testimonials/>
        <News/>
        </div>
        <Links/>
        
    </div>
  )
}

export default Home