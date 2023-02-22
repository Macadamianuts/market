<template>
	<view class="user_detail">
		<view class="user_msg_box">
			<view class="user_msg">
				<view class="user_img">
					<image src="https://img2.baidu.com/it/u=2421090168,324781765&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1676998800&t=55c730e826e82ea49f469e7ca0736276" mode="widthFix"></image>
				</view>
				<view class="user_mgs_list">
					<view class="user_name">咿呀呀</view>
					<uni-tag text="普通用户" type="warning" />
				</view>
			</view>
			<view class="form-middle">
				<view class="form-middle-item">
					<view class="name">昵称</view>
					<view class="input">
						<input type="text" placeholder="请填写"/>
					</view>
				</view>
				<view class="form-middle-item">
					<view class="name">手机号</view>
					<view class="input">
						<input type="number" disabled="true" value="13488888888" maxlength="11"/>
					</view>
				</view>
				<view class="form-middle-item">
					<view class="name">性别</view>
					<view class="input">
						 <uni-data-select
							 class="select"
						      v-model="sexVal"
						      :localdata="sex"
						      @change="sexChange"
						    ></uni-data-select>
					</view>
				</view>
			</view>
			<view class="btns">
				<view class="update-btn">确定修改</view>
				<view class="close-btn">返回首页</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { reactive , ref } from 'vue'
	const val = ref(0)
	const sex =  reactive([
		{ val: 0, text: '女' },
		{ val: 1, text: '男' }
	])
	function sexChange(e) {
		console.log(e)
	}
</script>

<style lang="scss">
	.user_msg_box {
		margin-top: 20upx;
		border-radius: 8upx;
		.user_msg {
			width: 98%;
			background-color: #fff;
			margin:12upx auto;
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
					color: #333;
					font-size: 38upx;
					margin: 10upx 0;
				}
			}
		}
		.form-middle {
			width: 98%;
			margin: 12upx auto;
			background-color: #fff;
			padding: 12upx;
			&-item {
				width: 95%;
				margin: 12upx auto;
				display: flex;
				align-items: center;
				box-sizing: border-box;
				padding: 12upx 0;
				.name {
					width: 20%;
				}
				.input {
					width: 100%;
					border-bottom: 1upx solid #ccc;
					.select {
						border: none !important;
					}
				}
			}
		}
		.btns {
			width: 100%;
			position: absolute;
			bottom: 40upx;
			left: 50%;
			transform: translate(-50%,-50%);
			.update-btn {
				background: linear-gradient(to bottom, #2ECC71, #1D8348);
				width: 85%;
				text-align: center;
				color: #fff;
				padding: 15upx 0;
				margin: 10upx auto;
				border-radius: 16upx;
			}
			.close-btn {
				background: linear-gradient(to bottom, #DC3347, #CA3043);
				width: 85%;
				text-align: center;
				color: #fff;
				padding: 15upx 0;
				margin: 10upx auto;
				border-radius: 16upx;
			}
		}
	}
</style>