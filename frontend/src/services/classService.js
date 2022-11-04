import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost'}) // needs url still

// axios interceptor
// adds authToken as header to request for user authentication
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken')
    if (token)
        config.headers.common['X-Auth-Token'] = token
    return config
})

// gets all classes
const getAll = async () => {
    try {
        const res = await API.get(
            '/api/class'
        )
        return res
    } catch (error) {
        console.log(error)
        return error
    }
}

// gets one class given String classID
const getOne = async (classID) => {
    try {
        const res = await API.get(
            '/api/class/' + classCode,
        )
        return res
    } catch (error) {
        console.log(error)
        return error
    }
}

// inserts new class to db
const insert = async (classID, name) => {
    try {
        const res = await API.post(
            '/api/class/insert', {
                classID: classID,
                name: name
            }
        )
        return res
    } catch (error) {
        console.log(error)
        return error
    }
}

export {
    getAll,
    getOne,
    insert
}