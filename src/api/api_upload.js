import axios from '../utils/request'
// 上传
export const _UploadFile = (params) => { return axios.post('/api/upload', params).then(res => res.data) }
