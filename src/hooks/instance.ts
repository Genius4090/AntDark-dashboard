import axios from "axios"

const baseURL = import.meta.env.VITE_API

const instance = () => axios.create({baseURL})

export default instance