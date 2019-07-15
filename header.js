$(function(){
    
    $("#header-outer").load("../html/header.html #header-inner");
    
    //js読み込みのタイミングの関係で遅延
    setTimeout(function(){
        
        //以後 ↓不要の予定?
        var gatFile = document.location.pathname.split("/").pop();
        var id;
        switch(gatFile.replace(".html", "")){
            case "index":
                id = "index_button"; 
                break;
                
            case "profile":
                id = "profile_button"; 
                break;
                
            case "product":
                id = "product_button"; 
                break;
        }
        button_elements = document.getElementById(id);
        $("#" + id).parent().css('background-color', '#d67877');
        button_elements.remove();
        //以後 ↑不要の予定?
    
        setHover();
        
        
        //スムーススクロール
        $('a[href^="#"]').click(function(){
        
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href === "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        
        
        topY =   $('#index').scrollTop();
        pflY = $('#name').pageYOffset;
        pdtY = $('#product').scrollTop();
        
        console.log(topY);
        
        window.addEventListener('scroll', function() {
        
            
            nowYpos = window.pageYOffset;
            
            
        }, false);
        
        return false;
        
    });
        
        
    },130);
    
});




function setHover(){
    
    $('.head_button').hover(function(){
    
        var id = $(this).attr("id");
        var t;
        
        switch(id){
            case "top":
                t = "トップ";
                break;
            case "prof":
                t = "自己紹介";
                break;
            case "prod":
                t = "制作物";
                break;
        }
        $(this).children("h4").text(t);
        
        $(".slide_child:not(:animated)", this).slideDown();
        
    },function(){
        
        var id = $(this).attr("id");
        var bt;
        
        switch(id){
            case "top":
                bt = "TOP";
                break;
            case "prof":
                bt = "Profile";
                break;
            case "prod":
                bt = "Product";
                break;
        }
        $(this).children("h4").text(bt);
        
        $("div.slide_child",this).slideUp();
    });
}