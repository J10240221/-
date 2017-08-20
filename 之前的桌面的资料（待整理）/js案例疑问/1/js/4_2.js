//找到全选按钮
var checkAllElem=document.querySelector("table thead tr th:first-child input");
//找到所有下面的小按钮的数组
var chbs=document.querySelectorAll("table tbody tr td:first-child input");
//遍历下面小按钮的单击事件，每次单击，触发isAllChecked进行判断;
for(var i=0;i<chbs.length;i++){
	//如果都是已选中的状态
	chbs[i].onclick=isAllChecked;
	/*
	******************
	*/
	// if(isAllChecked) checkAllElem.checked=true;
	// 	//全选按钮checkAllElem的checked状态该为true
	// else checkAllElem.checked=false;
	// else checkAllElem.checked=false;
}
//为checkAllElem绑定打击事件，单击时，改变下面的所有为选中
checkAllElem.onclick=function(){
	for(var i=0;i<chbs.length;i++){
		chbs[i].checked=this.checked;
		// 每次有被选中的，就出发事件isAllChecked
	}
	
}
function isAllChecked(){
	if(!this.checked) checkAllElem.checked=false;
	else{
		for(var i=0,sum=0;i<chbs.length;i++){
		//如果每个chbs[i]的checked都为true,及所有该属性的Number想加==length时
		sum+=Number(chbs[i].checked);
		}
		if(sum==chbs.length) checkAllElem.checked=true;
	}
}


// function isAllChecked(){
// 	for(var i=0,sum=0;i<chbs.length;i++){
// 		//如果每个chbs[i]的checked都为true,及所有该属性的Number想加==length时
// 		sum+=Number(chbs[i].checked);
// 	}
// 	//如果==chbs.length，那么返回true
// 	if(sum==chbs.length) return true;
// 	//否则 返回false
// 	else return false;
// }