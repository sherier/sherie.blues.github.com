$(function() {
	$('.header-left').onePageNav();
});

$(document).ready(function() {
				 var navoffeset=$(".header-left").offset().top;
				 $(window).scroll(function(){
					var scrollpos=$(window).scrollTop(); 
					if((scrollpos+150) >=navoffeset){
						$(".header-left").addClass("fix animated slideInDown");
					}else{
						$(".header-left").removeClass("fix animated slideInDown");
					}
				 });
				 
			});
// 百度地图API功能
			    var map = new BMap.Map('allmap');
			    var poi = new BMap.Point(113.00258,28.177303);
			    map.centerAndZoom(poi, 16);
			    map.enableScrollWheelZoom();
			    var content = '<div style="width:280px;margin:auto;line-height:20px;padding:2px;">' +
			                    '<b>蓝调音乐餐吧</b><hr/>地址：湖南省长沙市雨花区东塘北金世纪商城2楼<br/>电话：0731-82255331' +
			                  '</div>';
			
			    //创建检索信息窗口对象
			    var searchInfoWindow = null;
				searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
						title  : "蓝调音乐餐吧",      //标题
						width  : 290,             //宽度
						height : 105,              //高度
						panel  : "panel",         //检索结果面板
						enableAutoPan : true,     //自动平移
						searchTypes   :[
							BMAPLIB_TAB_SEARCH,   //周边检索
							BMAPLIB_TAB_TO_HERE,  //到这里去
							BMAPLIB_TAB_FROM_HERE //从这里出发
						]
					});
			    var marker = new BMap.Marker(poi); //创建marker对象
			    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
			    //marker.enableDragging(); //marker可拖拽
			    marker.addEventListener("click", function(e){
				    searchInfoWindow.open(marker);
			    })
			    map.addOverlay(marker); //在地图中添加marker
			    var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
				var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
				var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
				/*缩放控件type有四种类型:
				BMAP_NAVIGATION_CONTROL_SMALL：仅包含平移和缩放按钮；BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮*/
				
				//添加控件和比例尺
				function add_control(){
					map.addControl(top_left_control);        
					map.addControl(top_left_navigation);     
					map.addControl(top_right_navigation);    
				}
			    window.onload=searchInfoWindow.open(marker);
			    window.onload=add_control();