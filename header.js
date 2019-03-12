$(function(){
    
    $("#header-outer").load("../html/header.html #header-inner");
    
    //js読み込みのタイミングの関係で遅延
    setTimeout(function(){
        
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
    
        setHover();
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
        
    });
}