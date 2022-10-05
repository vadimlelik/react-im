import Goods from '../models/goods.model.js'


export const getAllGoods = async (req, res) => {
	try {
		const goods = await Goods.find()
		if (!goods) {
			return res.json({ message: ' Товаров нет ' })
		}

		res.json({ goods })
	} catch (error) {

	}
}

export const createGoods = async (req, res) => {
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