import {createSlice} from '@reduxjs/toolkit'

let initialState = {
  count: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action) {
      state.count += 1
    },
    decrement(state, action) {
      state.count -= 1
    },
    newIncrement: (state, action) => {
      state.count -= action.payload
    }
  }
})

export const { increment, decrement, newIncrement } = counterSlice.actions
export default counterSlice.reducer