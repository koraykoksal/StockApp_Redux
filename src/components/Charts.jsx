import { Grid } from "@mui/material";
import { Card, Title, LineChart } from "@tremor/react";
import { useSelector } from "react-redux";

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

const Charts = () => {

  const {sales,purchases} = useSelector((state) => state.stock)
  
  const salesData=sales?.map((item)=>({
    date: item.createds,
    quantity: item.quantity,
    price: Number(item.price_total),
  }))

  

  const purchasesData = purchases?.map((item) => ({
    date: item.createds,
    price: Number(item.price_total),
  }))


  return (
    <Grid container justifyContent='center' spacing={3} mt={4}>
      <Grid item xs={12} md={6}>
      <Card>
      <Title>Total Sales</Title>
      <LineChart
        className="mt-4"
        data={salesData}  //x ekseni
        index="date"
        categories={["Quantity", "Price"]}
        colors={["red", "blue"]}
        valueFormatter={dataFormatter}
      />
      </Card>
      </Grid>

      <Grid item xs={12} md={6}>
      <Card>
      <Title>Total Purchases</Title>
      <LineChart
        className="mt-4"
        data={purchasesData}  //x ekseni
        index="date"
        categories={["Price"]}
        colors={["green"]}
        valueFormatter={dataFormatter}
      />
      </Card>
      </Grid>

    </Grid>

  )
}
export default Charts