
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require("cors")
const goodsRoute = require('./routes/goods.router.js')


const { setInitialData } = require('./start/initDataBase')


const app = express()
dotenv.config()
const PORT = process.env.PORT
const DB_NAME = process.env.DB_NAME
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_USER = process.env.DB_USER


app.use(cors())
app.use(express.json())
app.use(express.static('uploads'))

// routes

app.use('/api/goods', goodsRoute)

const start = async () => {
	const db = mongoose.connection;
	try {
		db.once('open', function () {
			setInitialData();
		})

		await mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/${DB_NAME}?replicaSet=rs0`)
		app.listen(PORT || 3002, () => {
			console.log('server started port ' + PORT);
		})
	} catch (error) {
		console.log(error);
	}
}




start()