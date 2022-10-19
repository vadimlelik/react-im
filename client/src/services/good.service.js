import httpServices from './http.service'



const goodspEndpoint = 'goods/'



const goodsService = {
	get: async () => {
		const { data } = await httpServices.get(goodspEndpoint)
		return data
	},
	createGoods: async (payload) => {
		const { data } = await httpServices.post(goodspEndpoint + 'create-goods', payload)
		return data
	}
}


export default goodsService