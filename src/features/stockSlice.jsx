import { createSlice } from "@reduxjs/toolkit"

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    loading: false,
    error: false,
    sales: [],
    purchases: [],
    firms: [],
    categories: [],
    brands: [],
    products: [],
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true
      state.error = false
    },
    fetchFail: (state) => {
      state.loading = false
      state.error = true
    },
    getStockSuccess: (state, { payload }) => {
      state.loading = false
      state[payload.url] = payload.data
    },
    // ? Products, categories ve brands state'lerini güncelleyen action fonks.
    getProdCatBrandsSuccess: (state, { payload }) => {
      state.loading = false
      state.products = payload[0]
      state.categories = payload[1]
      state.brands = payload[2]
    },
  },
})

export const { fetchStart, fetchFail,getStockSuccess,getProdCatBrandsSuccess  } =
  stockSlice.actions
export default stockSlice.reducer
