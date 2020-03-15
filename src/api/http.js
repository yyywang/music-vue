import config from './config'
import axios from 'axios'

const http = axios.create({
  baseURL: config.baseURL,
  timeout: 1000,
  auth: {username: localStorage.getItem('token')}
})

export default http
