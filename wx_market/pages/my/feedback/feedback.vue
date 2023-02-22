<template>
	<view class="feedback-page">
		<view class="feedback-box">
			<view class="feedback-box-head">
				<uni-section title="意见反馈" type="line"></uni-section>
			</view>
			<view class="feedback-box-msg">
				<textarea name="" id="text" cols="30" rows="10" placeholder="请输入你给我们的反馈意见的内容"></textarea>
			</view>
			<view class="feedback-file">
				<view class="example-body">
					<uni-file-picker limit="9" title="最多选择9张图片"></uni-file-picker>
				</view>
			</view>
			<view class="feedback-btn">提交反馈</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.feedback-box {
		.feedback-box-msg {
			width: 98%;
			margin: 20upx auto;
			#text {
				width: 100%;
				border: 1px solid #ccc;
				text-indent: 16upx;
				border-radius: 16upx;
				padding: 10upx;
				box-sizing: border-box;
			}
		}
		.feedback-file {
			width: 98%;
			margin: 20upx auto;
		}
		.feedback-btn {
			width: 85%;
			padding: 12upx 24upx;
			background: linear-gradient(to bottom, #2ECC71, #1D8348);
			color: #fff;
			position: absolute;
			bottom: 5%;
			left: 50%;
			text-align: center;
			border-radius: 12upx;
			transform: translate(-50%,-50%);
		}
	}
</style>