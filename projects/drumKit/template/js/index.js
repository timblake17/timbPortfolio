/////////////set tup variables
var borderBig=0;
var b=0;
var c=0;
var aKey=document.getElementById('keyA');
var sKey=document.getElementById('keyS');
var dKey=document.getElementById('keyD');
var fKey=document.getElementById('keyF');
var hKey=document.getElementById('keyH');
var jKey=document.getElementById('keyJ');
var kKey=document.getElementById('keyK');
var lKey=document.getElementById('keyL');

///////set up llisteners

document.onkeydown= drum;
document.onkeyup= noBorder;

//////////////////////////////////////////

function noBorder(e){
  if (e.keyCode==65){
    keyA.style.border="none";
    keyA.style.transform = "scale(1)";

  }

  if (e.keyCode==83){
    keyS.style.border="none";
    keyS.style.transform = "scale(1)";

  }

  if (e.keyCode==68){
    keyD.style.border="none";
    keyD.style.transform = "scale(1)";

  }
  if (e.keyCode==70){
    keyF.style.border="none";
    keyF.style.transform = "scale(1)";

  }
  if (e.keyCode==72){
    keyH.style.border="none";
    keyH.style.transform = "scale(1)";

  }
  if (e.keyCode==74){
    keyJ.style.border="none";
    keyJ.style.transform = "scale(1)";

  }
  if (e.keyCode==75){
    keyK.style.border="none";
    keyK.style.transform = "scale(1)";

  }
  if (e.keyCode==76){
    keyL.style.border="none";
    keyL.style.transform = "scale(1)";

  }
}




function drum(e) {
  if(e.keyCode==65) {
    var audio = new Audio('http://www.soundjig.com/pages/soundfx/drums.php?mp3=CL.mp3');
    audio.play();//
    //////a key
// setTimeout(drum,1000);
  /////MAKE BIGGER and add yellow border
    keyA.style.border = "10px yellow solid";
    keyA.style.transform = "scale(1.5)";
    /////////////make border go back to normal

}

  else if(e.keyCode==83) {
    var audio = new Audio('http://www.soundjig.com/pages/soundfx/drums.php?mp3=CB.mp3');
    audio.play();//////////s key
    /////MAKE BIGGER and add yellow border
      keyS.style.border = "10px yellow solid";
      keyS.style.transform = "scale(1.5)";
      /////////////make border go back to normal
  }

  else if (e.keyCode == 68) {
    var audio = new Audio('http://www.soundjig.com/pages/soundfx/drums.php?mp3=CP.mp3');
    audio.play();////////d key
    /////MAKE BIGGER and add yellow border
      keyD.style.border = "10px yellow solid";
      keyD.style.transform = "scale(1.5)";
      /////////////make border go back to normal


  }
  else if (e.keyCode == 70) {
    var audio = new Audio('http://www.soundjig.com/pages/soundfx/drums.php?mp3=CY0000.mp3');
    audio.play();///////f key
    /////MAKE BIGGER and add yellow border
      keyF.style.border = "8px yellow solid";
      keyF.style.transform = "scale(1.5)";
      /////////////make border go back to normal


  }


  else if (e.keyCode == 72) {
    var audio = new Audio('http://www.soundjig.com/pages/soundfx/drums.php?mp3=MA.mp3');
    audio.play();////////h key
    /////MAKE BIGGER and add yellow border
      keyH.style.border = "10px yellow solid";
      keyH.style.transform = "scale(1.5)";
      /////////////make border go back to normal


  }

  else if (e.keyCode == 74) {
    var audio = new Audio('http://www.soundjig.com/pages/soundfx/drums.php?mp3=OH10.mp3');
    audio.play();////////j key
    /////MAKE BIGGER and add yellow border
      keyJ.style.border = "10px yellow solid";
      keyJ.style.transform = "scale(1.5)";
      /////////////make border go back to normal


  }

  else if (e.keyCode == 75) {
    var audio = new Audio('http://www.soundjig.com/pages/soundfx/drums.php?mp3=SD0000.mp3');
    audio.play();////////k key
    /////MAKE BIGGER and add yellow border
      keyK.style.border = "10px yellow solid";
      keyK.style.transform = "scale(1.5)";
      /////////////make border go back to normal


  }

  else if (e.keyCode == 76) {
    var audio = new Audio('http://www.soundjig.com/pages/soundfx/drums.php?mp3=SD0010.mp3');
    audio.play();////////l key
    /////MAKE BIGGER and add yellow border
      keyL.style.border = "10px yellow solid";
      keyL.style.transform = "scale(1.5)";
      /////////////make border go back to normal


  }

}
