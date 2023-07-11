import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  height:"auto",
  transform: 'translate(-50%, -50%)',
  width: 540,
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
  overflow:"auto",
  p: 4,
};

export default function BasicModal({name}) {

let cities =[{name:"Delhi",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Delhi_Icon-min.png",id:1},
  {name:"Jaipur",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Jaipur_Icon-min.png",id:2},
  {name:"Bangalore",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Bangalore_Icon-min.png",id:3},
  {name:"kolkata",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Kolkata_Icon-min.png",id:4},
  {name:"Indore",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Indore_Icon-min.png",id:5},
  {name:"Pune",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Pune_Icon-min.png",id:6},
  {name:"Across India",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/india-icon-min.png",id:7},
  {name:"Hyderabad",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Hyderabad_min.png",id:8},
  {name:"Mumbai",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Mumbai_min.png",id:9},
  {name:"Kanpur",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Kanpur_min.png",id:10},
  {name:"chennai",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Chennai_min.png",id:11},
  {name:"Jammu",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Jammu_min.png",id:12},
  {name:"Lucknow",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Lucknow_min.png",id:13},
  {name:"Chandigarh",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Chandigarh_min.png",id:14},
  {name:"Ahmedabad",img:"https://deowgxgt4vwfe.cloudfront.net/city-icons/Ahmedabad_min.jpg",id:15},]

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = (city) =>{ 
    
    sessionStorage.setItem("cityname",city)
    
    setOpen(false)
  
  }
let mycity = sessionStorage.getItem("cityname") || "Location"
  return (
    <div>
      <button  style={{padding:"10px",cursor:"pointer",backgroundColor:"aqua",border:"none",}} className='locationbtn navloc' onClick={handleOpen} 
      >
        <img style={{width:"15%",height:"60%"}} src="https://img.icons8.com/?size=512&id=7880&format=png" alt="" />
        {mycity}</button>
      <Modal
      style={{transition:"0.5s"}}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            SELECT YOUR CITY
          </Typography>
          <hr />
          <p>Find more than 3000 decorations, gifts and surprises!</p>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Box display={"flex"} flexWrap={"wrap"} gap={"20px"}>

{
    cities.map((city, index) => (
        <div onClick={()=>handleClose(city.name)}  className='cities' style={{width:"100px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",textAlign:"center",cursor:"pointer",padding:"5px"}} key={index}>
        <img style={{width:"50px",height:"50px"}}  src={city.img} alt={city.name} />
        <Typography>{city.name}</Typography>
      </div>
    ))
    
}
    </Box>
        <hr style={{marginTop:"40px"}} />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
