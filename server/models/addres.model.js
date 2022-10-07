const mongoose = require('mongoose')


const { Schema, model } = mongoose


const AddresSchema = new Schema({
	city: {
		type: String
	},
	street: {
		type: String
	},
	number: {
		type: Number
	},
	zipcode: {
		type: String
	},
})


module.exports = model("Address", AddresSchema)