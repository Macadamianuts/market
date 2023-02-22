<template>
	<view class="orderItem-components">
		<view class="order-item" v-for="i,v in 3" :key="v">
			<view class="order-item-head">
				<view v-if="stutus == 0" class="warning">待支付</view>
				<view v-else-if="stutus == 1" class="success">已完成</view>
				<view v-else class="error">已取消</view>
				<view class="shop-number">202302210000</view>
			</view>
			<view class="order-item-middle" v-for="o,i in 3" :key="i">
				<image src="https://img2.baidu.com/it/u=311074325,4253358410&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300" class="shop-img" mode="widthFix"></image>
				<view class="shop-msg">
					<view class="shop-msg-name">香橙香橙香橙香橙香橙香橙香橙香橙香橙香橙香橙香橙香橙香橙香橙香橙香橙香橙</view>
					<view class="shop-msg-num">
						<view class="shop-price">￥29</view>
						<view class="shop-size">x1</view>
					</view>
				</view>
			</view>
			<view class="order-item-footer">
				<view class="order-msg">
					共1件商品，合计29.00元
				</view>
				<view class="order-btns">
					<view class="order-btns-close">取消订单</view>
					<view class="order-btns-pay">立即付款</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'
	const stutus = ref(0)
</script>

<style lang="scss">
	.orderItem-components {
		width: 100%;
		margin: 12upx auto;
		.order-item {
			width: 97%;
			background-color: #fff;
			border:1upx solid #ccc;
			margin: 5upx auto;
			border-radius: 14upx;
			padding: 14upx 0;
			&-head {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 15upx 10upx;
				border-bottom: 1upx solid #f4f4f4;
			}
			&-middle {
				width: 97%;
				display: flex;
				border-bottom: 1px solid #ccc;
				margin: 12upx auto;
				padding: 10upx;
				.shop-img {
					width: 180upx;
					height: 180upx;
					box-sizing: border-box;margin-right: 12upx;
				}
				.shop-msg {
					width: 98%;
					display: flex;
					align-items: flex-start;
					justify-content: space-between;
					margin: 0 auto;
					&-name {
						font-size: 32upx;
						width: 85%;
						text-overflow: -o-ellipsis-lastline;
						overflow: hidden;				//溢出内容隐藏
						text-overflow: ellipsis;		//文本溢出部分用省略号表示
						display: -webkit-box;			//特别显示模式
						-webkit-line-clamp: 2;			//行数
						line-clamp: 2;					
						-webkit-box-orient: vertical;	//盒子中内容竖直排列
					}
					&-num {
						color: #333;
						width: 15%;
						display: flex;
						flex-direction: column;
						align-items: center;
						.shop-price {
							font-size: 36upx;
							color: #F00;
						}
					}
				}
			}
			&-footer {
				display: flex;
				flex-direction: column;
				text-align: right;
				.order-msg {
					margin-right: 12upx;
					margin: 12upx 0;
					color: #333;
					margin-right: 20upx;
				}
				.order-btns {
					display: flex;
					align-items: center;
					justify-content: flex-end;
					color: #fff;
					&-close {
						background: linear-gradient(to bottom, #DC3347, #CA3043);
						border-radius: 16upx;
						padding: 12upx 24upx;
					}
					&-pay {
						background: linear-gradient(to bottom, #F4D03F, #F1C40F);
						border-radius: 16upx;
						padding: 12upx 24upx;
						margin: 0 20upx;
					}
				}
			}
		}
	}
	.success {
		color: #27AE60;
	}
	.error {
		color: #E74C3C;
	}
	.warning {
		color: #F1C40F;
	}
</style>