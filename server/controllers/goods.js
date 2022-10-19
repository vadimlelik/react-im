const Goods = require('../models/goods.model.js')


const getAllGoods = async (req, res) => {
	const page = req.query.page
	console.log(page);
	try {
		const goods = await Goods.find()
		if (!goods) {
			return res.json({ message: ' Товаров нет ' })
		}

		res.json({ goods })
	} catch (error) {

	}
}

const createGoods = async (req, res) => {
	try {

		const goods = new Goods({
			...req.body
		})
		await goods.save()

		return res.json({ goods })
	} catch (error) {

	}
}

module.exports = { getAllGoods, createGoods }