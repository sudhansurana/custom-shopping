import {combineReducers} from 'redux';
import auth from './auth.reducer';
import isLoading from './loading.reducer';

const rootReducer = combineReducers({
  auth,
  isLoading
});

export default rootReducer;
