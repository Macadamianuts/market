export function getSwiperList(data) {
	return request({
		url: '/api/v1/testPaper/findByParam',
		method: 'GET',
		data
	})
}

export function Login(data) {
	return request({
		url:'/wechat/analysis',
		methods: 'POST',
		data
	})
}