 
$(function(){
$('.slideshow').each(function(){//.each:slideshow 라는 class속성값의 요소을 찾은다음 각각의 괄호안에 있는 요소를 적용한다. class-ul
    var $slides = $(this).find('li'),/*find:.slideshow 요소 하위요소를 선택한다 그리고 li를 $slides대입한다. var 변수명 = 대입할것 은 그냥 변수그자체를 대입 하는것이고 $변수명 = 대입할것 은 변수에 각 오브젝트를 대입할때 쓴다 */
        slideCount = $slides.length,//슬라이드의 갯수파악한다
        currentIndex = 0;//현재 슬라이드의 인덱스
    
        $slides.eq(currentIndex).fadeIn();
        setInterval(showNextSlide ,3000);
     //다음슬라이드를 표현하는함수//
    function showNextSlide(){
        //다음에 보여줄 슬라이드 인덱스를 저장 
        //(만약에 마지막 슬라이드면 첫번째 슬라이드 인덱스를 저장) 
     var nextIndex = (currentIndex + 1) % slideCount;
     //다음 슬라이드를 페이드아웃
        $slides.eq(currentIndex).fadeOut();
      //다음슬라이드를 페이드 인 
        $slides.eq(nextIndex).fadeIn();
        //현재표시된 slide 인덱스를 저장
         currentIndex=nextIndex;
     }//showNextSlide

});//each
    
    });//    
