$(function(){
    //$("#header-outer").load("../html/header.html #header-inner");
    $("#header-outer").load("../html/header.html #header-inner");
    
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
        
    },120);
});

//TODO 表示ページのリンク削除等

$("#last").load(function(){
  
});


function switch_page(num){
    
    var button_elements;
    
    switch(num){
        case 0:
            
            //document.getElementById("index_button").remove();
            //button_elements = document.getElementById("index_button");
            //button_elements.remove();
            break;
            
        case 1:
            break;
            
        case 2:
            break;
    }
}