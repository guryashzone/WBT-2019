var cBtns = document.getElementsByClassName('cBtns');
var cdBtns = document.getElementsByClassName('dBtns');

let renderRes = function (){
    res.innerHTML += this.innerHTML;
}

for( let i=0;i<cBtns.length;i++ ){
    cBtns[i].addEventListener('click',renderRes);    
}

btnClr.addEventListener('click',function(){
	res.innerHTML = "";
});

btnEql.addEventListener('click',function(){
	let elements = res.innerHTML.split("");
	// console.log(equation);
	let opr1='',opr2='',symb,flag = 0,result;
	for( index in elements ){

		element = elements[index];
		if( element == '+' ){
			symb = '+';
			flag = 1;
		}else if( element == '-' ){
			symb = '-';
			flag = 1;
		}else if( element == '*' ){
			symb = '*';
			flag = 1;
		}else if( element == '/' ){
			symb = '/';
			flag = 1;
		}else{
			if( !flag )
				opr1 += element;
			else
				opr2 += element;
		}
	}
		result = eval(parseInt(opr1,2)+symb+parseInt(opr2,2));
		res.innerHTML = result.toString(2);
});	