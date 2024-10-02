import React from 'react'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, getFirmsSuccess, getSalesSuccess } from '../features/stockSlice';


const useStockRequests = () => {
  const {token} = useSelector((state)=>state.auth)
  const dispatch = useDispatch()

    const getFirms = async () => {
      dispatchEvent(fetchStart())
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/firms`,{
            headers: { "Authorization":  `Token ${token}`},
          });
          dispatch(getFirmsSuccess(data.data))
          console.log(data);
      } catch (error) {
        dispatch(fetchFail())
        console.log(error);
      }
    };
    const getSales = async () => {
      dispatchEvent(fetchStart())
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/sales`,{
            headers: { "Authorization":  `Token ${token}`},
          });
          dispatch(getSalesSuccess(data.data))
          console.log(data);
      } catch (error) {
        dispatch(fetchFail())
        console.log(error);
      }
    };

    return {getFirms,getSales}
}

export default useStockRequests