import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { handlegetproducts } from '../../Redux/action';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditModal({id}) {
  const [open, setOpen] = React.useState(false);
  const [product , setproduct] = React.useState([])
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch()
const store = useSelector(store=>store)
const {loading,error,products}=store

React.useEffect(()=>{
dispatch(handlegetproducts())
},[])


  React.useEffect(()=>{
    let findproduct = products.filter((el)=>{
      return el._id===id
    })
    setproduct(findproduct[0])
  },[products])


// console.log(product,id)
  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Product
          </Typography>
          <div style={{height:"80vh",overflowY:"auto"}}>

          <label htmlFor="">Name</label>
    <input type="text" placeholder='Enter Name of Product' defaultValue={product?.name} />
    <label htmlFor="">category</label>
    <input type="text" placeholder='Enter Name of Product' defaultValue={product?.category} />
    <label htmlFor="">image</label>
    {/* <input type="text" placeholder='Enter Name of Product' defaultValue={product?.image[0]} /> */}
    <label htmlFor="">price</label>
    <input type="text" placeholder='Enter Name of Product' defaultValue={product?.price}  />
    <label htmlFor="">city</label>
    <input type="text" placeholder='Enter Name of Product' defaultValue={product?.city} />
    <label htmlFor="">weight</label>
    <input type="text" placeholder='Enter Name of Product' defaultValue={product?.weight} />
    <label htmlFor="">multiple_price</label>
    {/* <input type="text" placeholder='Enter Name of Product' defaultValue={product?.multiple_price[0]} /> */}
    <label htmlFor="">addons</label>
    {/* <input type="text" placeholder='Enter Name of Product' defaultValue={product?.add} /> */}
    <label htmlFor="">prod_details</label>
    {/* <input type="text" placeholder='Enter Name of Product' defaultValue={product?.prod_details[0]}/>
    <label htmlFor="">description</label>
    <input type="text" placeholder='Enter Name of Product'  defaultValue={product?.description}/> */}
    <label htmlFor="">delivery_info</label>
    {/* <input type="text" placeholder='Enter Name of Product' defaultValue={product?.delivery_info[0]}/> */}
    <label htmlFor="">pincodes</label>
    <input type="text" placeholder='Enter Name of Product' defaultValue={product?.pincodes}/>
    <button>Save</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
