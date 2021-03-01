import {combineReducers} from 'redux';
import {authReducer} from './auth.reducer';
import {productReducer} from './product.reducer';
import isLoading from './loading.reducer';

const rootReducer = combineReducers({
  authReducer,
  productReducer,
  isLoading
});

export default rootReducer;
