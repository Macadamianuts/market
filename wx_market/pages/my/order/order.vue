<template>
	<view class="oder_page">
		<view class="uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="current" :values="orderNav.items" :style-type="orderNav.styles"
				:active-color="orderNav.colors" @clickItem="onClickItem" />
		</view>
		<view class="content">
			<view v-if="current === 0"><orderItem></orderItem></view>
			<view v-if="current === 1">2222</view>
			<view v-if="current === 2">3333</view>
			<view v-if="current === 3">4444</view>
		</view>
	</view>
</template>

<script setup>
	import orderItem from '/components/orderItem/orderItem.vue'
	import { ref, reactive, onMounted } from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	const current = ref(0)
	const orderNav = reactive({
		items:['全部订单','待付款','待发货','待收货'],
		styles: 'text',
		colors: '#1D8348',
	})
	function onClickItem(e) {
		console.log("eeeee",e)
		if (current.value !== e.currentIndex) {
			current.value = e.currentIndex
		} 
	}
	onLoad((options) => {
		current.value = parseInt(options.current)
	});
</script>

<style>
</style>