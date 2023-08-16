import ProductTable from "../components/ProductTable"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import useStockCall from "../hooks/useStockCall"
import ProductModal from "../components/ProductModal"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"


const Products = () => {

  const { getStockData } = useStockCall()
  const { firms } = useSelector((state) => state.stock)

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  })

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setInfo({ name: "", phone: "", address: "", image: "" })
  }

  useEffect(() => {
    // getFirms()
    getStockData("firms")
  }, [])

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={3}>
        Firms
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        NEW PRODUCT
      </Button>

      <ProductModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <ProductTable/>
    </div>
  )
}

export default Products