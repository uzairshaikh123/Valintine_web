
import React from 'react'
import ProductCard from '../Components/ProductComponents/ProductCard'
import '../Styles/products.css'
import { Link } from 'react-router-dom'
import SliderComp from '../Components/ProductComponents/Slidercomp'
import SelectSmall from '../Components/ProductComponents/SelectComp'
import SortComp from '../Components/ProductComponents/SortComp'
const Products = () => {

let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]


  return (
    <div>
<h1>Products</h1>

<div id='filters'>

  <h1>filters</h1>

  <div id='filter-cont'>
    <div id='filterbyprice'>
      <h3>
        Filter By Price
      </h3>
        <SliderComp/>
    </div>
    <div id='filterbycategory'>
      <h3>
        Filter by category
      </h3>
     <SelectSmall/>
    </div>
    <div id='sortbyprice'>
      <h3>
        Sort By Price
      </h3>
      <SortComp/>
    </div>
  </div>

</div>

<div className='products'>
{arr.map((el,i)=>{

return <ProductCard id={i} image={"https://deowgxgt4vwfe.cloudfront.net/uploads/1681469145_large.jpg"} name={"Pastel theme"} description={"At your location"} price={"10000"} ratings={"4.5"}/>

})}

</div>
      
    </div>
  )
}

export default Products