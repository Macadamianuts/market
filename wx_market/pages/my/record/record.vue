<template>
	<view class="record-page">
		<view class="record-shop-msg" v-for="i in 14">
			<image class="shop-img" src="https://img2.baidu.com/it/u=311074325,4253358410&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300" mode="widthFix"></image>
			<view class="shop-price">￥29.00</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.record-page {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		.record-shop-msg {
			width: 22%;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			flex-direction: column;
			border: 1upx solid #d4d4d4;
			margin: 12upx;
			padding: 8upx;
			.shop-img {
				width: 140upx;
				height: 160upx;
			}
			.shop-price {
				font-size: 36upx;
				color: #F00;
				font-size: 600;
				margin: 12upx 0;
				text-align: center;
			}
		}
	}
</style>