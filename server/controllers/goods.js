const Goods = require('../models/goods.model.js')


const getAllGoods = async (req, res) => {
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
		const { title, price } = req.body
		const goods = new Goods({
			title, price,
			userId: req.user
		})
		await goods.save()
	} catch (error) {

	}
}

module.exports = { getAllGoods, createGoods }