import { Button, Typography } from "@mui/material"
import axios from "axios"
import { useEffect } from "react"
import { useSelector } from "react-redux"

const Firms = () => {

  //state git auth içidneki token al
  const {token} = useSelector((state)=>state.auth)

  
  const getFirms= async ()=>{

    try {
      const {data} =await axios(`${import.meta.env.VITE_BASE_URL}/stock/firms/`,{
        headers:{
          Authorization:`Token ${token}`
        }
      })

      console.log(data)
      
    } catch (error) {
      console.log(error)
    }
    

  }

  useEffect(() => {
    getFirms()
  }, [])
  

  return (

    <div>

    <Typography variant="h4" color={"error"} mb={3}>Firm</Typography>

    <Button variant="contained">New Firm</Button>

    </div>



  )
}

export default Firms
