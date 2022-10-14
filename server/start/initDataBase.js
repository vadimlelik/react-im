
const goodsMock = require('../mock/goods.json')
const GoodsModel = require('../models/goods.model')

async function setInitialData() {

	const goods = await GoodsModel.find()

	if (goods.length < goodsMock.length) {
		await createInitialEntity(GoodsModel, goodsMock)
	}
}

async function createInitialEntity(Model, data) {
	await Model.collection.drop()
	return Promise.all(
		data.map(async (item) => {
			try {
				const exm = await Model.find({
					name: example.name,
				});
				if (exm.length !== 0) {
					return exm[0];
				}
				delete item._id;
				const newItem = new Model(item)
				await newItem.save()
				return newItem
			} catch (error) {
				console.log(error);
			}
		})
	)
}
module.exports = { setInitialData }