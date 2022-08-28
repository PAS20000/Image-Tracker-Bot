import axios from "axios";

const Axios = axios.create({
        baseURL : 'https://discord.com/api/'
})

export default Axios