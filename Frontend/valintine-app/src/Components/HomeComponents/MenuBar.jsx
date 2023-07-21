import React from 'react'
import './menubar.css'
const MenuBar = () => {
const handlehover =(e)=>{
    // alert("hello")
    document.querySelector(".dropdown").classList.add("active-dropdown")
}
const handleleave =(e)=>{
    // alert("leave")
   document.querySelector(".dropdown").classList.remove("active-dropdown")
}

const category = ['party','party']

  return (
    <div id='menubar'>
        <div style={{width:"50%"}}>
            <div className='dropdown'>
            </div>
<div onMouseEnter={handlehover} onMouseLeave={handleleave} className='menu-items'>
   <span>
     Anniversory 
    </span>
    <span className="arrow down"></span>
    </div>
<div onMouseEnter={handlehover} onMouseLeave={handleleave} className='menu-items'>
 <span>
       Birthdays
    </span>
<span className="arrow down"></span>
    
    </div>
<div onMouseEnter={handlehover} onMouseLeave={handleleave} className='menu-items'>
 <span>
       Gift & Surprises
    </span>
<span className="arrow down"></span>
    </div>
<div onMouseEnter={handlehover} onMouseLeave={handleleave} className='menu-items'>
   <span>
     CandleLight Dinners
    </span>
<span className="arrow down"></span>
    
    </div>
<div onMouseEnter={handlehover} onMouseLeave={handleleave} className='menu-items'>
 <span>
       Decoration
    </span>
<span className="arrow down"></span>
    
    </div>
        </div>
    </div>
  )
}

export default MenuBar