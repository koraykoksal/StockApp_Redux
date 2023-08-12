import axios from "axios"
import { fetchFail, fetchStart, getFirmsSuccess } from "../features/stockSlice"
import { useDispatch, useSelector } from "react-redux"


const useStockCall = () => {

  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const getStockData = async (url) => {
    dispatch(fetchStart())
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}/stock/${url}/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      )
      dispatch(getStockSuccess({ data, url }))
      console.log(data)
    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
    }
  }



  return {getStockData}
}

export default useStockCall
