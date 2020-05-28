<template>
	<scroll-view class="infoList" :scroll-y="true" @scrolltolower="getmore" :lower-threshold="5" >
		<view class="wrap">
			<view class="item u-border-bottom" v-for="item in list" :key="item._id">{{ item.address }}</view>
			<u-loadmore :status="status" :load-text="loadText" @loadmore="getmore" margin-top="20" />
		</view>
	</scroll-view>
</template>

<script>  
import { getStore } from '../util/http.js';
export default {
	data() {
		return {
			list: [],
			status: 'loadmore',
			page: 1,
			loadText: {
				loadmore: '上拉或点击加载更多O(∩_∩)O',
				loading: '努力加载中(￣▽￣)"', 
				nomore: '真的没有了=￣ω￣=' 
			}
		};
	},
	mounted() {
		this.getmore();
	},
	methods: {  
		getmore() { 
			if(this.status == "nomore")return; 
			console.log(1)
			this.status = 'loading';
			getStore({ page: this.page, pageSize: 15 }).then(res => {
				let { code, data } = res[1].data;
				if (code == 200) {
					this.status = 'loadmore';
					this.list = this.list.concat(data.list);
					this.page++;
				} else if (code == 400) {
					this.status = 'nomore';
				} else {
					this.status = 'loadmore';
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.infoList {
	max-height: 100%;
	// overflow: auto;
	// border: 1px solid red;
}
.wrap {
	padding: 24rpx;
}

.item {
	padding: 24rpx 0;
	color: $u-content-color;
	font-size: 40rpx;
}
</style>
