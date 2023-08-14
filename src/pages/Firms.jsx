import { Button, Grid, Typography } from "@mui/material"
import axios from "axios"
import { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchFail, fetchStart } from "../features/authSlice"
import useStockCall from "../hooks/useStockCall"
import FirmCard from "../components/FirmCard"
import FirmModal from "../components/FirmModal"

const Firms = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { getStockData } = useStockCall()
  const { firms } = useSelector((state) => state.stock)

  useEffect(() => {
    getStockData('firms')
  }, [])

  console.log("firms data:",firms)
  
  return (

    <div>

    <Typography variant="h4" color={"error"} mb={3}>Firm</Typography>

    <Button variant="contained" onClick={handleOpen}>New Firm</Button>

    <Grid container justifyContent={"center"} spacing={2}>
    {firms.map((firm)=>(
      <Grid item key={firm.id}>
        <FirmCard firm={firm}/>
      </Grid>
      ))}
    </Grid>

    <FirmModal open={open} handleClose={handleClose}/>

    </div>



  )
}

export default Firms
