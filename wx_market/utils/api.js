import {require} from '@/utils/require.js'

export const getBanner = () =>{
	return require({
		url:'/banner/getBannerList',
		method: 'GET',
		data:{
			page: 1,
			pageSize: 5
		}
	})
}