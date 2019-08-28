$(function(){
  
    $("#header-outer").load("../html/header.html #header-inner");
    
    //js読み込みのタイミングの関係で遅延
    setTimeout(function(){
        
        //ホバーイベント
        setHover();
        
        $(window).resize( function() {
            $('.slider.slick-initialized').slick('unslick');
            sliderControl();
        });
        
        sliderControl();
        
        //slick
        /*
        $('.slider').slick({
            autoplay:true,
            autoplaySpeed:2500,
            dots:true,
            centerMode: false
        });
        */
        
        //サイドメニュー入れ替え
        $("#tg_button").click(function(){
            
            if($("#tg_button").hasClass("left")){
                
                $(".sidebar").css('left', 'initial');
                $(".sidebar").css('right', '-100px');
                $(".button > span").css('left', 'initial');
                $(".button > span").css('right', '100px');
            }
            else{
                $(".sidebar").css('left', '-100px');
                $(".sidebar").css('right', 'initial');
                $(".button > span").css('left', '100px');
                $(".button > span").css('right', 'initial');
            }

            $(this).toggleClass("left");
        });



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

                if($("#tg_button").hasClass("left")){
                    $sidebar.stop().animate({
                        left: '0'
                    }, duration, 'easeOutQuint');
                }
                else{
                    $sidebar.stop().animate({
                        right: '0'
                    }, duration, 'easeOutQuint');
                }                
            }
            else{
                if($("#tg_button").hasClass("left")){
                    $sidebar.stop().animate({
                        left: '-100px'
                    }, duration, 'easeOutQuint');
                }
                else{
                    $sidebar.stop().animate({
                        right: '-100px'
                    }, duration, 'easeOutQuint');
                }
                $button.addClass('open');
            }
        });
        
        array.forEach(function(sel){
            sel.click(function(){
                $button.toggleClass('close');
                $button.removeClass('open');
                
                if ($button.hasClass('close')){
                    if($("#tg_button").hasClass("left")){
                        $sidebar.stop().animate({
                            left: '0'
                        }, duration, 'easeOutQuint');
                    }
                    else{
                        $sidebar.stop().animate({
                            right: '0'
                        }, duration, 'easeOutQuint');
                    }
                }
                else{
                    if($("#tg_button").hasClass("left")){
                        $sidebar.stop().animate({
                            left: '-100px'
                        }, duration, 'easeOutQuint');
                    }
                    else{
                        $sidebar.stop().animate({
                            right: '-100px'
                        }, duration, 'easeOutQuint');
                    }
                    $button.addClass('open');
                }
            });                
        });        
        
        var hov_names = document.getElementsByName('hov_name');

        hov_names.forEach(function(sel){
            cls = "." + sel.className;

            $(cls).hover(function(){
                var exname;

                switch(this.className){
                    case "araki":
                        exname1 = "ジョジョの奇妙な冒険";
                        exname2 = "";
                    break;
                    case "kita":
                        exname1 = "喧嘩稼業";
                        exname2 = "";
                    break;
                    case "togashi":
                        exname1 = "HUNTER×HUNTER";
                        exname2 = "";
                    break;
                    case "boichi":
                        exname1 = "サンケンロック";
                        exname2 = "";
                    break;
                    case "ishiwatari":
                        exname1 = "";
                        exname2 = "GUILTY GEAR";
                    break;
                    case "kakuta":
                        exname1 = "";
                        exname2 = "L.E.D.";
                    break;
                    case "saito":
                        exname1 = "";
                        exname2 = "kors k";
                    break;
                    case "kaneko":
                        exname1 = "";
                        exname2 = "女神転生";
                    break;
                }

                $(".example1").fadeIn();
                $(".example2").fadeIn();
                $(".example1").text(exname1);
                $(".example2").text(exname2);

            },function(){
                $(".example1").fadeOut();
                $(".example2").fadeOut();
                $(".example1").text("");
                $(".example2").text("");
            });
        });

        //キーバリューとか使ってスマートに
        //name属性全て取得してどうにか要自動化
        var indexele    = document.getElementById('index').getBoundingClientRect();
        var abtpele    = document.getElementById('about_p').getBoundingClientRect();
        var abtmele    = document.getElementById('about_m').getBoundingClientRect();
        var profele     = document.getElementById('profile').getBoundingClientRect();
        var bioele     = document.getElementById('biography').getBoundingClientRect();
        var perele     = document.getElementById('personal').getBoundingClientRect();
        var skillele     = document.getElementById('skill').getBoundingClientRect();
        var productele  = document.getElementById('product').getBoundingClientRect();
        var iidaxeele   = document.getElementById('iidaxe').getBoundingClientRect();
        var contactele   = document.getElementById('contact').getBoundingClientRect();
        
        topY = indexele.top + window.pageYOffset -20;   
        abtpY = abtpele.top + window.pageYOffset -20;   
        abtmY = abtmele.top + window.pageYOffset -20;  
        pflY = profele.top + window.pageYOffset -20;   
        bioY = bioele.top + window.pageYOffset -20; 
        perY = perele.top + window.pageYOffset -20; 
        skillY = skillele.top + window.pageYOffset -20; 
        pdtY = productele.top + window.pageYOffset -20;  
        idxY = iidaxeele.top + window.pageYOffset -20;  
        contY = contactele.top + window.pageYOffset -20;  
        
        //スムーススクロール
        $('a[href^="#"]').click(function(){
        
            var speed = 600;
            var href= $(this).attr("href");
            var target = $(href);
            //var target = $(href == "#" || href === "" ? 'html' : href);
            var position = target.offset().top - 45;//要調整
            $("html, body").animate({scrollTop:position}, speed, "swing");
            
            return false;
        });
        
        //スクロール時にイベント付与
        addScrollEvent();
        //直後に色変更
        controllColor();
        AOS.refreshHard();
    },200);
    
});







