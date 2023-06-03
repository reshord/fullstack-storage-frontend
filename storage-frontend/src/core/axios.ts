import axios, {InternalAxiosRequestConfig} from 'axios'
import {parseCookies} from 'nookies'

axios.defaults.baseURL = 'http://localhost:4444'

axios.interceptors.request.use((config): any => {

    if(typeof window !== 'undefined') {
        const {_token} = parseCookies()

        config.headers.Authorization = `Bearer ${_token}`
    }
})

export default axios