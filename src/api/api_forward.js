import axios from '../utils/request'
// 创建合约(单个)
export const _ForwardCreateFd = (params) => { return axios.post('/api/forward/create', params).then(res => res.data) }
// 创建合约(多个)
export const _ForwardCreateFdList = (params) => { return axios.post('/api/forward/createList', params).then(res => res.data) }
// 查询合约详情
export const _ForwardGetFdDetail = (params) => { return axios.get('/api/forward/detail', {params}).then(res => res.data) }
// 删除合约
export const _ForwardDropFd = (params) => { return axios.get('/api/forward/delete', {params}).then(res => res.data) }
