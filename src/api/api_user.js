import axios from '../utils/request'
// 创建用户
export const _UserCreateUser = (params) => { return axios.post('/api/user/create', params).then(res => res.data) }
// 查询用户信息
export const _UserGetUserDetail = (params) => { return axios.get('/api/user/detail', {params}).then(res => res.data) }
// 删除用户
export const _UserDropUser = (params) => { return axios.get('/api/user/delete', {params}).then(res => res.data) }
// 用户登录
export const _UserLogin = (params) => { return axios.post('/api/user/login', params).then(res => res.data) }
