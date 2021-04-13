import { combineReducers } from 'redux'

import count from './conuntReducer';
import product from './productReducer';
import nav from './navReducer';
import ingredient from './ingredientReducer';
import traking from './trakingReducer';

const reducers = combineReducers({ 
  count,
  product,
  nav,
  ingredient,
  traking,
})

export default reducers;