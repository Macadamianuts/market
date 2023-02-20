const BASE_URL = ''

export function request(options = {}){
	return new Promise((resolve,reject) => {
		uni.request({
			url:BASE_URL + options.url,
			method:options.method || 'GET',
			data:options.data || {},
			//带token发送请求
			header : {
				'x-token':getLocal('token')
			},
			success:(res) => {
				resolve(res)
			},
		    timeout: 50000,
		    complete: options.complete ?? ()=> {
			  console.log('接口调用完成')
		    },
			fail:(err) => {
				reject(err)
			}
		})
	})
}