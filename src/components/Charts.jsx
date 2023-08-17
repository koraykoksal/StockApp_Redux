import { Card, Title, LineChart } from "@tremor/react";
import { useSelector } from "react-redux";

const chartdata = [

]

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`

const Charts = () => {

  const {sales} = useSelector((state) => state.stock)

  const salesData=sales?.map((item)=>{

  })

  return (
    <Card className="mt-4">
    <Title>Total Sales</Title>
    <LineChart
      className="mt-4"
      data={chartdata}
      index="year"
      categories={["Export Growth Rate", "Import Growth Rate"]}
      colors={["emerald", "gray"]}
      valueFormatter={dataFormatter}
      yAxisWidth={40}
    />
  </Card>
  )
}
export default Charts