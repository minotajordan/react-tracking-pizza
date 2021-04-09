import {configureStore} from '@reduxjs/toolkit'
import rootReducers from './reducers/index'

export const initializeStore = () => {
  return configureStore({
    reducer: rootReducers
  })
}
