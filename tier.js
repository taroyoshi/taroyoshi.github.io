

function initchart(){
    $("#musiclistid").append($("<option>").val(music_table[0][MUSIC_INDEX]).text(music_table[0][NAME_IMDEX]));
    setDraggable();
}

function setDraggable(){
	$( ".draggable" ).draggable();
}





jQuery(function(){

    
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
            $("#musiclistid").append($("<option>").val(return_array[j][MUSIC_INDEX]).text(return_array[j][NAME_IMDEX]));
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

    $('#test').click(function () {
        $(this).text("クリックされました");
    });
});