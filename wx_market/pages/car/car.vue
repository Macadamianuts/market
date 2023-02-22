<template>
	<view class="page-car">
		<view class="shop-card-list">
			<view class="shop-card-item" v-for="item in 10" @click="selectCheckbox()">
				<view class="shop-checkbox">
					<checkbox :checked="select" color="#D12C59" class="checkbox-select"/>
				</view>
				<view class="shop-card-item-left">
					<image src="https://img2.baidu.com/it/u=311074325,4253358410&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300" mode=""></image>
				</view>
				<view class="shop-card-item-right">
					<view class="shop-title">这是商品的标题这是商品的标题这是商品的标题这是商品的标题这是商品的标题商品的标题</view>
					<view class="shop-price">
						<text class="current-price">￥169</text>
						<text class="original-price">￥199</text>
					</view>
					<view class="shop-btns">
						<uni-number-box @change="changeValue" />
						<image class="del" src="../../static/icon/del.png" mode="heightFix"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="box"></view>
		<view class="shop-msg-bottom">
			<view class="checked" @click="selectCheckbox()">
				<checkbox :checked="select" color="#D12C59" class="checkbox-select"/>全选
			</view>
			<view class="shop-middle">
				<view class="shop-msg-size">
					<view class="shop-msg-num">共计10件产品</view>
					<view class="shop-msg-price">￥1300.00</view>
				</view>
				<view class="pay-shopping">结算</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	const changeValue = ref(0)
	const select = ref(false)
	
	function selectCheckbox() {
		select.value =! select.value
	} 
</script>

<style lang="scss">
	.shop-card-list {
		width: 100%;
		box-sizing: border-box;
		display: flex;
		overflow: scroll;
		flex-direction: column;
		z-index: 1000;
		.shop-card-item {
			width: 100%;
			margin: 15upx;
			background-color: #fff;
			display: flex;
			margin: 12upx;
			border: 1px solid #ccc;
			height: 200upx;
			overflow: hidden;
			border-radius: 8upx;
			padding: 12upx;
			.shop-checkbox {
				width: 8%;
				box-sizing: border-box;
				position: relative;
				.checkbox-select {
					width: 100%;
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%,-50%);
					margin: 0 auto;
					clip: rect(6 15 15 6) !important;
				}
			}
			&-left {
				width: 23%;
				margin:  12upx;
				box-sizing: border-box;
				image {
					width: 160upx;
					height: 180upx;
				}
			}
			&-right {
				width: 60%;
				.shop-title {
					font-size: 32upx;
					color: #333;
					width: 100%;
					text-overflow: -o-ellipsis-lastline;
					overflow: hidden;				//溢出内容隐藏
					text-overflow: ellipsis;		//文本溢出部分用省略号表示
					display: -webkit-box;			//特别显示模式
					-webkit-line-clamp: 2;			//行数
					line-clamp: 2;					
					-webkit-box-orient: vertical;	//盒子中内容竖直排列
				}
				.shop-price {
					margin: 12upx 0;
					.current-price {
						color: #F00;
						font-weight: 600;
						font-size: 36upx;
					}
					.original-price {
						text-decoration: line-through;
						font-size: 28upx;
						color: #666;
					}
				}
				.shop-btns {
					display: flex;
					align-items: center;
					justify-content: space-between;
					.del {
						width: 45upx;
						height: 45upx;
						margin-right: 20upx;
					}
				}
			}
		}
	}
	.box {
		height: 100upx;
	}
	.shop-msg-bottom {
		z-index: 99;
		width: 100%;
		height: 100upx;
		position: fixed;
		bottom: 0;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #333;
		padding: 0 12upx ;
		.shop-middle {
			display: flex;
			.pay-shopping {
				width: 156upx;
				height: 80upx;
				line-height: 80upx;
				margin: 0 12upx;
				text-align: center;
				border-radius: 25upx 0 0 25upx;
				background: linear-gradient(to right, #F8C471, #E67E22);
				color: #fff;
			}
		}
	}
</style>