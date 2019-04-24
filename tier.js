const MUSIC_NUM = music_table.length;

var existArray= new Array(MUSIC_NUM);

//TODO モーダル表示関連の関数での一括化 及びhtmlの分割, JSによる読み込み化
//TODO Save, Load時に名前の一致かを確認
//TODO LocalStoreageの名前必要?
//TODO Searchが不正確
//TODO GenerateにInfomation
//TODO レイヤーの枠線

/*==================================================================================================
//チャート画面読み出し時処理(付随されているURLパラメータによって処理を判断)
==================================================================================================*/
function initchart(){
    
    //遷移した際のURL取得
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
        //以後、Substreamや2ndや1stに追加されたら要改修
        if(existArray[0] == "0"){
            $("#musiclistid").append($("<option>").val(music_table[0][MUSIC_INDEX]).text(music_table[0][NAME_INDEX]));
        }
    }
    else{
        //パラメータを持って表示した場合、解析し配置
        var para = gatUrl.slice(n + 15, urlLength);
        //パラメータ解析, 配置
        paraAnlyzeSet(para);
    }
}

/*==================================================================================================
//ドラッグ可能, ダブルクリックイベント付与
==================================================================================================*/
function setDraggableAndDblclick(id){

	$( id ).draggable({
	    //backaxis上のみドラッグ可能にする
	    containment: '#main',
        scroll: false,

        //以下 http://uenomemo.sakura.ne.jp/pcmemo/202 より引用
        start:function(e,ui){
            $(".ui-selected").not("#fadeLayer").each(function(){
            var apos = {
                top:$(this).position().top-ui.position.top,
                left:$(this).position().left-ui.position.left
            };
            $(this).data("apos", apos);
            });
        },
        drag:function(e,ui){
            $(".ui-selected").not("#fadeLayer").each(function(){
                $(this).css({
                    top:ui.position.top+$(this).data("apos").top,
                    left:ui.position.left+$(this).data("apos").left
                });
            });
        }
	}).dblclick(function(){
	    
	    //対象を削除, セレクトボックス内に再挿入
	    if (event.ctrlKey && event.shiftKey) {
            $(this).unwrap();
            $(this).remove();
            
            var gatID = this.id;
            gatID = gatID.replace("iidaxe_", "");
            var gatID_i = parseInt(gatID, 10);
            
            //一旦選択状態無しに
            $("#musiclistid").val(0);
            
            //対象の存在判定削除
            existArray[gatID_i] = "0";
         
            //吹出削除            
            $(".arrow_box").unwrap();
            $(".arrow_box").remove();
	    }
	    //textageの対象譜面を別タブでオープン
	    if (event.altKey) {
            
            var music_id = id.replace("#iidaxe_","");
            
            const url1 = "http://textage.cc/score/";
            const url2 = "/";
            const url3 = ".html?D";
            const url4 = "C00";

            var version = music_table[music_id][VER_INDEX];
            
            //substream対応
            if(version == 2){
                version = "s";
            }
            
            var textage   = music_table[music_id][ID_INDEX];
            var difficult = music_table[music_id][DIFF_INDEX];

            var url = url1 +        // http://textage.cc/score/
                    version + 
                    url2 +          // /
                    textage + 
                    url3 +          // .html?D
                    difficult + 
                    url4;           // C00

            var win = window.open(url);
            
	        return;
	    }
    });
}
/*======================================================================
//ホバーイベント付与 (id : "iidaxe_～")
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
function paraAnlyzeSet(iidaxepara){
    
    //iidaxeparaを分解, パラメータ分割位置把握
    var psst = iidaxepara.indexOf("-p-");
    var tost = iidaxepara.indexOf("-to-");
    var nst  = iidaxepara.indexOf("-n-");

    //BOX全削除
    for(var id = 0; id < MUSIC_NUM; id++){
        if(existArray[id] == "1"){
            delID = "#iidaxe_" + String(id);
            $(delID).remove();
        }
        existArray[id] = "0";
    }

    var compExist = iidaxepara.substring(2, psst);              //解凍前存在判定
    var compPos = iidaxepara.substring(psst + 3, tost);         //解凍前配置位置
    var TargetOption = iidaxepara.substring(tost + 4, nst);     //目標, オプション
    var Name = iidaxepara.substring(nst + 3, iidaxepara.length);//名前

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
                '" id="iidaxe_'+ music_table[id2][MUSIC_INDEX] +
                '" style="left: '+ decompPosL[posn] +'px; top: '+ decompPosT[posn] +'px;">' + disp_name + '</div>';
            
            parent_object.appendChild(div_element);

            //†の場合 文字を赤に
            if(disp_name.indexOf("†") != -1){
                if(disp_name != "p†p" && 
                    disp_name != "渚" && 
                    disp_name != "DEATH"){
                    var Lid = "#iidaxe_"+ music_table[id2][MUSIC_INDEX];
                    $(Lid).css({
                        "color": "red",
                    });
                }
            }

            setDraggableAndDblclick("#iidaxe_" + String(music_table[id2][MUSIC_INDEX]));
            setHover("#iidaxe_" + String(music_table[id2][MUSIC_INDEX]), 
                                         music_table[id2][NAME_INDEX]);
            posn = posn + 1;
        }
    }

    //目標, オプションのセレクトボックス変更
    $("#targetid").val(String(TargetOption.substring(0,1)));
    $("#optid").val(String(TargetOption.substring(1,2)));
    
    //タイトル変更
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
    
    $("#musiclistid").children("option").remove();
    
    //選択中バージョン取得
    const selectVal = $("#verlistid").val();
    
    var return_array = [];

    //該当バージョン譜面全取得
    for (var i = 0; i < music_table.length; i++){
        if(selectVal ==  music_table[i][VER_INDEX]){
            return_array.push(music_table[i]);
        }
    }

    //ソートしてから格納か、格納してからソートか 保留    
    return_array.sort(function(a,b){
        return a[IN_VER_INDEX] - b[IN_VER_INDEX];
    });

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
            var each_id = document.getElementById('iidaxe_'+ id);
            var l62, t62;            
            
            //左位置取得, 62進数変換
            var l = each_id.style.left.replace("px","");
            if(l === "" || l === 0 || l == "0"){
                l62 = "00";
            }
            else{
                l62 = tos(l);
                
                //62進数変換して1文字の場合の補填
                if(l62.length < 2){
                    l62 = "0" + l62;
                }
            }
            
            //上位置取得, 62進数変換
            var t = each_id.style.top.replace("px","");
             if(t === "" || t === 0 || t == "0"){
                t62 = "00";
            }
            else{
                t62 = tos(t);
                
                //62進数変換して1文字の場合の補填
                if(t62.length < 2){
                    t62 = "0" + t62;
                }
            }
        
            //圧縮前文字列に格納
            retUrl = retUrl + l62 + t62;
        }
    }
    
    //存在判定配列の圧縮
    var compressedExist = lzbase62.compress(existArray);  
    //位置情報URLの圧縮
    var compressedPos = lzbase62.compress(retUrl);
    
    //目標, オプション, 作成者名取得
    var targetsl = $("#targetid").val();
    var optsl = $("#optid").val();
    var name = window.localStorage.getItem(['IIDAXEname']);
    //パラメータ作成
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
//ヘッダーボタン有効化, 無効化
==================================================================================================*/
function headEnable(bool){
    
    //ヘッダーのボタン無効化
    var button_elements = document.getElementsByClassName("button");
    
    for(var e = 0; e < button_elements.length; e++){
        
        if(bool == "enable"){
            button_elements[e].removeAttribute("disabled");
        }
        else if(bool == "disable"){
            button_elements[e].setAttribute("disabled", "disabled");
        }
    }
    
    //ヘッダーのセレクトボックス無効化
    var select_elements = document.getElementsByClassName("head_select");
    
    for(var n = 0; n < select_elements.length; n++){
        
        if(bool == "enable"){
            select_elements[n].removeAttribute("disabled");
        }
        else if(bool == "disable"){
            select_elements[n].setAttribute("disabled", true);
        }
    }
}

