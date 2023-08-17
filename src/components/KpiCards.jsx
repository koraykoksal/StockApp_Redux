import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import PaymentsIcon from "@mui/icons-material/Payments"
import { deepPurple, pink, amber } from "@mui/material/colors"
import { Paper, Grid, Avatar } from "@mui/material"
const KpiCards = () => {
  const cardData = [
    {
      id: 1,
      icon: <MonetizationOnIcon />,
      bgColor: deepPurple[100],
      color: deepPurple[700],
      title: "sales",
      value: "$48000",
    },
    {
      id: 2,
      icon: <ShoppingCartIcon />,
      bgColor: pink[100],
      color: pink[700],
      title: "profit",
      value: "$32000",
    },
    {
      id: 3,
      icon: <PaymentsIcon />,
      bgColor: amber[100],
      color: amber[700],
      title: "purchases",
      value: "$4800",
    },
  ]

  return (
    <div>
      <Grid container>
        {cardData.map((item) => (
          <Grid item key={item.id}>
            <Paper>
              <Avatar
                sx={{
                  bgcolor: item.bgColor,
                  color: item.color,
                  width: 70,
                  height: 70,
                }}
              >
                {item.icon}
              </Avatar>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default KpiCards
