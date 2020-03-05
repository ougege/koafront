// import client from './apiClient'
export * from './api_forward'
export * from './api_user'
// let api = client

// api文件命名用: api_xxxxx.js
// const apiFiles = require.context('./', true, /api_.*\.js/)
// apiFiles.keys().reduce((modules, modulePath) => {
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   console.log(moduleName)
//   const value = apiFiles(modulePath)
//   api = Object.assign(api, value.default)
// }, {})

// if (process.env.VUE_ENV === 'server') {
//   const server = require('./apiServer')
//   api = Object.assign(api, server)
// }
// 是否请求远端。如果在开发时不希望调试远端接口可以增加这个判断
export const IsRequestRemote = true
