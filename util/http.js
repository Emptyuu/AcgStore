export const getStore = ({page=1,pageSize=20}) => {
	return uni.request({ 
		url: `http://192.168.0.103:3000/api/user/getStore?pageSize=${pageSize}&page=${page}`, //仅为示例，并非真实接口地址。
	});  
}