import axios from 'axios'

let base = ''

// 发送一个post请求 axios.post('/user',{firstname:'',lastname:''}).then(res=>console.log(res)).catch(err=>console.log(err))
export const requestLogin = params => { return axios.post(`${base}/login`,params).then(res => res.data) }