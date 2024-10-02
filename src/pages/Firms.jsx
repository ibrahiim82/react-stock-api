import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useStockRequests from "../services/useStockRequests"

// export const getFirms = async () => {
//   try {
//     const { data } = await axios.post(
//       `${process.env.REACT_APP_BASE_URL}/firms/`,{
//         headers: { "Authorization":  `Token ${token}`},
//       });
//     console.log(data)
//   } catch (error) {
//     console.log(error);
//   }
// };

const Firms = () => {
  // const {token} = useSelector((state)=>state.auth)
  // const { getFirms, getSales } = useStockRequests()


  const { getStock } = useStockRequests()


  // sayfa yüklendikten sonra firmaları getir
  useEffect(() => {
    // getFirms()
    // getSales()
    getStock("firms")
    getStock("sales")
  }, []);


  return <div>Firms</div>;
};

export default Firms;
