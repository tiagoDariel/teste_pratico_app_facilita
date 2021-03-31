import Axios from 'axios'

export default Axios.create({
  baseURL: 'http://localhost/problemas_back_end/public/api/',
  headers: {
    'Content-type': 'application/json'
  }
})
