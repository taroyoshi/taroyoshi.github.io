$(function(){
    
  
    $("#header-outer").load("../html/header.html #header-inner");
    
    //js読み込みのタイミングの関係で遅延
    setTimeout(function(){
        
        //ホバーイベント
        setHover();
        
        //言語切り替え
        $("#lang_button, #sidelg").click(function(){
           
            var con_lang = $("#lang_disp").text();
            
            if(con_lang == "English"){
                $(".lang_jp").css({
                    "display": "none",
                });
                $(".lang_en").css({
                    "display": "block",
                });
                $("#lang_disp").text("日本語");
                $("#sidelg > label").text("日本語");
                $("#lang_button").css({
                    "background-color": "#66CCCC"    
                });
            }
            else if(con_lang == "日本語"){
                $(".lang_jp").css({
                    "display": "block",
                });
                $(".lang_en").css({
                    "display": "none",
                });
                $("#lang_disp").text("English");
                $("#sidelg > label").text("English");
                $("#lang_button").css({
                    "background-color": "#99FF66"    
                });
            }
                       
        });
        
        
        //サイドメニュー
        var duration = 500;
        var $sidebar = $('.sidebar');
        var $button = $('.button span');
        
        var array = [$('.img_01'), $('.img_02'), $('.img_03'), $('#sidelg')];
        
        
        $button.addClass('open');
               
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
        
        array.forEach(function(sel){
            sel.click(function(){
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
        });        
        
        //キーバリューとか使ってスマートに

        var a = document.getElementsByName('link');
        
        var indexele    = document.getElementById('index').getBoundingClientRect();
        var aboutele    = document.getElementById('about').getBoundingClientRect();
        var profele     = document.getElementById('profile').getBoundingClientRect();
        var bioele     = document.getElementById('biography').getBoundingClientRect();
        var skillele     = document.getElementById('skill').getBoundingClientRect();
        var productele  = document.getElementById('product').getBoundingClientRect();
        var iidaxeele   = document.getElementById('iidaxe_wrap').getBoundingClientRect();
        
        topY = indexele.top + window.pageYOffset;   // Y座標(絶対座標)
        aboutY = aboutele.top + window.pageYOffset;   // Y座標(絶対座標)
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
            var position = target.offset().top - 70;
            $("html, body").animate({scrollTop:position}, speed, "swing");
            
            return false;
        });
        
        window.addEventListener('scroll', function() {
                           
            controllColor();               

        }, false);
        
        controllColor();
        
    },130);
    
});


$(function(){
    
    $('.accIn').click(function(){
 
        if ($('input[id="topLb"]').prop('checked')) {

            // チェックを外す
            $('input[id="topLb"]').prop('checked', false);
        }
        if ($('input[id="profLb"]').prop('checked')) {

            // チェックを外す
            $('input[id="profLb"]').prop('checked', false);
        }
        if ($('input[id="prodLb"]').prop('checked')) {

            // チェックを外す
            $('input[id="prodLb"]').prop('checked', false);
        }
  
    });
});

//色制御
function controllColor(){
    
    nowYpos = window.pageYOffset + 70;
    
    //この定義等は要自動化 head_buttonやslide_childの数か
    var cArray = [3];
    var sArray = [4];
    var layer = [2];
    
    if((nowYpos >= topY) && (aboutY > nowYpos)){
        cArray = [1, 0, 0];
        sArray = [0, 0, 0, 0];
        layer[0] = "#f0fff0";
        layer[1] = "0.9";
    }
    else if((nowYpos >= aboutY) && (pflY > nowYpos)){
        cArray = [1, 0, 0];
        sArray = [1, 0, 0, 0];
        layer[0] = "#f0fff0";
        layer[1] = "0.9";
    }
    else if((nowYpos >= pflY) && (bioY > nowYpos)){
        cArray = [0, 1, 0];
        sArray = [0, 0, 0, 0];
        layer[0] = "#ffffe0";
        layer[1] = "0.9";
    }
    else if((nowYpos >= bioY) && (skillY > nowYpos)){
        cArray = [0, 1, 0];
        sArray = [0, 1, 0, 0];
        layer[0] = "#ffffe0";
        layer[1] = "0.9";
    }
    else if((nowYpos >= skillY) && (pdtY > nowYpos)){
        cArray = [0, 1, 0];
        sArray = [0, 0, 1, 0];
        layer[0] = "#98fb98";
        layer[1] = "0.9";
    }
    else if((nowYpos >= pdtY) && (idxY > nowYpos)){
        cArray = [0, 0, 1];
        sArray = [0, 0, 0, 0];
        layer[0] = "#ffb6c1";
        layer[1] = "0.8";
    }
    else if(nowYpos >= idxY){
        cArray = [0, 0, 1];
        sArray = [0, 0, 0, 1];
        layer[0] = "#ffb6c1";
        layer[1] = "0.8";
    }
    
    changeColor(cArray, sArray);
    
    $(".all_layer").css('transition', 'background-color 0.5s linear'); 
    //$(".all_layer").css('background-color', "rgba");
    
    
}


//ヘッダボタン, レイヤーの色変更
function changeColor(arr1, arr2){
    
    //この定義は要自動化 head_buttonやslide_childを取得すべきか
    var carr = ['top_button', 
                'prof_button', 
                'prod_button'];
                
    var sarr = ['about_button',
                'bio_button', 
                'skill_button', 
                'iidaxe_button'];
    
    for(var i = 0; i < carr.length; i++){
        if(arr1[i] == 1){
            $("#" + carr[i] + "> .hdt").css('color', 'hotpink');
        }
        else if(arr1[i] === 0){
            $("#" + carr[i] + "> .hdt").css('color', 'black');
        }
    }
    for(var j = 0; j < sarr.length; j++){
        if(arr2[j] == 1){
            $("#" + sarr[j]).css('color', 'hotpink');
        }
        else if(arr2[j] === 0){
            $("#" + sarr[j]).css('color', 'black');
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
        $(this).css('transition', 'background-color 0.3s linear'); 
        $(this).css('background-color', 'rgba(185,255,215, 0.75)');
        $(this).css('border-radius', '15px 15px 0 0/ 15px 15px 0 0');

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
        $(this).css('background-color', 'rgba(240,240,240, 0.5)');
        $(this).css('border-radius', '');
        
        $("div.slide_child",this).slideUp();
    });
    
    
    
    $('.head_button, .slide_child').hover(function(){

        $(this).css('transition', 'background-color 0.3s linear'); 
        $(this).css('background-color', 'rgba(185,255,215, 0.9)');
        
    },function(){

        $(this).css('background-color', 'rgba(240,240,240, 0.5)');
    });
}


