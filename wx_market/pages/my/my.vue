<template>
	<view class="page_my">
		<view class="bg"></view>
		<view class="user_msg_login"  @click="openPopup" v-if="userData.isAuthor == false">
			<view class="user_img">
				<image src="/static/wx_logo.png" mode="widthFix"></image>
			</view>
			<view class="user_mgs_list">
				<view class="login_text">
					<button open-type="getAuthorize" scope="userInfo">微信一键登录</button></view>
			</view>
		</view>
		<view class="user_msg_box" v-else>
			<view class="user_msg">
				<view class="user_img">
					<image
						:src="userData.avatarImg"
						mode="widthFix"></image>
				</view>
				<view class="user_mgs_list">
					<view class="user_name">{{userData.nickName}}</view>
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
			<view class="feature_item" v-for="feature in featureList.list" :key="feature.id"
				@click="modeUrl(feature.id)">
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
		<view class="wx_login">
			<uni-popup ref="popup" :is-mask-click="false" type="center" background-color="#fff" :animation="true" @click="onAuthorization">
				<view class="tips">微信授权登录</view>
				<view class="avatar_msg">
					<button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
					  <image class="avatar" :src="userData.avatarImg"></image>
					</button> 
					<input type="nickname" class="weui-input" placeholder="请输入昵称"/>
				</view>
				<view class="avatar_btns">
					<view class="avatar_btns_close" @click="closePopup">取消授权</view>
					<view class="avatar_btns_submit" @click="getWxFile">确定授权</view>
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue'

	const token = ref(null)

	const orderList = reactive({
		list: [{
				id: 0,
				url: "../../static/icon/order_list.png",
				title: "全部订单"
			},
			{
				id: 1,
				url: "../../static/icon/order_pay.png",
				title: "待付款"
			},
			{
				id: 2,
				url: "../../static/icon/order_waitPay.png",
				title: "待发货"
			},
			{
				id: 3,
				url: "../../static/icon/order_wait.png",
				title: "待收货"
			},
		]
	})
	

	const modeList = reactive({
		list: [{
				id: 1,
				val: 200,
				text: "收藏"
			},
			{
				id: 2,
				val: 600,
				text: "浏览足迹"
			},
		]
	})

	const featureList = reactive({
				list: [
						{
							id: 1,
							url: "../../static/feature/record.png",
							name: "浏览记录"
						},
						{
							id: 2,
							url: "../../static/feature/money.png",
							name: "我的钱包"
						},
						{
							id: 3,
							url: "../../static/feature/address.png",
							name: "地址管理"
						},
						{
							id: 4,
							url: "../../static/feature/feedback.png",
							name: "意见反馈"
						},
						{
							id: 5,
							url: "../../static/feature/customer.png",
							name: "联系客服"
						},
						{
							id: 6,
							url: "../../static/feature/logout.png",
							name: "退出登录"
						},
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
				if (id == 1) {
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
				if (id == 1) {
					uni.navigateTo({
						url: '/pages/my/record/record'
					})
				} else if (id == 3) {
					uni.navigateTo({
						url: '/pages/my/address/address'
					})
				} else if (id == 4) {
					uni.navigateTo({
						url: '/pages/my/feedback/feedback'
					})
				}
			}

			const userData = reactive({
				avatarImg: '',
				nickName: '',
				isAuthor: false
			})
			
			function getWxFile() {
				 wx.login({
					success: (res) => {
						console.log('success: ' + JSON.stringify(res));
						// 获取 code
						let code = res.code;
						// 请求服务端，获取用户信息
						uni.request({
							url: 'http://localhost:8888/wechat/analysis',
							method: 'POST',
							data: {
								code
							},
							success: (res) => {
								console.log('success: ' + JSON.stringify(res));
								// 登录成功
								uni.showToast({
									title: '登录成功'
								});
							}
						});
					},
					fail: (err) => {
						console.log('fail: ' + JSON.stringify(err));
					}
				});
			}
			
			const popup = ref(null)
			
			function openPopup() {
				popup.value.open()
			}
			
			function closePopup() {
				popup.value.close()
			}
			
			function onChooseAvatar(e) {
			    userData.avatarImg = e.detail.avatarUrl 
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

		.user_msg_login {
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

				.login_text {
					color: #fff;
					font-size: 42upx;
					margin: 10upx 0;
				}
			}
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

					.login_text {
						color: #fff;
						font-size: 42upx;
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
		
		.wx_login {
			border-radius: 12upx;
			.tips {
				padding: 30upx 12upx;
				color: #333;
				text-align: center;
			}
			.avatar_msg {
				padding: 50upx;
				.avatar-wrapper {
					width: 230upx;
					height: 200upx;
					background-color: #fff;
					.avatar {
						width: 200upx;
						height: 200upx;
						margin-right: 50upx;
					}
				}
				.weui-input {
					margin-top: 22upx;
					margin-left: 12upx;
				}
			}
			.avatar_btns {
				display: flex;
				align-items: center;
				justify-content: space-between;
				color: #fff;
				text-align: center;
				&_close {
					flex: 1;
					color: #ABB2B9;
					padding: 15upx 0;
				}
				&_submit {
					flex: 1;
					color: #22ac38;
					padding: 15upx 0;
				}
			}
		}
	}
</style>
