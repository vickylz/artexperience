let contador = 0;

let Enter = document.getElementById("enter");
function showMessage(){
	Enter.style.display = 'block';
};
setTimeout(showMessage, 1500);


let Description = document.getElementById("first")
document.addEventListener("keydown", function(){
	if(contador == 0){
		let instructions = document.getElementById("instructions");
		Description.remove();
		document.body.innerHTML = '<div class="instructions" id="instructions"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4">Please turn off any light other than the screen you\'re looking at</p></div><div class="col-12 animated slideInUp enter2" id="enter2"><p class="lead text-center">Press \'enter\'</p></div></div></div>';
		let Enter2 = document.getElementById("enter2");
		function showMessage2(){
		Enter2.style.display = 'block';
		};
		setTimeout(showMessage2, 3000);
	} else if (contador == 1){
		let think = document.getElementById("think");
		instructions.remove();
		document.body.innerHTML = '<div class="think" id="think"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4">Think of this screen as a lamp...</p></div><div class="col-12 animated slideInUp enter3" id="enter3"><p class="lead text-center">Press \'enter\'</p></div></div></div>'
		let Enter3 = document.getElementById("enter3");
		function showMessage3(){
		Enter3.style.display = 'block';
		};
		setTimeout(showMessage3, 4000);
	} else if (contador == 2){
		let blank = document.getElementById("blank");
		think.remove();
		document.body.innerHTML = '<div class="blank" id="blank"><div class="row"><div class="col-12 animated slideInUp enter4" id="enter4"><p class="lead text-center">Press \'enter\'</p></div></div></div>'
		let Enter4 = document.getElementById("enter4");
		function showMessage4(){
		Enter4.style.display = 'block';
		};
		setTimeout(showMessage4, 4000);
	} else if (contador == 3){
		let should = document.getElementById("should");
		blank.remove();
		document.body.innerHTML = '<div class="should" id="should"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4">You should\'t look at the screen, you should look at the space around the screen...</p></div><div class="col-12 animated slideInUp enter5" id="enter5"><p class="lead text-center">Press \'enter\'</p></div></div></div>'
		let Enter5 = document.getElementById("enter5");
		function showMessage5(){
		Enter5.style.display = 'block';
		};
		setTimeout(showMessage5, 5000);
	} else if (contador == 4){
		let pay = document.getElementById("pay");
		should.remove();
		document.body.innerHTML = '<div class="pay" id="pay"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4">And pay attention to how you\'re in that space...</p></div><div class="col-12 animated slideInUp enter6" id="enter6"><p class="lead text-center">Press \'enter\'</p></div></div></div>'
		let Enter6 = document.getElementById("enter6");
		function showMessage6(){
		Enter6.style.display = 'block';
		};
		setTimeout(showMessage6, 5000);
	} else if (contador == 5){
		let lets = document.getElementById("lets");
		pay.remove();
		document.body.innerHTML = '<div class="lets" id="lets"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4">So let\'s get started. I\'ll make it yellow...</p></div><div class="col-12 animated slideInUp enter7" id="enter7"><p class="lead text-center">Press \'enter\'</p></div></div></div>'
		let Enter7 = document.getElementById("enter7");
		function showMessage7(){
		Enter7.style.display = 'block';
		};
		setTimeout(showMessage7, 5000);
	} else if (contador ==6){
		let yellow = document.getElementById("yellow");
		lets.remove();
		document.body.innerHTML = '<div class="yellow" id="yellow"><div class="row"><div class="col-12 animated slideInUp enter8" id="enter8"><p class="lead text-center">Press \'enter\'</p></div></div></div>'
		let Enter8 = document.getElementById("enter8");
		function showMessage8(){
		Enter8.style.display = 'block';
		};
		setTimeout(showMessage8, 4000);
	} else if (contador ==7){
		let yellow2 = document.getElementById("yellow2");
		yellow.remove();
		document.body.innerHTML = '<div class="yellow2" id="yellow2"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4">Do you like it? See how the room <strong>is</strong> in fact <strong>yellow...</strong></p></div><div class="col-12 animated slideInUp enter9" id="enter9"><p class="lead text-center">Press \'enter\'</p></div></div></div>'
		let Enter9 = document.getElementById("enter9");
		function showMessage9(){
		Enter9.style.display = 'block';
		};
		setTimeout(showMessage9, 4000);
	} else if (contador ==8){
		let yellow3 = document.getElementById("yellow3");
		yellow2.remove();
		document.body.innerHTML = '<div class="yellow3" id="yellow3"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4"><strong>Enjoy the yellow...</strong></p></div><div class="col-12 animated slideInUp enter10" id="enter10"><p class="lead text-center">Press \'enter\'</p></div></div></div>'
		let Enter10 = document.getElementById("enter10");
		function showMessage10(){
		Enter10.style.display = 'block';
		};
		setTimeout(showMessage10, 4000);
	} else if (contador ==9){
		let yellow4 = document.getElementById("yellow4");
		yellow3.remove();
		document.body.innerHTML = '<div class="yellow4" id="yellow4"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4"><strong>Take a deep breath...</strong></p></div><div class="col-12 animated slideInUp enter11" id="enter11"><p class="lead text-center">Press \'enter\'</p></div></div></div>'
		let Enter11 = document.getElementById("enter11");
		function showMessage11(){
		Enter11.style.display = 'block';
		};
		setTimeout(showMessage11, 4000);
	} else if (contador ==10){
		let yellow5 = document.getElementById("yellow5");
		yellow4.remove();
		document.body.innerHTML = '<div class="yellow5" id="yellow5"><div class="row"><div class="col-12 animated slideInUp enter12" id="enter12"><p class="lead text-center">Press \'enter\'</p></div></div></div>'
		let Enter12 = document.getElementById("enter12");
		function showMessage12(){
		Enter12.style.display = 'block';
		};
		setTimeout(showMessage12, 5000);
	} else if (contador ==11){
		let yellow6 = document.getElementById("yellow6");
		yellow5.remove();
		document.body.innerHTML = '<div class="yellow6" id="yellow6"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4"><strong>Let\'s change the color</strong></p></div><div class="col-12 animated slideInUp enter13" id="enter13"><p class="lead text-center">Press \'enter\'</p></div></div></div>'
		let Enter13 = document.getElementById("enter13");
		function showMessage13(){
		Enter13.style.display = 'block';
		};
		setTimeout(showMessage13, 4000);
	} else if (contador==12){
		let red = document.getElementById("red");
		yellow6.remove();
		document.body.innerHTML = '<div class="red" id="red"><div class="row"><div class="col-12 animated slideInUp enter14" id="enter14"><p class="lead text-center">Press \'enter\'</p></div></div></div>'
		let Enter14 = document.getElementById("enter14");
		function showMessage14(){
		Enter14.style.display = 'block';
		};
		setTimeout(showMessage14, 5000);
	} else if (contador==13){
		let red2 = document.getElementById("red2");
		red.remove();
		document.body.innerHTML = '<div class="red2" id="red2"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4"><strong>Do you see how your room suddenly changed?</strong></p></div><div class="col-12 animated slideInUp enter15" id="enter15"><p class="lead text-center">Press \'enter\'</p></div></div></div>'
		let Enter15 = document.getElementById("enter15");
		function showMessage15(){
		Enter15.style.display = 'block';
		};
		setTimeout(showMessage15, 5000);
	} else if (contador==14){
		let red3 = document.getElementById("red3");
		red2.remove();
		document.body.innerHTML = '<div class="red3" id="red3"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4"><strong>Red light makes you more calmed, it makes you tired, it relaxes you...</strong></p></div><div class="col-12 animated slideInUp enter16" id="enter16"><p class="lead text-center">Press \'enter\'</p></div></div></div>'
		let Enter16 = document.getElementById("enter16");
		function showMessage16(){
		Enter16.style.display = 'block';
		};
		setTimeout(showMessage16, 5000);
	} else if (contador==15){
		let blue = document.getElementById("blue");
		red3.remove();
		document.body.innerHTML = '<div class="blue" id="blue"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4"><strong>While with a certain blue color you stay awake...</strong></p></div><div class="col-12 animated slideInUp enter17" id="enter17"><p class="lead text-center">Press \'enter\'</p></div></div></div>'
		let Enter17 = document.getElementById("enter17");
		function showMessage17(){
		Enter17.style.display = 'block';
		};
		setTimeout(showMessage17,5000)
	} else if (contador==16){
		let blue2 = document.getElementById("blue2");
		blue.remove();
		document.body.innerHTML = '<div class="blue2" id="blue2"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4"><strong>So, every color has its own different way of influencing us...</strong></p></div><div class="col-12 animated slideInUp enter18" id="enter18"><p class="lead text-center">Press \'enter\'</p></div></div></div>'
		let Enter18 = document.getElementById("enter18");
		function showMessage18(){
		Enter18.style.display = 'block';
		};
		setTimeout(showMessage18,5000)
	} else if (contador==17){
		let green = document.getElementById("green");
		blue2.remove();
		document.body.innerHTML = '<div class="green" id="green"><div class="row"><div class="col-12 animated slideInUp enter19" id="enter19"><p class="lead text-center">Press \'enter\'</p></div></div></div>'
		let Enter19 = document.getElementById("enter19");
		function showMessage19(){
		Enter19.style.display = 'block';
		};
		setTimeout(showMessage19,5000)
	} else if (contador==18){
		let purple = document.getElementById("purple");
		green.remove();
		document.body.innerHTML = '<div class="purple" id="purple"><div class="row"><div class="col-12 animated slideInUp enter20" id="enter20"><p class="lead text-center">Press \'enter\'</p></div></div></div>'
		let Enter20 = document.getElementById("enter20");
		function showMessage20(){
		Enter20.style.display = 'block';
		};
		setTimeout(showMessage20,5000)
	} else if (contador==19){
		let orange = document.getElementById("orange");
		purple.remove();
		document.body.innerHTML = '<div class="orange" id="orange"><div class="row"><div class="col-12 animated slideInUp enter21" id="enter21"><p class="lead text-center">Press \'enter\'</p></div></div></div>'
		let Enter21 = document.getElementById("enter21");
		function showMessage21(){
		Enter21.style.display = 'block';
		};
		setTimeout(showMessage21,5000)
	} else if (contador==20){
		let final1 = document.getElementById("final1");
		orange.remove();
		document.body.innerHTML = '<div class="final1" id="final1"><div class="row"><div class="col-12 animated pulse"><p class="lead text-center display-4"><strong><strong>This is what art is about</strong></strong></p></div><div class="col-12 animated slideInUp enter22" id="enter22"><p class="lead text-center"><strong><strong>Press \'enter\' for credits</strong></strong></p></div></div></div>'
		let Enter22 = document.getElementById("enter22");
		function showMessage22(){
		Enter22.style.display = 'block';
		};
		setTimeout(showMessage22,3000)
	} else if (contador ==21){
		let final2 = document.getElementById("final2");
		final1.remove();
		document.body.innerHTML = '<div class="final2" id="final2"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4 d-md-flex d-none"><strong>This art experience was taken from the <i>"Abstract: The Art of Design"</i> episode <i>"Olafur Eliasson: The Design of Art"</i> by Netflix. Taken to your screen by Victoria López Zamora.</strong></p><p class="lead text-center d-md-none d-sm-flex"><strong>This art experience was taken from the <i>"Abstract: The Art of Design"</i> episode <i>"Olafur Eliasson: The Design of Art"</i> by Netflix. Taken to your screen by Victoria López Zamora.</strong></p></div></div></div>'
	}
contador = contador +1
});

