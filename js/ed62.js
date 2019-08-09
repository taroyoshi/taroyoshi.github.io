/*===============================================
62進数変換 引用元
http://www.pionic-rour.com/works/script/1062.htm
=================================================*/

var num = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function tos(target) {
	
	var a = "";
	var b = target;
	while ( b > 0 ){
		a = num.charAt(b % 62)+a;
		b = Math.floor(b / 62) ;
	}
	return a;
}

function tot(target) {
	var i,j,k=0;
	var c = target;
	var length = c.length;

	for (i=0;i<=length;i++) {
		for (j=0;j<62;j++) {
			if(num.charAt(j) == c.charAt(i)) {
				k+=j*Math.pow(62,length-i-1);
			}
		}

	}
	return k;
}