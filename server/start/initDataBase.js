
const goodsMock = require('../mock/goods.json')
const addressMock = require('../mock/address.json')
const userMock = require('../mock/users.json')




const GoodsModel = require('../models/goods.model')
const UserModel = require('../models/user.models')
const AddresModel = require('../models/addres.model')

async function setInitialData() {

	const goods = await GoodsModel.find()
	const users = await UserModel.find()
	const adress = await AddresModel.find()

	if (goods.length < goodsMock.length) {
		await createInitialEntity(GoodsModel, goodsMock)
	}
	if (users.length < userMock.length) {
		await createInitialEntity(UserModel, userMock)
	}
	if (adress.length < addressMock.length) {
		await createInitialEntity(AddresModel, addressMock)
	}

}

async function createInitialEntity(Model, data) {
	await Model.collection.drop()
	return Promise.all(
		data.map(async (item) => {

			// console.log(item);
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