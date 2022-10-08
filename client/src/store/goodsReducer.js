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
		}
	}
})

const { reducer: goodsReducer, actions } = goodsSlice
const { goodsRequested, goodsRecived, goodsRequsetFaild } = actions


export const loadGoodsList = () => async (dispatch) => {

	dispatch(goodsRequested())

	try {
		const data = await goodsService.get()
		dispatch(goodsRecived(data))

	} catch (error) {
		dispatch(goodsRequsetFaild(error.message))
	}
}


export default goodsReducer