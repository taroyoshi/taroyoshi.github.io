const MUSIC_NUM = 374;//20190226

var existArray= new Array(MUSIC_NUM);

function initchart(){
    $("#musiclistid").append($("<option>").val(music_table[0][MUSIC_INDEX]).text(music_table[0][NAME_INDEX]));
    
    for(var i = 0; i < MUSIC_NUM; i++){
        existArray[i] = 0; //これは62進数に置き換える
    }

    

    
    
    //a
    //url読み込み等
    //setDraggable();
}

function setDraggableAndDblclick(id){
	$( id ).draggable().dblclick(function(){
	    
	    if (event.ctrlKey && event.shiftKey) {
            $(this).remove();
            
            var gatID = this.id;
            gatID = gatID.replace("iidaze_", "");
            var gatID_i = parseInt(gatID, 10);
            
            //現在表示中のバージョンを確認して動作を分ける
            //セレクトボックス再挿入の処理
            existArray[gatID_i] = 0;
            if(music_table[gatID_i][VER_INDEX] == $("#verlistid").val()){
                $("#musiclistid").append($("<option>").val(music_table[gatID_i][MUSIC_INDEX]).text(music_table[gatID_i][NAME_INDEX]));
                
            }
            //var musiclist_options = $('#musiclistid').children();
            //var a = musiclist_options[1].value;
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

            var url = url1 + version + url2 + textage + url3 + difficult + url4;

            var win = window.open(url);
            
	        return;
	    }
	    
    });
}



jQuery(function(){
    //バージョン変更
    $("#verlistid").change( function(){

        sl = document.getElementById('musiclistid');
        while(sl.lastChild)
        {
            sl.removeChild(sl.lastChild);
        }

        const selectVal = $("#verlistid").val();
        
        var return_array = [];

        //var a = music_table["holic"];
        for (var i = 0; i < music_table.length; i++){
            if(selectVal ==  music_table[i][VER_INDEX]){
                return_array.push(music_table[i]);
            }
        }

        for (var j = 0; j < return_array.length; j++){
            //存在判定配列の中をMUSI_INDEXに当てはまる部分を確認
            if(existArray[return_array[j][MUSIC_INDEX]] === 0){
                $("#musiclistid").append($("<option>").val(return_array[j][MUSIC_INDEX]).text(return_array[j][NAME_INDEX]));
            }
        }
        
        

        
    });

    //生成
    $('#Generate').click(function () {

        var selected_music_index = $("#musiclistid").val();
        var disp_name = music_table[selected_music_index][DISP_INDEX];

        $("#musiclistid option").each( function(){
            if($(this).val() == music_table[selected_music_index][MUSIC_INDEX]) {
              $(this).remove();
            }
        });
        
        var div_element = document.createElement("div");
        div_element.innerHTML = 
            '<div class="music_box music_box_' + music_table[selected_music_index][VER_INDEX] + 
            '" id="iidaze_'+ music_table[selected_music_index][MUSIC_INDEX] +'">' 
            + disp_name + '</div>';
        var parent_object = document.getElementById("generate_position");
        parent_object.appendChild(div_element);

        //対象IDをドラッグ可, ダブルクリックイベント付与
        setDraggableAndDblclick("#iidaze_" + String(music_table[selected_music_index][MUSIC_INDEX]));
        existArray[selected_music_index] = 1;
               
    });
    
    //保存
    $('#save').click(function () {

        if (!window.localStorage) {
            alert("お使いのブラウザはlocalstorageに対応していないため、セーブできません。");
            return;
        }
        if(window.confirm('今の状態をセーブしますか？')){
            //var comp = deflate(existArray);
            var compressedExist = lzbase62.compress(existArray);  
            
            //loacl strageの削除
            makeUrl(existArray);
            
            window.localStorage.setItem(['exist'],[compressedExist]);
            window.localStorage.setItem(['pos'],[]);
        }
        
    });
    //読み出し
    $('#load').click(function () {
        if (!window.localStorage) {
            alert("お使いのブラウザはlocalstorageに対応していないため、ロードできません。");
            return;
        }
        if(window.confirm('保存してある状態をロードしますか？')){
            
            
            var compressed = window.localStorage.getItem(['IIDAZE']);
            
            
            var key = 'IIDAZE';
            var tmp = compressed.split(';');
            //var kv = searchStrFromArray(tmp, key);
            /*
            var index1 = tmp.indexOf(key, 0);
        	if(index1 != -1){
        		tmp = tmp.substring(index1,tmp.length);
        		var index2 = tmp.indexOf("=",0) + 1;
        		var index3 = tmp.indexOf(";",index2);
        		return(document.location.href=decodeURIComponent(tmp.substring(index2,index3)));
        	}
        	*/
              
            
            
            var decompressed = lzbase62.decompress(compressed);  
            
        }
        
    });
/* 
    $('#size').click(function(w, h) {
        $(".chart_axis").css({
            "width": w + "px",
            "height": r + "px"
        });
    }); */
    
    
    $('#test').click(function (){
        $(this).text("クリックされました");
    });
});

function makeUrl(arr){
    
    var retUrl = "";
    
    for(var id = 0; id < MUSIC_NUM; id++){
        if(arr[id] == 1){
            
            var each_id = document.getElementById('iidaze_'+ id);
            //if (parseInt(each_id.style.left) >= 1280
            var l = each_id.style.left;
            var l36 = parseInt(l).toString(36);
            var t = each_id.style.top;
            var t36 = parseInt(t).toString(36);
            
            returl = retUrl + l36 + t36;
        }
    }
    
    return retUrl;
}
    


//不要?
function searchStrFromArray(arr, str){
    arr.some(function(value) {
        //cookie名と値に分ける
        var content = value.split('=');
        if(content[0] == str){
            return content;
        }
    });
    
    return -1;
}
