import httpServices from './http.service'



const goodspEndpoint = 'goods/'



const goodsService = {
	get: async () => {
		const { data } = await httpServices.get(goodspEndpoint)
		return data
	}
}


export default goodsService