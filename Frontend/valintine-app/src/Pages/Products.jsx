import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductComponents/ProductCard";
import "../Styles/products.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Hearts } from "react-loader-spinner";
import { handlegetfilterproducts, handlegetproducts } from "../Redux/action";
import DummyProduct from "../Components/HomeComponents/dummyProduct";
import { Button, Text } from "@chakra-ui/react";

const Products = () => {
  const store = useSelector((store) => store);
  const [prodData, setProdData] = useState([])
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams()
  const { loading, error, products, city } = store;
 const [refresh,setrefresh] = useState(true)
  const initialCategory = searchParams.get("category");

  // Conditionally set search parameters only when the component mounts
  useEffect(() => {
    if (!searchParams.get("city") || !searchParams.get("category")) {
      const params = {
        city: city,
        category: initialCategory
      };
      setSearchParams(params);
    }
  }, [city, initialCategory, searchParams, setSearchParams]);

  useEffect(() => {
    dispatch(handlegetfilterproducts(city, initialCategory)).then((res) => (setProdData(res?.data?.data)))
    window.scrollTo(0, 0);
  }, [city, initialCategory,refresh]);


  useEffect(() => {
    dispatch(handlegetfilterproducts(city, initialCategory)).then((res) => (setProdData(res?.data?.data)))
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <div>
      <h1 style={{ textAlign: "start", marginTop: "20px", marginLeft: "20px" }}>
        All Experience
      </h1>

      <div id="filters">
        {/* Your filter elements */}
      </div>

      {loading ? (
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
      ) : error ? (
        <>
        <Text textAlign={"center"}>
          Some Error...
          </Text>
          <Button color={'hotpink'} onClick={()=>setrefresh(!refresh)}>Refresh</Button>
          </>
      ) : (
        <div id="products">
          {prodData?.map((el) => {
            return (
              <DummyProduct
                key={el._id}
                id={el._id}
                image={el.image[0]}
                name={el.name}
                description={el.description}
                price={el.price}
                reviews={el.reviews}
                addons
                booked_dates={el.booked_dates}
                category={el.category}
                city={el.city}
                delivery_info={el.delivery_info}
                multiple_price={el.multiple_price}
                prod_details={el.prod_details}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Products;

