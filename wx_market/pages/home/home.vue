<template>
	<view class="page_home">
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="swiperOption.indicatorDots" :autoplay="swiperOption.autoplay" :interval="swiperOption.interval"
				:duration="swiperOption.duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="card_list">
			<uni-grid :column="4" :showBorder="false">
				<uni-grid-item>
					<view class="grid-box">
						鱼
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-box">
						肉
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-box">
						青
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-box">
						蛋
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<uni-section title="为你推荐" type="line"></uni-section>
		<view class="home-card-list">
			<view class="home-card-left"></view>
			<view class="home-card-right">
				<view class="top">这是title</view>
				<view class="middle">
					<text>价格60￥</text>
					<text>月销600</text>
					<text class="yellow">评分5.0</text>
				</view>
				<view class="bottom">
					<uni-tag text="强哥推荐" :inverted="true" type="warning" />
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { reactive } from 'vue'
	const swiperOption = reactive({
		indicatorDots: false,
		autoplay: true,
		interval: 2000,
		duration: 500
	})
</script>

<style lang="scss">
	.page_home {
		padding: 20upx;
		line-height: 24px;
		.uni-margin-wrap {
			margin: 20upx auto;
			.swiper-item {
				width: 100%;
				height: 100%;
				border-radius: 8upx;
			}
			.uni-bg-red {
				background: red;
			}
			.uni-bg-green {
				background: green;
			}
			.uni-bg-blue {
				background: blue;
			}
		}
		.card_list {
			margin-top: 12upx;
			.grid-box {
				display: flex;
				width: 100%;
				height: 100%;
				align-items: center;
				justify-content: center;
			}
		}
		.home-card-list {
			height: 200upx;
			margin: 20upx 0;
			padding: 0 10upx;
			border-radius: 8upx;
			border: 1px solid #ccc;
			display: flex;
			justify-content: space-between;
			.home-card-left {
				width: 180upx;
				height: 180upx;
				border-radius: 8upx;
				background: red;
				margin: 10upx;
			}
			.home-card-right {
				flex: 1;
				font-size: 28upx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				.top {
					font-weight: 600;
					font-size: 34upx;
				}
				.middle {
					color: #8a8a8a;
					display: flex;
					justify-content: space-between;
					.yellow {
						color: #FFC300;
					}
				}
			}
		}
	}
</style>
