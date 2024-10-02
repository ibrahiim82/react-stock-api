import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";


const Firms = () => {
  const {token} = useSelector((state)=>state.auth)

  const getFirms = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/firms/`,{
          headers: { "Authorization":  `Token ${token}`},
        });
    } catch (error) {
      console.log(error);
    }
  };


  // sayfa yüklendikten sonra firmaları getir
  useEffect(() => {
    getFirms();
  }, []);


  return <div>Firms</div>;
};

export default Firms;
