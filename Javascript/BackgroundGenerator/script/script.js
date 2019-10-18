var color_1 = document.querySelector(".COLOR_INPUT1");
var color_2 = document.querySelector(".COLOR_INPUT2");
var body    = document.getElementById("gradient");
var valuer  = document.getElementById("color_value");
function set_gradient(){
	console.log("linear-gradient( to right,"+color_1.value+","+color_2.value+" ;)");
	body.style.background = "linear-gradient( to right,"+color_1.value+","+color_2.value+")";
	valuer.textContent = body.style.background+";";
}
color_1.addEventListener("change",set_gradient);
color_2.addEventListener("change",set_gradient);
set_gradient();
