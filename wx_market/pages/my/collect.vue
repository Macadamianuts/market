<template>
	<view class="collect-page">
		<view class="collect-shop-msg" v-for="i in 14">
			<image class="shop-img" src="https://img2.baidu.com/it/u=311074325,4253358410&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300" mode="widthFix"></image>
			<view class="shop-price">
				<view class="heart">
					<uni-icons  type="heart-filled" size="20" color="#E74C3C"></uni-icons>
				</view>
				￥29.00</view>
			
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.collect-page {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		.collect-shop-msg {
			width: 23%;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			flex-direction: column;
			border: 1upx solid #d4d4d4;
			margin: 12upx 8upx;
			padding: 8upx;
			position: relative;
			.shop-img {
				width: 155upx;
				height: 160upx;
			}
			.shop-price {
				font-size: 36upx;
				color: #F00;
				font-size: 600;
				margin: 12upx 0;
				text-align: center;
			}
			.heart {
				position: absolute;
				top: 5upx;
				right: 10upx;
				z-index: 6;
				transform: rotate(30deg);
				overflow: hidden;
			}
		}
		
	}
</style>