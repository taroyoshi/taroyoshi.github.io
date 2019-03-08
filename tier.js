const MUSIC_NUM = 374;//20190225

var existArray= new Array(MUSIC_NUM);//存在判定はキーバリューにするべきか? (以後の譜面追加対応しやすくするため)




//Save, Load時に名前の一致かを確認

/*==================================================================================================
//チャート画面読み出し時処理(付随されているURLパラメータによって処理を判断)
==================================================================================================*/
function initchart(){
    
    var gatUrl = document.location.href;
    var urlLength = gatUrl.length;
    var n = gatUrl.search("tier_main.html");
    var a = gatUrl.slice(n + 14, n + 18);
    
    //URL付随パラメータの判定 及び解析
    if(a == "?bkf" || a === ""){
        for(var i = 0; i < MUSIC_NUM; i++){
            existArray[i] = "0";
        }
        
        //20190227現在 RUGGED ASHのみ確認して譜面選択セレクトボックスの初期化
        //以後、Substreamや2ndに追加されたら改修
        if(existArray[0] == "0"){
            $("#musiclistid").append($("<option>").val(music_table[0][MUSIC_INDEX]).text(music_table[0][NAME_INDEX]));
        }
    }
    else{
        var para = gatUrl.slice(n + 15, urlLength);
        
        paraAnlyzeSet(para);
    }
}

/*==================================================================================================
//ドラッグ可能, ダブルクリックイベント付与
==================================================================================================*/
function setDraggableAndDblclick(id){

	$( id ).draggable().dblclick(function(){
	    
	    //対象を削除, セレクトボックス内に再挿入
	    if (event.ctrlKey && event.shiftKey) {
            $(this).unwrap();
            $(this).remove();
            
            var gatID = this.id;
            gatID = gatID.replace("iidaze_", "");
            var gatID_i = parseInt(gatID, 10);
            
            //現在表示中のバージョンを確認して動作を分けるべきか?
            //セレクトボックス再挿入の処理
            existArray[gatID_i] = "0";
            if(music_table[gatID_i][VER_INDEX] == $("#verlistid").val()){
                $("#musiclistid").append($("<option>").val(music_table[gatID_i][MUSIC_INDEX]).text(music_table[gatID_i][NAME_INDEX]));
            }
            $(".arrow_box").unwrap();
            $(".arrow_box").remove();
	    }
	    //textageの対象譜面を別タブでオープン
	    if (event.altKey) {
            
            var music_id = id.replace("#iidaze_","");
            
            const url1 = "http://textage.cc/score/";
            const url2 = "/";
            const url3 = ".html?D";
            const url4 = "C00";

            var version = music_table[music_id][VER_INDEX];
            
            //substream対応
            if(version == 2){
                version = "s";
            }
            
            var textage = music_table[music_id][ID_INDEX];
            var difficult = music_table[music_id][DIFF_INDEX];

            var url = url1 + 
                    version + 
                    url2 + 
                    textage + 
                    url3 + 
                    difficult + 
                    url4;

            var win = window.open(url);
            
	        return;
	    }
	    
    });
}
/*======================================================================
//ホバーイベント付与 (id : "iidaze_～")
======================================================================*/
function setHover(id, music_name){
    $( id ).hover(function(){

        var each_id = document.getElementById(id.replace("#", ""));

        //左位置取得
        var l = each_id.style.left.replace("px","");
        if(l === ""){
            l = 0;
        }
        
        if(l >= 1800)
        {
            l = l - 150;
        }
        l = String(parseInt(l, 10) + 50) + "px";

        //上位置取得
        var t = each_id.style.top.replace("px","");
        if(t === ""){
            t = 0;
        }
        
        if(t >= 1350)
        {
            t = t - 150;
        }
        t = String(parseInt(t, 10) + 50) + "px";

        var div_element = document.createElement("div");
        var parent_object = document.getElementById('main');
        div_element.innerHTML = '<div class="arrow_box" style="left: ' +
                                l +
                                '; top:' +
                                t +
                                ';">' +
                                music_name +
                                '</div>';
        
        parent_object.append(div_element);
        
    },function(){
        $(".arrow_box").unwrap();
        $(".arrow_box").remove();
    });
}





