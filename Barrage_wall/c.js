//获取随机颜色
function randomColor1(){
            var r = Math.floor(Math.random()*256);
            var g = Math.floor(Math.random()*256);
            var b = Math.floor(Math.random()*256);
             
            if(r < 16){
                r = "0"+r.toString(16);
            }else{
                r = r.toString(16);
            }
            if(g < 16){
                g = "0"+g.toString(16);
            }else{
                g = g.toString(16);
            }
            if(b < 16){
                b = "0"+b.toString(16);
            }else{
                b = b.toString(16);
            }
             
            return "#"+r+g+b;
}
//生成随机字符串
function zimu(len){
    len = len || 1;
    var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
	return pwd;
}
function getValue(){
	var i=zimu(6);
	var content="<p "+"id="+i+">"+$("#input").val()+"<p>";
	console.log(content);
	//var color = '#'+red+blue+green;
	$(".wall").append(content);
	$("#" + i + "").css("text-align","right");
	$("#" + i + "").css("color",randomColor1());
	$("#" + i + "").animate({left: '-50px'}, "slow");
	$("#input").val("");
	
//console.log(content);
}

function deleteEle(){
	$(".wall p").remove()
	
}
// 增加注释内容，测试提交
function test(){
    console.log("test");
    console.log("test");
    console.log("test");
    console.log("test");

}