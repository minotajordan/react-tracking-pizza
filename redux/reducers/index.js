import { combineReducers } from 'redux'

import count from './conuntReducer';
import product from './productReducer';

const reducers = combineReducers({ 
  count,
  product,
})

export default reducers;