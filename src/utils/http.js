
import axios from 'axios'
import webconfig from '../webconfig'

axios.defaults.baseURL = '/api';
axios.defaults.withCredentials = false
const $http = (url = '', type = 'GET', data = {}, _config = {}, _vue = {}) => {
  return new Promise((resolve, reject) => {
    type = type.toUpperCase()
    const config = Object.assign(_config, {
      method: type, url
    })
    if (['GET', 'DELETE'].includes(type)) {
      config.params = data
    } else {
      Object.assign(config, {
        headers: { 'Content-Type': 'multipart/form-data'}
      })
      const formdata = new FormData()
      for (let key in data) {
        formdata.append(key, data[key])
      }
      config.data = formdata
    }
    axios(config).then(response => {
      if (response.data.Code == 302 || response.data.Code == 303) {
        _vue.$router.push({ path: 'err', query: { errmsg: response.data.ErrMessage } })
      } else {
        resolve(response.data)
      }
    }).catch(err => reject(err))
  })
}

export const $get = (url, data, _config, _vue) => {
  return $http(url, 'GET', data, _config, _vue)
}

export const $post = (url, data, _config, _vue) => {
  return $http(url, 'POST', data, _config, _vue)
}
