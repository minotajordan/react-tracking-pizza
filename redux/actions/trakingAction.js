import { createSlice } from '@reduxjs/toolkit'

let initialState = { traking: [] }

const trakingSlice = createSlice({
  name: 'traking',
  initialState,
  reducers: {
    addTraking: (state, action) => {
      state.traking = Object.values({...state.traking, ...action.payload})
    }
  }
})

export const { addTraking } = trakingSlice.actions

export default trakingSlice.reducer