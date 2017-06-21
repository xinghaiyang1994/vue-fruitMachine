(function(doc,win){
	function change(){
		doc.documentElement.style.fontSize=document.documentElement.clientWidth*50/320+'px';
	}
	change();
	window.addEventListener('resize',change,false);
	
})(document,window);