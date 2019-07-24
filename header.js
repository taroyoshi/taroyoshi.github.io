$(function(){
    
    $("#header-outer").load("../html/header.html #header-inner");
    
    //js読み込みのタイミングの関係で遅延
    setTimeout(function(){
        
        //↓不要に 参考の為保存
        /*
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
        */
        
        
        //ホバーイベント
        setHover();
        
        
         //サイドメニュー
        var duration = 500;
        var $sidebar = $('.sidebar');
        var $button = $('.button a');
        var $a = $('.img_03');
        
        $button.addClass('open');
        //↑のaddclass openは1回？
        
        $button.click(function(){
            $button.toggleClass('close');
            $button.removeClass('open');
            
            if ($button.hasClass('close')){
                $sidebar.stop().animate({
                    left: '0'
                }, duration, 'easeOutQuint');
            }
            else{
                $sidebar.stop().animate({
                    left: '-100px'
                }, duration, 'easeOutQuint');
                $button.addClass('open');
            }
        });
        $a.click(function(){
            $button.toggleClass('close');
            $button.removeClass('open');
            
            if ($button.hasClass('close')){
                $sidebar.stop().animate({
                    left: '0'
                }, duration, 'easeOutQuint');
            }
            else{
                $sidebar.stop().animate({
                    left: '-100px'
                }, duration, 'easeOutQuint');
                $button.addClass('open');
            }
        });
        
        
        
        //キーバリューとか使ってスマートに
        
        var indexele    = document.getElementById('index').getBoundingClientRect();
        var profele     = document.getElementById('profile').getBoundingClientRect();
        var bioele     = document.getElementById('biography').getBoundingClientRect();
        var skillele     = document.getElementById('skill').getBoundingClientRect();
        var productele  = document.getElementById('product').getBoundingClientRect();
        var iidaxeele   = document.getElementById('iidaxe_wrap').getBoundingClientRect();
        
        topY = indexele.top + window.pageYOffset;   // Y座標(絶対座標)
        pflY = profele.top + window.pageYOffset;   // Y座標(絶対座標)
        bioY = bioele.top + window.pageYOffset;   // Y座標(絶対座標)
        skillY = skillele.top + window.pageYOffset;   // Y座標(絶対座標)
        pdtY = productele.top + window.pageYOffset;   // Y座標(絶対座標)
        idxY = iidaxeele.top + window.pageYOffset;   // Y座標(絶対座標)
            
        
        //スムーススクロール
        $('a[href^="#"]').click(function(){
        
            var speed = 500;
            var href= $(this).attr("href");
            var target = $(href == "#" || href === "" ? 'html' : href);
            var position = target.offset().top - 69;
            $("html, body").animate({scrollTop:position}, speed, "swing");
            
            return false;
        
        });
        
        window.addEventListener('scroll', function() {
                           
            controllColor();               

        }, false);
        
        controllColor();
        
    },130);
    
});



//色制御
function controllColor(){
    
    nowYpos = window.pageYOffset + 70;
            
    var cArray = [3];
    var sArray = [3];
    var layer;
    
    if((nowYpos >= topY) && (pflY > nowYpos)){
        cArray = [1, 0, 0];
        sArray = [0, 0, 0];
        layer = "rgba(255,255,255,0.1)";
    }
    else if((nowYpos >= pflY) && (bioY > nowYpos)){
        cArray = [0, 1, 0];
        sArray = [0, 0, 0];
        layer = "rgba(200,200,255,0.5)";
    }
    else if((nowYpos >= bioY) && (skillY > nowYpos)){
        cArray = [0, 1, 0];
        sArray = [1, 0, 0];
        layer = "rgba(200,200,255,0.5)";
    }
    else if((nowYpos >= skillY) && (pdtY > nowYpos)){
        cArray = [0, 1, 0];
        sArray = [0, 1, 0];
        layer = "rgba(200,200,255,0.5)";
    }
    else if((nowYpos >= pdtY) && (idxY > nowYpos)){
        cArray = [0, 0, 1];
        sArray = [0, 0, 0];
        layer = "rgba(200,255,200,0.5)";
    }
    else if(nowYpos >= idxY){
        cArray = [0, 0, 1];
        sArray = [0, 0, 1];
        layer = "rgba(200,255,200,0.5)";
    }
    
    changeColor(cArray, sArray);
    
    $(".all_layer").css('transition', 'background-color 0.5s linear'); 
    $(".all_layer").css('background-color', layer); 
    
}


//ヘッダボタン, レイヤーの色変更
function changeColor(arr1, arr2){
    
    var carr = ['top_button', 
                'prof_button', 
                'prod_button'];
                
    var sarr = ['bio_button', 
                'skill_button', 
                'iidaxe_button'];
    
    for(var i = 0; i < carr.length; i++){
        if(arr1[i] == 1){
            $("#" + carr[i]).css('background-color', '#d67877'); 
        }
        else if(arr1[i] === 0){
            
            $("#" + carr[i]).css('background-color', 'rgb(255,175,255)'); 
        }
    }
    for(var j = 0; j < sarr.length; j++){
        if(arr2[j] == 1){
            $("#" + sarr[j]).css('background-color', 'rgb(100,175,155)'); 
        }
        else if(arr2[j] === 0){
            
            $("#" + sarr[j]).css('background-color', 'rgb(200,175,255)'); 
        }
    }
}

//ヘッダボタンホバーイベント
function setHover(){
    
    $('.head_button').hover(function(){
    
        var id = $(this).attr("id");
        var t;
        
        switch(id){
            case "top_button":
                t = "トップ";
                break;
            case "prof_button":
                t = "自己紹介";
                break;
            case "prod_button":
                t = "制作物";
                break;
        }
        $(this).children(".hdt").text(t);
        
        $(".slide_child:not(:animated)", this).slideDown();
        
    },function(){
        
        var id = $(this).attr("id");
        var bt;
        
        switch(id){
            case "top_button":
                bt = "TOP";
                break;
            case "prof_button":
                bt = "Profile";
                break;
            case "prod_button":
                bt = "Product";
                break;
        }
        $(this).children(".hdt").text(bt);
        
        $("div.slide_child",this).slideUp();
    });
}