////////////////////////////////////////////////
//サイドメニューコントロール, モーダル位置
////////////////////////////////////////////////
$(function(){
    
    $(".slider img").click(function(){
        //画面中央を計算する関数を実行
        modalResize("#iidaxe_modal");
        //レイヤー黒に
        $(".all_layer").css('background-color', "rgba(0, 0, 0, 0.8)");
        
        //モーダルウィンドウを表示
        $("#iidaxe_modal").fadeIn("slow", function(){
            //モーダル外クリックでモーダル非表示
            $(".all_layer").click(function(){
                $("#iidaxe_modal").fadeOut();
                addScrollEvent();
                controllColor();
                $(".all_layer").off();
            });
        });

        window.removeEventListener('scroll', controllColor, true);
    });

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



///////////////////////////////////////////////////
//以下個別関数
///////////////////////////////////////////////////

function sliderControl(){
    
    var mql = window.matchMedia('screen and (max-width: 767px)');
        
    if (mql.matches) {
        
        // スマホ向け（599px以下のとき）
        $('.slider').not('.slick-initialized').slick({
            autoplay:true,
            autoplaySpeed:2500,
            dots:true,
            centerMode: false
        });
    }
    else{
        // PC向け
        $('.slider').not('.slick-initialized').slick({
            dots:true,
            centerMode: false
        });
    }
}     
        
        
//スクロールイベント
function addScrollEvent(){
    window.addEventListener('scroll', controllColor, true);
    
};

//モーダルウィンドウ位置 (tier.jsからコピー、どうにかして呼び出しはできないか) 
function modalResize(id){
        
    var w = $(window).width();
    var h = $(window).height();
    
    var cw = $(id).outerWidth();
    var ch = $(id).outerHeight();
    
    //取得した値をcssに追加する
    $(id).css({
        "left": ((w - cw)/2) + "px",
        "top": ((h - ch)/2) + "px"
    });
}


//色制御
function controllColor(){
    
    AOS.refreshHard();
    
    nowYpos = window.pageYOffset + 100;
    
    //この辺りは要自動化 head_buttonやslide_childの数か
    var cArray = [3];
    var sArray = [6];
    var layer = [2];
    layer[1] = "0.90";
    
    if((nowYpos >= topY) && (abtpY > nowYpos)){
        cArray = [1, 0, 0, 0];
        sArray = [0, 0, 0, 0, 0, 0];
        layer[0] = "230, 255, 230, ";
    }
    else if((nowYpos >= abtpY) && (abtmY > nowYpos)){
        cArray = [1, 0, 0, 0];
        sArray = [1, 0, 0, 0, 0, 0];
        layer[0] = "200, 200, 255, ";
    }
    else if((nowYpos >= abtmY) && (pflY > nowYpos)){
        cArray = [1, 0, 0, 0];
        sArray = [0, 1, 0, 0, 0, 0];
        layer[0] = "200, 200, 255, ";
    }
    else if((nowYpos >= pflY) && (bioY > nowYpos)){
        cArray = [0, 1, 0, 0];
        sArray = [0, 0, 0, 0, 0, 0];
        layer[0] = "255, 255, 225, ";
    }
    else if((nowYpos >= bioY) && (perY > nowYpos)){
        cArray = [0, 1, 0, 0];
        sArray = [0, 0, 1, 0, 0, 0];
        layer[0] = "255, 255, 225, ";
    }
    else if((nowYpos >= perY) && (skillY > nowYpos)){
        cArray = [0, 1, 0, 0];
        sArray = [0, 0, 0, 1, 0, 0];
        layer[0] = "255, 255, 225, ";
    }
    else if((nowYpos >= skillY) && (pdtY > nowYpos)){
        cArray = [0, 1, 0, 0];
        sArray = [0, 0, 0, 0, 1, 0];
        layer[0] = "255, 255, 225, ";
    }
    else if((nowYpos >= pdtY) && (idxY > nowYpos)){
        cArray = [0, 0, 1, 0];
        sArray = [0, 0, 0, 0, 0, 0];
        layer[0] = "255, 225, 225, ";
    }
    else if((nowYpos >= idxY) && (contY > nowYpos)){
        cArray = [0, 0, 1, 0];
        sArray = [0, 0, 0, 0, 0, 1];
        layer[0] = "255, 225, 225, ";
    }
    else if(nowYpos >= contY){
        cArray = [0, 0, 0, 1];
        sArray = [0, 0, 0, 0, 0, 0];
        layer[0] = "255, 225, 225, ";
    }
    changeColor(cArray, sArray);
    
    $(".all_layer").css('background-color', "rgba(" + layer[0] + layer[1] + ")");
}


//ヘッダボタン, レイヤーの色変更
function changeColor(arr1, arr2){
    
    //この定義は要自動化 head_buttonやslide_childを取得すべきか
    var carr = ['top_button', 
                'prof_button', 
                'prod_button',
                'cnt_button'];
                
    var sarr = ['abtp_button',
                'abtm_button', 
                'bio_button', 
                'personal_button',
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
        
        var con_lang = $("#lang_disp").text();
        
        if(con_lang != "日本語"){
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
                case "cnt_button":
                    t = "ご連絡";
                    break;
            }
            $(this).children(".hdt").text(t);
        }
            
        $(this).css('transition', 'background-color 0.3s linear'); 
        $(this).css('background-color', 'rgba(185,255,215, 0.75)');
        if(id != "lang_button"){
            $(this).css('border-radius', '15px 15px 0 0/ 15px 15px 0 0');
        }

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
            case "cnt_button":
                bt = "Contact";
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

        var op;
        
        if($(this).attr("class") == "head_button"){
            op = 0.5;
        }
        else{
            op = 1.0;
        }
        $(this).css('background-color', 'rgba(240,240,240, ' + op);
    });
}


