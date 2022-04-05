var line = document.getElementById("line")
var txts = ['С днем рождения милашкррр', 'Зашел я короче на фейсбук и вот что нашел'];
var txtss = ['SIIIIIIIIIIIIKE'];
var txts3 = ['ну и эти мальчики тебя тоже поздравляют'];
var speed = 100


let takingPaperSound =
      "https://raw.githubusercontent.com/MrGregor228/Notes-For-Piano/master/paper%20sound/takepaper.mp3",
    drmusic =
      "https://github.com/iampippa/music/blob/main/happybirthday.mp3?raw=true";

let firstSound = new Audio();
  firstSound.volume = [0.2];
  firstSound.src = drmusic;

async function typewriter(txt) {
  for(let i = 0; i < txt.length; i++){
    line.innerHTML += txt.charAt(i);
    await delay(speed) 
  }
}

async function reverseTypewriter(txt) {
  for(let i = txt.length; i > 0; i--){
    line.innerHTML = line.innerHTML.slice(0,-1)
    await delay(70)
  }
}

async function writeLoop(){
  for(let i = 0; i < txts.length; i++){
    await typewriter(txts[i])
    await delay(1000)
    await reverseTypewriter(txts[i])
    await delay(300)
    
  }
  return
  writeLoop()

}

setTimeout(function(){
    document.getElementById('fsimg').style.display = 'block';
},15000);

setTimeout(function(){
   document.getElementById('fsimg').className = "hidden" ; 
},20000);

setTimeout(function(){
    document.getElementById('seimg').style.display = 'block';
},20500);

setTimeout(function(){
   document.getElementById('seimg').className = "hidden" ; 
},25000);

setTimeout(function(){
    document.getElementById('thsimg').style.display = 'block';
},25500);

setTimeout(function(){
   document.getElementById('thsimg').className = "hidden" ; 
},30000);

setTimeout(function(){
    document.getElementById('frsimg').style.display = 'block';
},30500);

setTimeout(function(){
   document.getElementById('frsimg').className = "hidden" ; 
},35000);

async function writeLoop2(){
  for(let i = 0; i < txtss.length; i++){
    await typewriter(txtss[i])
    await delay(1000)
    await reverseTypewriter(txtss[i])
    await delay(300)
    
  }
  return
  writeLoop()

}setTimeout("writeLoop2()", 36000);

setTimeout(function(){
    document.getElementById('dr').style.display = 'block';
},40000);

setTimeout(function(){
   document.getElementById('dr').className = "hidden" ; 
},67000);

async function writeLoop3(){
  for(let i = 0; i < txts3.length; i++){
    await typewriter(txts3[i])
    await delay(1000)
    await reverseTypewriter(txts3[i])
    await delay(300)
    
  }
  return
  writeLoop()

}setTimeout("writeLoop3()", 68000);

setTimeout(function(){
    document.getElementById('blulock').style.display = 'block';
},76000);

/*document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('audioID').play();
    document.removeEventListener('click', musicPlay);
}*/



/*$(document).ready(function() {
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'audio.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');
            //audioElement.load()

            $.get();

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.play').click(function() {
                audioElement.play();
            });

            $('.pause').click(function() {
                audioElement.pause();
            });
        });
*/
function delay(ms){
  return new Promise((resolve)=>{setTimeout(()=>{resolve()},ms)})
}
writeLoop()