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

export default function AddProductModal({id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <div>
      <Button onClick={handleOpen} style={{float:"right",margin:"10px",padding:"10px 15px",color:"white",background:"blue",border:"none",borderRadius:"10px",cursor:"pointer",fontSize:"18px"}}>Add Product</Button>
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
 <Box style={{height:"80vh",overflowY:"auto"}}>
<form action="">
    <label htmlFor="">Name</label>
    <input type="text" placeholder='Enter Name of Product' />
    <label htmlFor="">category</label>
    <input type="text" placeholder='Enter Name of Product' />
    <label htmlFor="">image</label>
    <input type="text" placeholder='Enter Name of Product' />
    <label htmlFor="">price</label>
    <input type="text" placeholder='Enter Name of Product' />
    <label htmlFor="">city</label>
    <input type="text" placeholder='Enter Name of Product' />
    <label htmlFor="">weight</label>
    <input type="text" placeholder='Enter Name of Product' />
    <label htmlFor="">multiple_price</label>
    <input type="text" placeholder='Enter Name of Product' />
    <label htmlFor="">addons</label>
    <input type="text" placeholder='Enter Name of Product' />
    <label htmlFor="">prod_details</label>
    <input type="text" placeholder='Enter Name of Product' />
    <label htmlFor="">description</label>
    <input type="text" placeholder='Enter Name of Product' />
    <label htmlFor="">delivery_info</label>
    <input type="text" placeholder='Enter Name of Product' />
    <label htmlFor="">booked_dates</label>
    <input type="text" placeholder='Enter Name of Product' />
    <label htmlFor="">pincodes</label>
    <input type="text" placeholder='Enter Name of Product' />
</form>
          
    </Box> 
        </Box>
      </Modal>
    </div>
  );
}