/*==================================================================================================
//パラメータ解析, 配置 (para: パラメータ)
==================================================================================================*/
function paraAnlyzeSet(iidazepara){
    
    //iidazeparaを分解, パラメータ分割位置把握
    var psst = iidazepara.indexOf("-p-");
    var tost = iidazepara.indexOf("-to-");
    var nst = iidazepara.indexOf("-n-");

    //BOX全削除
    for(var id = 0; id < MUSIC_NUM; id++){
        if(existArray[id] == "1"){
            delID = "#iidaze_" + String(id);
            $(delID).remove();
        }
        existArray[id] = "0";
    }

    var compExist = iidazepara.substring(2, psst);      //解凍前存在判定
    var compPos = iidazepara.substring(psst + 3, tost);  //解凍前配置位置
    var TargetOption = iidazepara.substring(tost + 4, nst);    //目標, オプション
    var Name = iidazepara.substring(nst + 3, iidazepara.length);   //名前

    //存在判定を解凍, カンマで区切って配列化
    existArray =  lzbase62.decompress(compExist).split(",");
    
    decompPosL = [];
    decompPosT = [];
    decompStr = lzbase62.decompress(compPos);
    for(var l = 0; l < decompStr.length; l = l + 4){
        //デコード後文字列から4文字毎に切り出し、左位置 上位置毎を取得し10進数に戻して格納
        decompPosL.push(tot(decompStr.substring(l, l + 2)));
        decompPosT.push(tot(decompStr.substring(l + 2, l + 4)));
    }

    var posn = 0;

    for(var id2 = 0; id2 < MUSIC_NUM; id2++){
        
        if(existArray[id2] == 1){

            var div_element = document.createElement("div");
            var parent_object = document.getElementById("generate_position");
            var disp_name = music_table[id2][DISP_INDEX];
            
            //attrで行うべき? このままだと2重のdivになるから控えたい。
            div_element.innerHTML = 
                '<div class="music_box music_box_' + music_table[id2][VER_INDEX] + 
                '" id="iidaze_'+ music_table[id2][MUSIC_INDEX] +
                '" style="left: '+ decompPosL[posn] +'px; top: '+ decompPosT[posn] +'px;">' + disp_name + '</div>';
            
            parent_object.appendChild(div_element);
            setDraggableAndDblclick("#iidaze_" + String(music_table[id2][MUSIC_INDEX]));
            setHover("#iidaze_" + String(music_table[id2][MUSIC_INDEX]), 
                                         music_table[id2][NAME_INDEX]);
            posn = posn + 1;
        }
    }

    //目標, オプションのセレクトボックス変更
    $("#targetid").val(String(TargetOption.substring(0,1)));
    $("#optid").val(String(TargetOption.substring(1,2)));
    
    //タイトル変更
    //var name =  window.localStorage.getItem(['IIDAZEname']);
    if(Name != "null"){
        document.title= Name + "'s DP difficult 12 Tier Chart";    
    }
    
    
    //バージョンをsubstreamに
    $("#verlistid").val("2");
    MusicSelectBoxChange(2);        
}

/*==================================================================================================
//譜面セレクトボックス変更
==================================================================================================*/
function MusicSelectBoxChange(version){
    sl = document.getElementById('musiclistid');
    while(sl.lastChild)
    {
        sl.removeChild(sl.lastChild);
    }
    //選択中バージョン取得
    const selectVal = $("#verlistid").val();
    
    var return_array = [];

    //該当バージョン譜面全取得
    for (var i = 0; i < music_table.length; i++){
        if(selectVal ==  music_table[i][VER_INDEX]){
            return_array.push(music_table[i]);
        }
    }

    //譜面セレクトボックス格納
    for (var j = 0; j < return_array.length; j++){
        //存在判定配列の中をMUSIC_INDEXに当てはまる部分を確認
        if(existArray[return_array[j][MUSIC_INDEX]] == "0"){
            $("#musiclistid").append($("<option>").val(return_array[j][MUSIC_INDEX]).text(return_array[j][NAME_INDEX]));
        }
    }
}

/*==================================================================================================
//パラメータ作成 (arr: 存在判定配列)
==================================================================================================*/
function makeUrlPara(arr){
    
    var retUrl = "";
    
    for(var id = 0; id < MUSIC_NUM; id++){
        if(arr[id] == 1){
            //ID取得
            var each_id = document.getElementById('iidaze_'+ id);
            var l62, t62;            
            
            //左位置取得, 62進数変換
            var l = each_id.style.left.replace("px","");
            if(l === ""){
                l62 = "00";
            }
            else{
                l62 = tos(l);
            }
            
            //上位置取得, 62進数変換
            var t = each_id.style.top.replace("px","");
             if(t === ""){
                t62 = "00";
            }
            else{
                t62 = tos(t);
            }
        
            //圧縮前文字列に格納
            retUrl = retUrl + l62 + t62;
        }
    }
    
    //存在判定配列の圧縮
    var compressedExist = lzbase62.compress(existArray);  
    //位置情報URLの圧縮
    var compressedPos = lzbase62.compress(retUrl);
    
    var targetsl = $("#targetid").val();
    var optsl = $("#optid").val();
    var name = window.localStorage.getItem(['IIDAZEname']);
    return ("?e-" + compressedExist + "-p-" +compressedPos + "-to-" + targetsl + optsl + "-n-" + name);
}


