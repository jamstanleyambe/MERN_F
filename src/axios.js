import axios from 'axios'


const instance = axios.create({
    baseURL: "https://b-mern-b95cd4faeeb7.herokuapp.com"
})
export default instance

