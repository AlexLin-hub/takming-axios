import Api from '@/service/api'
export default {
    // API - GET connect
    getConnect(playload) {
        console.log(playload)
        return Api().get(`/connect`)
    },
    // API - POST connect
    postConnect(playload) {
        console.log(playload)
        return Api().post(`/connect`, playload)
    },
    // API - PUT connect
    putConnect(playload) {
        console.log(playload)
        return Api().put(`/connect`, playload)
    },
    // API - DELETE connect
    deleteConnect(playload) {
        console.log(playload)
        return Api().delete(`/connect`)
    },
}