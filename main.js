 /*window.onload=function(){
  'use strict';
  var mycontainer = document.getElementById('container');
    var mycontainer2 = document.getElementById('container2');
     var myparallax = document.querySelector('.parallax');
     var mymessenger = document.querySelector('#messenger');
          var myportfolio = document.querySelector('.portfolio');

    myparallax.style.display="none";
        mymessenger.style.display="none";

        myportfolio.style.display="none";

  mycontainer.style.display="none";
    mycontainer2.style.display="block";
    mycontainer2.style.backgroundColor="block";
document.body.style.backgroundColor="#1f1f14";
 
  };
  var mybutton1 = $('#button1');
  mybutton1.on("click",function(){
  	    $("#container2").fadeOut(500);
        $(".portfolio").fadeIn(2000);
        $("#messenger").fadeIn(2000);
        $(".parallax").fadeIn(2000);
        $("#container").fadeIn(2000);
        $('body').css("backgroundColor","#00cccc");
 });
  */
const message = `Hi .. i'm maha
A passionate web developer ,
 i live in egypt ,
in one of its most beautiful cities .
 i studied pure mathematics and computer science at ASU
also studied special relativity .. believe it !`;
 
 const containeri = document.querySelector('#target');




let n;

function rerun(){
	containeri.textContent = '';
	n = 0;
	typist(message, containeri);
};

rerun();

function interval(letter){
	console.log(letter);
	if(letter == ';' || letter == '.' || letter == ','){
		return Math.floor((Math.random() * 500) + 500);
	} else {
		return Math.floor((Math.random() * 130) + 5);
	}
}

function typist(text, target){
	if(typeof(text[n]) != 'undefined'){
		target.textContent += text[n];
	}
	n++;
	if(n < text.length){
		setTimeout(function(){
			typist(text, target)
		}, interval(text[n - 1]));
	} 
}
  
 var Messenger = function(el){
  'use strict';
  var m = this;
  
  m.init = function(){
    m.codeletters = "&#*+%?£@§$";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
     m.messages = [
      'what i have been learning :','C++','JAVA SE', 'HTML5',
      'CSS3',
      'JAVA SCRIPT',
      'DOM', 'BOOTSTRAP','JQUERY','PHP' 
    ];
    
    setTimeout(m.animateIn, 100);
  };
  
  m.generateRandomString = function(length){
    var random_text = '';
    while(random_text.length < length){
      random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
    } 
    
    return random_text;
  };
  
  m.animateIn = function(){
    if(m.current_length < m.messages[m.message].length){
      m.current_length = m.current_length + 2;
      if(m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }
      
      var message = m.generateRandomString(m.current_length);
      $(el).html(message);
      
      setTimeout(m.animateIn, 20);
    } else { 
      setTimeout(m.animateFadeBuffer, 20);
    }
  };
  
  m.animateFadeBuffer = function(){
    if(m.fadeBuffer === false){
      m.fadeBuffer = [];
      for(var i = 0; i < m.messages[m.message].length; i++){
        m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
      }
    }
    
    var do_cycles = false;
    var message = ''; 
    
    for(var i = 0; i < m.fadeBuffer.length; i++){
      var fader = m.fadeBuffer[i];
      if(fader.c > 0){
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
      } else {
        message += fader.l;
      }
    }
    
    $(el).html(message);
    
    if(do_cycles === true){
      setTimeout(m.animateFadeBuffer, 50);
    } else {
      setTimeout(m.cycleText, 2000);
    }
  };
  
  m.cycleText = function(){
    m.message = m.message + 1;
    if(m.message >= m.messages.length){
      m.message = 0;
    }
    
    m.current_length = 0;
    m.fadeBuffer = false;
    $(el).html('');
    
    setTimeout(m.animateIn, 200);
  };
  
  m.init();
}

console.clear();
var messenger = new Messenger($('#messenger'));

