//bxslider 기본
$(function() {
    var slider = $('.bxslider').bxSlider({
	        //slideWidth:1000,
			auto: true,             // auto 슬라이드
			speed:2000,             // 이동 속도를 설정
			mode:'fade',            //트랜지션 
			autoControls: true ,   //stop play 버튼
			pagerCustom: '#bx-pager1',  //아래점 안보이게 하기
		    //controls:false,       //양옆에 점 안보이게 하기 
		    //autoHover: true,         // 마우스 호버시 정지 여부
		});//bx

		// 클릭시 멈춤 현상 해결 
		$(document).on('hover','.bx-next, .bx-prev, .bx-pager, #bx-pager1 ',function() { 
		slider.stopAuto(); //변수확인
        slider.startAuto();	//변수확인		
		});
		
	});

/*
indicator
.bx-pager{position:absolute;top:550px;left:50%;z-index:99;}
.bx-pager a{background-color:crimson!important;}
.bx-pager a.active{background-color:aqua!important;}

//play-stop

.bx-controls-auto{position:absolute;top:100px; right:0;width:100px;height:50px;border:5px solid #339900;
    z-index:9999;}

*/

//bxslider여러장
	$(document).ready(function(){
		$('.bxslider1').bxSlider({
			mode: 'horizontal',
			moveSlides: 1,
			slideMargin: 40,
			infiniteLoop: true,
			slideWidth: 600,
			minSlides: 3,//반드시 있어야함 sliderbox와 동일하게
			maxSlides: 3,
			speed: 800,
		});
	});
