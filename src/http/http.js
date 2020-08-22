import axios from 'axios'

axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/json';        //配置请求头
axios.defaults.baseURL = 'http://47.114.113.209:9532';   //配置接口地址

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
    let oldUrl = config.url
    let token = '';

    //JSON参数
    if(config.method  === 'post'){
        config.data = JSON.stringify(config.data);
    }

    //请求带token
    if (localStorage.getItem("token")) {
        token = localStorage.getItem("token")

    }
    if (oldUrl.indexOf("?") >= 0) {
        oldUrl = oldUrl + "&token=" + token;
    } else {
        oldUrl = oldUrl + "?token=" + token;
    }

    config.url = oldUrl;

    return config;
},(error) =>{
    console.log('错误的传参')
    return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
    //对响应数据做些事
    if(!res.data.success){
        return Promise.resolve(res);
    }
    return res;
}, (error) => {
    console.log('网络异常')
    return Promise.reject(error);
});

//返回一个Promise(发送post请求)
export function fetchPost(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}
//返回一个Promise(发送get请求)
export function fetchGet(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, {params: param})
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}
export default {
    fetchPost,
    fetchGet,
}
