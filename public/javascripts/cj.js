/* var gnblist = document.querySelector('.gnb>li');
        var submenu = document.querySelector('li>.gnb_submenu');

        gnblist.addEventListener('mouseenter',submenuHandler)
        gnblist.addEventListener('mouseout',submenuHandler2) 
        function submenuHandler (event){
            submenu.style.top="190px"
        }
        function submenuHandler2(event){
            submenu.style.top="-410px"
        } */
        
        $(function () {
            $(".gnb_submenu").hide();
            $(".gnb>li>a").mouseenter(function () {
                if ($(this).next().css("display") == "none") {
                    $(".gnb_submenu").hide();
                    $(this).next().show();
                };
            });
            $(".gnb_wrap .gnb_submenu").mouseleave(function () {
                $(".gnb_submenu").slideUp("fast");
            });
        });