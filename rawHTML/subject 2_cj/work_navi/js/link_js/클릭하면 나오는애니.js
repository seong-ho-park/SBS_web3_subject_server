  $(function(){ 
        
    var slideAni = 1;
     
        $('.click').click(function(){

        if( slideAni == 1 )  {   
        $('.click_content').animate({ left:'0px'},300,'easeOutBack');		
        $('.click').animate({ left:'300px'},300,'easeOutBack');
        $('.click').text('close');
        $('.modal').show();    
        slideAni = 0;        

        } //if


        else{
        $('.click_content').animate({ left:'-300px'},300,'easeOutBack');		
        $('.click').animate({ left:'0px'},300,'easeOutBack');
        $('.click').text('open');    
        $('.modal').hide();
       slideAni = 1;
            
        }  //else
         
        }); //click
    
    });//end


/* .modal { display:none;width:100%; height:100%; background:rgba(0,0,0,0.8); position:absolute; top:0; left:0;} */
