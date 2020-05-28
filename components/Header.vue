<template>
	<view>
		<u-navbar :is-back="false" title="" :background="background">
			<view class="slot-wrap">
				<u-search placeholder="雷姆" v-model="keyword" :clearabled="true" input-align="center" :action-style="{ color: 'white' }" @custom="searchCli"></u-search>
			</view>
		</u-navbar>
		<view><u-toast ref="uToast" /></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			background: {
				backgroundImage: 'linear-gradient(45deg, #3494E6, #EC6EAD)'
			},
			keyword: ''
		};
	},
	methods: {
		searchCli() {
			this.$refs.uToast.show({
				title: '当前功能尚未开放使用哦',
				type: 'warning'
			});
		}
	}
};
</script>

<style scoped lang="scss">
.slot-wrap {
	display: flex;
	align-items: center;
	/* 如果您想让slot内容占满整个导航栏的宽度 */
	flex: 1;
	/* 如果您想让slot内容与导航栏左右有空隙 */
	padding: 0 30rpx;
}
</style>
