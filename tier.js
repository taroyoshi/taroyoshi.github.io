const MUSIC_NUM = 374;//20190226

var existArray= new Array(MUSIC_NUM);//存在判定はキーバリューにするべきか? ()以後の譜面追加対応しやすくするため)

function initchart(){
    
    
    for(var i = 0; i < MUSIC_NUM; i++){
        existArray[i] = "0"; //これは62進数に置き換える
    }
 
    //url読み込み等
    
    
    //20190227現在 RUGGED ASHのみ確認して譜面選択セレクトボックスの初期化
    if(existArray[0] == "0"){
        $("#musiclistid").append($("<option>").val(music_table[0][MUSIC_INDEX]).text(music_table[0][NAME_INDEX]));
    }
    
}
//TODO 説明ページ, マウスオン吹き出しhttp://php.o0o0.jp/article/jquery-balloons


/*==================================================================================================
//ドラッグ可能, ダブルクリックイベント付与
==================================================================================================*/
function setDraggableAndDblclick(id){

	$( id ).draggable().dblclick(function(){
	    
	    if (event.ctrlKey && event.shiftKey) {
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
            
	    }
	    if (event.altKey) {
	        
            //textageの対象譜面を別タブでオープン
            
            var idname = $(this).attr("id"); 
            var music_id = idname.replace("iidaze_","");
            
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
//ホバーイベント付与
======================================================================*/
function setHover(id, music_name){
    $( id ).hover(function(){
        $("#OnMusicName").val(music_name);
    },function(){
        $("#OnMusicName").val("");
    });
}

jQuery(function(){
    
    /*==================================================================================================
    //バージョン変更jQuery
    ==================================================================================================*/
    $("#verlistid").change( function(){

        const selectVal = $("#verlistid").val();

        MusicSelectBoxChange(selectVal);
    });

    
    
    /*==================================================================================================
    //初期化jQuery
    ==================================================================================================*/
    $('#init').click(function () {
        if(window.confirm('初期化を行いますか？ セーブしている内容も削除されます。')){
            if(window.confirm('本当に初期化を行いますか？')){
                
                //loacl strageの削除
                localStorage.removeItem("IIDZEpara"); 

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
        div_element.innerHTML = '<div class="music_box music_box_' + 
                                music_table[selected_music_index][VER_INDEX] + 
                                '" id="iidaze_'+ 
                                music_table[selected_music_index][MUSIC_INDEX] +
                                '">' + 
                                disp_name + 
                                '</div>';
        var parent_object = document.getElementById("generate_position");
        parent_object.appendChild(div_element);

        //対象IDをドラッグ可, ダブルクリックイベント付与
        setDraggableAndDblclick("#iidaze_" + String(music_table[selected_music_index][MUSIC_INDEX]));
        existArray[selected_music_index] = "1";
       
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
            
            //var compressedExist = lzbase62.compress(existArray);  
            
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
            //↑を分解
            
            //var exst = iidazepara.indexOf("?ex-");
            var psst = iidazepara.indexOf("-ps-");
            var tst = iidazepara.indexOf("-t-");
            var ost = iidazepara.indexOf("-o-");


            //return ("?ex-" + compressedExist + "-ps-" +compressedPos + "-t-" + targetsl + "-o-" + optsl);

            //BOX全削除
            for(var id = 0; id < MUSIC_NUM; id++){
                if(existArray[id] == "1"){
                    delID = "#iidaze_" + String(id);
                    $(delID).remove();
                }
            }

            var compExist = iidazepara.substring(4, psst);
            var compPos = iidazepara.substring(psst + 4, tst);
            var Target = iidazepara.substring(tst + 3, ost);
            var Opt = iidazepara.substring(ost + 3, ost + 4);

            existArray =  lzbase62.decompress(compExist).split(",");
            
            decompPosL = [];
            decompPosT = [];
            decompStr = lzbase62.decompress(compPos);
            for(var l = 0; l < decompStr.length; l = l + 4){
                //デコード後文字列から４文字毎に切り出し、左位置 上位置毎を取得し10進数に戻して格納
                decompPosL.push(tot(decompStr.substring(l, l + 2)));
                decompPosT.push(tot(decompStr.substring(l + 2, l + 4)));
            }

            var posn = 0;

            for(var id = 0; id < MUSIC_NUM; id++){
                
                if(existArray[id] == 1){

                    var div_element = document.createElement("div");
                    var parent_object = document.getElementById("generate_position");
                    var disp_name = music_table[id][DISP_INDEX];
                    div_element.innerHTML = 
                        '<div class="music_box music_box_' + music_table[id][VER_INDEX] + 
                        '" id="iidaze_'+ music_table[id][MUSIC_INDEX] +
                        '" style="left: '+ decompPosL[posn] +'px; top: '+ decompPosT[posn] +'px;">' + disp_name + '</div>';
                    
                    parent_object.appendChild(div_element);
                    setDraggableAndDblclick("#iidaze_" + music_table[id][MUSIC_INDEX]);
                    posn = posn + 1;
                }
            }

            //目標, オプションのセレクトボックス変更
            $("#targetid").val(String(Target));
            $("#optid").val(String(Opt));
            
            //バージョンをsubstreamに
            $("#verlistid").val("2");
            MusicSelectBoxChange(2);        
        }
        
    });

    
    /*==================================================================================================
    //譜面セレクトボックス生成
    ==================================================================================================*/
    function MusicSelectBoxChange(version){
        sl = document.getElementById('musiclistid');
        while(sl.lastChild)
        {
            sl.removeChild(sl.lastChild);
        }

        const selectVal = $("#verlistid").val();
        
        var return_array = [];

        for (var i = 0; i < music_table.length; i++){
            if(selectVal ==  music_table[i][VER_INDEX]){
                return_array.push(music_table[i]);
            }
        }

        for (var j = 0; j < return_array.length; j++){
            //存在判定配列の中をMUSIC_INDEXに当てはまる部分を確認
            if(existArray[return_array[j][MUSIC_INDEX]] == "0"){
                $("#musiclistid").append($("<option>").val(return_array[j][MUSIC_INDEX]).text(return_array[j][NAME_INDEX]));
            }
        }

    }
    
    
});


/*==================================================================================================
//パラメータ作成
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
    return ("?ex-" + compressedExist + "-ps-" +compressedPos + "-t-" + targetsl + "-o-" + optsl);
}