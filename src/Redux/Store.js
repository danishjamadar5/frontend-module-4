import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import PostReducer from './Reducers/PostReducer';


const rootReducer = combineReducers({
  posts: PostReducer,
});

const Store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default Store;