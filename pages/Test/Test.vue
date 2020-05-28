
<template>
	<scroll-view class="List" :scroll-y="true" @scrolltolower="test">
		<ul>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>123456</li>
			<li>shabi</li>
		</ul>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			test(){
				console.log(123)
			}
		}
	}
</script>

<style scoped lang="scss">
	.List{
	height: 650upx;
	width: 100%;
	border: 1upx solid #000;
	}
</style>
