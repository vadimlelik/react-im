import { combineReducers, configureStore } from "@reduxjs/toolkit";
import goodsReducer from './goodsReducer'



const rootReducer = combineReducers({
	goods: goodsReducer
})



export function createStore() {

	return configureStore({
		reducer: rootReducer
	})
}