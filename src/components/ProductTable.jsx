import * as React from "react"
import Box from "@mui/material/Box"
import { DataGrid } from "@mui/x-data-grid"
import { useSelector } from "react-redux"

const columns = [
    {
      field: "id",
      headerName: "#",
      headerAlign: "center",
      align: "center",
      flex: 0.5,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 2,
      headerAlign: "center",
      align: "center",
      minWidth: 80,
    },
    {
      field: "brand",
      headerName: "Brand",
      flex: 2,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      // type: "actions",
      headerName: "Actions",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
  ]

export default function ProductTable() {


   const {products} = useSelector((state)=>state.stock)

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  )
}
