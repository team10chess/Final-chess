import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Lottie from "react-lottie";
import animationData from "../Assests/animations/107043-success.json";
import {useLocation, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

const OrderSuccessPage = (props) => {
  // const { cart } = useSelector((state) => state.cart);
  // console.log(cart)
  return (
    <div>
      <Header />
      <Success />
      <Footer />
    </div>
  );
};

const Success = () => {
  const navigate = useNavigate();

  const handleClick=()=>{
    setTimeout(()=>{
      navigate('/pairing-game')
    }, 5000)
  }

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} width={300} height={300} />
      <h5 className="text-center mb-14 text-[25px] text-[#000000a1]">
        You have successfully joined 😍
      </h5>
      <br />
      <br />
      <button onClick={handleClick()}></button>
    </div>
  );
};

export default OrderSuccessPage;
