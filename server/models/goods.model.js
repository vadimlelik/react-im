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
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
},
	{
		timestamps: true,
	}
)




module.exports = model('Goods', GoodsSchema)