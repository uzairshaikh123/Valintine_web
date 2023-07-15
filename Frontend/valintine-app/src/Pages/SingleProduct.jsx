import React, { useEffect, useState } from 'react';
import '../Styles/singleproduct.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { Hearts } from 'react-loader-spinner';
import AsNavFor from '../Components/ProductComponents/Carousel';
import { useParams, useSearchParams } from 'react-router-dom';
import { handlegetproducts } from '../Redux/action';
import AboutProduct from '../Components/ProductComponents/AboutProduct';

const SingleProductPage = () => {

  const store = useSelector(store=>store)
  const {loading,error,products}=store
const [product,setproduct]=useState([])

const params = useParams()
const id = params.id
const dispatch = useDispatch()



useEffect(()=>{

  dispatch(handlegetproducts())

},[])

useEffect(()=>{
  let findproduct = products.filter((el)=>{
    return el._id===id
  })
  setproduct(findproduct)
},[products])


  
const handleaddtocart = ()=>{
let obj={
  ...product
}
console.log(product)


}







  return (
  loading?<div
  style={{
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Hearts
    height="80"
    width="80"
    color="red"
    ariaLabel="hearts-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    />
</div>:error?<>Error</>: <>
<div className="product-page">
      <div className="product-images">
        {/* <div className="main-image">
          <img className="zoom-effect" src={product.image} alt="Product" />
        </div> */}
        {/* <div className="related-images"> */}
  
        <AsNavFor image={product[0]?.image} />
          {/* {product.related_images.slice(1).map((image, index) => (
            <img src={image} />
          ))}
        </div> */}
      </div>
      <div className="product-details">
        <h1 className="product-title">{product[0]?.name}</h1>
        <h1 className="product-title">Category : {product[0]?.category.toUpperCase()}</h1>
        <div className="product-price">₹{product[0]?.price}</div>
        <p className="product-description">{product[0]?.description}</p>
        <table className="product-specifications"  style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',height:"auto",padding:"25px",lineHeight:"30px"}}>
            <h2 style={{textAlign:"start",marginBottom:"20px"}}>Product Details</h2>
          <tbody>
            {product[0]?.prod_details?.map((spec, index) => (
              <tr key={index}>
                <td>{spec}</td>
                {/* <td>{spec.value}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
<div id='cart-buttons'>
<button onClick={handleaddtocart}>Add to Cart</button>
</div>

        <div className="product-highlights" style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',height:"auto",padding:"25px",lineHeight:"30px"}}>
          <h2 style={{textAlign:"start",marginBottom:"20px"}}>Product Description:</h2>
          <ul>
            {product[0]?.description?.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
    <AboutProduct/>
    <div>
<h1>Ratings</h1>

    </div>
    </>
  );
};

export default SingleProductPage;
