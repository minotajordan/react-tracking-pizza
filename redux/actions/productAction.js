import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  product: {
    name: 'Pizza',
    ingredient: [
      { name: 'masa', price: 10000 },
      { name: 'piña', price: 3000 },
      { name: 'tomate', price: 3000 },
      { name: 'salchicha', price: 3000 },
      { name: 'queso', price: 3000 },
      { name: 'sueroqueso', price: 3000 },
      { name: 'champiñones', price: 3000 },
      { name: 'huevo', price: 3000 },
      { name: 'jamon', price: 3000 },
      { name: 'pollo', price: 5000 },
      { name: 'peperoni', price: 4500 },
      { name: 'tocineta', price: 3000 },
    ],
  },
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment(state, action) {
      state.name = 'up edit'
    },
    decrement(state, action) {
      state.name = 'down edit'
    },
  }
})

export const { increment, decrement } = productSlice.actions

export default productSlice.reducer