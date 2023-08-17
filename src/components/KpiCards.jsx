import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import PaymentsIcon from "@mui/icons-material/Payments"
import { deepPurple, pink, amber } from "@mui/material/colors"
import { Paper, Grid, Avatar } from "@mui/material"
import { Typography } from "@mui/material"



const KpiCards = () => {
  const cardData = [
    {
      id: 1,
      icon: <MonetizationOnIcon sx={{fontSize:'2rem'}} />,
      bgColor: deepPurple[100],
      color: deepPurple[700],
      title: "SALES",
      value: "$48000",
    },
    {
      id: 2,
      icon: <ShoppingCartIcon sx={{fontSize:'2rem'}} />,
      bgColor: pink[100],
      color: pink[700],
      title: "PROFIT",
      value: "$32000",
    },
    {
      id: 3,
      icon: <PaymentsIcon sx={{fontSize:'2rem'}} />,
      bgColor: amber[100],
      color: amber[700],
      title: "PURCHASES",
      value: "$4800",
    },
  ]

  return (

      <Grid container justifyContent='center' spacing={2}>
        {cardData.map((item) => (
          <Grid item key={item.id}>
            <Paper sx={{display:'flex',alignItems:'center',gap:2,p:'1rem',width:'350px',justifyContent:'center'}}>
              <Avatar
                sx={{
                  bgcolor: item.bgColor,
                  color: item.color,
                  width: '70px',
                  height: '70px',
                }}
                elevation={5}
              >
                {item.icon}
              </Avatar>
              <Typography variant="p" mb={2}>
                {item.title}
              </Typography>
              <Typography variant="p" mb={2}>
                {item.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

  )
}

export default KpiCards
