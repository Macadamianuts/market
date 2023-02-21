<template>
	<view class="page_home">
		<view class="seach">
			<uni-search-bar class="uni-mt-10" radius="5" placeholder="请输入搜索商品名称" clearButton="auto" cancelButton="none" @confirm="search" />
		</view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="swiperOption.indicatorDots" :autoplay="swiperOption.autoplay" :interval="swiperOption.interval"
				:duration="swiperOption.duration">
				<swiper-item v-for="swiper in swiperList">
					<view class="swiper-item">
						<image :src="swiper" mode="widthFix"></image>
					</view>
				</swiper-item>
				
			</swiper>
		</view>
		
		<view class="card_list">
			<uni-grid :column="4" :showBorder="false">
				<uni-grid-item>
					<view class="grid-box fish">鱼</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-box meat">肉</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-box vegetables">蔬</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-box egg">蛋</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<uni-section title="为你推荐" type="line"></uni-section>
		<view class="home-card-list">
			<view class="home-card-item" v-for="()item,index) in 3" @click="goDetail(index)">
				<view class="home-card-img">
					<image src="https://img1.baidu.com/it/u=2390623652,2541224583&fm=253&fmt=auto&app=138&f=JPEG?w=216&h=384" mode="widthFix"></image>
				</view>
				<view class="home-card-msg">
					<view class="shop-title">这是title这是title这是title这是title这是title这是title这是title</view>
					<view class="middle">
						<text>价格60￥</text>
						<text>月销600</text>
					</view>
					<view class="bottom">
						<uni-tag text="强哥推荐" :inverted="true" type="warning" />
					</view>
				</view>
			</view>
		</view>
		<uni-load-more status="more"></uni-load-more>
	</view>
</template>

<script setup>
	import { reactive, ref } from 'vue'
	const swiperOption = reactive({
		indicatorDots: false,
		autoplay: true,
		interval: 2000,
		duration: 500
	})
	const swiperList = ref([
			'https://img2.baidu.com/it/u=573255891,3781003769&fm=253&fmt=auto&app=138&f=JPEG?w=1250&h=500',
			'https://img1.baidu.com/it/u=3878505612,1891851307&fm=253&fmt=auto&app=138&f=JPEG?w=1250&h=500',
			'https://img0.baidu.com/it/u=3809117071,2668689623&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=172',
	])
	const more = ref(false)
	const searchValue = ref('')
	const noVal = ref('')
	
	function goDetail(id){
		console.log('id',id)
	}
</script>

<style lang="scss">
	.page_home {
		padding: 20upx;
		line-height: 24px;
		.uni-margin-wrap {
			margin: 20upx auto;
			.swiper-item {
				image {
					width: 100%;
					height: 100%;
					border-radius: 8upx;
				}
			}
		}
		.card_list {
			width: 100%;
			.grid-box {
				display: flex;
				width: 126upx;
				height: 126upx;
				align-items: center;
				justify-content: center;
				border-radius: 100%;
				color: #fff;
				margin: 12upx auto;
			}
		}
		.home-card-list {
			width: 100%;
			height: auto;
			margin: 20upx 0;
			padding: 0 10upx;
			display: flex;
			flex-wrap: wrap;
			flex: 1;
			.home-card-item {
				flex: 1;
				flex-wrap: wrap;
				min-width: 260upx;
				height: 560upx;
				margin: 20upx;
				padding: 12upx;
				background-color: #fff;
				border-radius: 8upx;
				overflow: hidden;
				.home-card-img {
					width: 100%;
					height: 360upx;
					overflow: hidden;
					image {
						width: 100%;
						height: 360upx;
					}
				}
				.home-card-msg {
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
					.middle {
						color: #666;
						font-size: 28upx;
						margin: 12upx;
						display: flex;
						align-items: center;
						justify-content: space-between;
					}
					.bottom {
						float: right;
						margin-right: 6upx;
					}
				}
			}
		}
	}
	.fish {
		background: linear-gradient(to bottom, #5D6D7E, #34495E);
	}
	.vegetables {
		background: linear-gradient(to bottom, #2ECC71, #1D8348);	
	}
	.meat {
		background: linear-gradient(to bottom, #F5B041, #DC7633);
	}
	.egg {
		background: linear-gradient(to bottom, #F4D03F , #F1C40F);
	}
</style>
