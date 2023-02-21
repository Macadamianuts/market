const BASE_URL = 'http:1270.0.01:8888/api'

/**
 * 请求
 * @param {{
 *  url: string                     请求路径
 *  data: Record<string, any>       请求参数
 *  method: string                  请求方法
 *  header: Record<string, any>     请求头
 * }} data 
 * @returns {Promise<any>}
 */
export default function({url, data = {}, method = 'get', header = {}}) {
    method = method.toLocaleUpperCase()
    const token = uni.getStorageSync('x-token')
    if (token) {
        header['Authorization'] = token;
    }
    return new Promise((resolve, reject) => {
        uni.request({
            method, data, header,
            url: BASE_URL +`${url}`,
            timeout: 5000,
            success: function(res) {
                const {data} = res
                success(data, resolve, reject)
            },
            fail: reject
        });
    })
}

/**
 * 上传文件
 * @param {string} filePath 文件临时地址
 * @param {Record<string, any>} header 请求头
 * @returns {Promise<any>}
 */
export const uploadFile = (filePath, header = {}) => {
    return new Promise((resolve, reject) => {
        const token = uni.getStorageSync('x-token')
        if (token) {
            header['Authorization'] = token;
        }
        uni.uploadFile({
            url: BASE_URL + '/rest/fileManager/uploadFiles',
            filePath,
            name: 'files',
            header,
            timeout：5000,
            success: (res) => {
                let {data} = res
                data = JSON.parse(data)
                success(data, resolve, reject)
            },
            fail: reject,
        })
    })
}

/**
 * uni请求的success回调
 * @param {Record<string, any>} data success回调的数据
 * @param {Promise.resolve} resolve
 * @param {Promise.reject} reject 
 */
function success(data, resolve, reject) {
    const {success, errorMsg, errorCode} = data
    if (success) {
        resolve(data)
    } else {
        const toLoginCodes = ['403', '431', '804', '806', '503']
        if (toLoginCodes.some(item => item == errorCode)) {
            uni.reLaunch({url: '/pages/login/index'})
            return;
        }
        uni.showToast({
            title: errorMsg,
            icon: 'error',
            duration: 3000
        });
        reject()
    }
}