import { createAction, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import goodsService from '../services/good.service'


const initialState = {
	entities: null,
	isLoading: true,
	error: null
}

const goodsSlice = createSlice({
	name: 'goods',
	initialState,
	reducers: {
		goodsRequested: (state) => {
			state.isLoading = true
		},
		goodsRecived: (state, action) => {
			state.isLoading = false;
			state.entities = action.payload.goods
		},
		goodsRequsetFaild: (state, action) => {
			state.error = action.payload
			state.isLoading = false
		},
		goodCreate: (state, action) => {
			if (!Array.isArray(state.entities)) {
				state.entities = [];
			}
			console.log(action, 'action');
			state.entities.push(action.payload)
		}
	}
})

const { reducer: goodsReducer, actions } = goodsSlice
const { goodsRequested, goodsRecived, goodsRequsetFaild, goodCreate } = actions


export const loadGoodsList = () => async (dispatch) => {

	dispatch(goodsRequested())

	try {
		const data = await goodsService.get()
		dispatch(goodsRecived(data))

	} catch (error) {
		dispatch(goodsRequsetFaild(error.message))
	}
}

export const createGoods = (payload) => async (dispatch) => {
	console.log(payload, 'payload');
	try {
		const { goods } = await goodsService.createGoods(payload)
		console.log(goods);
		dispatch(goodCreate(goods))

	} catch (error) {
		console.log(error);
	}

}


export default goodsReducer