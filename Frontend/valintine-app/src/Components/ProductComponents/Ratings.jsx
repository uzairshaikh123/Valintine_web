import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import { Input } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { handlegetproducts } from '../../Redux/action';
import './ratings.css'
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function CustomizedRating({reviews}) {
    const [message ,setmessage ] = React.useState("")
    const [ratings , setratings ] = React.useState(0)

    const handleRatings=(e)=>{
       setratings(e.target.value);
    }
    const handlemessage=(e)=>{
        setmessage(e.target.value);
    }
    const dispatch = useDispatch();

const handleaddratings=()=>{

if(message.length>0 && ratings>0){

}else{
    alert("error")
}



}
console.log(reviews);

  return (
    <Box
    style={{display:"flex",
    flexDirection:"column",justifyContent:"center"}}
      sx={{
        '& > legend': { mt: 2 },
      }}
      
    >
      <Typography component="legend">Rate this Product</Typography>
      <StyledRating
      style={{margin:"auto"}}
        name="customized-color"
        defaultValue={2}
        // value={3}
        onClick={
            handleRatings
        }
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <Input style={{width:"50%",margin:"auto"}} placeholder='write something' onChange={handlemessage}/>
      <button onClick={handleaddratings} style={{width:"50%",display:"block",margin:"auto",background:"pink",color:"white",padding:"5px",marginTop:"15px",border:"none",cursor:"pointer",fontSize:"20px"}}>Add</button>


{reviews?.length>0?<Box id={"reviews-cont"} style={{width:"100%"}}>
{reviews?.map((el)=>{
    return <Box id={"ratings-box"} style={{width:"50%",margin:"auto",marginTop:"50px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    <img style={{width:"10%",height:"10%"}} src="https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent.png" alt="" />
    <p>{el?.name}</p>
    <p>{el?.msg}</p>
    <p>{el?.rating_stars}</p>
</Box>
})}

 </Box>:<Box>
    <h1>No Ratings</h1>
    </Box>}
    </Box>
  );
}



