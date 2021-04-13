import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  ingredient: [
            { id: 1, name: 'masa', price: 10000 },
            { id: 2,name: 'piña', price: 3000 },
            { id: 3,name: 'tomate', price: 3000 },
            { id: 4,name: 'salchicha', price: 3000 },
            { id: 5,name: 'queso', price: 3000 },
            { id: 6,name: 'sueroqueso', price: 3000 },
            { id: 7,name: 'champiñones', price: 3000 },
            { id: 8,name: 'huevo', price: 3000 },
            { id: 9,name: 'jamon', price: 3000 },
            { id: 10,name: 'pollo', price: 5000 },
            { id: 11,name: 'peperoni', price: 4500 },
            { id: 13,name: 'pasas', price: 3000 },
            { id: 14,name: 'pepino', price: 3000 },
            { id: 15,name: 'arroz', price: 3000 },
            { id: 16,name: 'tilapia', price: 3000 },
        ],
  }

const ingredientSlice = createSlice({
  name: 'ingredient',
  initialState,
  reducers: {
    addIngredient(state, action) {
      state.name = 'up edit'
    },
    removeIngredient(state, action) {
      state.name = 'down edit'
    },
  }
})

export const { addIngredient, removeIngredient } = ingredientSlice.actions

export default ingredientSlice.reducer