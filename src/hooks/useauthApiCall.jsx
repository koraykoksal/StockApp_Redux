// import axios from "axios"
// import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
// import { useNavigate } from "react-router-dom"
// import { useDispatch } from "react-redux"
// import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice"

// // //? Bir hook sadece bir react component ve bir custom hook icersinde cagrilabilir. Bir Js fonksiyonu icerisinde hook cagiralamaz.

// export const login = async (userData) => {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const BASE_URL = "https://10001.fullstack.clarusway.com"

//   dispatch(fetchStart())
//   try {
//     const { data } = await axios.post(
//       `${BASE_URL}/account/auth/login/`,
//       userData
//     )
//     dispatch(loginSuccess(data))
//     toastSuccessNotify("login islemi basarili")
//     navigate("/stock")
//   } catch (error) {
//     console.log(error)
//     dispatch(fetchFail())
//   }
// }

import React from "react";
import axios from "axios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { fetchFail, fetchStart, loginSuccess, registerSuccess } from "../features/authSlice"


const useauthApiCall = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //*LOGIN
  const login = async (userData) => {
    

    //const BASE_URL = "https://13602.fullstack.clarusway.com"

    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/account/auth/login/`,
        userData
      )
      dispatch(loginSuccess(data))
      toastSuccessNotify("login islemi basarili")
      //login işlemi olduktan sonra ilgili sayfaya gönder
      navigate("/stock")
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
      toastErrorNotify(error.repsonse.data.non_field_errors[0])
    }



  }


  //*LOGOUT
  const logout = async (userData) => {
    

    //const BASE_URL = "https://13602.fullstack.clarusway.com"

    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/account/auth/logout/`,
        userData
      )
      dispatch(loginSuccess(data))
      toastSuccessNotify("login islemi basarili")
      //logut işlemi olduktan sonra ilgili sayfaya gönder
      navigate("/")
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
      toastErrorNotify(error.repsonse.data.non_field_errors[0])
    }



  }


  //*REGISTER
  const register = async (userData) => {
    

    //const BASE_URL = "https://13602.fullstack.clarusway.com"

    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/account/register/`,
        userData
      )
      dispatch(registerSuccess(data))
      toastSuccessNotify("register islemi basarili")
      //logut işlemi olduktan sonra ilgili sayfaya gönder
      navigate("/stock")
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
      toastErrorNotify(error.repsonse.data.non_field_errors[0])
    }



  }

  return {login,logout,register}

}

export default useauthApiCall


