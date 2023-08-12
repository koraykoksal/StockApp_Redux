import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'

const useAxiosCall = () => {

    const { token } = useSelector((state) => state.auth)

    const axiosWithToken = axios.create({
      baseURL: `${import.meta.env.VITE_BASE_URL}`,
      headers: { Authorization: `Token ${token}` },
    })
  
    const axiosPublic = axios.create({
      baseURL: `${import.meta.env.VITE_BASE_URL}`,
    })


    return {axiosWithToken,axiosPublic}
}

export default useAxiosCall



