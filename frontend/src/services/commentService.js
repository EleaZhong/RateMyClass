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

// gets all comments given String classID
const get = async (classID) => {
    try {
        const res = await API.get(
            '/api/comment',
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

// inserts new comment
const insert = async (professor, text, rating,semester, classID) => {
    if (!localStorage.getItem('userID'))
        return
    try {
        
        const res = await API.get(
            '/api/comment/insert', 
            {
                params: {
                    professor: professor,
                    semester: semester,
                    text: text,
                    rating: rating,
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

// upvotes comment
const upvote = async (commentID) => {
    if (!localStorage.getItem('userID'))
        return
    try {
        const res = await API.post(
            '/api/comment/upvote', {
                commentID: commentID,
            }
        )
        return res
    } catch (error) {
        console.log(error)
        return error
    }
}

export {
    get,
    insert,
    upvote
}