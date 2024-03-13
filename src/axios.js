import axios from 'axios'


const instance = axios.create({
    baseURL: "https://b-mern-b95cd4faeeb7.herokuapp.com"
    // baseURL: "http://127.0.0.1:9000"
})
export default instance

