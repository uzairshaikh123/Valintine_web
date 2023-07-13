import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Pages/Navbar";
import Footer from "./Components/HomeComponents/Footer";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import AdminPanel from "./Pages/Admin";
// import handleOpe
function App() {
  const Msg = ({ closeToast, toastProps }) => (
    <div>
      <img
        style={{ width: "20%", height: "20%" }}
        src="https://valentinesaga.com/wp-content/uploads/2023/03/Bouquet-N-Greeting-Card-4.2.jpg"
        alt="popup"
      />
      Lorem ipsum dolor {toastProps.position}
      <button>Retry</button>
      <button onClick={closeToast}>Close</button>
    </div>
  );
  const [admin,setadmin]=useState(true)
  const notify = () => {
    toast(<Msg />);
  };

  useEffect(() => {
    let popup = setTimeout(() => {
      notify();
    }, 2000);
    return () => {
      clearTimeout(popup);
    };
  }, []);

  return (
    <div className="App">
     
      {admin && <Navbar />}
      <AllRoutes />
      <ToastContainer position="bottom-left" autoClose={5000} />
      <Footer />
    
    </div>
  );
}

export default App;
