const MUSIC_NUM = 374;//20190226

var existArray= "";

function initchart(){
    $("#musiclistid").append($("<option>").val(music_table[0][MUSIC_INDEX]).text(music_table[0][NAME_INDEX]));
    
    for(var i = 0; i < MUSIC_NUM; i++){
        existArray = existArray + "0"; //これは62進数に置き換える
    }
    
    //a
    //url読み込み等
    //setDraggable();
}

function setDraggableAndDblclick(e){
	$( ".draggable" ).draggable().dblclick(function(){
	    
	    if (event.ctrlKey && event.shiftKey) {
            $(this).remove();
            
            var gatID = e.getAttribute("id");
            var gatID_i = gatID.replace("iidaze_", "").to_i;
            
            //現在表示中のバージョンを確認して動作を分ける
            //セレクトボックス再挿入の処理
            existArray = existArray.slice(0, gatID_i - 2) + "0" + existArray.slice(gatID_i - 1);
            
	    }
	    if (event.altKey) {
	        //alert("Controlキーが押されました");
	        //textageの対象譜面を別タブでオープン
	        var win = window.open('http://www.yahoo.co.jp', '_blank');
	        return;
	    }
	    
    });
}



jQuery(function(){

    $('.dbltex').dblclick(function () {

        var idname = $(this).attr("id"); 
        var music_id = idname.replace("iidaze_","");
        if (event.ctrlKey){
            const url1 = "http://textage.cc/score/";
            const url2 = "/";
            const url3 = ".html?D";
            const url4 = "C00";

            var version = music_table[music_id][VER_INDEX];
            var textage = music_table[music_id][ID_INDEX];
            var difficult = music_table[music_id][DIFF_INDEX];

            var url = url1 + version + url2 + textage + url3 + difficult + url4;

            window.open(url);
        }

        $(this).slideUp();
    });

<<<<<<< HEAD
=======
    $(".dbltest").dblclick( function(){
        $(this).text("ダブルクリック");
    });
    
    //$(".dbltex").on('dblclick', '.draggable', function(e) {
    //    $(this).remove();
    //});
    //import music_table from "list";
>>>>>>> adee875f1d3412b9e2b452f2dea3b0c48e77fc9b

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
            $("#musiclistid").append($("<option>").val(return_array[j][MUSIC_INDEX]).text(return_array[j][NAME_INDEX]));
        }
        
        

        //$("#aa").text("選択バージョン" + selectVal);
        /* var result = music_table.filter( function( value ) {

            var return_array = [];

             if(value[0] == selectVal){
                return_array = value[2];
            } 

            /* for(var i=0;i<return_array.length;i++){
                let op = document.createElement("option");
                op.value = arr[i].val;  //value値
                op.text = arr[i].txt;   //テキスト値
                document.getElementById("sel1").appendChild(op);
              }
            return return_array; 
         }) */
    });

    $('#Generate').click(function () {

        var selected_music_index = $("#musiclistid").val();
        var disp_name = music_table[selected_music_index - 1][DISP_INDEX];

        $("#musiclistid option").each( function(){
            if($(this).val() == music_table[selected_music_index - 1][MUSIC_INDEX]) {
              $(this).remove();
            }
        });
        
        var div_element = document.createElement("div");
        div_element.innerHTML = 
            '<div class="draggable music_box music_box_' + music_table[selected_music_index - 1][VER_INDEX] + 
            '" id="iidaze_'+ music_table[selected_music_index - 1][MUSIC_INDEX] +'">' 
            + disp_name + '</div>';
        var parent_object = document.getElementById("generate_position");
        parent_object.appendChild(div_element);


        setDraggableAndDblclick();
        
        existArray = existArray.slice(0, selected_music_index - 1) + "1" + existArray.slice(selected_music_index);
        //var tes2 = tes.slice(0, 2) + "a" + tes.slice(3);
        
    });
<<<<<<< HEAD

=======
    
    
>>>>>>> adee875f1d3412b9e2b452f2dea3b0c48e77fc9b
    $('#save').click(function () {
        if(window.confirm('今の状態をセーブしますか？')){
            //var comp = deflate(existArray);
            var compressed = lzbase62.compress(existArray);  
            
            document.cookie = "IIDAZE=" + compressed;
        }
        
    });
    
    $('#load').click(function () {
        if(window.confirm('保存してある状態をロードしますか？')){
            
            var compressed = document.cookie;
            
            var key = 'IIDAZE';
            var tmp = compressed.split(';');
            var kv = searchStrFromArray(tmp, key);
            
            var index1 = tmp.indexOf(key, 0);
        	if(index1 != -1){
        		tmp = tmp.substring(index1,tmp.length);
        		var index2 = tmp.indexOf("=",0) + 1;
        		var index3 = tmp.indexOf(";",index2);
        		return(document.location.href=decodeURIComponent(tmp.substring(index2,index3)));
        	}
                
            
            compressed = compressed.replace("IIDAZE=", "");
            var decompressed = lzbase62.decompress(compressed);  
            //var uncomp = inflate(comp);
            
            
            //document.cookie =
        }
        
    });
<<<<<<< HEAD



    $('#test').click(function () {
=======
    
    
    
    $('#test').click(function (){
>>>>>>> adee875f1d3412b9e2b452f2dea3b0c48e77fc9b
        $(this).text("クリックされました");
    });
});

function searchStrFromArray(arr, str){
    arr.some(function(value) {
        //cookie名と値に分ける
        var content = value.split('=');
        if(content[0] == str){
            return content;
        }
    });
    
    return -1;
<<<<<<< HEAD
}
=======
}
>>>>>>> adee875f1d3412b9e2b452f2dea3b0c48e77fc9b
