import React, { useEffect, useState } from "react";
import BookehCard from "./BookehCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { handlegetfilterproducts, handlegetproducts } from "../../Redux/action";
import { Hearts } from "react-loader-spinner";
import DummyProduct from "./dummyProduct";

const Cakes = () => {
  const [cake, setcake] = useState([]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1124 },
      items: 4,
      slidesToSlide: 1,
      // optional, default to 1.
    },
    desktop2: {
      breakpoint: { max: 1650, min: 1480 },
      items: 4,
      slidesToSlide: 1,
      // optional, default to 1.
    },
    desktop3: {
      breakpoint: { max: 1480, min: 1194 },
      items: 4,
      slidesToSlide: 1,
      // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1194, min: 864 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mid_tablet: {
      breakpoint: { max: 750, min: 460 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 660, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const store = useSelector((store) => store);
  const { products, loading, city } = store;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handlegetfilterproducts(city)).then((res) => {
      let filterdata = res?.data?.data?.filter((el) => {
        return el.category === "cakes";
      });
      setcake(filterdata);
    });
  }, [city]);

  let heading = "DELICIOUS CAKES WITH ALL FLAVORS";
  return (
    <div>
      <h1 style={{ marginBottom: "30px", marginTop: "30px" }}>{heading}</h1>
      <Carousel
        swipeable={true}
        draggable={true}
        // showDots={true}
        responsive={responsive}
        containerClass="carousel-container"
        // autoPlay={true}
        infinite={true}
        autoPlaySpeed={3000}
      >
        {loading ? (
          <div
            style={{
              height: "100%",
              width: "100%",
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
          cake?.map((e) => {
            return (
              <DummyProduct
                id={e._id}
                heading={heading}
                image={e.image[0]}
                name={e.name}
                desc={e.category.toUpperCase()}
                price={e.price}
              />
            );
          })
        )}
      </Carousel>
    </div>
  );
};

export default Cakes;
