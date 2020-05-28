<template>
	<view>
		<image class="startimg" mode=""></image>
		123456
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {},
	mounted() {
		let clocker = setTimeout(() => {
			uni.redirectTo({
				url: '../index/index'
			});
			clearTimeout(clocker);
		}, 1000);
	}
};
</script>

<style>
		
</style>
