import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://nlw-server-ivory.vercel.app/',
})
