const mongoose = require('mongoose')

const { Schema, model } = mongoose

const GoodsSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	description: {
		type: String
	},
	category: {
		type: String
	},
	// image: {
	// 	type: String
	// },
	// raiting: {
	// 	type: String
	// }
},
	{
		timestamps: true,
	}
)




module.exports = model('Goods', GoodsSchema)