$(function(){
    $("#header-outer").load("../html/header.html #header-inner");
});

//TODO 表示ページのリンク削除等

function switch_page(num){
    
    //var button_elements;
    
    switch(num){
        case 0:
            
            //document.getElementById("index_button").remove();
            button_elements = document.getElementById("index_button");
            button_elements.remove();
            break;
            
        case 1:
            break;
            
        case 2:
            break;
    }
}