document.addEventListener("touchstart", function(){
	if(contador == 0){
		let instructions = document.getElementById("instructions");
		Description.remove();
		document.body.innerHTML = '<div class="instructions" id="instructions"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4">Please turn off any light other than the screen you\'re looking at</p></div><div class="col-12 animated slideInUp enter2" id="enter2"><p class="lead text-center d-md-flex d-none">Press \'enter\'</p><p class="lead text-center d-sm-flex d-md-none">Touch the screen</p></div></div></div>';
		let Enter2 = document.getElementById("enter2");
		function showMessage2(){
		Enter2.style.display = 'block';
		};
		setTimeout(showMessage2, 3000);
	} else if (contador == 1){
		let think = document.getElementById("think");
		instructions.remove();
		document.body.innerHTML = '<div class="think" id="think"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4">Think of this screen as a lamp...</p></div><div class="col-12 animated slideInUp enter3" id="enter3"><p class="lead text-center d-md-flex d-none">Press \'enter\'</p><p class="lead text-center d-sm-flex d-md-none">Touch the screen</p></div></div></div>'
		let Enter3 = document.getElementById("enter3");
		function showMessage3(){
		Enter3.style.display = 'block';
		};
		setTimeout(showMessage3, 4000);
	} else if (contador == 2){
		let blank = document.getElementById("blank");
		think.remove();
		document.body.innerHTML = '<div class="blank" id="blank"><div class="row"><div class="col-12 animated slideInUp enter4" id="enter4"><p class="lead text-center d-md-flex d-none">Press \'enter\'</p><p class="lead text-center d-sm-flex d-md-none">Touch the screen</p></div></div></div>'
		let Enter4 = document.getElementById("enter4");
		function showMessage4(){
		Enter4.style.display = 'block';
		};
		setTimeout(showMessage4, 4000);
	} else if (contador == 3){
		let should = document.getElementById("should");
		blank.remove();
		document.body.innerHTML = '<div class="should" id="should"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4">You should\'t look at the screen, you should look at the space around the screen...</p></div><div class="col-12 animated slideInUp enter5" id="enter5"><p class="lead text-center d-md-flex d-none">Press \'enter\'</p><p class="lead text-center d-sm-flex d-md-none">Touch the screen</p></div></div></div>'
		let Enter5 = document.getElementById("enter5");
		function showMessage5(){
		Enter5.style.display = 'block';
		};
		setTimeout(showMessage5, 5000);
	} else if (contador == 4){
		let pay = document.getElementById("pay");
		should.remove();
		document.body.innerHTML = '<div class="pay" id="pay"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4">And pay attention to how you\'re in that space...</p></div><div class="col-12 animated slideInUp enter6" id="enter6"><p class="lead text-center d-md-flex d-none">Press \'enter\'</p><p class="lead text-center d-sm-flex d-md-none">Touch the screen</p></div></div></div>'
		let Enter6 = document.getElementById("enter6");
		function showMessage6(){
		Enter6.style.display = 'block';
		};
		setTimeout(showMessage6, 5000);
	} else if (contador == 5){
		let lets = document.getElementById("lets");
		pay.remove();
		document.body.innerHTML = '<div class="lets" id="lets"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4">So let\'s get started. I\'ll make it yellow...</p></div><div class="col-12 animated slideInUp enter7" id="enter7"><p class="lead text-center d-md-flex d-none">Press \'enter\'</p><p class="lead text-center d-sm-flex d-md-none">Touch the screen</p></div></div></div>'
		let Enter7 = document.getElementById("enter7");
		function showMessage7(){
		Enter7.style.display = 'block';
		};
		setTimeout(showMessage7, 5000);
	} else if (contador ==6){
		let yellow = document.getElementById("yellow");
		lets.remove();
		document.body.innerHTML = '<div class="yellow" id="yellow"><div class="row"><div class="col-12 animated slideInUp enter8" id="enter8"><p class="lead text-center d-md-flex d-none">Press \'enter\'</p><p class="lead text-center d-sm-flex d-md-none">Touch the screen</p></div></div></div>'
		let Enter8 = document.getElementById("enter8");
		function showMessage8(){
		Enter8.style.display = 'block';
		};
		setTimeout(showMessage8, 4000);
	} else if (contador ==7){
		let yellow2 = document.getElementById("yellow2");
		yellow.remove();
		document.body.innerHTML = '<div class="yellow2" id="yellow2"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4">Do you like it? See how the room <strong>is</strong> in fact <strong>yellow...</strong></p></div><div class="col-12 animated slideInUp enter9" id="enter9"><p class="lead text-center d-md-flex d-none">Press \'enter\'</p><p class="lead text-center d-sm-flex d-md-none">Touch the screen</p></div></div></div>'
		let Enter9 = document.getElementById("enter9");
		function showMessage9(){
		Enter9.style.display = 'block';
		};
		setTimeout(showMessage9, 4000);
	} else if (contador ==8){
		let yellow3 = document.getElementById("yellow3");
		yellow2.remove();
		document.body.innerHTML = '<div class="yellow3" id="yellow3"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4"><strong>Enjoy the yellow...</strong></p></div><div class="col-12 animated slideInUp enter10" id="enter10"><p class="lead text-center d-md-flex d-none">Press \'enter\'</p><p class="lead text-center d-sm-flex d-md-none">Touch the screen</p></div></div></div>'
		let Enter10 = document.getElementById("enter10");
		function showMessage10(){
		Enter10.style.display = 'block';
		};
		setTimeout(showMessage10, 4000);
	} else if (contador ==9){
		let yellow4 = document.getElementById("yellow4");
		yellow3.remove();
		document.body.innerHTML = '<div class="yellow4" id="yellow4"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4"><strong>Take a deep breath...</strong></p></div><div class="col-12 animated slideInUp enter11" id="enter11"><p class="lead text-center d-md-flex d-none">Press \'enter\'</p><p class="lead text-center d-sm-flex d-md-none">Touch the screen</p></div></div></div>'
		let Enter11 = document.getElementById("enter11");
		function showMessage11(){
		Enter11.style.display = 'block';
		};
		setTimeout(showMessage11, 4000);
	} else if (contador ==10){
		let yellow5 = document.getElementById("yellow5");
		yellow4.remove();
		document.body.innerHTML = '<div class="yellow5" id="yellow5"><div class="row"><div class="col-12 animated slideInUp enter12" id="enter12"><p class="lead text-center d-md-flex d-none">Press \'enter\'</p><p class="lead text-center d-sm-flex d-md-none">Touch the screen</p></div></div></div>'
		let Enter12 = document.getElementById("enter12");
		function showMessage12(){
		Enter12.style.display = 'block';
		};
		setTimeout(showMessage12, 5000);
	} else if (contador ==11){
		let yellow6 = document.getElementById("yellow6");
		yellow5.remove();
		document.body.innerHTML = '<div class="yellow6" id="yellow6"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4"><strong>Let\'s change the color</strong></p></div><div class="col-12 animated slideInUp enter13" id="enter13"><p class="lead text-center d-md-flex d-none">Press \'enter\'</p><p class="lead text-center d-sm-flex d-md-none">Touch the screen</p></div></div></div>'
		let Enter13 = document.getElementById("enter13");
		function showMessage13(){
		Enter13.style.display = 'block';
		};
		setTimeout(showMessage13, 4000);
	} else if (contador==12){
		let red = document.getElementById("red");
		yellow6.remove();
		document.body.innerHTML = '<div class="red" id="red"><div class="row"><div class="col-12 animated slideInUp enter14" id="enter14"><p class="lead text-center d-md-flex d-none">Press \'enter\'</p><p class="lead text-center d-sm-flex d-md-none">Touch the screen</p></div></div></div>'
		let Enter14 = document.getElementById("enter14");
		function showMessage14(){
		Enter14.style.display = 'block';
		};
		setTimeout(showMessage14, 5000);
	} else if (contador==13){
		let red2 = document.getElementById("red2");
		red.remove();
		document.body.innerHTML = '<div class="red2" id="red2"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4"><strong>Do you see how your room suddenly changed?</strong></p></div><div class="col-12 animated slideInUp enter15" id="enter15"><p class="lead text-center d-md-flex d-none">Press \'enter\'</p><p class="lead text-center d-sm-flex d-md-none">Touch the screen</p></div></div></div>'
		let Enter15 = document.getElementById("enter15");
		function showMessage15(){
		Enter15.style.display = 'block';
		};
		setTimeout(showMessage15, 5000);
	} else if (contador==14){
		let red3 = document.getElementById("red3");
		red2.remove();
		document.body.innerHTML = '<div class="red3" id="red3"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4"><strong>Red light makes you more calmed, it makes you tired, it relaxes you...</strong></p></div><div class="col-12 animated slideInUp enter16" id="enter16"><p class="lead text-center d-md-flex d-none">Press \'enter\'</p><p class="lead text-center d-sm-flex d-md-none">Touch the screen</p></div></div></div>'
		let Enter16 = document.getElementById("enter16");
		function showMessage16(){
		Enter16.style.display = 'block';
		};
		setTimeout(showMessage16, 5000);
	} else if (contador==15){
		let blue = document.getElementById("blue");
		red3.remove();
		document.body.innerHTML = '<div class="blue" id="blue"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4"><strong>While with a certain blue color you stay awake...</strong></p></div><div class="col-12 animated slideInUp enter17" id="enter17"><p class="lead text-center d-md-flex d-none">Press \'enter\'</p><p class="lead text-center d-sm-flex d-md-none">Touch the screen</p></div></div></div>'
		let Enter17 = document.getElementById("enter17");
		function showMessage17(){
		Enter17.style.display = 'block';
		};
		setTimeout(showMessage17,5000)
	} else if (contador==16){
		let blue2 = document.getElementById("blue2");
		blue.remove();
		document.body.innerHTML = '<div class="blue2" id="blue2"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4"><strong>So, every color has its own different way of influencing us...</strong></p></div><div class="col-12 animated slideInUp enter18" id="enter18"><p class="lead text-center d-md-flex d-none">Press \'enter\'</p><p class="lead text-center d-sm-flex d-md-none">Touch the screen</p></div></div></div>'
		let Enter18 = document.getElementById("enter18");
		function showMessage18(){
		Enter18.style.display = 'block';
		};
		setTimeout(showMessage18,5000)
	} else if (contador==17){
		let green = document.getElementById("green");
		blue2.remove();
		document.body.innerHTML = '<div class="green" id="green"><div class="row"><div class="col-12 animated slideInUp enter19" id="enter19"><p class="lead text-center d-md-flex d-none">Press \'enter\'</p><p class="lead text-center d-sm-flex d-md-none">Touch the screen</p></div></div></div>'
		let Enter19 = document.getElementById("enter19");
		function showMessage19(){
		Enter19.style.display = 'block';
		};
		setTimeout(showMessage19,5000)
	} else if (contador==18){
		let purple = document.getElementById("purple");
		green.remove();
		document.body.innerHTML = '<div class="purple" id="purple"><div class="row"><div class="col-12 animated slideInUp enter20" id="enter20"><p class="lead text-center d-md-flex d-none">Press \'enter\'</p><p class="lead text-center d-sm-flex d-md-none">Touch the screen</p></div></div></div>'
		let Enter20 = document.getElementById("enter20");
		function showMessage20(){
		Enter20.style.display = 'block';
		};
		setTimeout(showMessage20,5000)
	} else if (contador==19){
		let orange = document.getElementById("orange");
		purple.remove();
		document.body.innerHTML = '<div class="orange" id="orange"><div class="row"><div class="col-12 animated slideInUp enter21" id="enter21"><p class="lead text-center d-md-flex d-none">Press \'enter\'</p><p class="lead text-center d-sm-flex d-md-none">Touch the screen</p></div></div></div>'
		let Enter21 = document.getElementById("enter21");
		function showMessage21(){
		Enter21.style.display = 'block';
		};
		setTimeout(showMessage21,5000)
	} else if (contador==20){
		let final1 = document.getElementById("final1");
		orange.remove();
		document.body.innerHTML = '<div class="final1" id="final1"><div class="row"><div class="col-12 animated pulse"><p class="lead text-center display-4"><strong><strong>This is what art is about</strong></strong></p></div><div class="col-12 animated slideInUp enter22" id="enter22"><p class="lead text-center d-md-flex d-none">Press \'enter\' for credits</p><p class="lead text-center d-sm-flex d-md-none">Touch the screen for credits</p></div></div></div>'
		let Enter22 = document.getElementById("enter22");
		function showMessage22(){
		Enter22.style.display = 'block';
		};
		setTimeout(showMessage22,3000)
	} else if (contador ==21){
		let final2 = document.getElementById("final2");
		final1.remove();
		document.body.innerHTML = '<div class="final2" id="final2"><div class="row"><div class="col-12 animated slideInDown"><p class="lead text-center display-4"><strong>This art experience was taken from the <i>"Abstract: The Art of Design"</i> episode <i>"Olafur Eliasson: The Design of Art"</i> by Netflix. Taken to your screen by Victoria López Zamora.</strong></p></div></div></div>'
	}
contador = contador +1
});







