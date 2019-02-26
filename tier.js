function initchart(){
    $("#musiclistid").append($("<option>").val(music_table[0][MUSIC_INDEX]).text(music_table[0][NAME_INDEX]));

    //url読み込み等
    //setDraggable();
}

function setDraggableAndDblclick(){
	$( ".draggable" ).draggable().dblclick(function(){
	    
	    
	    if (event.ctrlKey) {
	        //alert("Controlキーが押されました");
	        var win = window.open('http://www.yahoo.co.jp', '_blank');
	    }
	    
	    
	    if (event.ctrlKey && event.shiftKey && event.altKey) {
            $(this).remove();
            
            //セレクトボックスの処理
	    }
    });
}





jQuery(function(){

    $(".dbltest").dblclick( function(){
        $(this).text("ダブルクリック");
    });
    
    //$(".dbltex").on('dblclick', '.draggable', function(e) {
    //    $(this).remove();
    //});
    //import music_table from "list";

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
            '<div class="draggable dbltex music_box music_box_' + music_table[selected_music_index - 1][VER_INDEX] + 
            '" id="iidaze_'+ music_table[selected_music_index - 1][MUSIC_INDEX] +'">' 
            + disp_name + '</div>';
        var parent_object = document.getElementById("generate_position");
        parent_object.appendChild(div_element);


        setDraggableAndDblclick();
        
        
        
    });

    $('#test').click(function () {
        $(this).text("クリックされました");
    });
});