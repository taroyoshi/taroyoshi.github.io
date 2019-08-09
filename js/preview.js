function preview(num){
    //https://ferret-plus.com/9396
    //https://webdesignday.jp/inspiration/technique/jquery-js/3847/
    modalResize("#preview");
    
    imgurl = "/img/pre" + num;
    $("#preview").css("background-image", imgurl);
    $("#preview").fadeIn("slow");
}