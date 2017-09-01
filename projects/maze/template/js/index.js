
var ren=document.getElementById('ren');
var stimpy=document.getElementById('stimpy');

var renLeft = 0;
var renTop = 0;
var stimpyLeft = 0;
var stimpyTop = 0;
//////////////////////////////////////////////////////
////////listeners

document.onkeydown = anim;
document.onkeyup = key;


function anim(e) {
 if(e.keyCode==39) {
       renLeft +=10;
       ren.style.marginLeft = renLeft + 'px';
 }
 else if(e.keyCode==37) {
       renLeft -=10;
       ren.style.marginLeft = renLeft + 'px';
 }

 else if (e.keyCode == 65) {
     stimpyLeft += 10;
     stimpy.style.marginRight = stimpyLeft + 'px';


      // a key
   }
   else if (e.keyCode == 68) {
    stimpyLeft -= 10;
    stimpy.style.marginRight = stimpyLeft + 'px';

      // d key
   }

}

////////////////////////////////////////////////////

function key(e) {

 if(e.keyCode==40) {
       renTop +=10;
       ren.style.marginTop = renTop + 'px';

 }

 else if(e.keyCode==38) {
       renTop -=10;
       ren.style.marginTop = renTop + 'px';
       var audio = new Audio('http://joy111970.tripod.com/eediot.wav');
audio.play();
 }

 else if (e.keyCode == 83) {
     stimpyTop +=10;
     stimpy.style.marginTop = stimpyTop + 'px';

        // w key
    }
    else if (e.keyCode == 87) {
      stimpyTop -=10;
      stimpy.style.marginTop = stimpyTop + 'px';
      var audio = new Audio('http://joy111970.tripod.com/joy.wav');
audio.play();
        // s key
    }
}
//////////////////hide h1
////listeners

/////
// ///have a listener for clicking button
document.getElementById('click').onclick= disapear;
//
// set function for dissapear

function disapear(){
inst.style.display="none";
}


//
// when clicked everything dissapears
