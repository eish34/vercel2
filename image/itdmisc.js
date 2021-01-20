function checkKey(e){
	if(document.all){
		key=window.event.keyCode;
	}else{
		key=e.which;
	}	
	if(key==13 || key==32){	
		if(document.all){
			window.event.cancelBubble=true;
		}else{
			e.stopPropagation();
		}		
		return true;
	}	
	return false;
}

function c(e) {
	if (!e) var e = window.event;		
	key = e.keyCode;
	if(key == 9){
		e.cancelBubble = true;
		if (e.stopPropagation) e.stopPropagation();		
		return false;
	}
	var o = (e.target) ? e.target : e.srcElement
	o.onclick();
	return false;
}

function buttonStatus (button) {
   button.alreadyran = true;
}