import { Typography } from "@mui/material" 
import { KpiCards } from "../components/KpiCards"
import { Charts } from "../components/Charts"


const Home = () => {

  
  return <div>

    <Typography variant="h3" color="primary" align="center">
      DASHBOARD
    </Typography>

  <KpiCards/>
  <Charts/>
  </div>
}

export default Home
