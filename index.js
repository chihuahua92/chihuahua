function playAudio() {
        const audio = document.createElement("audio");
        audio.src = "https://dl.dropbox.com/s/ezt1nlypsj18h48/soundeffect_pop%20%28mp3cut.net%29.mp3?dl=0";
        audio.play();
   }

const img = document.querySelector(".zaki-img");
const numberElement = document.querySelector(".number");

function createCookie(){
  var popCount ;
  var num = Number(numberElement.textContent);
  //create cookie
  document.cookie = popCount+'|'+num;
 };

img.addEventListener("mousedown", e => {
  playAudio();
  const currentNum = Number(numberElement.textContent);
  numberElement.textContent = currentNum + 1 ;
  $("#zaki").attr("src","https://upload.cc/i1/2021/12/22/kBI1jn.jpg");
  createCookie();
});

img.addEventListener("mouseup", e => {
 setTimeout(function(){
    $("#zaki").attr("src","https://upload.cc/i1/2021/12/22/AIjBoF.jpg");
      },100);
}); 



