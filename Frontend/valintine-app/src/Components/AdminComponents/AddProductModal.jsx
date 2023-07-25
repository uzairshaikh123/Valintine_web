import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { handlegetproducts } from "../../Redux/action";
import { MdDelete } from "react-icons/md";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
};

export default function AddProductModal({ id }) {
  let handleOpen = () => setOpen(true);
  let [open, setOpen] = useState(false);
  let handleClose = () => setOpen(false);
  let [name, setname] = useState("");
  let [category, setcategory] = useState("");
  let [city, setcity] = useState("");
  let [price, setprice] = useState("");
  let [images, setimages] = useState([1]);
  let [Proddetails, setProddetails] = useState([1]);
  let [Desc, setDesc] = useState([1]);
  let [Multiple_price, setMultiple_price] = useState([1]);
  let [addons, setaddons] = useState([1]);
  let [Delivery_info, setDelivery_info] = useState([1]);
  let [pincode, setpincode] = useState([1]);

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

  const handleadd = (e) => {
    e.preventDefault()
    // const pin = pincode.split(",");
    // console.log(pin);
let urls = document.querySelectorAll(".urls")
let imgurls=[]
for(let i = 0; i < urls.length; i++) {
  imgurls.push(urls[i].value);
}


let desc = document.querySelectorAll(".urls")
let description=[]
for(let i = 0; i < desc.length; i++) {
  description.push(desc[i].value);
}


let prod_details = document.querySelectorAll(".urls")
let product_details=[]
for(let i = 0; i < prod_details.length; i++) {
  product_details.push(prod_details[i].value);
}


let  delivery_info= document.querySelectorAll(".delivery_info")
let Delivery_info=[]
for(let i = 0; i < prod_details.length; i++) {
  Delivery_info.push(delivery_info[i].value);
}
// {addons:[{name:"",price:"",description:"",image:""}]}
let  addons_name= document.querySelectorAll(".addons-name")
let  addons_desc= document.querySelectorAll(".addons-desc")
let  addons_img= document.querySelectorAll(".addons-img")
let  addons_price= document.querySelectorAll(".addons-price")
let Addons=[]
for(let i = 0; i < addons.length; i++) {
  Addons.push(addons[i].value);
}

    let obj = {
      name,
      category,
      price,
      city,
      images:imgurls,
      Proddetails,
      Desc,
      Multiple_price,
      addons,
      Delivery_info,
      pincode,
    };

    console.log(obj);
  };

  return (
    <div>
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
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Product
          </Typography>
          <hr />
          <Box style={{ height: "80vh", overflowY: "auto", marginTop: "20px" }}>
            <form action="">
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Enter Name of Product" />

              <label htmlFor="">Category</label>
              <input type="text" placeholder="Enter Name of Category" />
              <label htmlFor="">Images</label>
              {images?.map((el, i) => {
                return (
                  <div style={{ display: "flex", marginTop: "5px" }}>
                    <input className="urls" type="text" placeholder="Enter url of Image" />
                    <MdDelete
                      onClick={() => handleImages(i)}
                      size={"30px"}
                      cursor={"pointer"}
                    />
                  </div>
                );
              })}
              <Button onClick={handleImages}>Add More Rows</Button>
              <label htmlFor="">Price</label>
              <input type="text" placeholder="Enter Price of Product" />
              <label htmlFor="">City</label>
              <input type="text" placeholder="Enter Name of City" />
              <label htmlFor="">Multiple_price</label>
              {Multiple_price.map(() => {
                return (
                  <div style={{ display: "flex", marginTop: "5px" }}>
                    <input className="priceof_multiple-price"  type="text" placeholder="Enter Name of Price" />
                    <input className="weightof_multiple-price"  type="text" placeholder="Enter Name of Weight" />
                    <MdDelete size={"50px"} cursor={"pointer"} />
                  </div>
                );
              })}
              <Button onClick={handle_Multiple_price}>Add more Rows</Button>

              <label htmlFor="">Addons</label>
              {addons.map(() => {
                return (
                  <div style={{ display: "flex", marginTop: "5px" }}>
                    <input className="addons-name" type="text" placeholder="Enter Name of Addons" />
                    <input className="addons-desc" type="text" placeholder="Enter Name of Addons" />
                    <input className="addons-img" type="text" placeholder="Enter Name of Addons" />
                    <input className="addons-price" type="text" placeholder="Enter Name of Addons" />
                    <MdDelete size={"30px"} cursor={"pointer"} />
                  </div>
                );
              })}
              <Button onClick={handleAddons}>Add more Rows</Button>

              <label htmlFor="">Product Details</label>
              {Proddetails.map(() => {
                return (
                  <div style={{ display: "flex", marginTop: "5px" }}>
                    <input
                    className="proddetails"
                      type="text"
                      placeholder="Enter Name of Prod_details"
                    />
                    <MdDelete size={"30px"} cursor={"pointer"} />
                  </div>
                );
              })}
              <Button onClick={handleProd_details}>Add more Rows</Button>

              <label htmlFor="">Description</label>
              {Desc.map((el, i) => {
                return (
                  <div style={{ display: "flex", marginTop: "5px" }}>
                    <input
                    className="description"
                      type="text"
                 
                      placeholder={`Enter Line ${i + 1} Description`}
                    />
                    <MdDelete size={"30px"} cursor={"pointer"} />
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
                    <MdDelete size={"30px"} cursor={"pointer"} />
                  </div>
                );
              })}
              <Button onClick={handle_delivery_info}>Add more Rows</Button>

              <label htmlFor="">Pincodes</label>
              <input type="text" placeholder="Enter Name of Pincodes" />
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
