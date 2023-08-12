import { Button, Typography } from "@mui/material"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchFail, fetchStart } from "../features/authSlice"
import useStockCall from "../hooks/useStockCall"

const Firms = () => {

  const { getStockData } = useStockCall()
  const { firms } = useSelector((state) => state.stock)

  useEffect(() => {
    getStockData('firms')
  }, [])

  console.log(firms)
  
  return (

    <div>

    <Typography variant="h4" color={"error"} mb={3}>Firm</Typography>

    <Button variant="contained">New Firm</Button>

    </div>



  )
}

export default Firms
