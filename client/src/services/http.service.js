import axios from 'axios'
import configFile from '../config.json'


const http = axios.create({
	baseURL: configFile.apiEndpoint
})


const httpServices = {
	get: http.get
}


export default httpServices