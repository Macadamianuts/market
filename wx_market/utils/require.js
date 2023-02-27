const BASE_URL = 'http://127.0.0.1:8888'

export const require = ({url,method,data,header}) =>{
	return new Promise((resolve,rejest) =>{
		uni.request({
		    url: BASE_URL + url, //仅为示例，并非真实接口地址。
		    data,
			method,
		    header: {
		        'x-token': 'Token Message' ,
				...header
		    },
		    success: (res) => {
		       resolve(res.data)
		    },
			fail: (err) => {
				rejest()
			},
			timeout:30000
		})
	})
}