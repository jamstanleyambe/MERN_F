import axios from 'axios'

const instance = axios.create({
    baseURL: "https://mern-live-back-5e9639042351.herokuapp.com/"
})
export default instance
