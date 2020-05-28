<template>
	<view class="box">
		<view class="top">
			<Header></Header>
			<NoticeBar></NoticeBar>
			<Banner></Banner>
		</view>
		<view class="bottom"><InfoList></InfoList></view>
	</view>
</template>
<script>
import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import NoticeBar from '@/components/NoticeBar.vue';
import InfoList from '@/components/InfoList.vue';
export default {
	components: {
		Header,
		Banner,
		NoticeBar,
		InfoList,
	}
};
</script>
<style lang="scss" scoped>
.box {
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	.bottom {
		display: flex;
		flex: 1;
		// flex-direction: column; 
	}
}
</style>
