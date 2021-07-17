import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `http://127.0.0.1:1201/api/v1`,
        headers: {
            sid: '',
            cid: ''
        },
    })
}