<template>
	<div class="home_div" style="height:100%">
			<div id="container"></div>
	</div>
</template>
<script>
import AMapLoader from "@amap/amap-jsapi-loader"
import { shallowRef } from '@vue/reactivity'
export default {
	name:"mapcomtaint",
	setup(){
			const map = shallowRef(null);
			return{
					map,
			}

	},
	create(){

	},
	methods:{
			ininMap(){
					AMapLoader.load({
							key:'82c40fd8fb83a68e1513783c57ce7d3f',  //设置您的key
							version:"2.0",
							plugins:['AMap.ToolBar','AMap.Driving'],
							AMapUI:{
									version:"1.1",
									plugins:[],

							},
							Loca:{
									version:"2.0.0"
							},
					}).then((AMap)=>{
							this.map = new AMap.Map("container",{
									viewMode:"3D",
									zoom:5,
									zooms:[2,22],
									center:[105.602725,37.076636],
							});

							for(let item of positionArr){
									let marker = new AMap.Marker({
											position:[item[0],item[1]],
									});
									this.map.add(marker);
							}


					}).catch(e=>{
							console.log(e);
					})
			},
			addMarker(){
					
			}
	},
	mounted(){
			//DOM初始化完成进行地图初始化
			this.ininMap();
	}
}
</script>
<style scope>
	.home_div{
			height: 100%;
			width: 100%;
			padding: 0px;
			margin: -29px 0 0 0px;
			position: relative;
	}
	#container{
			height: 47vh;
			width: 100%;
			padding: 0px;

	}

	h3{
			position:absolute;
			left: 10px;
			z-index: 2;
			color: white;
	}
	



</style>