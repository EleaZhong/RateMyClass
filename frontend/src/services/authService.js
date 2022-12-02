import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:9090'}) // needs url still

// axios interceptor
// adds authToken as header to request for user authentication
/*API.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken')
    if (token)
        config.headers.common['X-Auth-Token'] = token
    return config
})*/

// handle user log in
const logIn = async ({email, password}) => {
    try {
        const res = await API.post(
            '/api/auth/logIn', {
                email: email,
                password: password,
            }
        )
        return res
    } catch (error) {
        console.log(error)
        return error
    }
}

// handle user register
const signUp = async ({email, password}) => {
    try {
        const res = await API.post(
            '/api/auth/signUp', {
                email: email,
                password: password,
            }
        )
        return res
    } catch (error) {
        console.log(error)
        return error
    }
}

export {
    logIn,
    signUp
}