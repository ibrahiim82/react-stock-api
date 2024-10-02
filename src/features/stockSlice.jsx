import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  firms: "",
  products: "",
  sales: "",
  purchases: "",
  brands: "",
  categories: "",
  loading: "",
  error: "",
}

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true
    },
    getFirmsSuccess: (state, { payload }) => {
      state.loading = false
      state.firms = payload
    },
    fetchFail: (state) => {
      state.loading = false
      state.error = true
    },
  },
})

export const { fetchStart, getFirmsSuccess, fetchFail } = stockSlice.actions

export default stockSlice.reducer