/*==================================================================================================
//モーダルウィンドウ位置
==================================================================================================*/
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
/*==================================================================================================
----------------------------------------------------------------------------------------------------
jQuery
----------------------------------------------------------------------------------------------------
==================================================================================================*/
jQuery(function(){
    
    /*==================================================================================================
    //バージョン変更jQuery
    ==================================================================================================*/
    $("#verlistid").change( function(){

        const selectVal = $("#verlistid").val();

        //取得したバージョンでセレクトボックス作成
        MusicSelectBoxChange(selectVal);
    });

    /*==================================================================================================
    //初期化jQuery
    ==================================================================================================*/
    $('#init').click(function () {
        if(window.confirm('初期化を行いますか？ セーブしている内容も削除されます。')){
            if(window.confirm('本当に初期化を行いますか？')){
                
                //loacl strageの削除
                localStorage.removeItem("IIDAZEpara"); 

                //BOX全削除
                for(var id = 0; id < MUSIC_NUM; id++){
                    delID = "#iidaze_" + String(id);
                    $(delID).remove();
                }
                
                //一旦substreamに
                $("#verlistid").val("2");

                //譜面リスト初期化
                sl = document.getElementById('musiclistid');
                while(sl.lastChild)
                {
                    sl.removeChild(sl.lastChild);
                }
                $("#musiclistid").append($("<option>").val(music_table[0][MUSIC_INDEX]).text(music_table[0][NAME_INDEX]));
                
                for(var i = 0; i < MUSIC_NUM; i++){
                    existArray[i] = "0";
                }
            }
        }
    });
    
    /*==================================================================================================
    //生成jQuery
    ==================================================================================================*/
    $('#Generate').click(function () {

        var selected_music_index = $("#musiclistid").val();
        var disp_name = music_table[selected_music_index][DISP_INDEX];

        //譜面セレクトボックスから削除
        $("#musiclistid option").each( function(){
            if($(this).val() == music_table[selected_music_index][MUSIC_INDEX]) {
              $(this).remove();
            }
        });
        
        var div_element = document.createElement("div");
        
        //attrで行うべき? このままだと2重のdivになるから控えたい。
        div_element.innerHTML = '<div class="music_box music_box_' + 
                                music_table[selected_music_index][VER_INDEX] + 
                                '" id="iidaze_'+ 
                                music_table[selected_music_index][MUSIC_INDEX] +
                                '">' + 
                                disp_name + 
                                '</div>';
        var parent_object = document.getElementById("generate_position");
        parent_object.append(div_element);

        //対象IDをドラッグ可, ダブルクリックイベント付与
        setDraggableAndDblclick("#iidaze_" + String(music_table[selected_music_index][MUSIC_INDEX]));
        existArray[selected_music_index] = "1";
        
        //対象IDにマウスオーバーで表示
        setHover("#iidaze_" + String(music_table[selected_music_index][MUSIC_INDEX]), 
                music_table[selected_music_index][NAME_INDEX]);
    });
    
    
    /*==================================================================================================
    //保存jQuery
    ==================================================================================================*/
    $('#save').click(function () {

        if (!window.localStorage) {
            alert("お使いのブラウザはlocalstorageに対応していないため、セーブできません。");
            return;
        }
        if(window.confirm('今の状態をセーブしますか？')){
                        
            var madeUrlPara =  makeUrlPara(existArray);
            
            window.localStorage.setItem(['IIDAZEpara'],[madeUrlPara]);
        }
        
    });
    
    /*==================================================================================================
    //読出jQuery
    ==================================================================================================*/
    $('#load').click(function () {
        if (!window.localStorage) {
            alert("お使いのブラウザはlocalstorageに対応していないため、ロードできません。");
            return;
        }
        if(window.confirm('保存してある状態をロードしますか？')){
            
            var iidazepara = window.localStorage.getItem(['IIDAZEpara']);
            
            paraAnlyzeSet(iidazepara);
        }
        
    });
    
    
    
    /*==================================================================================================
    //設定 検索モーダルウィンドウ
    ==================================================================================================*/
    $("#config_search").click(function(){
        
        
        var button_elements = document.getElementsByClassName("button");
        
        for(var e = 0; e < button_elements.length; e++){
            button_elements[e].setAttribute("disabled", "disabled");
        }

        //画面中央を計算する関数を実行
        modalResize("#modal-main");
        
        //モーダルウィンドウを表示
        $("#modal-main").fadeIn("slow");
        
        var target = document.getElementById("main");
        
        //以下 おそらく間違ってる
        $("#fadeLayer").css({
            "width": target.style.width + "px",
            "height": target.style.height + "px",
            "visibility": "visible"
        });
        
        //配置済みバージョンセレクトボックス変更イベント
        $("#mouted_verlistid").change( function(){
            sl = document.getElementById('mounted_musiclistid');
            while(sl.lastChild)
            {
                sl.removeChild(sl.lastChild);
            }
            //選択中バージョン取得
            const selectVal = $("#mouted_verlistid").val();
            
            var return_array = [];
    
            //該当バージョン譜面全取得
            for (var i = 0; i < music_table.length; i++){
                if(selectVal ==  music_table[i][VER_INDEX]){
                    return_array.push(music_table[i]);
                }
            }
    
            //配置済み譜面セレクトボックス格納
            for (var j = 0; j < return_array.length; j++){
                //存在判定配列の中をMUSIC_INDEXに当てはまる部分を確認
                if(existArray[return_array[j][MUSIC_INDEX]] == "1"){
                    $("#mounted_musiclistid").append($("<option>").val(return_array[j][MUSIC_INDEX]).text(return_array[j][NAME_INDEX]));
                }
            }
        });
        
        //Twitter共有用URL作成, クリックイベント設定
        var preUrl = "https://twitter.com/intent/tweet?url=";
        
        var gatUrl = document.location.href;
        var n = gatUrl.search("tier_main.html");
        
        //var iidazeUrl = "https://taroyoshi.github.io/tier_main.html";//GitHub pages用
        var iidazeUrl = gatUrl.slice(0, n + 14);
        
        var para = makeUrlPara(existArray);
        var url = "window.open('" + preUrl + iidazeUrl + para + "')";
        $('#tweet').removeAttr('onclick');
        $('#tweet').attr({
            'onclick': url
        });
        
        //Substreamの確認
        $("#mouted_verlistid").val("2");
        if(existArray[0] == "1"){
            $("#mounted_musiclistid").append($("<option>").val(music_table[0][MUSIC_INDEX]).text(music_table[0][NAME_INDEX]));
        }
            
        
        //モーダル内ボタン押下イベント
        $(".modal_button").click(function(){

            var id =  $(this).attr("id");
            var layer = document.getElementById("fadeLayer");
        
            $("#modal-main").fadeOut("slow",function(){
                
                switch(id){
                    case 'search_move':
                        var mounted_selectVal = $("#mounted_musiclistid").val();
                        
                        if(mounted_selectVal === null){
                            alert("配置済みの譜面を選択してください。");
                            break;
                        }
                        
                        //移動させたい位置の要素を取得
                        var element = document.getElementById("iidaze_" + mounted_selectVal);
                        var rect = element.getBoundingClientRect();
                        
                        var positionLeft = Math.round(rect.left);
                        var positionTop = Math.round(rect.top);
                        
                        scrollTo(positionLeft, positionTop);
                        /*
                        setTimeout(function(){
                            $("#iidaze_" + mounted_selectVal).css({
                            "border": "1px solid yellow"
                        }, 100);
                        */    
                       
                        break;
                        
                    //名前の保存
                    case 'config_save':
                        var name = $("#CreatedName").val();
                        if(name){
                            window.localStorage.setItem(['IIDAZEname'],[name]);
                            document.title= name + "'s DP difficult 12 Tier Chart";
                        }
                        break;
                        
                    //何もせずモーダルをクローズ
                    case 'modal_close':
                        break;

                    case 'tweet':
                        break;
                        
                }
                
                layer.style.visibility = "hidden";
                
                var button_elements = document.getElementsByClassName("button");
        
                for(var e = 0; e < button_elements.length; e++){
                    button_elements[e].removeAttribute("disabled");
                }
                
            });
        });
        
        //画面の左上からmodal-mainの横幅・高さを引き 2で割ると画面中央の位置
        $(window).resize(modalResize);
        
        
    });
        
    /*==================================================================================================
    //説明モーダルウィンドウ
    ==================================================================================================*/
    $("#info").click(function(){
        
        var button_elements = document.getElementsByClassName("button");
        
        for(var e = 0; e < button_elements.length; e++){
            button_elements[e].setAttribute("disabled", "disabled");
        }
        
        //画面中央を計算する関数を実行
        modalResize("#info_modal-main");
        
        //モーダルウィンドウを表示
        $("#info_modal-main").fadeIn("slow");
        
        var target = document.getElementById("main");
        
        //以下 おそらく間違ってる
        $("#fadeLayer").css({
            "width": target.style.width + "px",
            "height": target.style.height + "px",
            "visibility": "visible"
        });
        
        //モーダル内ボタン押下イベント
        $(".modal_button").click(function(){
            var id =  $(this).attr("id");
            var layer = document.getElementById("fadeLayer");
        
            $("#info_modal-main").fadeOut("slow",function(){
                 switch(id){
                    case 'info_modal_close':
                        layer.style.visibility = "hidden";
                        break;
                 }
            });
            
            var button_elements = document.getElementsByClassName("button");
        
            for(var e = 0; e < button_elements.length; e++){
                button_elements[e].removeAttribute("disabled");
            }
        });
    });
    
    
});



