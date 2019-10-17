import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';
import thunkMiddleWare from 'redux-thunk';


const createStoreWidthMiddleWare = applyMiddleware(thunkMiddleWare)(createStore);

export default createStoreWidthMiddleWare(reducer)