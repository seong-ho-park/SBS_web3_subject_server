$(function(){
        $('.thumbs p').hide();
        $('.thumbs a').mouseenter(function(){
            $('#caption').remove();//mouseenter 할때마다 append에 의해서 생김 
           var show = $(this).attr('href')//.thumbs a의 href값을 show에 대입
            $('#largeimg > img').attr({src:show});//#largeimg에 src로 href값을 가져온다 
            var captext = $(this).next('p').text();//.thumbs a 다음에 있는 p 에 있는 text를 captext에 대입한다 
            
            $('#largeimg').append('<div id="caption"></div>');
            $('#caption').text(captext);
            var posy = $('#caption').height()+25;
            $('#caption').animate({top:'-='+posy+'px'},300);
		  //return false;
        });
        
        //leave
          $('.thumbs a').mouseleave(function(){
            $('#caption').remove();
            $('#largeimg > img').attr('src','imgsource/img1.jpg');
              //mouse시 보일 이미지 처음으로 돌아갈이미지           
        });//leave
       
    $('.thumbs a').click(function(event){
        event.preventDefault();
    });
    });