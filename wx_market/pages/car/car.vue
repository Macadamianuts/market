<template>
	<view class="page-car">
		<view class="shop-card-list">
			<view class="shop-card-item" v-for="item in 10">
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
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	const changeValue = ref(0)
</script>

<style lang="scss">
	.shop-card-list {
		width: 100%;
		display: flex;
		flex-direction: column;
		.shop-card-item {
			margin: 15upx;
			background-color: #fff;
			display: flex;
			margin: 12upx;
			border: 1px solid #ccc;
			height: 200upx;
			overflow: hidden;
			border-radius: 8upx;
			&-left {
				image {
					width: 160upx;
					height: 180upx;
					margin:  12upx;
				}
			}
			&-right {
				width: 100%;
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
</style>