/*==================================================================================================
////モーダル中背景 暗転
==================================================================================================*/
function fadeLayerOn(){
    $("#fadeLayer").css({
        "width": $("main").css("width"),
        "height": $("main").css("height"),
        "visibility": "visible"
    });
}

/*==================================================================================================
//ボックス生成
==================================================================================================*/
function MulchGenerate(){

    var selected_music_index = $("#musiclistid").val();

    for(var target_num = 0; target_num < selected_music_index.length; target_num++){

        var disp_name = music_table[selected_music_index[target_num]][DISP_INDEX];

        //譜面セレクトボックスから削除
        $("#musiclistid option").each( function(){
            if($(this).val() == music_table[selected_music_index[target_num]][MUSIC_INDEX]) {
                $(this).remove();
            }
        });
        
        var div_element = document.createElement("div");
        var ver_top = (music_table[selected_music_index[target_num]][VER_INDEX] - 2) * 35;

        //attrで行うべき? このままだと2重のdivになるから控えたい。
        div_element.innerHTML = '<div class="music_box music_box_' + 
                                music_table[selected_music_index[target_num]][VER_INDEX] + 
                                '" id="iidaxe_'+ 
                                music_table[selected_music_index[target_num]][MUSIC_INDEX] +
                                '" style="left:' + 
                                (40 * target_num) +
                                'px; top:' + 
                                ver_top +
                                'px">' +
                                disp_name + 
                                '</div>';
        var parent_object = document.getElementById("generate_position");
        parent_object.append(div_element);

        //†の場合 文字を赤に
        if(disp_name.indexOf("†") != -1){
            if(disp_name != "p†p" && 
                disp_name != "渚" && 
                disp_name != "DEATH"){
                var Lid = "#iidaxe_"+ music_table[selected_music_index[target_num]][MUSIC_INDEX];
                $(Lid).css({
                    "color": "red",
                });
            }
        }

        //対象IDをドラッグ可, ダブルクリックイベント付与
        setDraggableAndDblclick("#iidaxe_" + String(music_table[selected_music_index[target_num]][MUSIC_INDEX]));
        existArray[selected_music_index[target_num]] = "1";
        
        //対象IDにマウスオーバーで表示
        setHover("#iidaxe_" + String(music_table[selected_music_index[target_num]][MUSIC_INDEX]), 
                                     music_table[selected_music_index[target_num]][NAME_INDEX]);
    }
}

