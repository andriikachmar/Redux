import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cashReducer } from './cashReducer';
import { costumerReducer } from "./costumerReducer";

const rootReducer = combineReducers({
    cash: cashReducer,
    costumers: costumerReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))