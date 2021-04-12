import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  product: [
      {
        name: 'Pizza',
        ingredient: [ {id: 1}, {id: 4}],
      }
    ]
  }

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addPizza: (state, action) => {
      state.product = Object.values({...state.product, ...action.payload})
    }
  }
})

export const { addPizza } = productSlice.actions

export default productSlice.reducer