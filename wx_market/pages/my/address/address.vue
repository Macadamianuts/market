<template>
	<view class="address-page">
		<view class="container">
				<view class="oldaddress" v-for="(item,index) in cardInfo" :key="index">
					<view class="topview">
						<view class="name">{{item.username}}</view>
						<view class="phone">{{item.phone}}</view>
					</view>
					<view class="building">
						{{item.address}}
					</view>
					<view class="editing">
						<view class="default-tag" v-if="item.status == 0">
							<uni-tag text="默认" type="success" size="normal" />
						</view>
						<view class="address-btns">
							<view class="word1">
								<uni-icons  type="compose" size="25"></uni-icons>
								编辑
							</view>
							
							<view class="word">
								<uni-icons  type="trash" size="25"></uni-icons>
								删除
							</view>
						</view>
					</view>
				</view>
				
				<!-- 新增 -->
				<button type="primary" plain="true" class="btn" @click="toadd">添加新地址</button>
			</view>
	</view>
</template>

<script setup>
	import {
			ref,
			reactive
		} from 'vue';
	
		let cardInfo = reactive([{
				username: '孔孝真',
				address: '广东省 湛江市 赤坎区 万达6',
				phone: '13929764321',
				status: 0
			},
			{
				username: '孔孝真',
				address: '广东省 湛江市 赤坎区 万达',
				phone: '13929764321',
			},
			{
				username: '孔孝真',
				address: '广东省 湛江市 赤坎区 万达',
				phone: '13929764321',
			},
			{
				username: '孔孝真',
				address: '广东省 湛江市 赤坎区 万达',
				phone: '13929764321',
			},
			{
				username: '孔孝真',
				address: '广东省 湛江市 赤坎区 万达',
				phone: '13929764321',
			},
			{
				username: '孔孝真',
				address: '广东省 湛江市 赤坎区 万达',
				phone: '13929764321',
			},
			{
				username: '孔孝真',
				address: '广东省 湛江市 赤坎区 万达',
				phone: '13929764321',
			}
		])
		
		let toadd = () => {
			uni.navigateTo({
				url: '/pages/address/address',
				fail(error) {
					console.log(error)
				}
			})
		}
</script>

<style lang="scss" scoped>
	.container {
		width: 100vw;
		height: 95vh;
		background-color: rgb(242, 242, 242);
		padding-top: 1px;
	}

	.oldaddress {
		width: 100vw;
		// height: 300rpx;
		background-color: #fff;
		padding: 5% 5% 2%;
		box-sizing: border-box;
		margin: 3% 0 ;
		.topview {
			width: 100vw;

			.name {
				display: inline-block;
				width: 40%;
				font-size: 20px;
				color: black;
			}

			.phone {
				display: inline-block;
				width: 50%;
				text-align: right;
				font-size: 20px;
				color: black;
			}

		}

		.building {
			margin-top: 16px;
			font-size: 18px;
			color: black;
			padding-bottom: 50rpx;
			border-bottom: 1px solid #ccc;
		}
	}

	.editing {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin: 10px;
		position: relative;
		.default-tag {
			position: absolute;
			left: 0;
		}
		.address-btns {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			.word1 {
				font-size: 18px;
				margin-left: 5px;
				vertical-align: middle;
				margin-right: 10px;
			}
			.word {
				font-size: 18px;
				margin-left: 5px;
				vertical-align: middle;
			}
		}
		
	}
	.btn {
		width: 70%;
	}
</style>