import axios from "axios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { fetchFail, fetchStart, loginSuccess,registerSuccess } from "../features/authSlice"

//? Main commnet
//? Custom hook
//? Custom hook uygulamanın tüm her yerinde kullanılmak istenen fonksiyonlarını varsa ve
//? bu yfonksiyonlar işçerisnide Hook çağırmak istyioirsanız Custom Hook yazmak gereklidir.
const useApiRequests = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const login = async (userData) => {
    // const BASE_URL = "https://14163.fullstack.clarusway.com"

    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        userData
      )
      toastSuccessNotify("Login işlemi başarılı")
      dispatch(loginSuccess(data))
      navigate("stock")
      console.log(data)
    } catch (error) {
      toastErrorNotify("Login işlemi başarısız")
      dispatch(fetchFail())
      console.log(error)
    }
  }

  const register = async (userInfo) => {
    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/`,
        userInfo
      )
      dispatch(registerSuccess(data))
      navigate("/stock")
    } catch (error) {
      dispatch(fetchFail())
    }
  }
  
  const logout = async () => {}

  return { login, register }
}

export default useApiRequests
