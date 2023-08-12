import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'

const useAxiosCall = () => {

    const {token} = useSelector((state)=>state.auth)

    const axisWithToken=axios.create({
        
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
        headers: {Authorization:`${token}`}
    })


    return {axisWithToken}
}

export default useAxiosCall



