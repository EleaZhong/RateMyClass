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

// gets all classes
const getAll = async () => {
    try {
        const res = await API.get(
            '/api/class/getAll'
        )
        return res
    } catch (error) {
        console.log(error)
        return error
    }
}

// searches classes
const searchClass = async (name) => {
    try {
        const res = await API.get(
            '/api/class/search',
            {
                params: {
                    name: name
                }
            }
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
            '/api/class/get',
            {
                params: {
                    classID: classID
                }
            }
        )
        return res
    } catch (error) {
        console.log(error)
        return error
    }
}

// inserts new class to db
const insert = async (classID, name) => {
    if (!localStorage.getItem('userData'))
        return
    try {
        const res = await API.get(
            '/api/class/insert', {
                params: {
                    classID: classID,
                    name: name
                }
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
    insert,
    searchClass
}