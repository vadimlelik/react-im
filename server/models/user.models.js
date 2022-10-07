const mongoose = require('mongoose')

const { Schema, model } = mongoose


const UserShema = new Schema({
	name: {
		type: String,
		requred: true,
		unique: true
	},
	email: {
		type: String,
		requred: true,

	},
	password: {
		type: String,
		required: true,
	},
	address: {
		type: Schema.Types.ObjectId,
		ref: "Address"
	},
	cart: [{
		count: {
			type: Number,
			required: true,
			default: 1
		},
		goodsId: {
			type: Schema.Types.ObjectId,
			ref: 'Goods',
			required: true
		}
	}]
}, { timestamps: true },
)


module.exports = model('User', UserShema)