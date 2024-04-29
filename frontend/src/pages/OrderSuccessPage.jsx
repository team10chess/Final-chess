import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Lottie from "react-lottie";
import animationData from "../Assests/animations/107043-success.json";
import {useLocation} from 'react-router-dom';
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
    </div>
  );
};

export default OrderSuccessPage;
