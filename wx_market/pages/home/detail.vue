<template>
	<view class="detail_page">
		<view class="shop-msg">
			<image class="shop-msg-img" src="https://img1.baidu.com/it/u=2390623652,2541224583&fm=253&fmt=auto&app=138&f=JPEG?w=216&h=384" mode="widthFix"></image>
			<view class="shop-msg-box">
				<view class="shop-title">这是商品名称这是商品名称这是商品名称这是商品名称这是商品名称这是商品名称这是商品名称这是商品名称</view>
				<view class="shop-price">
					<text class="price">￥299.00</text>
					<uni-tag text="强哥推荐" :inverted="true" type="warning" />
				</view>
				<view class="middle">
					<text>月销600</text>
					<text class="appraise">好评4.8</text>
				</view>
				<view class="shop-detail">
					<view class="shop-tips">商品详情</view>
					<image class="shop-detail-img" src="https://img1.baidu.com/it/u=2390623652,2541224583&fm=253&fmt=auto&app=138&f=JPEG?w=216&h=384" mode="widthFix"></image>
				</view>
				<view class="known-box"></view>
				<view class="shop-footer">
					<uni-goods-nav :fill="true"  :options="goodsData.options" :buttonGroup="goodsData.buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
				</view>
			</view>
			
		</view>
	</view>
</template>

<script setup>
	import {reactive} from 'vue'
	const goodsData = reactive({
		options: [{
					icon: 'headphones',
					text: '客服'
				}, 
				{
					icon:'star',
					text:'收藏'
				},
				{
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
		buttonGroup: [{
				  text: '加入购物车',
				  backgroundColor: '#ff0000',
				  color: '#fff'
				},
				{
				  text: '立即购买',
				  backgroundColor: '#ffa200',
				  color: '#fff'
				}]
	})
</script>

<style lang="scss">
	.shop-msg {
		width: 100%;
		height: 100%;
		&-img {
			width: 100%;
			height: 400upx;
		}
		&-box {
			width: 100%;
			background-color: #fff;
			padding: 10upx 0;
			.shop-title {
				font-size: 38upx;
				font-weight: 600;
				width: 98%;
				margin: 12upx auto;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;				//溢出内容隐藏
				text-overflow: ellipsis;		//文本溢出部分用省略号表示
				display: -webkit-box;			//特别显示模式
				-webkit-line-clamp: 2;			//行数
				line-clamp: 2;					
				-webkit-box-orient: vertical;	//盒子中内容竖直排列
				padding: 8upx 0;
			}
			
			.shop-price {
				width: 98%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 15upx auto ;
				box-sizing: border-box;
				padding: 8upx 0;
				.price {
					color: #f00;
					font-size: 38upx;
					font-weight: 600;
				}
			}
			.middle {
				width: 97%;
				display: flex;
				color: #333;
				font-size: 28upx;
				margin: 12upx auto;
				align-items: center;
				justify-content: space-between;
				.appraise {
					color: #F39C12;
					font-weight: 600;
				}
			}
			.shop-detail {
				.shop-tips {
					width: 100%;
					padding: 20upx 0;
					text-align: center;
					background-color: #E74C3C;
					color: #fff;
				}
				.shop-detail-img {
					display: block;
					width: 100%;
					height: auto;
				}
			}
			.shop-footer {
				width: 100%;
				height: 100upx;
				position: fixed;
				bottom: -10upx;
				height: 100upx;
			}
		}
	}
	.known-box {
		width: 100%;
		height: 100upx;
	}
	
</style>