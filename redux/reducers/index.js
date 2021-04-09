import { combineReducers } from 'redux'

import count from './conuntReducer';
import product from './productReducer';
import nav from './navReducer';
import ingredient from './ingredientReducer';

const reducers = combineReducers({ 
  count,
  product,
  nav,
  ingredient,
})

export default reducers;