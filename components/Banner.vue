<template>
	<view class="wrap">
		<u-swiper :list="list" :effect3d="true" interval="5000"></u-swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						image: 'http://www.dmoe.cc/random.php',
						title: '蒹葭苍苍，白露为霜。所谓伊人，在水一方'
					},
					{
						image: 'https://uploadbeta.com/api/pictures/random/?key=推女郎',
						title: '溯洄从之，道阻且长。溯游从之，宛在水中央'
					},
					{
						image: 'https://uploadbeta.com/api/pictures/random/?key=二次元',
						title: '蒹葭萋萋，白露未晞。所谓伊人，在水之湄'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 40rpx 0;
	}
</style>