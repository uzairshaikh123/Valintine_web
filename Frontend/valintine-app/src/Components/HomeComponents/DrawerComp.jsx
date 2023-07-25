import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../Redux/type';
import MailIcon from '@mui/icons-material/Mail';
import { FaShoppingCart} from 'react-icons/fa';
import { RiLoginCircleFill} from 'react-icons/ri';
import { AiOutlineExclamationCircle} from 'react-icons/ai';
import { MdContacts} from 'react-icons/md';
import { TbLogout} from 'react-icons/tb';
import { BiSolidContact} from 'react-icons/bi';
import { FaUserCheck} from 'react-icons/fa';
export default function TemporaryDrawer() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handlelogout =()=>{
    let t =sessionStorage.setItem('token',"")
    console.log("t",t)
    dispatch({type: 'logout'})
window.location.reload();
    return navigate("/login")
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

const handlenavigate =(e)=>{
let v=(e.target.innerText);

if(v==="Cart"){
  return navigate("/cart")
}else if (v==="Login"){
  return navigate("/login")
}else if(v==="About"){
  return navigate("/about")
}else if(v==="Contact"){
  return navigate("/contact")
}else if(v==="My Orders"){
  return navigate("/orders")
}


  return navigate("/login")


}

let iconarr = [<FaShoppingCart />,<RiLoginCircleFill />,<AiOutlineExclamationCircle />,<BiSolidContact />,<FaUserCheck/> , <TbLogout />]

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      backgroundColor={"#d9e6f9"}
      height={"100vh"}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box style={{border:"1px solid gray",height:"100px",width:"100%",marginTop:"2px"}}>
        <img style={{height:"100%",width:"80%"}} src="https://valentinesaga.com/wp-content/uploads/2023/07/ValentineSaga-Logo-4-min.png" alt="" />
      </Box>
      <List>
        {['Cart', 'Login', 'About', 'Contact','My Orders','Logout'].map((text, index) => (
          <ListItem key={text} disablePadding onClick={handlenavigate} >
            <ListItemButton onClick={handlenavigate} style={{border:"1px solid gray",marginTop:"2px"}}>
              <ListItemIcon>
                {iconarr[index]}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            <Divider />
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div>
      {[ 'left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <img style={{height:"40%",width:"60%"}} src="https://img.icons8.com/?size=512&id=OTxpMqWbm71F&format=png" alt="" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
