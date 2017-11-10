var buttons = document.querySelectorAll('button');
for(var i=0;i<buttons.length;i++){
	buttons[i].onclick = function(e){
		let f = e.currentTarget;
		let o = f.parentNode.setAttribute('data-status','done');
	};
};
