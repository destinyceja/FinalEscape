/* alice-alice2-alice3-scene4*/
function nextImage(el){
	if (el.src.match("images/alice.PNG")){
	  el.src = "images/alice2.PNG";
	} else if (el.src.match("images/alice2.PNG")){
		el.src = "images/alice3.PNG";
	} else if (el.src.match("images/alice3.PNG")){
		el.src = "images/scene4.jpg";
	} else {
		el.src = "images/alice.PNG";
	}
}
/* alice3-scene4-alice-alice2*/
function nextImage2(el){
	if (el.src.match("images/alice3.PNG")){
	  el.src = "images/scene4.jpg";
	} else if (el.src.match("images/scene4.jpg")){
		el.src = "images/alice.PNG";
	} else if (el.src.match("images/alice.PNG")){
		el.src = "images/alice2.PNG";
	} else {
		el.src = "images/alice3.PNG";
	}
}
/* alice2-alice3-scene4-alice*/
function nextImage3(el){
	if (el.src.match("images/alice2.PNG")){
	  el.src = "images/alice3.PNG";
	} else if (el.src.match("images/alice3.PNG")){
		el.src = "images/scene4.jpg";
	} else if (el.src.match("images/scene4.jpg")){
		el.src = "images/alice.PNG";
	} else {
		el.src = "images/alice2.PNG";
	}
}
/* alice3-scene4-alice-alice2*/
function nextImage4(el){
	if (el.src.match("images/alice3.PNG")){
	  el.src = "images/scene4.jpg";
	} else if (el.src.match("images/scene4.jpg")){
		el.src = "images/alice.PNG";
	} else if (el.src.match("images/alice.PNG")){
		el.src = "images/alice2.PNG";
	} else {
		el.src = "images/alice3.PNG";
	}
}
/* alice2-alice3-alice-scene4*/
function nextImage5(el){
	if (el.src.match("images/alice2.PNG")){
	  el.src = "images/alice3.PNG";
	} else if (el.src.match("images/alice3.PNG")){
		el.src = "images/alice.PNG";
	} else if (el.src.match("images/alice.PNG")){
		el.src = "images/scene4.jpg";
	} else {
		el.src = "images/alice2.PNG";
	}
}
/* scene4-alice-alice2-alice3*/
function nextImage6(el){
	if (el.src.match("images/scene4.jpg")){
	  el.src = "images/alice.PNG";
	} else if (el.src.match("images/alice.PNG")){
		el.src = "images/alice2.PNG";
	} else if (el.src.match("images/alice2.PNG")){
		el.src = "images/alice3.PNG";
	} else {
		el.src = "images/scene4.jpg";
	}
}

function checkSlot(){
		if (document.getElementById('first').src.match("images/alice.PNG") && document.getElementById('second').src.match("images/alice.PNG")){
		first.classList.add("opaque");
		second.classList.add("opaque");
	} 
	else{
	}
}
function checkSlot1(){
		if (document.getElementById('third').src.match("images/alice2.PNG") && document.getElementById('fourth').src.match("images/alice2.PNG")){
		third.classList.add("opaque");
		fourth.classList.add("opaque");
	} 
	else{
	}
}
function checkSlot2(){
		if (document.getElementById('fifth').src.match("images/alice3.PNG") && document.getElementById('sixth').src.match("images/alice3.PNG")){
		fifth.classList.add("opaque");
		sixth.classList.add("opaque");
	} 
	else{
	}
}