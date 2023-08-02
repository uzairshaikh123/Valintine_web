import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handle_add_product_by_admin, handlegetproducts } from "../../Redux/action";
import { MdDelete } from "react-icons/md";
import { Box, Button, Modal, Text } from "@chakra-ui/react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  p: 4,
};

export default function AddProductModal({ id }) {
  let handleOpen = () => setOpen(true);
  let [open, setOpen] = useState(false);
  let handleClose = () => setOpen(false);
  let [price, setprice] = useState("");
  let [images, setimages] = useState([1]);
  let [Proddetails, setProddetails] = useState([1]);
  let [Desc, setDesc] = useState([1]);
  let [Multiple_price, setMultiple_price] = useState([1]);
  let [addons, setaddons] = useState([1]);
  let [Delivery_info, setDelivery_info] = useState([1]);
  let [Product_category, setProduct_category] = useState([1]);
  let [offers, setoffers] = useState([1]);
  let [slots, setslots] = useState([1]);
  const dispatch = useDispatch()

  const handleImages = (i) => {
    if (i >= 0) {
      let tempimg = [...images];
    tempimg.splice(i, 1);
      setimages(tempimg);
    } else {
      setimages([...images, images.length + 1]);
    }
  };

  const handleProd_details = (i) => {
    setProddetails([...Proddetails, Proddetails.length + 1]);
  };
  const handle_Desc = (i) => {
    setDesc([...Desc, Desc.length + 1]);
  };

  const handle_Multiple_price = (i) => {
    setMultiple_price([...Multiple_price, Multiple_price.length + 1]);
  };
  const handleAddons = (i) => {
    setaddons([...addons, addons.length + 1]);
  };
  const handle_delivery_info = (i) => {
    setDelivery_info([...Delivery_info, Delivery_info.length + 1]);
  };
  const handle_prod_cat = (i) => {
    setProduct_category([...Product_category, Product_category.length + 1]);
  };
  const handle_offers = (i) => {
    setoffers([...offers, offers.length + 1]);
  };

  const handleadd = (e) => {
    e.preventDefault()
    // const pin = pincode.split(",");
    // console.log(pin);
let urls = document.querySelectorAll(".urls")
let imgurls=[]
for(let i = 0; i < urls.length; i++) {
  imgurls?.push(urls[i]?.value);
}


let desc = document.querySelectorAll(".description")
let description=[]
for(let i = 0; i < desc.length; i++) {
  description?.push(desc[i]?.value);
}


let prod_details = document.querySelectorAll(".prod_det")
let product_details=[]
for(let i = 0; i < prod_details.length; i++) {
  product_details?.push(prod_details[i]?.value);
}



let  delivery_info= document.querySelectorAll(".delivery_info")
let Delivery_info=[]
for(let i = 0; i < prod_details.length; i++) {
  Delivery_info?.push(delivery_info[i]?.value);
}
// {addons:[{name:"",price:"",description:"",image:""}]}
let  addons_name= document.querySelectorAll(".addons-name")
let  addons_desc= document.querySelectorAll(".addons-desc")
let  addons_img= document.querySelectorAll(".addons-img")
let  addons_price= document.querySelectorAll(".addons-price")

let Addons=[]
for(let i = 0; i <addons.length; i++) {
  
  Addons.push({name:addons_name[i].value,price:addons_price[i].value,desc:addons_desc[i].value,img:addons_img[i].value})
}
let  offer_desc= document.querySelectorAll(".prod_offer_desc")
let  offer_image= document.querySelectorAll(".prod_offer_image")
let  offer_terms= document.querySelectorAll(".prod_offer_terms")

let Offers=[]
for(let i = 0; i <addons.length; i++) {
  
  Offers.push({terms:offer_terms[i].value,price:addons_price[i].value,desc:offer_desc[i].value,img:offer_image[i].value})
}

let  prod_cat_price= document.querySelectorAll(".prod_cat_price")
let  prod_cat_name= document.querySelectorAll(".prod_cat_name")

let Product_category=[]
for(let i = 0; i <prod_cat_name.length;i++) {

  Product_category.push({name:prod_cat_name[i].value,price:prod_cat_price[i].value})
}


for(let i = 0; i < Addons.length; i++){
if(Addons[i].name=="" || Addons[i].price=="" || Addons[i].desc=="" || Addons[i].img=="" ){
  Addons=[]
  break 
}
}




let  multiple_price_weight= document.querySelectorAll(".multiple_Price_weight")
let multiple_price_price = document.querySelectorAll(".multiple_Price_price")

let multiple_price_arr=[]
for(let i = 0; i <Multiple_price.length; i++) {

  multiple_price_arr?.push({weight:multiple_price_weight[i].value,price:multiple_price_price[i].value})
}
for(let i = 0; i < multiple_price_arr.length; i++){
  if(multiple_price_arr[i].weight=="" || multiple_price_arr[i].price==""){
    multiple_price_arr=[]
    break 
  }
  }


const name = document.querySelector("#name").value || ""
const city = document.querySelector("#city").value || ""
const category = document.querySelector("#category").value || ""
const pincodes = document.querySelector("#pincodes").value || ""
const price = document.querySelector("#price").value || ""


    let obj = {
      name:name,
      category:category,
      price:price,
      city:city,
      image:imgurls,
      prod_details:product_details,
      description:description,
      multiple_price:multiple_price_arr,
      addons:Addons,
      delivery_info:Delivery_info,
      pincodes:pincodes?.split(","),
      Product_category,Offers
    };
console.log(obj)
    // dispatch(handle_add_product_by_admin(obj)).then((res)=>{
    //   if(res.status==200 || res.status==201){

    //     alert("Product added successfully")
    //   }else{
    //     alert("error")

    //   }
    // })
  };

  return (
    <div >
      <Button
        onClick={handleOpen}
        style={{
          float: "right",
          margin: "10px",
          padding: "10px 15px",
          color: "white",
          background: "blue",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        Add Product
      </Button>
      <Modal
     
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Box sx={style} >
          <Text id="modal-modal-title" variant="h6" component="h2">
            Add Product
          </Text>
          <hr />
          <Box style={{ height: "80vh", overflowY: "auto", marginTop: "20px"}}>
            <form action="">
              <label htmlFor="">Name</label>
              <input type="text" id="name" placeholder="Enter Name of Product" />

              <label htmlFor="">Category</label>
              <input type="text" id="category" placeholder="Enter Name of Category" />
              <label htmlFor="">Images</label>
              {images?.map((el, i) => {
                return (
                  <div style={{ display: "flex", marginTop: "5px" }}>
                    <input className="urls" type="file" placeholder="Enter url of Image" />
                    <MdDelete
                    color="#3498db"
                      onClick={() => handleImages(i)}
                      size={"30px"}
                      cursor={"pointer"}
                    />
                  </div>
                );
              })}
              <Button onClick={handleImages}>Add More Rows</Button>
              <label htmlFor="">Price</label>
              <input type="text" className="price" id="price" placeholder="Enter Price of Product" />
              <label htmlFor="">City</label>
              <input type="text" id="city" placeholder="Enter Name of City" />
              <label htmlFor="">Multiple_price</label>
              {Multiple_price.map(() => {
                return (
                  <div style={{ display: "flex", marginTop: "5px" }}>
                    <input className="multiple_Price_weight"  type="text" placeholder="Enter Name of Weight" />
                    <input className="multiple_Price_price"  type="text" placeholder="Enter Name of Price" />
                    <MdDelete color="#3498db" size={"50px"} cursor={"pointer"} />
                  </div>
                );
              })}
              <Button onClick={handle_Multiple_price}>Add more Rows</Button>

              <label htmlFor="">Addons</label>
              {addons.map(() => {
                return (
                  <div style={{ marginTop: "5px" }}>
                    <input style={{ marginTop: "5px" }} className="addons-name" type="text" placeholder="Enter Name of Addon" />
                    <br />
                    <input style={{ marginTop: "5px" }} className="addons-desc" type="text" placeholder="Enter Description
                   of Addon" />
                    <br />
                    <input style={{ marginTop: "5px" }} className="addons-img" type="file" placeholder="Enter Image url  of Addon" />
                    <br />
                    <input style={{ marginTop: "5px" }} className="addons-price" type="text" placeholder="Enter Price of Addon" />
                    <MdDelete color="#3498db" size={"30px"} cursor={"pointer"} />
                  </div>
                );
              })}
              <Button onClick={handleAddons}>Add more Rows</Button>

              <label htmlFor="">Product Details</label>
              {Proddetails.map(() => {
                return (
                  <div style={{ display: "flex", marginTop: "5px" }}>
                    <input
                    className="prod_det"
                      type="text"
                      placeholder="Enter Name of Prod_details"
                    />
                    <MdDelete color="#3498db" size={"30px"} cursor={"pointer"} />
                  </div>
                );
              })}
              


              <Button onClick={handleProd_details}>Add more Rows</Button>
              <label htmlFor="">Product Offers</label>
              {offers.map(() => {
                return (
                  <div style={{ display: "flex", marginTop: "5px" }}>
                    <input
                    className="prod_offer_desc"
                      type="text"
                      placeholder="Enter Offer Description"
                    />
                    <input
                    className="prod_offer_image"
                      type="file"
                      placeholder="Enter Offer Image Url"
                    />
                    <input
                    className="prod_offer_terms"
                      type="text"
                      placeholder="Enter Offer Terms"
                    />
                    <MdDelete color="#3498db" size={"70px"} cursor={"pointer"} />
                  </div>
                );
              })}
              
              <Button onClick={handle_offers}>Add more Rows</Button>

              <label htmlFor="">Product category</label>
              {Product_category.map(() => {
                return (
                  <div style={{ display: "flex", marginTop: "5px" }}>
                    <input
                    className="prod_cat_name"
                      type="text"
                      placeholder="Enter Product Category Name"
                    />
                    <input
                    className="prod_cat_price"
                      type="text"
                      placeholder="Enter Product Category Price"
                    />
                    <MdDelete color="#3498db" size={"50px"} cursor={"pointer"} />
                  </div>
                );
              })}
              


              <Button onClick={handle_prod_cat}>Add more Rows</Button>

              <label htmlFor="">Description</label>
              {Desc.map((el, i) => {
                return (
                  <div style={{ display: "flex", marginTop: "5px" }}>
                    <input
                    className="description"
                      type="text"
                 
                      placeholder={`Enter Line ${i + 1} Description`}
                    />
                    <MdDelete color="#3498db" size={"30px"} cursor={"pointer"} />
                  </div>
                );
              })}
              <Button onClick={handle_Desc}>Add more Rows</Button>

              <label htmlFor="">Delivery_info</label>
              {Delivery_info.map((el, i) => {
                return (
                  <div style={{ display: "flex", marginTop: "5px" }}>
                    <input
                    className="delivery_info"
                      type="text"
                      placeholder={`Enter Line ${i + 1} of Delivery_info`}
                    />
                    <MdDelete color="#3498db" size={"30px"} cursor={"pointer"} />
                  </div>
                );
              })}
              <Button onClick={handle_delivery_info}>Add more Rows</Button>

              <label htmlFor="">Pincodes</label>
              <input id="pincodes" type="text" placeholder="Enter Name of Pincodes" />
              <br />

              <button
                onClick={handleadd}
                style={{
                  background: "blue",
                  color: "white",
                  padding: "10px 25px",
                  display: "block",
                  margin: "auto",
                  cursor: "pointer",
                  border: "none",
                  borderRadius: "10px",
                  marginTop: "20px",
                }}
              >
                Add Product
              </button>
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
