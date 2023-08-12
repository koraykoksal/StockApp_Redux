import axios from "axios"
import { fetchFail, fetchStart, getFirmsSuccess } from "../features/stockSlice"
import { useDispatch, useSelector } from "react-redux"
import {toastSuccessNotify,toastErrorNotify} from '../helper/ToastNotify'
import useAxios from "./useAxios"

const useStockCall = () => {

  //const { token } = useSelector((state) => state.auth)
  const {  } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const { axiosWithToken } = useAxios()


  //*ESKİ HALİ

  // const getStockData = async (url) => {
  //   dispatch(fetchStart())
  //   try {
  //     const { data } = await axios(
  //       `${import.meta.env.VITE_BASE_URL}/stock/${url}/`,
  //       {
  //         headers: { Authorization: `Token ${token}` },
  //       }
  //     )
  //     dispatch(getStockSuccess({ data, url }))
  //     console.log(data)
  //   } catch (error) {
  //     dispatch(fetchFail())
  //     console.log(error)
  //   }
  // }

  // const deleteStockData=async(url,id)=>{
  //   dispatch(fetchStart())
  //   try {
  //     const { data } = await axios(
  //       `${import.meta.env.VITE_BASE_URL}/stock/${url}/${id}/`,
  //       {
  //         headers: { Authorization: `Token ${token}` },
  //       }
  //     )
  //     dispatch(getStockData(url))
  //     toastSuccessNotify('Succesfull Deleted')
  //     console.log(data)
  //   } catch (error) {
  //     dispatch(fetchFail())
  //     toastErrorNotify(`${url} Can not be deleted !`)
  //     console.log(error)
  //   }
  // }

 

  const getStockData = async (url) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken(`/stock/${url}/`)
      dispatch(getStockSuccess({ data, url }))
      console.log(data)
    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
    }
  }

  const deleteStockData = async (url, id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.delete(`/stock/${url}/${id}/`) 
      toastSuccessNotify(`${url} succesfuly deleted`)
      getStockData(url)
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} can not be deleted`)
      console.log(error)
    }
  }


  return {getStockData,deleteStockData}
}

export default useStockCall