/*==================================================================================================
//検索時の吹き出し削除
==================================================================================================*/
function deleteSetTimeHover(){
    $("#searchSQ").remove();
}

/*==================================================================================================
//バージョン, バージョン内インデックスソート
==================================================================================================*/
function InverAndSort(arr){
    //バージョンで比較し 同じならバージョン内インデックスで比較
    sorted_item = arr.sort(function(a, b){
        if(a[VER_INDEX] > b[VER_INDEX]){
            return 1;
        };
        if(a[VER_INDEX] < b[VER_INDEX]){
            return -1;               
        };
        if(a[IN_VER_INDEX] > b[IN_VER_INDEX]){
            return 1;
        };
        if(a[IN_VER_INDEX] < b[IN_VER_INDEX]){
            return -1;               
        };
    });
    
    return sorted_item;
}

/*==================================================================================================
----------------------------------------------------------------------------------------------------
jQuery
----------------------------------------------------------------------------------------------------
==================================================================================================*/
jQuery(function(){
    
    $("#main").not("#fadeLayer").selectable();
    

    /*==================================================================================================
    //バージョン変更jQuery
    ==================================================================================================*/
    $("#verlistid").change( function(){

        //選択中バージョン取得
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
                localStorage.removeItem("IIDAXEpara"); 

                //BOX全削除
                for(var id = 0; id < MUSIC_NUM; id++){
                    delID = "#iidaxe_" + String(id);
                    $(delID).remove();
                }
                
                //一旦substreamに
                $("#verlistid").val("2");

                //譜面リスト初期化
                $("#musiclistid").children().remove();

                $("#musiclistid").append($("<option>").val(music_table[0][MUSIC_INDEX]).text(music_table[0][NAME_INDEX]));
                
                //存在判定リセット
                for(var i = 0; i < MUSIC_NUM; i++){
                    existArray[i] = "0";
                }
            }
        }
    });
    
    /*==================================================================================================
    //保存jQuery
    ==================================================================================================*/
    $('#save').click(function () {

        if (!window.localStorage) {
            alert("お使いのブラウザはlocal Storageに対応していないため、セーブできません。");
            return;
        }
        if(window.confirm('今の状態をセーブしますか？')){
                        
            var madeUrlPara =  makeUrlPara(existArray);
            
            window.localStorage.setItem(['IIDAXEpara'],[madeUrlPara]);
        }
    });
    
    /*==================================================================================================
    //読出jQuery
    ==================================================================================================*/
    $('#load').click(function () {
        if (!window.localStorage) {
            alert("お使いのブラウザはlocal Storageに対応していないため、ロードできません。");
            return;
        }
        if(window.confirm('保存してある状態をロードしますか？')){
            
            var iidaxepara = window.localStorage.getItem(['IIDAXEpara']);
            
            paraAnlyzeSet(iidaxepara);
        }
    });

    /*==================================================================================================
    //生成モーダルウィンドウ
    ==================================================================================================*/
    $("#generate").click(function(){
        
        //ヘッダーのボタン無効化
        headEnable("disable");
        
        //画面中央を計算する関数を実行
        modalResize("#generate_modal-main");
        
        //モーダルウィンドウを表示
        $("#generate_modal-main").fadeIn("slow");
        
        //モーダル中背景表示
        fadeLayerOn();
        
        //再度生成ウィンドウを開いた時の対応
        MusicSelectBoxChange($("verlistid").val);
        
        //画面の左上からmodal-mainの横幅・高さを引き 2で割ると画面中央の位置
        $(window).resize(modalResize);
    });
    
    /*==================================================================================================
    //生成モーダル内ボタン
    ==================================================================================================*/
    $(".modal_button.gene").click(function(){
        
        var id =  $(this).attr("id");

        switch(id){
            //生成実行
            case 'genarate_modal':
                MulchGenerate();
                break;
            
            //セレクトボックス全選択状態
            case 'genarate_modal_all':
                var values = $("#musiclistid").children("option");
                var vArray = [];
                
                for(var i = 0; i < values.length; i++){
                    vArray.push(values[i].value);
                }
                $("#musiclistid").val(vArray);
            
                break;

            //当モーダルをクローズ
            case 'genarate_modal_close':
                $("#generate_modal-main").fadeOut();
                //イベント解除してモーダルを閉じる
                $("#fadeLayer").css("visibility", "hidden");
                
                //ヘッダーのボタン有効化
                headEnable("enable");
                break;
                
            //当モーダルをクローズし一括削除モーダルをオープン
            case 'genarate_modal_delete':
                $("#generate_modal-main").fadeOut();
                
                //モーダルウィンドウを表示
                //画面中央を計算する関数を実行
                modalResize("#del_modal-main");
                $("#del_modal-main").fadeIn("slow");
                break;
        }
    });
    
    /*==================================================================================================
    //一括削除モーダル内ボタン
    ==================================================================================================*/
    $(".modal_button.del").click(function(){
        
        var id =  $(this).attr("id");
        
        var selected_music_index = null;
        var sort_item = null;

        switch(id){
            //Deleteセレクトボックス内のボックスを一括削除
            case 'select_delete':
                
                $("#del_select option").each( function(){
                    
                    var id = "#iidaxe_" + $(this).val();
                    
                    $(id).unwrap();
                    $(id).remove();
                    
                    existArray[$(this).val()] = "0";
                });
                
                $("#del_select option").remove();
                
                break;
            
            //何もせずに当モーダルをクローズ
            case 'del_close':
                $("#del_modal-main").fadeOut();
                //イベント解除してモーダルを閉じる
                $("#fadeLayer").css("visibility", "hidden");
                //ヘッダーのボタン有効化
                headEnable("enable");
                
                break;
                
            //以下2つの共通化は行うべきか
            //SettedからDeleteへ移動(＞＞ボタン)
            case 'del_move':
                var pre_del_items  = [];
                var sort_del_items = [];
                selected_music_index = $("#del_setted").val();
                if(selected_music_index.length === 0){
                    break;
                }
                
                for(var target_num = 0; target_num < selected_music_index.length; target_num++){
                    $("#del_setted option").each( function(){
                        if($(this).val() == music_table[selected_music_index[target_num]][MUSIC_INDEX]) {
                            $(this).remove();
                            pre_del_items.push(music_table[$(this).val()]);
                        }
                    });
                }
                
                $("#del_select option").each( function(){
                    pre_del_items.push(music_table[$(this).val()]);
                });
                
                //INDEX, IN_VER_INDEX昇順でソート
                sort_del_items = InverAndSort(pre_del_items);
                
                //一旦全削除し その後ソートしたものを格納
                $("#del_select").children("option").remove();
                sort_del_items.map(item => 
                    $("#del_select").append($("<option>").val(item[MUSIC_INDEX]).text(item[NAME_INDEX]))
                );
                
                break;
            
            //DeleteからSettedへ移動(＜＜ボタン)
            case 'ccl_move':
                
                var pre_ccl_items  = [];
                var sort_ccl_items = [];
                selected_music_index = $("#del_select").val();
                if(selected_music_index.length === 0){
                    break;
                }
                
                for(var target_num = 0; target_num < selected_music_index.length; target_num++){
                    $("#del_select option").each( function(){
                        if($(this).val() == music_table[selected_music_index[target_num]][MUSIC_INDEX]) {
                            $(this).remove();
                            pre_ccl_items.push(music_table[$(this).val()]);
                        }
                    });
                }
                
                $("#del_setted option").each( function(){
                    pre_ccl_items.push(music_table[$(this).val()]);
                });
                
                //INDEX, IN_VER_INDEX昇順でソート
                sort_ccl_items = InverAndSort(pre_ccl_items);
                
                //一旦全削除し その後ソートしたものを格納
                $("#del_setted").children("option").remove();
                sort_ccl_items.map(item => 
                    $("#del_setted").append($("<option>").val(item[MUSIC_INDEX]).text(item[NAME_INDEX]))
                );
                
                break;
                
        }
    });
    
    /*==================================================================================================
    //説明モーダル内ボタン
    ==================================================================================================*/
    $(".modal_button.info").click(function(){
        var id =  $(this).attr("id");
    
        $("#info_modal-main").fadeOut("slow",function(){
            switch(id){
                case 'info_modal_close':
                    
                    //イベント解除してモーダルを閉じる
                    $("#fadeLayer").css("visibility", "hidden");
                    break;
            }
        });
        
        //ヘッダーのボタン有効化
        headEnable("enable");
    });
    
    /*==================================================================================================
    //検索 設定モーダル内ボタン
    ==================================================================================================*/
    $(".modal_button.config").click(function(){

        //押されたボタンのID
        var id =  $(this).attr("id");
    
        $("#modal-main").fadeOut("slow",function(){
            
            switch(id){
                //検索, 移動
                case 'search_move':
                    var mounted_selectVal = $("#mounted_musiclistid").val();
                    
                    if(mounted_selectVal === null){
                        alert("配置済みの譜面を選択してください。");
                        break;
                    }
                    
                    //位置情報等
                    var positionLeft = parseInt($("#iidaxe_" + mounted_selectVal).css("left").replace("px", ""), 10);
                    var positionTop = parseInt($("#iidaxe_" + mounted_selectVal).css("top").replace("px", ""), 10);
                    
                    //対象位置までスクロール
                    window.scrollTo(positionLeft, positionTop);
                    
                    var div_element = document.createElement("div");
                    var parent_object = document.getElementById('main');
                    div_element.innerHTML = '<div id="searchSQ" style="left: ' +
                                            (positionLeft -3) +
                                            'px; top:' +
                                            (positionTop -3) +
                                            'px;">' +
                                            '</div>';
                    
                    parent_object.append(div_element);
                    
                    $("#searchSQ").hover(function(){
                        $(this).remove();
                    });
                    window.setTimeout("deleteSetTimeHover()", 3000);
                   
                    break;
                    
                //名前の保存
                case 'config_save':
                    var name = $("#CreatedName").val();
                    if(name){
                        window.localStorage.setItem(['IIDAXEname'],[name]);
                        document.title= name + "'s DP difficult 12 Tier Chart";
                    }
                    break;
                    
                //何もせずモーダルをクローズ
                case 'modal_close':
                    break;

                //Twitter共有側で行うため、何もせずモーダルをクローズ
                case 'tweet':
                    break;
            }
            
            //レイヤー非表示
            $("#fadeLayer").css("visibility", "hidden");
            
            //ヘッダーのボタン有効化
            headEnable("enable");
            
        });
    });    
    
    /*==================================================================================================
    //配置済み, 未配置一覧モーダル内ボタン
    ==================================================================================================*/
    $(".modal_button.setted").click(function(){
        var id =  $(this).attr("id");

        switch(id){
            //配置済み, 未配置の表示切替
            case 'setted_change':

                if( $("#setted_list").css("display") == "block" && $("#nosetted_list").css("display") == "none"){
                    $("#setted_list").css("display", "none");
                    $("#nosetted_list").css("display", "block");
                    $(this).val("Setted");
                    $("#list_name").text("未配置一覧");
                }
                else{
                    $("#setted_list").css("display", "block");
                    $("#nosetted_list").css("display", "none");
                    $(this).val("Not Setted");
                    $("#list_name").text("配置済み一覧");
                }
                
                break;
            //当モーダルをクローズ
            case 'setted_modal_close':
                $("#setted_modal-main").fadeOut("slow");
                //ヘッダーのボタン有効化
                headEnable("enable");
                
                $("#fadeLayer").css("visibility", "hidden");

                break;
            }
    });
    
    /*==================================================================================================
    //一括削除モーダルウィンドウ
    ==================================================================================================*/
    $("#genarate_modal_delete").click(function(){
        
        $("#del_setted").children("option").remove();
        $("#del_select").children("option").remove();
        
        pre_sort_items   = [];
        setted_sort_item = [];
        
        for(var id =0; id < existArray.length; id++){
            //配置済み一覧作成(ソート前)
            if(existArray[id] == "1"){
                //$("#del_setted").append($("<option>").val(music_table[id][MUSIC_INDEX]).text(music_table[id][NAME_INDEX]));
                pre_sort_items.push(music_table[id]);
            }
        }
        
        //INDEX, IN_VER_INDEX昇順でソート
        setted_sort_item = InverAndSort(pre_sort_items);
        
        //一旦全削除し その後ソートしたものを格納
        $("#del_setted").children("option").remove();
        setted_sort_item.map(item => 
            $("#del_setted").append($("<option>").val(item[MUSIC_INDEX]).text(item[NAME_INDEX]))
        );
        
        //$("#del_setted").append(setted_sort_item);
        
    });
    
    /*==================================================================================================
    //設定 検索モーダルウィンドウ
    ==================================================================================================*/
    $("#config_search").click(function(){
        
        //ヘッダーのボタン無効化
        headEnable("disable");

        //画面中央を計算する関数を実行
        modalResize("#modal-main");
        
        //モーダルウィンドウを表示
        $("#modal-main").fadeIn("slow");
        
        //モーダル中背景
        fadeLayerOn();
        
        //URLテキストボックスの内容削除
        $('#madeurl').val("");
        
        $("#mounted_verlistid").val(2);
        if(existArray[0] == "1"){
            $("#musiclistid").append($("<option>").val(music_table[0][MUSIC_INDEX]).text(music_table[0][NAME_INDEX]));
        }
        
        //配置済みバージョンセレクトボックス変更イベント
        $("#mounted_verlistid").change( function(){
            
            $("#mounted_musiclistid").children().remove();
            
            //選択中バージョン取得
            const selectVal = $("#mounted_verlistid").val();
            
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
        
        //現在のURL取得。VS CODE等のローカルではこの部分の関係でデバッグ不可能
        var gatUrl = document.location.href;
        var n = gatUrl.search("tier_main.html");
        
        var iidaxeUrl = gatUrl.slice(0, n + 14);
        
        var para = makeUrlPara(existArray);
        //VS Codeのローカルデバッグだと機能しない?
        var url = "window.open('" + preUrl + iidaxeUrl + para + "')";
        
        //テキストボックスにURL添付
        $('#madeurl').val( iidaxeUrl + para);
        
        //Tweetボタンにurl付与
        $('#tweet').removeAttr('onclick');
        $('#tweet').attr({
            'onclick': url
        });
        
        //Substreamの確認
        $("#mounted_verlistid").val("2");
        if(existArray[0] == "1"){
            $("#mounted_musiclistid").append($("<option>").val(music_table[0][MUSIC_INDEX]).text(music_table[0][NAME_INDEX]));
        }
                
        //画面の左上からmodal-mainの横幅・高さを引き 2で割ると画面中央の位置
        $(window).resize(modalResize);
    });
        
    /*==================================================================================================
    //説明モーダルウィンドウ
    ==================================================================================================*/
    $("#info").click(function(){
        
        //ヘッダーのボタン無効化
        headEnable("disable");
        
        //画面中央を計算する関数を実行
        modalResize("#info_modal-main");
        
        //モーダルウィンドウを表示
        $("#info_modal-main").fadeIn("slow");
        
        //モーダル中背景表示
        fadeLayerOn();
           
        //画面の左上からmodal-mainの横幅・高さを引き 2で割ると画面中央の位置
        $(window).resize(modalResize);
    });
    
    /*==================================================================================================
    //配置済みモーダルウィンドウ
    ==================================================================================================*/
    $("#setted").click(function(){
    
        var temp_ver_set, temp_ver_not_set = 0;
        
        //ヘッダーのボタン無効化
        headEnable("disable");
        
        //既存の配置済み, 未配置リストを全削除
        $("#setted_list").children().remove();
        $("#nosetted_list").children().remove();

        //TODO existArrayから判定しないでmusic_tableのバージョン順→IN_VER_INDEX順→INDEXを見て判定 か?
        // もしくはバージョン名に-1のバリューを与えてソート?

        for(var ver = 2; ver <= 26; ver++){
            var singleVerList = music_table.filter(item => item[VER_INDEX] == ver);
    
            InverAndSort(singleVerList).map(function(v){ 

                if(existArray[v[MUSIC_INDEX]] == "1"){

                    if(v[VER_INDEX] != temp_ver_set){
                    
                        temp_ver_set = v[VER_INDEX];
                        
                        var ver_name = ver_table.filter(item => item[VER_INDEX] == temp_ver_set);
                        //filterで抽出したものが2次元配列のままであるので0番で代入
                        $("#setted_list").append($("<p>").text(ver_name[0][VER_NAME_INDEX]));
                    }
                    $("#setted_list").append($("<li>").text(v[NAME_INDEX]));
                }
                else if(existArray[v[MUSIC_INDEX]] == "0"){

                    if(v[VER_INDEX] != temp_ver_not_set){
                    
                        temp_ver_not_set = v[VER_INDEX];
                        
                        var ver_name = ver_table.filter(item => item[VER_INDEX] == temp_ver_not_set);
                        //filterで抽出したものが2次元配列のままであるので0番で代入
                        $("#nosetted_list").append($("<p>").text(ver_name[0][VER_NAME_INDEX]));
                    }
                    $("#nosetted_list").append($("<li>").text(v[NAME_INDEX]));
                }
            });
        }
        
        //画面中央を計算する関数を実行
        modalResize("#setted_modal-main");
        
        //配置済みリスト表示
        $("#setted_list").css("display", "block");
        $("#nosetted_list").css("display", "none");
        $("#setted_change").val("Not Setted");
        $("#list_name").text("配置済み一覧");

        //モーダルウィンドウを表示
        $("#setted_modal-main").fadeIn("slow");
        
        //モーダル中背景
        fadeLayerOn();
        
        //画面の左上からmodal-mainの横幅・高さを引き 2で割ると画面中央の位置
        $(window).resize(modalResize);
    });
    
    /*==================================================================================================
    //ヘッダースクロール制御
    ==================================================================================================*/
    $(window).on("scroll", function(){
        $("header").css("left", -$(window).scrollLeft());
    });
    
});