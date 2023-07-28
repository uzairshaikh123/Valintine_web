import React, { useEffect, useState } from "react";
import "../Styles/singleproduct.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Hearts } from "react-loader-spinner";
import AsNavFor from "../Components/ProductComponents/Carousel";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  handleaddcartproduct,
  handlegetcartproducts,
  handlegetproducts,
} from "../Redux/action";
import AboutProduct from "../Components/ProductComponents/AboutProduct";
import Cookies from "js-cookie";
import CustomizedRating from "../Components/ProductComponents/Ratings";
import { Input } from "@mui/material";
import BasicDateTimePicker, {
  DatePickerComp,
} from "../Components/ProductComponents/DatePicker";
import PlayerComponent from "../Components/ProductComponents/VideoPlayer";
import Addons from "../Components/ProductComponents/Addons";
const SingleProductPage = () => {
  const store = useSelector((store) => store);
  const { loading, error, products } = store;
  const [product, setproduct] = useState([]);

  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handlegetproducts());
  }, []);

  useEffect(() => {
    let findproduct = products.filter((el) => {
      return el._id === id;
    });
    setproduct(findproduct);
  }, [products]);

  const user = JSON.parse(sessionStorage.getItem("userdetails")) || {};
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token") || "";
  const handleaddtocart = () => {
    let obj = {
      ...product[0],
      quantity: 1,
      productID: product[0]._id,
      userID: user._id,
    };
    // console.log(obj,user,product,product[0]._id)
    dispatch(handleaddcartproduct(obj)).then((res) => {
      const user = JSON.parse(sessionStorage.getItem("userdetails"));
      if (res.status === 200) {
        toast.success("🤩 Product added to cart", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        dispatch(handlegetcartproducts(user._id));
      } else {
        toast.error("😔 Product Already Exist Or User not login", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        if (token === "" || token === undefined) {
          return navigate("/login");
        }
      }
    });
  };

  return loading ? (
    <div
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
    </div>
  ) : (
    <>
      <div className="product-page">
        <div className="product-images">
          {/* <div className="main-image">
          <img className="zoom-effect" src={product.image} alt="Product" />
        </div> */}
          {/* <div className="related-images"> */}

          <AsNavFor image={product[0]?.image} />
          {/* <div style={{width:"100%",height:"300px",border:"1px solid red"}}>

        </div> */}
          {/* {product.related_images.slice(1).map((image, index) => (
            <img src={image} />
          ))}
        </div> */}
        </div>
        <div className="product-details">
          <div id="prod_det">
            <p className="product-title">{product[0]?.name}</p>
            {/* <h4 >Category : {product[0]?.category.toUpperCase()}</h4> */}
            {/* <p>{product[0]?.description}</p> */}

            <div>
              <div className="product-price">
                <p className="product-title">
                  ₹ {product[0]?.price}/{product[0]?.category}
                </p>
                <span style={{ fontSize: "10px" }}>
                  {}Inclusive of all taxes
                </span>
              </div>
              <div>
                <ul style={{ padding: "20px" }}>
                  {product[0]?.prod_details?.map(
                    (spec, index) =>
                      index <= 3 && (
                        <li key={index}>
                          <li style={{ listStyle: "initial", color: "gray" }}>
                            {spec}
                          </li>
                          {/* <td>{spec.value}</td> */}
                        </li>
                      )
                  )}
                  <a
                    href="
           "
                  >
                    Read More
                  </a>
                </ul>
                <div
                  style={{
                    
                    marginBottom: "20px",
                    padding: "10px",
                  }}
                >
                  <p style={{ marginTop: "5px", marginBottom: "20px" }}>
                    Weight : Serving Info
                  </p>

                  <div style={{ display: "flex", gap: "10px" }}>
                    {product[0]?.multiple_price?.map((spec, index) => (
                      <button className={"weight-buttons active"}>
                        {spec?.weight} kg
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex" }} className="cakecategory">
                <div>
                  <input type="checkbox" />
                  <span>Eggless</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>Heart Shape</span>
                </div>
              </div>
              <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                <input type="text" placeholder="Product Message" />
              </div>
              <div
                style={{
                  width: "100%",
                  border: "1px solid gray",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <i class="bx bxs-location-plus"></i>
                <input
                  type={"number"}
                  placeholder="Enter Pincode"
                  style={{ outline: "none" }}
                />
              </div>
              <div
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  minWidth: "100%",
                }}
              >
                <DatePickerComp />
              </div>
              <div id="cart-buttons">
                <button
                  style={{ marginBottom: "20px" }}
                  onClick={handleaddtocart}
                >
                  <Link to={"/cart"} style={{ color: "white" }}>
                    Add to Cart
                  </Link>
                </button>
                <button
                  style={{ marginBottom: "20px" }}
                  onClick={handleaddtocart}
                >
                  Buy Now
                </button>
              </div>

              <div>
                <p>Offers</p>
                <div id="offers-cont">
                  <div className={"offerbox"}>
                    <img
                      src="https://assets.winni.in/groot/2023/04/mobikwik/coupon-three.png"
                      alt=""
                    />
                    <p>Get upto ₹750 Cashback on paying via Mobikwik</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Addons />
          <table
            className="product-specifications"
            style={{
              marginTop: "20px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              height: "auto",
              padding: "25px",
              lineHeight: "30px",
              background:"white"
            }}
          >
            <h2 style={{ textAlign: "start", marginBottom: "20px" }}>
              Product Details
            </h2>
            <tbody>
              {product[0]?.prod_details?.map((spec, index) => (
                <tr key={index}>
                  <td>{spec}</td>
                  {/* <td>{spec.value}</td> */}
                </tr>
              ))}
            </tbody>
          </table>

          <div>
            <PlayerComponent VIDEO_PATH={"https://youtu.be/0BIaDVnYp2A"} />
          </div>

          <div></div>
          <div
            // className="product-highlights"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              height: "auto",
              padding: "20px",
              marginTop:"50px"
            }}
          >
            <p style={{ textAlign: "start" ,fontWeight:"800" }}>Product Description:</p>
            <ul style={{ padding: "25px" }}>
              {product[0]?.description?.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <AboutProduct />
      <div>
        <h1 style={{ marginTop: "20px" }}>Ratings</h1>

        <CustomizedRating reviews={product[0]?.reviews} />
      </div>
    </>
  );
};

export default SingleProductPage;
