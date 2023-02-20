export function getSwiperList(data) {
	return request({
		url: '/api/v1/testPaper/findByParam',
		method: 'GET',
		data
	})
}