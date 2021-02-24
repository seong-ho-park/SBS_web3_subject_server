
$(function(){
    var menu =$('.lnb>li'); //.lnb=ul
    var contents = $('.content_all > section');
    
    menu.click(function(event){
    event.preventDefault();
    //li>a 에까지 클리되는것을 막는다
        var tg = $(this);
    //클릭된 요소를 변수 tg에 할당한다 
        var i =tg.index();
    //클릭된 요소를 index i에 할당한다 
        
     var section = contents.eq(i);
    //섹션요소중 변수 i 값과 일치하는 index를 갖는 요소를 선택하여 section에 할당한다 
     var tt = section.offset().top; //top값 
    //메뉴에 클릭이벤트가 호출되었을때 메뉴와 일치하는 index section으로부터 document에서의top 위치값을 얻어 변수 tt 에 저장한다.    
    $('html,body').stop().animate({scrollTop:tt});   
    });//event
});
