<template>
	<view class="page_my">
		<view class="bg"></view>
		<view class="user_msg_box">
			<view class="user_msg">
				<view class="user_img">
					<image src="https://img2.baidu.com/it/u=2421090168,324781765&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1676998800&t=55c730e826e82ea49f469e7ca0736276" mode="widthFix"></image>
				</view>
				<view class="user_mgs_list">
					<view class="user_name">咿呀呀</view>
					<uni-tag text="普通用户" type="warning" />
				</view>
				<view class="setting_btn" @click="myDetail()">
					<image src="../../static/icon/setting.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="mode_list">
			<view class="mode_item" v-for="mode in modeList.list" :key="mode.id" @click="modeDetail(mode.id)">
				<text class="number">{{mode.val}}</text>
				<view class="text">{{mode.text}}</view>
			</view>
			
		</view>
		<view class="order_list">
			<view class="order_item" @click="orderDetail(order.id)" v-for="order in orderList.list" :key="order.id">
				<view class="order_img">
					<image :src="order.url" mode="widthFix"></image>
				</view>
				<view class="text">{{ order.title }}</view>
			</view>
		</view>
		
		<view class="feature_list">
			<view class="feature_item" v-for="feature in featureList.list" :key="feature.id" @click="modeUrl(feature.id)">
				<view class="feature_message">
					<view class="feature_img">
						<image :src="feature.url"></image>
					</view>
					<view class="feature_text">{{feature.name}}</view>
				</view>
				<view class="right_img">
					<image src="../../static/feature/right.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { reactive } from 'vue'
	
	const orderList = reactive({
		list:[
			{id: 0,url:"../../static/icon/order_list.png", title:"全部订单"},
			{id: 1,url:"../../static/icon/order_pay.png", title:"待付款"},
			{id: 2,url:"../../static/icon/order_waitPay.png", title:"待发货"},
			{id: 3,url:"../../static/icon/order_wait.png", title:"待收货"},
		]
	})
	
	const modeList = reactive({
		list:[
			{id: 1, val: 200 , text:"收藏"},
			{id: 2, val: 600 , text:"浏览足迹"},
		]
	})
	
	const featureList = reactive({
		list:[
			{id: 1, url:"../../static/feature/record.png", name:"浏览记录"},
			{id: 2, url:"../../static/feature/money.png", name:"我的钱包"},
			{id: 3, url:"../../static/feature/address.png", name:"地址管理"},
			{id: 4, url:"../../static/feature/feedback.png", name:"意见反馈"},
			{id: 5, url:"../../static/feature/customer.png", name:"联系客服"},
			{id: 6, url:"../../static/feature/logout.png", name:"退出登录"},
		]
	})
	
	function myDetail() {
		uni.navigateTo({
			url: '/pages/my/detail'
		})
	}
	
	function orderDetail(id) {
		uni.navigateTo({
			url: `/pages/my/order/order?current=${id}`
		})
	}
	
	function modeDetail(id) {
		if(id == 1) {
			uni.navigateTo({
				url: "/pages/my/collect"
			})
		} else {
			uni.navigateTo({
				url: '/pages/my/record/record'
			})
		}
	}
	
	function modeUrl(id) {
		if(id == 1) {
			uni.navigateTo({
				url: '/pages/my/record/record'
			})
		} else if (id == 3) {
			uni.navigateTo({
				url: '/pages/my/address/address'
			})
		} else if(id == 4) {
			uni.navigateTo({
				url: '/pages/my/feedback/feedback'
			})
		} 
	}
</script>

<style lang="scss">
	.page_my {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
		.bg {
			width: 100%;
			height: 260upx;
			background: linear-gradient(to bottom, #2ECC71, #1D8348);
			z-index: -1;
			position: absolute;
		}
		.user_msg_box {
			width: 100%;
			margin-top: 20upx;
			.user_msg {
				display: flex;
				align-items: center;
				justify-content: space-between;
				.user_img {
					image {
						width: 136upx;
						height: 136upx;
						border-radius: 50%;
						margin: 15upx 20upx;
					}
				}
				.user_mgs_list {
					flex: 1;
					.user_name {
						color: #fff;
						font-size: 38upx;
						margin: 10upx 0;
					}
				}
				.setting_btn {
					float: right;
					color: #fff;
					image {
						width: 60upx;
						height: 60upx;
						margin-right: 10upx;
					}
				}
			}
		}
		
		.mode_list {
			width: 96%;
			height: 130upx;
			display: flex;
			align-items: center;
			justify-content: space-around;
			text-align: center;
			background-color: #fff;
			border-radius: 8upx;
			margin: 20upx auto;
			color: #333;
			
			.mode_item {
				.number {
					font-size: 38upx;
				}
				.text {
					font-size: 32upx;
				}
			}
		}
		
		.order_list {
			width: 96%;
			height: 130upx;
			display: flex;
			align-items: center;
			justify-content: space-around;
			text-align: center;
			background-color: #fff;
			border-radius: 8upx;
			margin: 20upx auto;
			color: #333;
			
			.order_item {
				width: 100%;
				image {
					width: 64upx;
					height: 64upx;
				}
			}
		}
		
		.feature_list {
			width: 96%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			text-align: center;
			background-color: #fff;
			border-radius: 8upx;
			margin: 20upx auto;
			color: #333;
			
			.feature_item {
				width: 100%;
				display: flex;
				padding: 15upx 10upx;
				border-bottom: 1px solid #ccc;
				align-items: center;
				.feature_message {
					width: 100%;
					display: flex;
					align-items: center;
					.feature_img {
						image {
							width: 54upx;
							height: 54upx;
							display: inline-block;
							margin: 0 10upx;
						}
					}
					.feature_text {
						text-align: center;
						margin: 0 10upx;
					}
				}
				.right_img {
					float: right;
					image {
						width: 44upx;
						height: 44upx;
					}
				}
			}
		}
	}
</style>