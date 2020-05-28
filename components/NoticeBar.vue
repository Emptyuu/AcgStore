<template>
	<view>
		<u-notice-bar mode="vertical" :list="list" type="success" duration="5000"></u-notice-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					'AcgStore当前版本v1.0',
					'搜索功能尚未开放使用',
					'软件属于内测阶段',
					'祝您玩的开心'
				]
			}
		}
	}
</script>