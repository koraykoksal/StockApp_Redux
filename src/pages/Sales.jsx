import { useEffect } from "react"
import useStockCall from "../hooks/useStockCall"
import { UseSelector } from "react-redux/es/hooks/useSelector"


const Sales = () => {


  const { getStockData } = useStockCall()
  const { firms } = useSelector((state) => state.stock)

  useEffect(() => {
    getStockData('firms')
  }, [])

  console.log(firms)

  return <div>Sales</div>
}

export default Sales
